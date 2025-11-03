import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Calendar, Phone, Download, Sun, Moon } from 'lucide-react';

const BLUE = '#007BFF';

export default function App() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add('dark'); else root.classList.remove('dark');
  }, [dark]);

  const skillList = [
    { title: 'Languages', items: ['Python','C++','GoLang','JavaScript','SQL'] },
    { title: 'AI & Automation', items: ['RPA','GenAI','AgenticAI','Prompt Engineering','RAG'] },
    { title: 'Tools & Frameworks', items: ['Flowise','LangChain','LangGraph','Joget','NocoBase'] },
    { title: 'Cloud & Infra', items: ['AWS','NVIDIA GPUs','Docker','Git'] },
    { title: 'Databases', items: ['MySQL','ChromaDB','VectorDB'] },
  ];

  const projects = [
    { title: 'GenAI Chatbot with SQL-Llama', subtitle: 'LLM-driven natural language to SQL', tags: ['Python','Flowise','MySQL','LangChain'], description: 'Converted natural language queries into SQL with LLM pipelines.' },
    { title: 'AgenticAI Agent Flow Creation', subtitle: 'Agents on Flowise', tags: ['Flowise','S3','VectorDB'], description: 'Built agent flows integrating API nodes, embeddings and chat UI.' },
    { title: 'Cybersecurity Threat Dashboard', subtitle: 'AI-driven alerts & analytics', tags: ['Python','API','Visualization'], description: 'Threat detection pipeline with classification and visualization.' },
    { title: 'Tally RPA Automation', subtitle: 'Accounting automation', tags: ['RPA','Python','Tally'], description: 'Automated accounting flows and reconciliations.' },
  ];

  const timeline = [
    { year: 'Jan 2024', title: 'Joined Skymeric Technologies', desc: 'Product testing → RPA & GenAI development' },
    { year: '2024', title: 'NVIDIA AI Summit & HPE Discover More', desc: 'Technical demos & networking' },
    { year: '2025', title: 'IMTEX & Healthcare Summits', desc: 'Exhibition tech lead & client POCs' },
  ];

  const sectionVariant = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-[#07060a] text-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br rounded-sm flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(0,123,255,0.08), transparent)' }}>
              <div className="w-16 h-16 bg-gray-200 dark:bg-[#111214] border-2 border-dashed dark:border-gray-700 flex items-center justify-center text-sm text-gray-500">Photo</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: dark ? '#fff' : '#0b1220' }}>Pooja Kailash Pansare</h1>
              <p className="text-sm opacity-80">AI Automation & Product Engineer • Building Intelligent Workflows with GenAI & RPA</p>
              <div className="flex items-center gap-3 mt-2 text-sm">
                <span className="flex items-center gap-1"><Phone size={14} /> +91 9665150676</span>
                <span className="flex items-center gap-1"><Mail size={14} /> poojapansare1810@gmail.com</span>
                <a className="flex items-center gap-1" href="#contact"><Linkedin size={14} /> linkedin.com/in/poojapansare1810</a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setDark(!dark)} className="flex items-center gap-2 px-3 py-2 rounded-md border dark:border-gray-700">
              {dark ? <Sun size={16} /> : <Moon size={16} />} Toggle
            </button>
            <a href="/Pooja_Pansare_Modern_Style_Resume.docx" className="flex items-center gap-2 px-4 py-2 rounded-md text-white" style={{ background: BLUE, boxShadow: '0 6px 18px rgba(0,123,255,0.14)' }}>
              <Download size={16} /> Resume
            </a>
          </div>
        </header>

        <motion.section initial="hidden" animate="show" variants={sectionVariant} className="rounded-xl p-6 mb-8" style={{ background: dark ? 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)' : '#f8fafc' }}>
          <div className="flex items-start gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold mb-2" style={{ color: BLUE, textShadow: '0 6px 18px rgba(0,123,255,0.08)' }}>Hi, I’m Pooja — I build intelligent automation.</h2>
              <p className="text-gray-300 dark:text-gray-200 max-w-2xl">Results-driven AI Automation & Product Engineer with hands-on experience in RPA, GenAI, and AgenticAI. I design end-to-end workflows, chatbots, and agents that integrate APIs, databases and cloud systems to deliver scalable automation.</p>

              <div className="mt-4 flex gap-3">
                <a href="#projects" className="px-4 py-2 rounded-md border" style={{ borderColor: BLUE, color: dark ? BLUE : BLUE }}>View Projects</a>
                <a href="/Pooja_Pansare_Modern_Style_Resume.docx" className="px-4 py-2 rounded-md text-white" style={{ background: BLUE, boxShadow: '0 6px 18px rgba(0,123,255,0.12)' }}>Download Resume</a>
              </div>
            </div>

            <div className="w-64">
              <div className="rounded-lg p-4" style={{ border: `1px solid rgba(0,123,255,0.12)` }}>
                <h3 className="text-sm font-semibold mb-2" style={{ color: BLUE }}>Key Facts</h3>
                <ul className="text-sm leading-relaxed">
                  <li><strong>Location:</strong> Rahatani, Pune</li>
                  <li><strong>Education:</strong> M.Sc. (CA) — Modern College (2023–25)</li>
                  <li><strong>Cert:</strong> AWS Solutions Architect — Associate</li>
                  <li className="flex items-center gap-2"><Calendar size={14} style={{ color: BLUE }} /> DOB: 18 Oct 2001</li>
                  <li><strong>Languages:</strong> English / Hindi / Marathi</li>
                </ul>
              </div>
          ... (truncated for brevity) ...
