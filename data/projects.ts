
import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  
{
  slug: "monad",
  title: "Monad",
  category: "AI / Full-Stack",
  duration: "9 months",

  shortDescription:
    "Real-Time AI Voice Agent for Automated Restaurant Order Management",

  description:
    "This project is an AI-powered restaurant voice agent designed to automate order taking through GSM and WhatsApp calls. Built with Twilio, FastAPI, the OpenAI Realtime API, and PostgreSQL, it enables natural, real-time conversations, understands customer requests, navigates structured menus, and manages order customization and confirmation. A dedicated management dashboard allows restaurant owners to manage menus, process orders, and extract menu data from existing documents using OCR. The system combines real-time voice interaction, structured tool calling, and centralized order management into a unified solution for restaurant operations.",

  technologies: [
    "Python",
    "FastAPI",
    "Twilio",
    "OpenAI Realtime API",
    "WebSockets",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
  ],

  coverImage: "/images/projects/monad/cover.webp",
  coverImageAlt: "Monad restaurant voice ordering and management platform",

  gallery: [
    {
      src: "/images/projects/monad/dash1.webp",
      alt: "Monad restaurant management dashboard",
    },
    {
      src: "/images/projects/monad/dash2.webp",
      alt: "Monad order and menu management interface",
    },
    {
      src: "/images/projects/monad/dash2.webp",
      alt: "Monad order and menu management interface",
    },
  ],

  featured: true,

  sections: [
   {
      eyebrow: "01 / System Architecture",
      title: "From a phone call to an AI-powered order",
      content: [
        {
          type: "text",
          content:
            "The system connects incoming GSM and WhatsApp calls to an AI-powered restaurant voice agent. Twilio handles call connectivity, forwarding the audio stream to a FastAPI backend, which establishes a real-time WebSocket connection with the OpenAI Realtime API.",
        },
        {
          type: "text",
          content:
            "The AI model processes the conversation, generates spoken responses, and autonomously selects the appropriate tools based on the customer's requests. The FastAPI backend executes these tool calls, interacting with PostgreSQL to retrieve menu information, check availability, and save orders. The results are returned to the model so it can continue the conversation and respond naturally to the customer.",
        },
        {
          type: "text",
          content:
            "The backend also connects the voice agent to a management dashboard, where restaurant owners can monitor insights, review order details, confirm orders, and manage the menu.",
        },
        {
          type: "image",
          src: "/images/projects/monad/architecture.webp",
          alt: "System architecture connecting Twilio, FastAPI, OpenAI Realtime API, PostgreSQL, and the management dashboard",
          caption: "System architecture — from incoming calls to restaurant order management.",
        },
      ],
    },

    {
      eyebrow: "02 / Data Model",
      title: "Structuring restaurant menus and orders",
      content: [
        {
          type: "text",
          content:
            "The data model structures restaurant menus and orders, from menu categories and items to customizable modifiers and order details. This hierarchical structure helps the AI model navigate the menu efficiently and simplifies tool calling by providing clear, structured access to relevant information. It also supports accurate item customization, order calculations, and consistent order records in PostgreSQL.",
        },
        {
          type: "image",
          src: "/images/projects/monad/dataModel.webp",
          alt: "Structured restaurant menu and order data model",
          caption:
            "Data model — organizing categories, menu items, modifiers, and order details.",
        },
      ],
    },

    {
  eyebrow: "03 / Tool Calling",
  title: "Turning customer requests into structured actions",
  content: [
    {
      type: "text",
      content:
        "The voice agent uses dedicated tools to interact with the menu and manage orders throughout the conversation. These tools allow the model to retrieve relevant information and execute structured actions through the FastAPI backend.",
    },
    {
      type: "text",
      content:
        "Menu Retrieval: The agent can browse menu items by category, retrieve detailed information about specific items, and inspect available modifiers to help customers customize their orders.",
    },
    {
      type: "text",
      content:
        "Order State Management: The agent can add items with quantities and modifiers, retrieve the current order, and remove items when requested. This allows it to maintain and update the order as the conversation progresses.",
    },
    {
      type: "text",
      content:
        "Order Confirmation: Once the customer has finalized their request, the agent can confirm the order through a dedicated tool, triggering the corresponding backend operation.",
    },
    {
      type: "text",
      content:
        "This tool-based approach connects natural-language requests to structured backend operations, enabling reliable order processing while preserving a fluid, interactive conversation.",
    },
    {
      type: "image",
      src: "/images/projects/monad/toolExecution.webp",
      alt: "Voice agent tool execution workflow",
      caption:
        "Tool execution — connecting conversational intent to backend operations.",
    },
  ],
},

    {
      eyebrow: "04 / Interruption Handling",
      title: "Keeping real-time conversations synchronized",
      content: [
        {
          type: "text",
          content:
            "The voice agent supports natural, real-time conversations by allowing customers to interrupt the agent while it is speaking. Audio playback is tracked through Twilio marks, allowing the backend to identify how much of the response has actually been played.",
        },
        {
          type: "text",
          content:
            "When an interruption occurs, the backend truncates the AI response at the last acknowledged playback point and clears the remaining buffered audio on Twilio. This keeps the conversation context synchronized with what the customer actually heard, allowing the agent to respond naturally to new input.",
        },
        {
          type: "image",
          src: "/images/projects/monad/interruptionHandling.webp",
          alt: "Real-time interruption handling and audio playback synchronization",
          caption:
            "Interruption handling — tracking playback, truncating responses, and resuming the conversation.",
        },
      ],
    },

    {
      eyebrow: "05 / Menu Synchronization",
      title: "Keeping menu updates consistent across the system",
      content: [
        {
          type: "text",
          content:
            "The restaurant dashboard allows owners to update the menu, with changes saved to PostgreSQL as the source of truth. The FastAPI backend then refreshes its in-memory cache to keep the voice agent's menu data up to date.",
        },
        {
          type: "text",
          content:
            "This synchronization allows the agent to retrieve menu information efficiently during live calls while ensuring that menu updates are reflected in subsequent customer interactions.",
        },
        {
          type: "image",
          src: "/images/projects/monad/MenuSynchronization.webp",
          alt: "Menu synchronization between the dashboard, PostgreSQL, and the FastAPI cache",
          caption:
            "Menu synchronization — from restaurant owner updates to the voice agent's refreshed menu data.",
        },
      ],
    },

    {
      eyebrow: "06 / Evaluation",
      title: "Measuring accuracy and execution latency",
      content: [
        {
          type: "text",
          content:
            "The voice agent was evaluated through text-based tests measuring order accuracy and tool-calling reliability, alongside audio-based tests measuring execution latency. The results show a 93.3% task success rate, a 0.96 item F1-score, 100% tool-call choice accuracy, and 95.2% tool-call argument accuracy. Mean latency for menu and order tools remained below 150 ms, while order confirmation database writes took approximately 400 ms, demonstrating reliable order processing with low execution latency.",
        },
        {
          type: "image",
          src: "/images/projects/monad/evaluation.webp",
          alt: "Voice agent evaluation results showing task success, item F1-score, tool-calling accuracy, and latency",
          caption:
            "Evaluation results — order accuracy, tool-calling reliability, and execution latency.",
        },
      ],
    },

    {
      eyebrow: "07 / Management Dashboard",
      title: "A central interface for restaurant operations",
      content: [
        {
          type: "text",
          content:
            "The management dashboard gives restaurant owners full control over menu management and order processing. Owners can add, edit, or remove menu items, with changes synchronized in real time with the voice agent.",
        },
        {
          type: "text",
          content:
            "They can also browse incoming orders, filter them by status, review order details, and confirm orders directly from the interface.",
        },
        {
          type: "subtitle",
          content: "OCR-powered menu extraction",
        },
        {
          type: "text",
          content:
            "The dashboard includes an OCR-based menu extraction feature that transforms existing menu documents or images into structured menu data, following the project's data model to simplify menu digitization and integration.",
        },
        {
          type: "gallery",
          images: [
            {
              src: "/images/projects/monad/dash1.webp",
              alt: "Monad restaurant management dashboard",
              caption: "Dashboard — managing restaurant operations.",
            },
            {
              src: "/images/projects/monad/dash2.webp",
              alt: "Monad menu and order management interface",
              caption: "Management interface — reviewing orders and maintaining menu data.",
            },
          ],
        },
      ],
    },

    {
      eyebrow: "08 / Conclusion",
      title: "Connecting conversational AI with real business workflows",
      content: [
        {
          type: "text",
          content:
            "This project brought together real-time voice processing, AI-driven tool calling, and backend engineering to build a complete voice-based ordering system. Beyond natural conversation, the main challenge was ensuring reliable order management, accurate menu navigation, and synchronized interactions between the AI agent and the restaurant dashboard. The result is a modular solution that demonstrates how AI can automate customer interactions while keeping restaurant owners in control of their operations.",
        },
      ],
    },
  ],

  // Add verified repository or demo links when available.
  // links: [
  //   { label: "GitHub", url: "https://github.com/...", type: "github" },
  //   { label: "Live demo", url: "https://...", type: "demo" },
  // ],
},

