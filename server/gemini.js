const axios = require("axios");
require("dotenv").config();

async function generateDoc(prompt) {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return (
      response.data.choices?.[0]?.message?.content ||
      "No response generated."
    );
  } catch (error) {
    console.log(
      "GROQ ERROR:",
      error.response?.data || error.message
    );
    return "Error generating response.";
  }
}

module.exports = generateDoc;