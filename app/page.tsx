"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, Briefcase, Code, Database, Cpu, Zap, 
  Download, Award, BookOpen, Send, User, 
  ChevronRight, ExternalLink, Mail, Linkedin, Github,
  TrendingUp, Milestone, GraduationCap, MapPin, Calendar,
  Globe, Server, Layout, MessageSquare, FileText, ArrowUpRight,
  Phone, Share2, Search, Newspaper, Sparkles
} from "lucide-react";
import Image from "next/image";

// --- DATA REPOSITORY ---

const RESUME_DATA = {
  name: "Sadish Sugumaran",
  role: "Senior IT Delivery Leader | Delivery Head | Data & AI Infrastructure Operations",
  email: "sadish.sugumaran@gmail.com",
  phone: "+91 9900015844",
  location: "Bangalore, Karnataka",
  bio: "Senior IT Delivery Leader with 17+ years experience managing enterprise-scale infrastructure, Data & AI, and managed services across global Fortune 500 accounts. Currently serving as Delivery Head at Kyndryl, managing Cloudera Big Data Engineering Operations for a Global Financial Institution.",
  experience: [
    {
      company: "Kyndryl",
      role: "Senior Manager – Delivery Head",
      period: "2019 – Present",
      location: "Bangalore, KA",
      description: "Full P&L ownership, QBRs, and CXO-level governance for Cloudera Big Data Engineering Operations. Grew account revenue by 60% YoY.",
      achievements: [
        "Led 16-to-6 data centre consolidation program.",
        "Onboarded Big Data Engineering Support in record 3 months.",
        "Automated Cloudera alerts integration with Remedy.",
        "$500K+ cost savings generated via process reengineering."
      ],
      velocity: 95,
      driver: "Strategic P&L & AI Governance",
      labelOffset: 0
    },
    {
      company: "AT&T",
      role: "Senior Specialist – Infrastructure",
      period: "2016 – 2019",
      location: "Bangalore, KA",
      description: "Managed global enterprise storage infrastructure at massive scale. Optimized allocation processes for high-impact cost efficiency.",
      achievements: [
        "Recovered 350GB unused capacity, saving $18,000 annually.",
        "Spearheaded zero-disruption AT&T-to-IBM transition."
      ],
      velocity: 75,
      driver: "Global Scale Efficiency",
      labelOffset: 40
    },
    {
      company: "EMC Data Services",
      role: "Associate Principal Engineer",
      period: "2011 – 2016",
      location: "Bangalore, KA",
      description: "Subject matter expert on EMC VMAX enterprise systems. Advanced through two promotions based on technical excellence.",
      achievements: [
        "Authored organization-wide adopted KB articles.",
        "Received 4 major performance awards for critical system support."
      ],
      velocity: 55,
      driver: "Technical SME Leadership",
      labelOffset: 0
    },
    {
      company: "Sutherland Global Services",
      role: "Customer Support Engineer",
      period: "2009 – 2011",
      location: "Bangalore, KA",
      description: "Specialized hardware and software support for Dell enterprise clients.",
      velocity: 35,
      driver: "Enterprise Client Systems",
      labelOffset: 40
    },
    {
      company: "Wipro Technologies",
      role: "Project Engineer – Storage Admin",
      period: "2007 – 2009",
      location: "Bangalore, KA",
      description: "Supported EMC CLARiiON storage environments for global enterprise clients.",
      velocity: 20,
      driver: "Technical Foundation",
      labelOffset: 0
    }
  ],
  education: [
    {
      degree: "Bachelor of Business Administration (BBA)",
      institution: "In Progress",
      expected: "November 2026"
    },
    {
      degree: "Diploma in Electrical & Electronics Engineering",
      institution: "Elumalai Polytechnic College",
      location: "Chennai"
    }
  ],
  certifications: [
    "PMP® - Project Management Professional",
    "SRE Practitioner - DevOps Institute",
    "Certified ScrumMaster® (CSM)",
    "EMC Information Storage Management (ISM)"
  ],
  aiProducts: [
    {
      title: "Generative Engine Optimization & Citation Audit System",
      desc: "Designed and engineered an automated audit pipeline to analyze how brand data is cited across LLM-driven search engines (ChatGPT, Perplexity, Claude).",
      details: "Built a custom React-based prompt generation engine deployed directly into active client workflows to systematically optimize model retrieval and citation rates.",
      tech: ["Claude API", "Next.js", "n8n Orchestration"],
      icon: <Cpu size={28} />
    },
    {
      title: "Enterprise Hospitality Management & ERP Platform",
      desc: "Developed a secure, full-stack property management platform with multi-receptionist role-based access control (RBAC).",
      details: "Implemented strict Row-Level Security, immutable audit logging, serverless cron-automated financial reporting, and WhatsApp Business API engagement.",
      tech: ["Next.js 14", "Supabase (RLS/JWT)", "WhatsApp API"],
      icon: <Layout size={28} />
    },
    {
      title: "Dual-Role Construction SaaS & Execution Engine",
      desc: "Architected a multi-tenant SaaS on Google Cloud Run using an auto-scaling, containerized architecture that scales to zero.",
      details: "Delivers precise real-time bill-of-quantities (BOQ) calculations and separate permission scopes for project owners and field operators.",
      tech: ["React/TypeScript", "Firebase", "Google Cloud Run"],
      icon: <Server size={28} />
    },
    {
      title: "Offline-First Field Operations PWA & OCR Pipeline",
      desc: "Mobile-first PWA for site management with offline data queuing and automatic synchronization upon reconnection.",
      details: "Integrated an OCR engine to parse bills and a serverless pipeline that delivers automated PDF status reports daily.",
      tech: ["PWA", "OCR Engine", "Serverless PDF Pipeline"],
      icon: <Globe size={28} />
    },
    {
      title: "AI-Driven Content Generation & Publishing Platform",
      desc: "Credit-based social content distribution application integrated with OpenAI/DALL-E APIs.",
      details: "Configured full payment infrastructure via Razorpay, Google OAuth for identity management, and automated publishing via Buffer API.",
      tech: ["OpenAI/DALL-E", "Razorpay", "Buffer API"],
      icon: <MessageSquare size={28} />
    }
  ]
};

