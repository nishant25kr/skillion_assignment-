# 🧠 ResumeRAG — Resume Retrieval-Augmented Generation System

**ResumeRAG** is an intelligent system that allows users to query and analyze resumes using **Retrieval-Augmented Generation (RAG)** techniques.  
It combines **Embeddings**, **Vector Search**, and **LLM-powered responses** to give accurate, context-aware answers from stored resumes.

---

## 🚀 Features

- 📄 **Resume Uploading** — Upload multiple resumes (PDF or text).
- 🔍 **Embedding & Storage** — Convert resumes into vector embeddings for semantic search.
- 💬 **Smart Q&A** — Ask natural-language questions about resumes (e.g., “Who has AWS experience?”).
- 🧩 **RAG Workflow** — Retrieve the most relevant resume chunks before generating an answer.
- 🌐 **Full-Stack Setup** — Node.js backend + React frontend.

---

## 🏗️ Tech Stack

**Frontend:**
- React.js + Vite
- Tailwind CSS
- Axios for API communication

**Backend:**
- Node.js + Express
- MongoDB (Mongoose)
- OpenAI API (for embeddings + generation)
- dotenv for configuration

**Vector Search:**
- MongoDB or custom vector similarity logic (can be extended to Pinecone / ChromaDB)

---

## 📁 Project Structure

