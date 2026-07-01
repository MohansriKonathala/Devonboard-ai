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
You are a Principal Software Architect at Google.

Analyze this repository professionally.

Repository:
${prompt}

Generate a detailed report in Markdown.

# Executive Summary
(3-5 paragraphs)

# Project Overview
- Purpose
- Tech Stack
- Folder Structure

# Architecture Intelligence
Explain architecture deeply.

# Code Quality Analysis
- Strengths
- Weaknesses
- Best Practices

# Security Insights
Explain vulnerabilities, secrets, authentication, API usage, input validation.

# Scalability Analysis
Explain horizontal scaling, caching, database scaling, concurrency.

# Performance Review
Mention bottlenecks.

# Maintainability
Explain code organization and future improvements.

# AI Confidence Score
0-100 with explanation.

# Architecture Score
0-100 with explanation.

# Production Readiness
Detailed explanation.

# Recommendations
Give at least 10 improvements.

# Final Verdict
A detailed enterprise-level conclusion.

Rules:
- Use Markdown headings.
- Every section should contain multiple paragraphs.
- Never answer in one line.
- Minimum 1200 words.
- Sound like a Staff Engineer at Google or OpenAI.
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