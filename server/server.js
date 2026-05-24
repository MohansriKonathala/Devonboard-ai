const express = require("express");
const cors = require("cors");
require("dotenv").config();

const generateDoc = require("./gemini");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// AI Route
app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const enhancedPrompt = `
You are a senior software engineer and code reviewer.

Analyze the following GitHub repository or project description and give a high-quality engineering report.

Be strict, technical, and precise. Avoid generic explanations.

OUTPUT FORMAT:

## 1. Project Overview
Explain what this project does in real terms.

## 2. Architecture Understanding
Explain how frontend, backend, APIs interact.

## 3. Tech Stack
List technologies clearly.

## 4. Code Structure Review
Explain important folders/files.

## 5. Code Quality
- Strengths
- Weaknesses
- Bugs or risks

## 6. Improvements (VERY IMPORTANT)
Give real actionable improvements (not generic advice).

## 7. Final Verdict
Give a short professional summary.

INPUT:
${prompt}
`;

const result = await generateDoc(enhancedPrompt);

    res.json({ response: result });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});