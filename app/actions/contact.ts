"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

export interface ContactFormState {
  success: boolean;
  message?: string;
  error?: string;
}

// In-memory rate limiting map: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 messages every 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(
  formData: FormData
): Promise<ContactFormState> {
  // 1. Honeypot spam check (bots will fill this hidden input)
  const honeypot = formData.get("_gotcha");
  if (honeypot) {
    // Silently return success to waste bot's time without sending email
    return { success: true, message: "Thank you for reaching out!" };
  }

  // 2. IP Rate Limiting (protect against quota exhaustion and spam attacks)
  let clientIp = "unknown-client";
  try {
    const headersList = await headers();
    clientIp =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "unknown-client";
  } catch {
    // Fallback if headers cannot be resolved in certain dev scenarios
  }

  if (clientIp !== "unknown-client" && isRateLimited(clientIp)) {
    return {
      success: false,
      error: "You have sent several messages recently. Please wait a few minutes before trying again.",
    };
  }

  // 3. Extract & trim inputs
  const name = (formData.get("name") as string)?.trim() || "";
  const email = (formData.get("email") as string)?.trim() || "";
  const subject = (formData.get("subject") as string)?.trim() || "";
  const message = (formData.get("message") as string)?.trim() || "";

  // 4. Strict input presence & length validation
  if (!email || !message) {
    return {
      success: false,
      error: "Please fill in all required fields (Email and Message).",
    };
  }

  if (name && name.length > 100) {
    return {
      success: false,
      error: "Name is too long (maximum 100 characters).",
    };
  }

  if (email.length > 254) {
    return {
      success: false,
      error: "Email is too long (maximum 254 characters).",
    };
  }

  if (subject.length > 200) {
    return {
      success: false,
      error: "Subject is too long (maximum 200 characters).",
    };
  }

  if (message.length > 5000) {
    return {
      success: false,
      error: "Message is too long (maximum 5,000 characters).",
    };
  }

  // RFC compliant standard email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please provide a valid email address.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail =
    process.env.CONTACT_RECIPIENT_EMAIL || "bouchamaboubkeur@gmail.com";

  // 5. Development / Demo Mode if API key is not configured
  if (!apiKey || apiKey === "re_your_api_key_here") {
    console.log("-----------------------------------------");
    console.log("📨 [DEMO MODE] Contact Form Submission Received:");
    console.log(`From: ${email}`);
    console.log(`Subject: ${subject || "No Subject"}`);
    console.log(`Message: ${message}`);
    console.log("👉 Add RESEND_API_KEY to your .env.local file to send live emails.");
    console.log("-----------------------------------------");

    return {
      success: true,
      message:
        "Message received! (Demo mode active: Add your RESEND_API_KEY in .env.local to deliver live emails directly to your inbox).",
    };
  }

  // 6. Live Send via Resend with fully sanitized HTML
  try {
    const resend = new Resend(apiKey);

    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject || "Portfolio Inquiry");
    const safeMessage = escapeHtml(message);

    const emailSubject = subject
      ? `Portfolio Contact: ${subject}`
      : `Portfolio Message from ${email}`;

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: email,
      subject: emailSubject,
      text: `From: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 12px;">
          <h2 style="margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 12px; font-size: 18px;">New Message from Portfolio</h2>
          <p style="margin: 8px 0;"><strong>From:</strong> <a href="mailto:${safeEmail}" style="color: #0066cc;">${safeEmail}</a></p>
          <p style="margin: 8px 0;"><strong>Subject:</strong> ${safeSubject}</p>
          <div style="margin-top: 16px; padding: 16px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #eee;">
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px;">${safeMessage}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 12px;">
            Tip: You can hit "Reply" in your email client to respond directly to ${safeEmail}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        success: false,
        error: error.message || "Failed to send message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
    };
  } catch (err: unknown) {
    console.error("Unexpected error sending contact email:", err);
    return {
      success: false,
      error: "An unexpected error occurred while sending your message. Please try again.",
    };
  }
}
