import { useState } from "react";
import axios from "axios";

export default function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    if (!input) return;

    setLoading(true);
    setResult("");

    try {
      const res = await axios.post("http://localhost:5000/generate", {
        prompt: input,
      });

      setResult(res.data.response);
    } catch (err) {
      setResult("Error generating response");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex items-center justify-center p-6">

      <div className="w-full max-w-4xl space-y-6">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            AI Code Review Intelligence
          </h1>
          <p className="text-gray-400 mt-2">
            Enterprise-grade repository analysis powered by AI
          </p>
        </div>

        {/* INPUT CARD */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
          <textarea
            className="w-full h-32 bg-transparent outline-none resize-none text-gray-200"
            placeholder="Paste GitHub repo URL or project description..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-500 transition-all py-3 rounded-xl font-semibold shadow-lg"
          >
            Analyze Repository
          </button>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="text-center text-gray-400 animate-pulse">
            🧠 AI is analyzing architecture, code quality & performance...
          </div>
        )}

        {/* OUTPUT */}
        {result && (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4">

            <h2 className="text-xl font-semibold text-blue-400">
              📊 AI Analysis Report
            </h2>

            <div className="text-gray-200 whitespace-pre-wrap leading-relaxed">
              {result}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}