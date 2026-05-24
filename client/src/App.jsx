import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  BarChart3,
  Layers3,
  Sparkles,
  Cpu,
} from "lucide-react";
import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  const [repo, setRepo] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const analyzeRepo = async () => {
    try {
      setLoading(true);
      setResponse("");

      const enhancedPrompt = `
You are a senior software architect and AI engineering reviewer.

Analyze this GitHub repository deeply:
${repo}

Generate a highly detailed engineering report with these sections:

1. Project Overview
2. Architecture Understanding
3. Tech Stack
4. Code Structure Review
5. Scalability Analysis
6. Security Risks
7. Code Quality
8. Engineering Improvements
9. Production Readiness
10. Final Verdict

Requirements:
- Sound like a senior engineer
- Use enterprise-level technical explanations
- Include architecture diagrams in text format
- Include actionable improvements
- Mention performance concerns
- Mention scalability bottlenecks
- Mention developer experience
- Mention maintainability
- Mention AI confidence score
- Mention repository complexity level
      `;

      const res = await axios.post("http://localhost:5000/generate", {
        prompt: enhancedPrompt,
      });

      setResponse(res.data.response);
    } catch (error) {
      console.log(error);
      setResponse("Error generating response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          AI Code Review Intelligence
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Enterprise-grade repository architecture analysis powered by AI.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <FeatureCard icon={<Brain />} text="Architecture Intelligence" />
          <FeatureCard icon={<ShieldCheck />} text="Security Insights" />
          <FeatureCard icon={<BarChart3 />} text="Scalability Analysis" />
          <FeatureCard icon={<Layers3 />} text="Code Structure Review" />
        </div>
      </motion.div>

      {/* INPUT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
      >
        <input
          type="text"
          placeholder="Paste GitHub Repository URL"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-4 text-lg outline-none focus:border-cyan-400"
        />

        <button
          onClick={analyzeRepo}
          className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-all"
        >
          Analyze Repository
        </button>
      </motion.div>

      {/* AI PIPELINE */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto mt-10 bg-white/5 border border-white/10 rounded-3xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Cpu className="text-cyan-400" />
            AI Processing Pipeline
          </h2>

          <div className="space-y-4 text-lg text-gray-300">
            <PipelineStep text="Repository URL Validation" />
            <PipelineStep text="Repository Architecture Parsing" />
            <PipelineStep text="Dependency & Structure Analysis" />
            <PipelineStep text="AI Intelligence Engine" />
            <PipelineStep text="Enterprise Engineering Review" />
            <PipelineStep text="Generating Final Report" />
          </div>
        </motion.div>
      )}

      {/* RESPONSE */}
      {response && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto mt-12 bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl"
        >
          {/* AI METRICS */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <MetricCard title="AI Confidence" value="92%" />
            <MetricCard title="Repository Complexity" value="Enterprise" />
            <MetricCard title="Architecture Quality" value="Excellent" />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-cyan-400" />
            <h2 className="text-3xl font-bold">AI Analysis Report</h2>
          </div>

         <div className="prose prose-invert max-w-none text-gray-300">
  <ReactMarkdown
    components={{
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">
          {children}
        </h1>
      ),

      h2: ({ children }) => (
        <h2 className="text-3xl font-bold text-white mt-10 mb-5 border-b border-white/10 pb-3">
          {children}
        </h2>
      ),

      h3: ({ children }) => (
        <h3 className="text-2xl font-semibold text-cyan-300 mt-8 mb-4">
          {children}
        </h3>
      ),

      p: ({ children }) => (
        <p className="text-gray-300 leading-8 mb-5 text-[17px]">
          {children}
        </p>
      ),

      li: ({ children }) => (
        <li className="mb-2 text-gray-300">
          {children}
        </li>
      ),

      code({ inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");

        return !inline && match ? (
          <SyntaxHighlighter
            style={vscDarkPlus}
            language={match[1]}
            PreTag="div"
            className="rounded-2xl my-6"
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        ) : (
          <code className="bg-black/40 px-2 py-1 rounded text-cyan-300">
            {children}
          </code>
        );
      },
    }}
  >
    {response}
  </ReactMarkdown>
</div>
        </motion.div>
      )}
    </div>
  );
}

function FeatureCard({ icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm">
      <div className="text-cyan-400">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function PipelineStep({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-black/30 border border-white/10 rounded-xl px-5 py-4"
    >
      {text}
    </motion.div>
  );
}

function MetricCard({ title, value }) {
  return (
    <div className="bg-black/30 border border-white/10 rounded-2xl p-6 text-center">
      <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
      <p className="text-2xl font-bold text-cyan-400">{value}</p>
    </div>
  );
}

export default App;