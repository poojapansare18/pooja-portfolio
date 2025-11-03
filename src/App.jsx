import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Calendar, Phone, Download, Sun, Moon } from "lucide-react";

const BLUE = "#007BFF";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const skills = [
    { title: "Languages", items: ["Python", "C++", "GoLang", "JavaScript", "SQL"] },
    { title: "AI & Automation", items: ["RPA", "GenAI", "AgenticAI", "Prompt Engineering", "RAG"] },
    { title: "Tools & Frameworks", items: ["Flowise", "LangChain", "LangGraph", "Joget", "NocoBase"] },
    { title: "Cloud & Infra", items: ["AWS", "NVIDIA GPUs", "Docker", "Git"] },
    { title: "Databases", items: ["MySQL", "ChromaDB", "VectorDB"] },
  ];

  const projects = [
    {
      title: "GenAI Chatbot with SQL-Llama",
      subtitle: "LLM-driven natural language to SQL",
      tags: ["Python", "Flowise", "MySQL", "LangChain"],
      description:
        "Converted natural language queries into SQL with LLM pipelines and real-time data retrieval.",
    },
    {
      title: "AgenticAI Agent Flow Creation",
      subtitle: "End-to-end agent creation on Flowise",
      tags: ["Flowise", "S3", "VectorDB"],
      description:
        "Built intelligent agents integrating API nodes, embeddings, and chat UI on Skymeric AgenticAI platform.",
    },
    {
      title: "Cybersecurity Threat Dashboard",
      subtitle: "AI-driven threat detection & visualization",
      tags: ["Python", "API", "Visualization"],
      description:
        "Developed a pipeline for AI-generated threat alerts, severity scoring, and real-time graphs.",
    },
    {
      title: "Tally RPA Automation",
      subtitle: "Accounting automation",
      tags: ["RPA", "Python", "Tally"],
      description:
        "Automated accounting workflows and reconciliations through Skymeric RPA bots.",
    },
  ];

  const timeline = [
    { year: "Jan 2024", title: "Joined Skymeric Technologies", desc: "Product testing → RPA & GenAI development" },
    { year: "2024", title: "NVIDIA AI Summit & HPE Discover More", desc: "Technical demos & networking" },
    { year: "2025", title: "IMTEX & Healthcare Summits", desc: "Exhibition tech lead & client POCs" },
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-[#07060a] text-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div
              className="w-20 h-20 bg-gradient-to-br rounded-sm flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(0,123,255,0.08), transparent)" }}
            >
              <div className="w-16 h-16 bg-gray-200 dark:bg-[#111214] border-2 border-dashed dark:border-gray-700 flex items-center justify-center text-sm text-gray-500">
                Photo
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Pooja Kailash Pansare</h1>
              <p className="text-sm opacity-80">
                AI Automation & Product Engineer • Building Intelligent Workflows with GenAI & RPA
              </p>
              <div className="flex items-center gap-3 mt-2 text-sm">
                <span className="flex items-center gap-1">
                  <Phone size={14} /> +91 9665150676
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={14} /> poojapansare1810@gmail.com
                </span>
                <a
                  className="flex items-center gap-1"
                  href="https://linkedin.com/in/poojapansare1810"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={14} /> linkedin.com/in/poojapansare1810
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="flex items-center gap-2 px-3 py-2 rounded-md border dark:border-gray-700"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />} Toggle
            </button>
            <a
              href="/Pooja_Pansare_Modern_Style_Resume.docx"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-white"
              style={{ background: BLUE, boxShadow: "0 6px 18px rgba(0,123,255,0.14)" }}
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </header>

        {/* About Section */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="rounded-xl p-6 mb-8"
          style={{
            background: dark
              ? "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)"
              : "#f8fafc",
          }}
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <h2
                className="text-3xl font-extrabold mb-2"
                style={{ color: BLUE, textShadow: "0 6px 18px rgba(0,123,255,0.08)" }}
              >
                Hi, I’m Pooja — I build intelligent automation.
              </h2>
              <p className="text-gray-300 dark:text-gray-200 max-w-2xl">
                Results-driven AI Automation & Product Engineer with expertise in RPA, GenAI, and
                AgenticAI. Skilled in designing scalable workflows, chatbots, and end-to-end agent
                architectures with seamless integrations.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-md border"
                  style={{ borderColor: BLUE, color: BLUE }}
                >
                  View Projects
                </a>
                <a
                  href="/Pooja_Pansare_Modern_Style_Resume.docx"
                  className="px-4 py-2 rounded-md text-white"
                  style={{
                    background: BLUE,
                    boxShadow: "0 6px 18px rgba(0,123,255,0.12)",
                  }}
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="w-full md:w-64">
              <div
                className="rounded-lg p-4"
                style={{ border: `1px solid rgba(0,123,255,0.12)` }}
              >
                <h3 className="text-sm font-semibold mb-2" style={{ color: BLUE }}>
                  Key Facts
                </h3>
                <ul className="text-sm leading-relaxed">
                  <li>
                    <strong>Location:</strong> Rahatani, Pune
                  </li>
                  <li>
                    <strong>Education:</strong> M.Sc. (CA) — Modern College (2023–25)
                  </li>
                  <li>
                    <strong>Certification:</strong> AWS Solutions Architect — Associate
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar size={14} style={{ color: BLUE }} /> DOB: 18 Oct 2001
                  </li>
                  <li>
                    <strong>Languages:</strong> English / Hindi / Marathi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: BLUE }}>
            Skills & Tech Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ scale: 1.03 }}
                className="rounded-lg p-4 border"
                style={{
                  borderColor: "rgba(0,123,255,0.08)",
                  boxShadow: "0 6px 18px rgba(0,123,255,0.04)",
                }}
              >
                <h4 className="font-medium mb-2">{s.title}</h4>
                <div className="text-sm opacity-90">{s.items.join(" • ")}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: BLUE }}>
            Projects & Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ y: -6 }}
                className="p-4 rounded-lg border bg-white/3 dark:bg-[#0d0d0f]"
                style={{
                  borderColor: "rgba(0,123,255,0.06)",
                  boxShadow: "0 6px 18px rgba(0,123,255,0.04)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="text-sm opacity-80">{p.subtitle}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm opacity-80">{p.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: BLUE }}>
            Experience
          </h3>
          <div className="space-y-4">
            {timeline.map((t) => (
              <motion.div
                key={t.year}
                whileHover={{ scale: 1.01 }}
                className="p-4 rounded-lg border"
                style={{
                  borderColor: "rgba(0,123,255,0.06)",
                  boxShadow: "0 6px 18px rgba(0,123,255,0.03)",
                }}
              >
                <h4 className="font-semibold">
                  {t.year} — {t.title}
                </h4>
                <p className="text-sm opacity-80">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: BLUE }}>
            Contact
          </h3>
          <p className="text-sm mb-2">
            Interested in collaborating or hiring? Reach out via email or LinkedIn.
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={14} /> poojapansare1810@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={14} /> linkedin.com/in/poojapansare1810
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} /> Rahatani, Pune
            </li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
