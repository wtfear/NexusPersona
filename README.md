<a name="readme-top"></a>

# NexusPersona — Autonomous AI Persona & Expert Simulation Platform

<p align="center">
    <a href="https://github.com/wtfear/NexusPersona" target="_blank">
        <img src="https://img.shields.io/badge/repo-wtfear%2FNexusPersona-blue.svg?logo=github" alt="GitHub Repository" />
    </a>
    <a href="https://github.com/wtfear/NexusPersona/blob/main/LICENSE" target="_blank">
        <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=green" alt="License" />
    </a>
    <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwtfear%2FNexusPersona" target="_blank">
        <img src="https://vercel.com/button" alt="Deploy with Vercel" />
    </a>
</p>

> **NexusPersona** is an enterprise-grade multi-persona conversational platform built with **Next.js 14**, **Tailwind CSS**, and **Google Gemini API**. It enables teams and agencies to replicate the specialized knowledge, pedagogical tone, and mental models of real-life domain leaders and executive advisors using structured persona profiles.

Part of the **Nexus Enterprise Suite** (alongside [NexusIQ](https://github.com/wtfear/NexusIQ) and [NexusVoice](https://github.com/wtfear/NexusVoice)).

---

## ⚡ Key Highlights

- **🎯 Multi-Persona Switching:** Seamlessly toggle between different expert personas, executive advisors, and specialized tutors.
- **⚡ 100% Free-Tier & Serverless:** Built on Next.js App Router — deploys to **Vercel Hobby Tier for \$0** with zero server management and zero Out-Of-Memory crashes.
- **🧠 Google Gemini Engine:** Employs Google Gemini 2.5 Flash / 1.5 Flash via OpenAI-compatible endpoints for rapid, cost-free streaming responses.
- **💬 Streaming & Conversation Memory:** Low-latency token streaming with session context retention.
- **🎨 Modern Dark UI:** Styled with Tailwind CSS, Radix UI primitives, and glassmorphic aesthetics.

---

## 🚀 1-Click Free Deployment to Vercel

### Step 1: Push or Import to Vercel
1. Go to **[vercel.com/new](https://vercel.com/new)** and import `wtfear/NexusPersona`.
2. Framework Preset will automatically detect **Next.js**.

### Step 2: Set Environment Variables
In the Vercel project configuration, add:
```env
OPENAI_API_KEY=your_google_gemini_api_key
OPENAI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai
OPENAI_MODEL=gemini-2.5-flash
```
*(Get your free key with zero credit card at [aistudio.google.com](https://aistudio.google.com)).*

### Step 3: Deploy
Click **Deploy** — your live AI Persona platform will be live on a `*.vercel.app` URL in under 60 seconds!

---

## 💻 Local Quickstart

```bash
# Clone repository
git clone https://github.com/wtfear/NexusPersona.git
cd NexusPersona

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the interactive UI.

---

## 📄 License

Licensed under the **MIT License**.
