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
You are a Principal Software Architect and Staff-Level AI Engineering Reviewer.

Analyze this repository deeply:
${prompt}

Generate:
- enterprise architecture analysis
- scalability review
- engineering insights
- security concerns
- production-readiness analysis
- code quality evaluation
- maintainability analysis
- performance bottlenecks
- AI confidence score
- architecture quality score
- repository complexity level
- final technical verdict

Output should sound like:
- Senior Staff Engineer
- Solutions Architect
- FAANG-level reviewer
- Enterprise technical consultant
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