{
  slug: "french-paraphrase-generation",
  title: "French Paraphrase Generation",
  category: "NLP / Generative AI",
  duration: "3 months",

  shortDescription:
    "Developing a French paraphrase generation system through corpus preparation, dataset construction, and language model fine-tuning.",

  description:
    "This project explored the development of a French paraphrase generation system capable of producing alternative formulations of a sentence while preserving its original meaning. The workflow began with approximately 3 GB of raw French text from research papers, books, and other documentary sources, which was processed to build a clean sentence corpus. The prepared corpus was combined with existing and synthetically generated paraphrase pairs to construct a training dataset. A pretrained mT5-base model was then adapted using parameter-efficient fine-tuning with LoRA, with its performance assessed through semantic similarity and character-level evaluation metrics.",

  technologies: [
    "Python",
    "Hugging Face Transformers",
    "PyTorch",
    "PEFT (LoRA)",
    "Pandas",
    "Sentence Transformers",
  ],

  coverImage: "/images/projects/cerist/cover.webp",
  coverImageAlt: "End-to-end architecture of the French paraphrase generation pipeline",

  gallery: [
    {
      src: "/images/projects/cerist/architecture.webp",
      alt: "French Paraphrase Generation system architecture",
    },
    {
      src: "/images/projects/cerist/ModelArchitecture.webp",
      alt: "mT5-base LoRA Model Architecture",
    },
    {
      src: "/images/projects/cerist/evaluationImage.webp",
      alt: "Evaluation results for French paraphrase generation",
    },
  ],

  featured: true,

  sections: [
    {
      eyebrow: "01 / Full Architecture",
      title: "From raw French text to paraphrase generation",
      content: [
        {
          type: "text",
          content:
            "The project follows an end-to-end NLP pipeline that transforms a large collection of French text into a system capable of generating alternative sentence formulations. The workflow connects corpus preparation, paraphrase dataset construction, model fine-tuning, and evaluation.",
        },
        {
          type: "text",
          content:
            "Each stage prepares the output required by the next: cleaned sentences provide the source material for dataset construction, the resulting sentence pairs support model adaptation, and the fine-tuned model is evaluated on unseen examples.",
        },
        {
          type: "image",
          src: "/images/projects/cerist/architecture.webp",
          alt:
            "End-to-end architecture showing corpus preparation, dataset construction, model fine-tuning, generation, and evaluation",
          caption:
            "System architecture — from raw text preparation to evaluated paraphrase generation.",
        },
      ],
    },

    {
      eyebrow: "02 / Corpus Preparation",
      title: "Building a clean French sentence corpus",
      content: [
        {
          type: "text",
          content:
            "The first stage involved preparing approximately 3 GB of raw French text collected from research papers, books, and other documentary sources. The corpus was cleaned and normalized to reduce formatting inconsistencies, remove unwanted characters, and standardize whitespace while preserving the original meaning of the text.",
        },
        {
          type: "text",
          content:
            "The cleaned text was then segmented into individual sentences and filtered to remove invalid or empty entries. Duplicate sentences were also removed to reduce redundancy and improve data quality.",
        },
        {
          type: "text",
          content:
            "The resulting corpus provided a structured collection of French sentences, ready for constructing the training dataset for paraphrase generation.",
        },
      ],
    },

    {
      eyebrow: "03 / Training Data Construction",
      title: "Combining existing and synthetic paraphrase pairs",
      content: [
        {
          type: "text",
          content:
            "The prepared corpus contained individual French sentences but no corresponding paraphrases. To address this, the training dataset was constructed using a hybrid approach, combining an existing French paraphrase dataset with synthetically generated paraphrase pairs derived from the prepared corpus.",
        },
        {
          type: "text",
          content:
            "The generated pairs were filtered to remove duplicates and unsuitable examples before being combined with the existing data. The resulting dataset was organized into training, validation, and test sets to support model fine-tuning and evaluation while reducing data leakage between splits.",
        },
        {
          type: "image",
          src: "/images/projects/cerist/Construction.webp",
          alt:
            "Training data construction pipeline combining an existing French paraphrase dataset with synthetic paraphrase pairs",
          caption:
            "Training data construction — generating, filtering, and combining paraphrase pairs.",
        },
      ],
    },

    {
      eyebrow: "04 / Model Architecture",
      title: "Adapting a pretrained text-to-text model",
      content: [
        {
          type: "text",
          content:
            "The proposed system uses mT5-base, a pretrained multilingual encoder–decoder model designed for text-to-text tasks. Its architecture processes an input sentence and generates a new sequence, making it suitable for learning the transformation from an original French sentence to a paraphrased version.",
        },
        {
          type: "text",
          content:
            "Rather than training a language model from scratch, the approach builds on pretrained multilingual representations and adapts them to the paraphrasing task. LoRA is introduced as a parameter-efficient adaptation method, reducing the number of trainable parameters compared with updating the entire model.",
        },
        {
          type: "image",
          src: "/images/projects/cerist/ModelArchitecture.webp",
          alt:
            "mT5-base encoder–decoder architecture adapted for French paraphrase generation using LoRA",
          caption:
            "Model architecture — a pretrained encoder–decoder adapted to paraphrase generation.",
        },
      ],
    },

    {
      eyebrow: "05 / Fine-Tuning Pipeline",
      title: "Teaching the model to rephrase French sentences",
      content: [
        {
          type: "text",
          content:
            "The constructed dataset is converted into model-compatible inputs and targets. Each training example pairs an original French sentence with a reference paraphrase, allowing the model to learn how to generate an alternative formulation from the source text.",
        },
        {
          type: "text",
          content:
            "During fine-tuning, LoRA updates a limited set of trainable parameters while the majority of the pretrained model remains unchanged. Validation data is used to monitor model performance and select a checkpoint for subsequent generation and evaluation.",
        },
      ],
    },

    {
      eyebrow: "06 / Paraphrase Generation",
      title: "Generating alternative sentence formulations",
      content: [
        {
          type: "text",
          content:
            "After fine-tuning, the model can receive a French sentence that was not part of the training examples and generate an alternative formulation. The input is tokenized and passed through the encoder–decoder model, which produces the paraphrased text.",
        },
        {
          type: "text",
          content:
            "The objective is to introduce meaningful linguistic variation while retaining the essential information of the original sentence. The generated output can then be compared with reference paraphrases to assess how well the system balances semantic preservation and textual variation.",
        },
        {
          type: "image",
          src: "/images/projects/cerist/ParaphraseGeneration.webp",
          alt:
            "Example workflow showing a French input sentence processed by the fine-tuned model to produce a paraphrase",
          caption:
            "Paraphrase generation — transforming an input sentence into an alternative formulation.",
        },
      ],
    },

    {
      eyebrow: "07 / Evaluation and Results",
      title: "Assessing meaning preservation and textual similarity",
      content: [
        {
          type: "text",
          content:
            "The evaluation focuses on two complementary aspects of paraphrase quality. Semantic similarity estimates how closely a generated sentence preserves the meaning of the original, while chrF measures character-level overlap with reference paraphrases. Together, these metrics provide complementary views of semantic consistency and textual similarity.",
        },
        {
          type: "text",
          content:
            "A comparison between the pretrained baseline and the fine-tuned model can help determine whether task-specific training improves paraphrase generation. The evaluation should be performed on held-out test examples, with the same evaluation procedure applied to both models to ensure a fair comparison.",
        },
        {
          type: "image",
          src: "/images/projects/cerist/evaluationImage.webp",
          alt:
            "Evaluation results for the French paraphrase generation system",
          caption:
            "Evaluation — comparing paraphrase quality using semantic similarity and chrF.",
        },
      ],
    },

    {
      eyebrow: "08 / Conclusion and Limitations",
      title: "Balancing linguistic variation with semantic fidelity",
      content: [
        {
          type: "text",
          content:
            "This project explored a complete approach to French paraphrase generation, combining large-scale text preparation, hybrid training data construction, and adaptation of a pretrained multilingual language model. The pipeline provides a structured way to transform raw text resources into a dataset and model tailored to sentence rephrasing.",
        },
        {
          type: "text",
          content:
            "The main challenges concern the quality and diversity of the training pairs. Synthetic examples may introduce errors or unnatural expressions, while automatic metrics cannot fully capture grammatical correctness, fluency, or subtle changes in meaning.",
        },
        {
          type: "text",
          content:
            "Potential improvements include human evaluation, more diverse paraphrase examples, further fine-tuning experiments, and additional checks for semantic consistency. These steps would help provide a more complete assessment of the system's usefulness and reliability.",
        },
      ],
    },
  ],
},
{
  slug: "revenue-analysis-forecasting",
  title: "Revenue Analysis & Forecasting",
  category: "Data Analytics / Machine Learning",
  duration: "6 months", // TODO: replace with the real internship duration
 
  shortDescription:
    "Analyzing insurance sales data, building an interactive dashboard, and forecasting revenue and contract volumes with machine learning.",
 
  description:
    "During this internship at SAA, an Algerian insurance company, I worked on turning sales records into decision-support tools. The project covered the full analytics workflow: extracting and preparing data from an Oracle database, exploring sales patterns, building an interactive Power BI dashboard, and developing machine learning models to forecast revenue and contract volumes. After comparing several gradient boosting regressors, a tuned CatBoost model reached an R² of 0.91 and was used to produce 2025 forecasts for each product and branch.",
 
  technologies: [
    "Python",
    "Oracle",
    "Pandas",
    "scikit-learn",
    "Power BI",
  ],
 
  coverImage: "/images/projects/saa/cover.webp",
  coverImageAlt: "Revenue analysis dashboard and forecasting results for an insurance company",
 
  gallery: [
    {
      src: "/images/projects/saa/architecture.webp",
      alt: "Pipeline architecture from the Oracle database to the dashboard and the forecasting models",
    },
    {
      src: "/images/projects/saa/dash.webp",
      alt: "Interactive Power BI dashboard for sales performance",
    },
    {
      src: "/images/projects/saa/modelPipeline.webp",
      alt: "Forecasting model comparison and tuning pipeline",
    },
  ],
 
  featured: true,
 
  sections: [
    {
      eyebrow: "01 / System Architecture",
      title: "From a raw database to dashboards and forecasts",
      content: [
        {
          type: "text",
          content:
            "The project is built as a single pipeline with one shared data foundation. Sales data is extracted from the company's Oracle database through SQL, then prepared in Python to produce one consistent dataset.",
        },
        {
          type: "text",
          content:
            "From there, the pipeline splits into two complementary branches. The first feeds an interactive Power BI dashboard for monitoring performance, while the second trains machine learning models that forecast revenue and contract volumes for the coming year.",
        },
        {
          type: "image",
          src: "/images/projects/saa/architecture.webp",
          alt: "Pipeline architecture from the Oracle database to the dashboard and the forecasting models",
          caption:
            "System architecture — one prepared dataset feeding both the dashboard and the forecasting models.",
        },
      ],
    },
 
    {
      eyebrow: "02 / Data Preparation",
      title: "Turning scattered tables into one reliable dataset",
      content: [
        {
          type: "text",
          content:
            "The source data was spread across several tables describing sales transactions, products, and the agency network. These were merged into a single table of monthly records covering three years, so that every row carried the context needed for both analysis and modeling.",
        },
        {
          type: "text",
          content:
            "The dataset was then cleaned by removing duplicates and dropping fields that added no information, either because they were constant or because they duplicated another variable. Categorical variables were encoded numerically, using one-hot encoding for unordered categories such as branch and product, and label encoding for geographic regions. The result was a clean dataset of more than 200,000 records, ready for analysis and modeling.",
        },
      ],
    },
 
    {
      eyebrow: "03 / Data Analysis",
      title: "Understanding how sales behave",
      content: [
        {
          type: "text",
          content:
            "Before building anything, an exploratory analysis identified the patterns that would matter later. Revenue is highly concentrated: a small number of branches, products, and regions account for most of it, and the same holds for the agency network.",
        },
        {
          type: "text",
          content:
            "Sales also follow a clear seasonal rhythm, with marked peaks at specific times of the year, and revenue rises in step with contract volume. The amounts are strongly skewed, with a few very large transactions standing apart from typical values, which favors robust, tree-based models. These findings shaped both the dashboard design and the modeling approach.",
        },
      ],
    },
 
    {
      eyebrow: "04 / Interactive Dashboard",
      title: "Giving decision-makers a live view of performance",
      content: [
        {
          type: "text",
          content:
            "The Power BI dashboard turns the prepared data into an interface that non-technical users can explore. It brings together headline indicators for revenue and contract volume, rankings of the top-performing agencies and regions, the monthly evolution of revenue, a comparison of new and renewed contracts, and an interactive map of regional performance.",
        },
        {
          type: "text",
          content:
            "Filters for year, branch, and product apply to every visual at once, letting users move from the company-wide picture to a precise segment in a few clicks.",
        },
        {
          type: "image",
          src: "/images/projects/saa/dash.webp",
          alt: "Interactive Power BI dashboard showing indicators, rankings, monthly trends, and a regional map",
          caption:
            "Dashboard — headline indicators, rankings, trends, and regional distribution in a single view.",
        },
      ],
    },
 
    {
      eyebrow: "05 / Forecasting Models",
      title: "Selecting and tuning the best regressor",
      content: [
        {
          type: "text",
          content:
            "The forecasting task was framed as a regression problem: predicting revenue and contract volume for each product and branch. Three gradient boosting models were compared, XGBoost, LightGBM, and CatBoost, using 5-fold cross-validation with RMSE and R² as evaluation metrics.",
        },
        {
          type: "text",
          content:
            "CatBoost came out on top with an R² of about 0.89, ahead of XGBoost at 0.87 and LightGBM at 0.79. Its native handling of categorical variables suits a dataset with many of them, and it stays robust at this data size. A grid search over the number of iterations, tree depth, learning rate, and regularization then raised its R² to 0.91.",
        },
        {
          type: "image",
          src: "/images/projects/saa/modelPipeline.webp",
          alt: "Forecasting pipeline from cross-validated model comparison to a tuned CatBoost regressor",
          caption:
            "Modeling pipeline — from cross-validated model comparison to a tuned CatBoost regressor.",
        },
      ],
    },
 
    {
      eyebrow: "06 / Forecast Results",
      title: "Anticipating the year ahead",
      content: [
        {
          type: "text",
          content:
            "The tuned model was used to forecast revenue and the number of contracts for 2025 across products and branches, then aggregated into yearly totals. Shown alongside the preceding years, the forecasts point to growth in both indicators compared with 2024.",
        },
        {
          type: "text",
          content:
            "Such projections give management a quantitative baseline for setting commercial targets and allocating resources.",
        },
        {
          type: "gallery",
          images: [
            {
              src: "/images/projects/saa/res1.webp",
              alt: "Yearly revenue forecast including 2025",
              caption: "Revenue forecast — yearly totals including 2025.",
            },
            {
              src: "/images/projects/saa/res2.webp",
              alt: "Yearly contract volume forecast including 2025",
              caption: "Contract volume forecast — yearly totals including 2025.",
            },
          ],
        },
      ],
    },
 
    {
      eyebrow: "07 / Conclusion and Limitations",
      title: "From descriptive insight to predictive planning",
      content: [
        {
          type: "text",
          content:
            "This project covered the full path from raw database to decision support: structured data preparation, an interactive dashboard for monitoring performance, and a validated forecasting model for anticipating it. Together, they give the company both a clear view of its current activity and a quantitative outlook on the year ahead.",
        },
        {
          type: "text",
          content:
            "Some limits should be kept in mind. The 2024 data is incomplete, missing its final months, so part of the apparent rebound in 2025 reflects that gap rather than a real trend. With only three years of history, the model has limited exposure to long-term cycles, and it relies on internal data alone, without external factors such as the economic or regulatory context.",
        },
        {
          type: "text",
          content:
            "Natural next steps include completing the historical data, validating with a time-aware split that respects chronological order, and adding external indicators to strengthen the forecasts.",
        },
      ],
    },
  ],
 
  // Add verified repository or demo links when available.
  // links: [
  //   { label: "GitHub", url: "https://github.com/...", type: "github" },
  // ],
},

];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);
