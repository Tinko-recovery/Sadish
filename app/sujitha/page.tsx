"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Linkedin, Mail, ExternalLink, Sparkles, Shield } from "lucide-react";
import Image from "next/image";

// Sujitha's Focus Areas: Highlighting Loan IQ, ClearPar, and her AI-enabled workflows
const focusAreas = [
  {
    title: "Secondary Loan Trading & Settlements",
    tagline: "ClearPar, Loan IQ & LMA Standards",
    desc: "Overseeing trade booking, lender transfers, and settlement workflows under LMA/LSTA guidelines. Seamlessly configuring pricing options, remittance details, and agent clearances.",
    stack: ["Loan IQ", "ClearPar", "LMA Doc Standards", "SWIFT MT103/202"],
    status: "Lead | State Street"
  },
  {
    title: "AI-Enhanced Document Parsing Pilots",
    tagline: "Credit Agreement Semantic Processing",
    desc: "Spearheading internal initiatives using Generative AI models to parse dense, multi-hundred page credit agreements and pull out key parameters (spread margins, conditions precedent, benchmark dates).",
    stack: ["LLMs", "Context Extraction", "System Prompts"],
    status: "AI FinOps Focus"
  },
  {
    title: "Automated Reconciliation & Exception Handling",
    tagline: "Zero-Tolerance Nostro Break Workflows",
    desc: "Integrating intelligent agent prompts to automate the discovery, categorization, and tracking of cash breaks and GL mismatches across complex systems like Hogan, LS2, and IBS.",
    stack: ["Generative AI Agents", "Anomalies", "IBS / Cash Manager"],
    status: "AI Optimization"
  }
];

const terminalCommands: Record<string, string> = {
  help: "Available commands: bio, core_tech, ai_vision, clear",
  bio: "Sujitha Sadish | Emerging Lead - Loan Services at State Street. 5+ years of elite experience at State Street, Deutsche Bank, and TCS in syndicated lending and LMA/LSTA secondary market trading.",
  core_tech: "Systems: Loan IQ (LIQ), ClearPar, LS2, Hogan, IBS, Cash Manager. Payments: SWIFT MT103, MT202, MT210.",
  ai_vision: "Applying Generative AI and intelligent prompt patterns to automate LMA document extraction, eliminate manual Nostro break checks, and ensure 100% straight-through settlement."
};

export default function SujithaPortfolio() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Welcome to Sujitha's FinOps Control Console v1.0.0",
    "Type 'help' and press Enter to query professional operations."
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    if (cmd === "clear") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    } else if (terminalCommands[cmd]) {
      response = terminalCommands[cmd];
    } else {
      response = `Command not found: '${cmd}'. Type 'help' for options.`;
    }

    setTerminalLogs((prev) => [...prev, `> ${terminalInput}`, response]);
    setTerminalInput("");
  };

  return (
    <div className="min-h-screen bg-[#030d1a] text-[#f8fafc] font-sans selection:bg-[#F43F5E] selection:text-[#030d1a]">
      
      {/* HEADER / NAVIGATION */}
      <header className="border-b border-[#106EBE]/20 bg-[#030d1a]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono text-lg font-bold text-[#F43F5E]">sujitha.sadish_</span>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-[#a8b2d1] hover:text-[#0FFCBE] transition">← Sadish's Portfolio</a>
            <div className="flex gap-4 border-l border-slate-800 pl-6">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#a8b2d1] hover:text-[#F43F5E] transition"><Linkedin size={20} /></a>
              <a href="mailto:computegurus@gmail.com" className="text-[#a8b2d1] hover:text-[#F43F5E] transition"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

        {/* HERO SECTION WITH PHOTO */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F43F5E]/30 bg-[#F43F5E]/5 text-[#F43F5E] text-sm">
              <Sparkles size={14} /> Emerging Lead | Loan Operations & Secondary Trading Specialist
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Syndicated FinOps Expert <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#106EBE] to-[#F43F5E]">
                Driving AI-Driven Accuracy.
              </span>
            </h1>
            <p className="text-[#a8b2d1] text-lg leading-relaxed">
              I lead high-volume operations handling massive US and North American credit portfolios at State Street. With deep expertise in Loan IQ, ClearPar, LMA documentation, and cross-border SWIFT settlements, I focus on executing high-stakes transactions with flawless accuracy while applying generative AI to automate legacy paper processes.
            </p>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative group cursor-pointer w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-[#106EBE]/40 hover:border-[#F43F5E]/60 shadow-[0_0_25px_rgba(16,110,190,0.15)] hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] transition-all duration-300"
            >
              <Image 
                src="/Sadish/sujitha.jpg" 
                alt="Sujitha Sadish" 
                fill
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030d1a] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold tracking-wide uppercase text-[#F43F5E]">Sujitha Sadish</p>
                <p className="text-xs text-[#a8b2d1]">Emerging Lead & AI FinOps Advocate</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTERACTIVE TERMINAL */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
            <Shield size={20} className="text-[#F43F5E]" /> Interactive Ops Console
          </h2>
          <div className="bg-[#0a192f] border border-[#106EBE]/20 rounded-lg overflow-hidden font-mono text-sm shadow-2xl">
            <div className="bg-[#030d1a] px-4 py-2 flex items-center gap-2 border-b border-[#106EBE]/15">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              <span className="ml-2 text-xs text-[#a8b2d1]/60">guest@sujitha.dev: ~</span>
            </div>
            <div className="p-4 h-64 overflow-y-auto space-y-2 text-[#a8b2d1]">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed">{log}</div>
              ))}
            </div>
            <form onSubmit={handleCommand} className="flex border-t border-[#106EBE]/15 bg-[#030d1a]">
              <span className="text-[#F43F5E] pl-4 py-3 select-none">&gt;</span>
              <input 
                type="text" 
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help', 'core_tech', or 'ai_vision'..."
                className="w-full bg-transparent border-none outline-none focus:ring-0 text-[#f8fafc] px-2 py-3 placeholder-[#a8b2d1]/30"
              />
            </form>
          </div>
        </section>

        {/* PROJECTS / FOCUS SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Core Operations & AI Alignment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-[#0a192f] border border-[#106EBE]/25 p-6 rounded-xl flex flex-col justify-between hover:border-[#F43F5E]/40 transition-all duration-300 shadow-lg hover:shadow-[0_4px_20px_rgba(244,63,94,0.05)]"
              >
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-[#F43F5E] bg-[#F43F5E]/5 px-2.5 py-1 rounded-full border border-[#F43F5E]/20 w-fit">{item.status}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-[#F43F5E]/80 font-medium">{item.tagline}</p>
                  <p className="text-sm text-[#a8b2d1] leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#106EBE]/15">
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.map((s, i) => (
                      <span key={i} className="text-[10px] font-mono bg-[#030d1a] px-2 py-0.5 rounded text-[#a8b2d1] border border-[#106EBE]/20">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#106EBE]/15 bg-[#030d1a] mt-20 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[#a8b2d1]/50 text-sm gap-4">
          <p>© 2026 Sujitha Sadish. Portfolio & FinOps Innovation.</p>
        </div>
      </footer>
    </div>
  );
}
