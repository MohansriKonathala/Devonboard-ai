const axios = require("axios");
require("dotenv").config();

async function generateDoc(prompt) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    const url =
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;

    const response = await axios.post(url, {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    });

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text
      || "No response";

  } catch (error) {
    console.log("GEMINI ERROR FULL:", error.response?.data || error.message);
    return "Error generating response";
  }
}

module.exports = generateDoc;