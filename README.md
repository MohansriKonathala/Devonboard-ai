# 🚀 DevOnboard AI

> **Enterprise AI-Powered GitHub Repository Intelligence Platform**

DevOnboard AI is an AI-powered web application that analyzes GitHub repositories and generates an enterprise-level technical review. Instead of manually inspecting a project's codebase, users simply provide a GitHub repository link and receive insights about architecture, scalability, security, maintainability, performance, and production readiness.

This project was built using **React, Node.js, Express, Tailwind CSS, and Google's Gemini AI API**.

---

# 📌 Features

- 🔍 GitHub Repository Analysis
- 🧠 AI-Powered Architecture Review
- 🛡️ Security Analysis
- ⚡ Performance Recommendations
- 📈 Scalability Assessment
- 🧹 Code Quality Evaluation
- 📚 Automatic Documentation Generation
- 🚀 Production Readiness Review
- 📊 Enterprise Technical Report
- 💻 Modern Responsive UI

---

# 🖥️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Markdown
- Lucide React

## Backend

- Node.js
- Express.js
- Gemini AI API
- dotenv
- CORS

---

# 📂 Project Structure

```
DevOnboard-AI
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server
│   ├── server.js
│   ├── gemini.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# ⚙️ How It Works

### Step 1

The user opens the website.

↓

### Step 2

The user pastes a GitHub repository URL.

↓

### Step 3

The frontend sends the repository information to the backend.

↓

### Step 4

The backend creates an enterprise-level prompt.

↓

### Step 5

Gemini AI analyzes the repository.

↓

### Step 6

The AI returns a detailed technical report.

↓

### Step 7

The frontend displays the report in a clean dashboard.

---

# 🧠 AI Analysis Includes

The generated report may include:

- Repository Overview
- Software Architecture
- Security Review
- Performance Analysis
- Maintainability
- Scalability
- Code Quality
- Production Readiness
- Engineering Recommendations
- AI Confidence Score

---

# 📦 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/MohansriKonathala/DevOnboard-AI.git
```

Move into the project directory:

```bash
cd DevOnboard-AI
```

---

## 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3. Install Backend Dependencies

Open a new terminal.

```bash
cd server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

Example:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Replace `YOUR_GEMINI_API_KEY` with your own Google Gemini API key.

**Important:** Never commit your `.env` file or API keys to GitHub.

---

# ▶️ Running the Project

## Start Backend

```bash
cd server
npm start
```

The backend runs on:

```
http://localhost:5000
```

---

## Start Frontend

Open another terminal.

```bash
cd client
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

Open the URL shown in your terminal to use the application.

---

# 🌐 Deployment

## Frontend

Deploy using:

- Vercel (Recommended)
- Netlify

## Backend

Deploy using:

- Render (Recommended)
- Railway

Update the frontend API URL after deploying the backend.

---

# 📖 Main Project Files

## client/src

Contains the React application.

Responsible for:

- User Interface
- Animations
- Repository Input
- AI Report Display

---

## server/server.js

Main backend server.

Responsibilities:

- Creates Express server
- Receives frontend requests
- Builds AI prompts
- Sends requests to Gemini
- Returns AI responses

---

## server/gemini.js

Handles communication with Gemini AI.

Responsibilities:

- Reads API key
- Sends prompts
- Receives AI responses
- Returns formatted output

---

## server/.env

Stores sensitive environment variables.

Example:

```
GEMINI_API_KEY=xxxxxxxx
```

This file is intentionally excluded from GitHub.

---

# 🎨 Frontend Highlights

- Responsive Design
- Modern UI
- Tailwind CSS Styling
- Smooth Animations
- Markdown Rendering
- Clean Dashboard Layout

---

# 🔒 Security

- API keys are stored using environment variables.
- Secrets are never exposed to the frontend.
- Backend securely communicates with Gemini AI.

---

# 📈 Future Improvements

- GitHub OAuth Authentication
- Repository History Tracking
- PDF Report Export
- Multi-AI Model Support
- Team Collaboration
- CI/CD Integration
- Repository Comparison
- Live Code Quality Metrics

---

# 🎯 Learning Outcomes

This project demonstrates practical experience with:

- React
- Node.js
- Express
- REST APIs
- AI Integration
- Prompt Engineering
- Environment Variables
- Full Stack Development
- Modern UI Design
- Git & GitHub
- Deployment

---

# 👨‍💻 Author

**Mohansri Konathala**

B.Tech Computer Science Engineering

---

# 📄 License

This project is intended for educational, learning, and portfolio purposes.

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!
