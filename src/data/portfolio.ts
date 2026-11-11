export const profile = {
  name: "Jaber Khan Afrooz",
  initials: "JK",
  title: "AI/ML Engineer",
  email: "jaberkhanafrooz@gmail.com",
  phone: "+91 9398371230",
  github: "https://github.com/Jaberkhan011",
  linkedin: "https://www.linkedin.com/in/jaber-khan-afrooz/",
  resume: "/Jaber-Khan-Afrooz-Resume.pdf",
  introduction:
    "Computer Science and Engineering graduate with hands-on experience building and evaluating AI applications. I work across deep learning, NLP, information retrieval, backend development, and on-device ML, and hold AWS certifications in Machine Learning and Generative AI Foundations.",
} as const;

export const projects = [
  {
    number: "01",
    name: "BEIR SciFact Hybrid Retrieval Pipeline",
    category: "Information retrieval",
    summary:
      "A benchmarked hybrid search pipeline combining lexical and dense retrieval for scientific fact discovery.",
    problem:
      "Scientific search needs to find relevant evidence across both exact terminology and semantically related phrasing.",
    contribution:
      "Built and benchmarked four retrieval configurations across all 300 SciFact test queries, then analyzed where retrieval failed.",
    details: [
      "Indexed 5,183 scientific documents as 12,101 chunks using BM25 and all-MiniLM-L6-v2 dense retrieval.",
      "Combined ranked results with Reciprocal Rank Fusion (RRF) and used FAISS for dense search.",
      "Evaluated cross-encoder reranking and retained RRF as the default after finding negligible NDCG@10 gain at approximately 80× the latency.",
    ],
    technologies: ["Python", "FAISS", "BM25", "Cross-Encoders", "Sentence Transformers"],
    outcomes: [
      { value: "81.9%", label: "Recall@10" },
      { value: "0.681", label: "NDCG@10" },
      { value: "~8 ms", label: "per query" },
    ],
    repository: "https://github.com/Jaberkhan011/BeIR-scifact-RAG",
  },
  {
    number: "02",
    name: "Hybrid Local & Cloud RAG Chatbot",
    category: "Generative AI",
    summary:
      "A document question-answering chatbot that can run with a local Qwen model or a cloud Gemini model.",
    problem:
      "Document-grounded chat needs a practical way to index PDFs, retrieve relevant context, and switch between local and hosted models.",
    contribution:
      "Developed the retrieval and chat workflow, a FastAPI backend, and a browser frontend with controls for retrieval and model selection.",
    details: [
      "Extracts PDF text, chunks content, embeds it with Sentence Transformers, and stores vectors in ChromaDB with HNSW similarity search.",
      "Supports configurable retrieval-augmented and general chat modes with Qwen2.5-3B or Gemini.",
      "Includes PDF indexing, Top-K controls, model-provider switching, source tracking, and end-to-end latency monitoring.",
    ],
    technologies: ["Python", "FastAPI", "ChromaDB", "HNSW", "Qwen2.5-3B", "Gemini"],
    repository: "https://github.com/Jaberkhan011/RAG_Chatbot",
  },
  {
    number: "03",
    name: "AI-Powered Road Accident Detection",
    category: "Mobile ML",
    summary:
      "An Android application that classifies motion patterns from phone sensors and supports an emergency response flow.",
    problem:
      "A phone-based detector must interpret noisy motion sensor readings quickly while giving users a chance to prevent false alarms.",
    contribution:
      "Led a team developing a 1D-CNN model and integrated its TensorFlow Lite inference into an Android app.",
    details: [
      "Classifies accelerometer and gyroscope time-series data with sensor preprocessing and temporal verification.",
      "Optimized the model for real-time, on-device inference with TensorFlow Lite.",
      "Integrated GPS location tracking, automated SMS alerts, SOS, voice-triggered alerts, and an emergency countdown.",
    ],
    technologies: ["Python", "1D-CNN", "TensorFlow Lite", "Kotlin", "Android Studio"],
    outcomes: [{ value: "96.6%", label: "test accuracy" }],
    repository:
      "https://github.com/Jaberkhan011/AI-Powered-Road-Accident-Detection-System",
  },
  {
    number: "04",
    name: "AI vs. Human Text Detector",
    category: "Applied machine learning",
    summary:
      "A text-classification pipeline and inference service for distinguishing AI-generated from human-written text.",
    problem:
      "Strong in-distribution scores can hide generalization gaps, so text classifiers need both leakage-safe evaluation and out-of-distribution testing.",
    contribution:
      "Built and compared classical and transformer-based classifiers, analyzed their out-of-distribution behavior, and developed a FastAPI inference service.",
    details: [
      "Prepared a 161K-sample dataset with deduplication, stratified 80/10/10 splits, and a 200K-dimensional hybrid TF-IDF pipeline.",
      "Benchmarked Linear SVM, XGBoost, and fine-tuned DistilRoBERTa, reaching 98.5% and 99.7% test accuracy with Linear SVM and DistilRoBERTa.",
      "Evaluated 190 difficulty-graded synthetic out-of-distribution samples, identifying substantial generalization gaps across models.",
      "Built an inference service with probability-based predictions, confidence scoring, text diagnostics, short-input warnings, and reusable Joblib artifacts.",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "PyTorch",
      "Hugging Face Transformers",
      "FastAPI",
    ],
    outcomes: [
      { value: "99.7%", label: "DistilRoBERTa test accuracy" },
      { value: "190", label: "OOD evaluation samples" },
    ],
  },
] as const;