const getAIResponse = (query: string) => {
  const q = query.toLowerCase();
  if (q.includes("hi") || q.includes("hello")) return "Hello! I am Sadish's Digital Twin. I have full access to his 17+ years of professional history, contact details, and technical product stack. What can I help you find?";
  if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("call") || q.includes("reach")) {
    return `You can reach Sadish at ${RESUME_DATA.email} or call him directly at ${RESUME_DATA.phone}. He is currently based in ${RESUME_DATA.location}.`;
  }
  if (q.includes("experience") || q.includes("work") || q.includes("career") || q.includes("history")) {
    return `Sadish has 17+ years of experience. Key roles include Delivery Head at Kyndryl (Present), Senior Specialist at AT&T (2016-19), and roles at EMC and Wipro. He specializes in Big Data Operations and AI governance.`;
  }
  if (q.includes("ai") || q.includes("product") || q.includes("portfolio") || q.includes("develop")) {
    return "Sadish has developed 5 flagship AI products: 1. GEO Citation Audit System, 2. Hospitality ERP, 3. Construction SaaS, 4. Field Ops PWA, and 5. AI Content Gen. Which one should I explain in detail?";
  }
  if (q.includes("education") || q.includes("study") || q.includes("degree")) {
    return `Sadish is currently pursuing a BBA (Expected Nov 2026). He also holds a Diploma in Electrical & Electronics Engineering from Chennai.`;
  }
  if (q.includes("saving") || q.includes("cost") || q.includes("money") || q.includes("achieve")) {
    return "He has a proven track record of impact, including $500K+ in annual cost savings at Kyndryl and $18K+ annual savings at AT&T through infrastructure optimization.";
  }
  if (q.includes("cert") || q.includes("pmp") || q.includes("credential")) {
    return `He is a certified PMP®, SRE Practitioner, and ScrumMaster®. He also holds EMC ISM certification.`;
  }
  if (q.includes("kyndryl")) return "At Kyndryl, he is a Delivery Head managing Cloudera Big Data Engineering for a global financial firm, owning full P&L and delivering 60% YoY revenue growth.";
  return "I'm equipped with Sadish's full resume. Try asking about his 'Contact Info', 'Career History', 'AI Products', or 'Cost Savings achievements'.";
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"enterprise" | "ai" | "blog">("enterprise");
  const [chatInput, setChatInput] = useState("");
  const [chatLogs, setChatLogs] = useState<{role: 'user' | 'ai', text: string}[]>([
    {role: 'ai', text: "Welcome. I am Sadish's Digital Twin. Ask me anything about his professional trajectory, contact details, or AI products."}
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLogs]);

  const handleChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatLogs(prev => [...prev, {role: 'user', text: userMsg}]);
    setChatInput("");
    
    setTimeout(() => {
      const response = getAIResponse(userMsg);
      setChatLogs(prev => [...prev, {role: 'ai', text: response}]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#0FFCBE]/30">
      
      {/* CONTACT TOP BAR */}
      <div className="bg-[#106EBE] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-2 text-center overflow-hidden">
        <motion.div 
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap"
        >
          {RESUME_DATA.email} • {RESUME_DATA.phone} • {RESUME_DATA.location} • {RESUME_DATA.email} • {RESUME_DATA.phone}
        </motion.div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#106EBE] flex items-center justify-center font-bold text-white text-xl">SS</div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-slate-900 tracking-tight block leading-none">{RESUME_DATA.name}</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Delivery Head | AI Architect</span>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden lg:flex items-center gap-4 text-xs font-bold text-slate-500 border-r border-slate-200 pr-6">
              <a href={`mailto:${RESUME_DATA.email}`} className="flex items-center gap-2 hover:text-[#106EBE] transition-colors"><Mail size={16} /> {RESUME_DATA.email}</a>
              <a href={`tel:${RESUME_DATA.phone}`} className="flex items-center gap-2 hover:text-[#106EBE] transition-colors"><Phone size={16} /> {RESUME_DATA.phone}</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#106EBE] hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="https://github.com" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#106EBE] hover:text-white transition-all"><Github size={18} /></a>
              <button className="hidden sm:flex btn-primary px-6 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-[#106EBE]/20 active:scale-95 transition-all">Get in Touch</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 lg:py-16 space-y-24">

        {/* INTRODUCTION & HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#106EBE]/10 text-[#106EBE] text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-[#0FFCBE]" /> Strategic IT Delivery Head
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Scale with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#106EBE] to-[#0FFCBE]">
                Agentic Intelligence.
              </span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
              {RESUME_DATA.bio}
            </p>
            
            <div className="flex flex-wrap gap-10 pt-4">
              <div className="space-y-1">
                <div className="text-3xl font-black text-[#106EBE]">17+ Yrs</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Expertise</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-[#106EBE]">Delivery</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Leader</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-[#106EBE]">Agentic AI</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Developer</div>
              </div>
            </div>

            {/* TAB SWITCHER */}
            <div className="flex gap-1 p-1.5 bg-slate-200/50 rounded-2xl w-fit border border-slate-200 mt-8 overflow-x-auto max-w-full">
              <button 
                onClick={() => setActiveTab("enterprise")}
                className={`px-6 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${activeTab === "enterprise" ? "bg-white text-[#106EBE] shadow-xl" : "text-slate-500 hover:text-slate-700"}`}
              >
                Enterprise Experience
              </button>
              <button 
                onClick={() => setActiveTab("ai")}
                className={`px-6 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${activeTab === "ai" ? "bg-white text-[#106EBE] shadow-xl" : "text-slate-500 hover:text-slate-700"}`}
              >
                AI Systems Lab
              </button>
              <button 
                onClick={() => setActiveTab("blog")}
                className={`px-6 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${activeTab === "blog" ? "bg-white text-[#106EBE] shadow-xl" : "text-slate-500 hover:text-slate-700"}`}
              >
                Thought Leadership
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#106EBE] to-[#0FFCBE] rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-white bg-slate-100 shadow-2xl">
                <Image 
                  src="/profile.jpg" 
                  alt={RESUME_DATA.name} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* DYNAMIC CONTENT SECTION */}
        <AnimatePresence mode="wait">
          {activeTab === "enterprise" ? (
            <motion.div 
              key="enterprise"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              <div className="lg:col-span-8 space-y-12">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                    <TrendingUp className="text-[#106EBE]" /> Career Growth & Impact Velocity
                  </h2>
                </div>

                {/* CAREER CHART WITH IMPROVED EXPERT DATA LABELS */}
                <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm overflow-visible h-[550px] flex flex-col relative group/chart">
                  <div className="flex justify-between items-start mb-16">
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Growth Catalyst Mapping</h4>
                      <p className="text-[10px] text-slate-400 font-medium italic">Mapping technical leadership to global delivery scale.</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#106EBE]/5 border border-[#106EBE]/10">
                      <ArrowUpRight size={14} className="text-[#106EBE]" />
                      <span className="text-[10px] font-black text-[#106EBE] uppercase tracking-widest">Impact Velocity</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex items-end gap-3 px-2 relative">
                    {/* Horizontal Milestone Markers */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 px-2 pb-16">
                      {[100, 75, 50, 25, 0].map((level) => (
                        <div key={level} className="border-t border-slate-900 w-full relative">
                          <span className="absolute -left-8 -top-2 text-[8px] font-bold text-slate-400">{level}%</span>
                        </div>
                      ))}
                    </div>

                    {RESUME_DATA.experience.slice().reverse().map((exp, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                        
                        {/* STAGGERED EXPERT DATA LABEL */}
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: isClient ? 1 : 0, y: 0 }}
                          transition={{ delay: 0.8 + (i * 0.1) }}
                          className="absolute w-full text-center z-30"
                          style={{ bottom: `calc(${exp.velocity}% + 10px + ${exp.labelOffset}px)` }}
                        >
                          <div className="inline-block px-3 py-2 rounded-xl bg-white border border-[#106EBE]/20 shadow-xl group-hover:border-[#106EBE] transition-all transform group-hover:-translate-y-1">
                            <p className="text-[8px] font-black text-[#106EBE] uppercase tracking-tighter leading-tight whitespace-nowrap mb-0.5">
                              {exp.driver}
                            </p>
                          </div>
                          {/* Variable Height Connector Line */}
                          <div 
                            className="w-[1px] bg-gradient-to-b from-[#106EBE]/30 to-transparent mx-auto mt-1"
                            style={{ height: `${exp.labelOffset + 10}px` }}
                          ></div>
                        </motion.div>

                        {/* Bar */}
                        <div className="w-full relative h-full flex flex-col justify-end">
                          <div 
                            className="w-full rounded-t-2xl bg-gradient-to-t from-[#106EBE] to-[#0FFCBE] relative shadow-lg shadow-[#106EBE]/5 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom group-hover:to-[#106EBE] group-hover:shadow-[#106EBE]/20 group-hover:scale-x-105"
                            style={{ 
                              height: isClient ? `${exp.velocity}%` : '0%',
                              transitionDelay: `${i * 100}ms`
                            }}
                          >
                            {/* Value Marker */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-black text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
                              {exp.velocity}%
                            </div>
                            
                            {/* Tooltip */}
                            <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-900 text-white text-[10px] font-bold px-4 py-3 rounded-2xl whitespace-nowrap z-40 shadow-2xl scale-95 group-hover:scale-100">
                              <div className="text-[#0FFCBE] mb-1">{exp.period}</div>
                              <div className="text-white mb-1">{exp.company}</div>
                              <div className="text-slate-400 text-[8px] uppercase tracking-widest">{exp.role}</div>
                            </div>
                          </div>
                        </div>

                        {/* Year Label */}
                        <div className="text-[10px] font-black text-slate-400 mt-6 rotate-45 origin-left tracking-tighter whitespace-nowrap group-hover:text-[#106EBE] transition-colors">
                          {exp.period.split(' ')[0]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trajectory List */}
                <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-0 before:w-1 before:bg-slate-100">
                  {RESUME_DATA.experience.map((exp, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="relative pl-12 group cursor-default"
                    >
                      <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full border-4 border-white bg-white shadow-md flex items-center justify-center z-10">
                        <div className={`w-3 h-3 rounded-full ${i === 0 ? "bg-[#106EBE] animate-pulse" : "bg-slate-300"}`}></div>
                      </div>
                      <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#106EBE]/30 transition-all shadow-sm hover:shadow-xl">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                          <div>
                            <span className="text-xs font-bold text-[#106EBE] uppercase tracking-widest">{exp.period}</span>
                            <h3 className="text-2xl font-black text-slate-900">{exp.role}</h3>
                            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                              <MapPin size={14} /> {exp.company} • {exp.location}
                            </div>
                          </div>
                          <div className="px-3 py-1 rounded-full bg-[#106EBE]/5 border border-[#106EBE]/10 text-[10px] font-black text-[#106EBE] uppercase tracking-widest">
                            {exp.driver}
                          </div>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">{exp.description}</p>
                        {exp.achievements && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {exp.achievements.map((a, j) => (
                              <div key={j} className="flex gap-3 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <div className="text-[#0FFCBE] font-bold">✓</div>
                                {a}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 space-y-8">
                {/* AI DIGITAL TWIN - ENHANCED */}
                <div className="bg-[#106EBE] rounded-[2.5rem] p-8 text-white shadow-2xl space-y-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <User className="text-[#0FFCBE]" /> Ask about Sadish
                    </h3>
                    <div className="w-2 h-2 rounded-full bg-[#0FFCBE] animate-ping"></div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 h-96 overflow-y-auto space-y-4 font-medium text-[13px] scroll-smooth custom-scrollbar" id="chat-box">
                    {chatLogs.map((log, idx) => (
                      <div key={idx} className={`flex ${log.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] px-4 py-3 rounded-2xl ${log.role === 'user' ? 'bg-white text-[#106EBE] rounded-tr-none shadow-lg' : 'bg-white/10 border border-white/10 rounded-tl-none'}`}>
                          {log.text}
                        </div>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                  <form onSubmit={handleChat} className="relative">
                    <input 
                      type="text" 
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Try 'Contact Info' or 'Achievements'..."
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-sm outline-none focus:bg-white/20 transition-all placeholder:text-white/50 pr-14"
                    />
                    <button type="submit" className="absolute right-2 top-2 bottom-2 w-10 bg-[#0FFCBE] text-[#106EBE] rounded-xl flex items-center justify-center hover:scale-95 transition-transform">
                      <Send size={18} />
                    </button>
                  </form>
                  <p className="text-[10px] text-white/40 text-center uppercase tracking-widest font-black">Powered by Digital Twin Engine v1.0</p>
                </div>

                {/* EDUCATION */}
                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 space-y-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <GraduationCap className="text-[#106EBE]" /> Education
                  </h3>
                  <div className="space-y-6">
                    {RESUME_DATA.education.map((edu, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="mt-1"><BookOpen size={18} className="text-slate-300" /></div>
                        <div>
                          <p className="text-xs font-bold text-[#106EBE] uppercase tracking-widest">{edu.expected || "Completed"}</p>
                          <h4 className="font-bold text-slate-900 leading-tight">{edu.degree}</h4>
                          <p className="text-sm text-slate-500">{edu.institution} {edu.location && `• ${edu.location}`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CERTIFICATIONS */}
                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 space-y-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <Award className="text-[#106EBE]" /> Credentials
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {RESUME_DATA.certifications.map((c, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 hover:border-[#106EBE]/20 transition-all">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0FFCBE]"></div>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : activeTab === "ai" ? (
            <motion.div 
              key="ai"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {RESUME_DATA.aiProducts.map((p, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#106EBE]/5 transition-colors"></div>
                    <div className="w-16 h-16 rounded-2xl bg-[#106EBE]/5 flex items-center justify-center mb-8 group-hover:bg-[#106EBE] group-hover:text-white transition-all transform group-hover:rotate-6">
                      {p.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{p.title}</h3>
                    <p className="text-[#106EBE] text-sm font-bold mb-4 uppercase tracking-widest">Technical Architecture</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                    <p className="text-slate-400 text-xs leading-relaxed mb-8 italic border-l-2 border-[#0FFCBE] pl-4">{p.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t, j) => (
                        <span key={j} className="text-[9px] font-black uppercase tracking-widest px-4 py-2 bg-slate-100 text-slate-500 rounded-full group-hover:bg-[#0FFCBE]/20 group-hover:text-[#106EBE] transition-colors">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="blog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200 pb-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-slate-900">Thought Leadership</h2>
                  <p className="text-slate-500 text-lg max-w-xl">Deep dives into Big Data Infrastructure, Agentic AI, and Enterprise Delivery Management.</p>
                </div>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search insights..." className="pl-12 pr-6 py-3 rounded-full bg-white border border-slate-200 text-sm outline-none focus:border-[#106EBE] transition-all" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "The Future of Big Data: From Lakehouses to Agentic Mesh",
                    category: "Engineering",
                    date: "May 2024",
                    read: "8 min read"
                  },
                  {
                    title: "Strategic P&L: Why Delivery Leaders Must Master the Balance Sheet",
                    category: "Leadership",
                    date: "April 2024",
                    read: "12 min read"
                  },
                  {
                    title: "Deploying Claude in Enterprise: Lessons from a GEO Audit Engine",
                    category: "AI Architecture",
                    date: "March 2024",
                    read: "10 min read"
                  }
                ].map((post, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 flex flex-col group"
                  >
                    <div className="aspect-video bg-slate-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#106EBE]/20 to-[#0FFCBE]/20 group-hover:scale-110 transition-transform duration-700"></div>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-[#106EBE] uppercase tracking-widest">{post.category}</div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                        <span>{post.date}</span>
                        <span>{post.read}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight mb-6 group-hover:text-[#106EBE] transition-colors">{post.title}</h3>
                      <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#106EBE] flex items-center gap-2 group-hover:gap-4 transition-all">Read Article <ArrowUpRight size={14} /></a>
                        <Share2 size={16} className="text-slate-300 hover:text-[#106EBE] cursor-pointer" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col items-center text-center space-y-6">
                <Newspaper size={48} className="text-[#0FFCBE]" />
                <h3 className="text-3xl font-black">Subscribe to Strategic Insights</h3>
                <p className="text-slate-400 max-w-md">Join 500+ technology leaders receiving monthly updates on AI delivery and data infrastructure.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <input type="email" placeholder="you@company.com" className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-sm outline-none focus:bg-white/20 transition-all" />
                  <button className="bg-[#0FFCBE] text-[#106EBE] px-8 py-4 rounded-full font-bold text-sm shadow-xl active:scale-95 transition-all">Join Waitlist</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <footer className="bg-white border-t border-slate-200 py-16 mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-[#106EBE] flex items-center justify-center font-bold text-white text-xl">SS</div>
                <span className="font-bold text-xl text-slate-900 tracking-tight">{RESUME_DATA.name}</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Bridging the gap between legacy enterprise scale and modern agentic intelligence. 
                Leading delivery, managing P&L, and architecting AI.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#106EBE] hover:text-white transition-all"><Linkedin size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#106EBE] hover:text-white transition-all"><Mail size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#106EBE] hover:text-white transition-all"><Github size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Expertise</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li className="hover:text-[#106EBE] cursor-pointer">Delivery Management</li>
                <li className="hover:text-[#106EBE] cursor-pointer">Big Data Operations</li>
                <li className="hover:text-[#106EBE] cursor-pointer">AI Architecture</li>
                <li className="hover:text-[#106EBE] cursor-pointer">Strategic P&L</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Contact Details</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li className="flex items-center gap-3"><Mail size={16} className="text-[#106EBE]" /> {RESUME_DATA.email}</li>
                <li className="flex items-center gap-3"><Phone size={16} className="text-[#106EBE]" /> {RESUME_DATA.phone}</li>
                <li className="flex items-center gap-3"><MapPin size={16} className="text-[#106EBE]" /> {RESUME_DATA.location}</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">© 2026 {RESUME_DATA.name} • Professional Portfolio</p>
            <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-[#106EBE] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#106EBE] transition-colors">Digital Twin Policy</a>
              <a href="#" className="hover:text-[#106EBE] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* CUSTOM SCROLLBAR CSS */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.3);
        }
      `}</style>
    </div>
  );
}