export const skillGroups = [
  {
    name: "Programming languages",
    skills: ["Python", "SQL", "Kotlin"],
  },
  {
    name: "Machine learning",
    skills: ["Machine Learning", "Scikit-learn", "XGBoost", "TensorFlow"],
  },
  {
    name: "Deep learning",
    skills: ["Deep Learning", "PyTorch", "Keras", "1D-CNN", "TensorFlow Lite"],
  },
  {
    name: "Generative AI & NLP",
    skills: ["RAG", "LLMs", "NLP", "Hugging Face Transformers", "LangChain", "LangGraph"],
  },
  {
    name: "Data analysis",
    skills: ["NumPy", "Pandas"],
  },
  {
    name: "Frameworks & libraries",
    skills: ["FastAPI", "Streamlit", "Sentence Transformers", "Cross-Encoders"],
  },
  {
    name: "Vector stores & retrieval",
    skills: ["ChromaDB", "FAISS", "BM25", "HNSW"],
  },
  {
    name: "Developer tools & cloud",
    skills: ["Git", "GitHub", "AWS", "Android Studio", "REST APIs"],
  },
] as const;

export const education = [
  {
    qualification: "B.E. in Computer Science and Engineering",
    institution: "Osmania University · ISL Engineering College, Hyderabad",
    period: "2022 — 2026",
    result: "CGPA 8.12",
  },
  {
    qualification: "Intermediate",
    institution: "Sri Chandra Junior College · Telangana Board of Intermediate Education",
    period: "2020 — 2022",
    result: "CGPA 9.0",
  },
  {
    qualification: "Secondary School",
    institution: "St. Joseph’s Grammar High School · Board of Secondary Education, Telangana",
    period: "2010 — 2020",
    result: "CGPA 10.0",
  },
] as const;

export const training = [
  {
    name: "AWS Generative AI Virtual Internship",
    year: "2025",
    detail: "Applied coursework and hands-on labs covering generative AI foundations and AWS ML services.",
  },
  {
    name: "AI & Machine Learning Virtual Internship",
    year: "2025",
    detail: "Guided project work applying deep learning and machine learning techniques.",
  },
  {
    name: "Google Android Developer Virtual Internship",
    year: "2024",
    detail: "Android application fundamentals with Kotlin and Android Studio.",
  },
] as const;

export const certifications = [
  "AWS Academy Graduate — Machine Learning Foundations",
  "AWS Academy Graduate — Generative AI Foundations",
] as const;
