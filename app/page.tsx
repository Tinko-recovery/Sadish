"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, Share2, Search, Newspaper, Sparkles, X, MessageCircle, Milestone, MapPin, TrendingUp, MessageSquare, Cpu, Layout, Shield, Zap,
  Mail, Linkedin, Github, GraduationCap, BookOpen, Award, Server, Globe, Send
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
      period: "Nov 2021 – Present",
      location: "Bangalore, KA",
      description: "Full P&L ownership and CXO-level governance for Cloudera Big Data Engineering Operations. Grew account revenue by 60% YoY.",
      achievements: [
        "Led 16-to-6 data centre consolidation program.",
        "Onboarded Big Data Engineering Support in record 3 months.",
        "$500K+ annual cost savings generated via process reengineering."
      ],
      velocity: 95,
      driver: "Strategic P&L & AI Governance"
    },
    {
      company: "IBM (Kyndryl Spin-off)",
      role: "Service Delivery Leader",
      period: "Oct 2019 – Oct 2021",
      location: "Bangalore, KA",
      description: "Managed complex infrastructure delivery for global financial accounts prior to the Kyndryl spin-off.",
      velocity: 85,
      driver: "Service Delivery Excellence"
    },
    {
      company: "AT&T",
      role: "Senior Specialist – Infrastructure",
      period: "Jul 2016 – Sep 2019",
      location: "Bangalore, KA",
      description: "Managed global enterprise storage infrastructure at massive scale. Optimized allocation processes for high-impact cost efficiency.",
      achievements: [
        "Recovered 350GB unused capacity, saving $18,000 annually.",
        "Spearheaded zero-disruption AT&T-to-IBM transition."
      ],
      velocity: 75,
      driver: "Global Scale Efficiency"
    },
    {
      company: "EMC Data Services",
      role: "Associate Principal Engineer",
      period: "Jun 2011 – Jun 2016",
      location: "Bangalore, KA",
      description: "Subject matter expert on EMC VMAX enterprise systems. Advanced through two promotions based on technical excellence.",
      velocity: 60,
      driver: "Technical SME Leadership"
    },
    {
      company: "Sutherland Global Services",
      role: "Customer Support Engineer",
      period: "Jan 2009 – May 2011",
      location: "Bangalore, KA",
      description: "Specialized hardware and software support for Dell enterprise clients.",
      velocity: 40,
      driver: "Enterprise Client Systems"
    },
    {
      company: "Wipro Technologies",
      role: "Project Engineer – Storage Admin",
      period: "Jun 2007 – Dec 2008",
      location: "Bangalore, KA",
      description: "Supported EMC CLARiiON storage environments for global enterprise clients.",
      velocity: 25,
      driver: "Technical Foundation"
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
  if (q.includes("education") || q.includes("study") || q.includes("degree") || q.includes("qualification")) {
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

const QUICK_QUESTIONS = [
  "What are your core AI products?",
  "Tell me about your Kyndryl experience.",
  "How can I contact you?",
  "Tell me about your cost savings."
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"enterprise" | "ai">("enterprise");
  const [chatInput, setChatInput] = useState("");
  const [chatLogs, setChatLogs] = useState<{role: 'user' | 'ai', text: string}[]>([
    {role: 'ai', text: "Welcome. I am Sadish's Digital Twin. Ask me anything about his professional trajectory, contact details, or AI products."}
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (chatLogs.length > 1) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatLogs]);

  const handleChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatLogs(prev => [...prev, {role: 'user', text: userMsg}]);
    setChatInput("");
    
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getAIResponse(userMsg);
      setChatLogs(prev => [...prev, {role: 'ai', text: response}]);
      setIsTyping(false);
    }, 1200);
  };

  const sendQuickQuestion = (q: string) => {
    setChatLogs(prev => [...prev, {role: 'user', text: q}]);
    setIsTyping(true);
    setTimeout(() => {
      const response = getAIResponse(q);
      setChatLogs(prev => [...prev, {role: 'ai', text: response}]);
      setIsTyping(false);
    }, 1000);
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

                {/* CAREER TIMELINE ROADMAP */}
                <div className="relative pb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
                    <Milestone className="text-[#106EBE]" /> Career Growth Roadmap
                  </h2>
                  
                  <div className="relative space-y-12 before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-[#106EBE] before:via-[#0FFCBE] before:to-slate-100">
                    {RESUME_DATA.experience.map((exp, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative pl-12 group"
                      >
                        {/* Timeline Node */}
                        <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full border-4 border-white bg-white shadow-xl flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                          <div className={`w-3 h-3 rounded-full ${i === 0 ? "bg-[#106EBE] animate-pulse" : "bg-slate-300 group-hover:bg-[#106EBE] transition-colors"}`}></div>
                        </div>

                        {/* Content Card */}
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#106EBE]/20 transition-all duration-500 relative overflow-hidden">
                          {/* Progress/Impact Indicator */}
                          <div className="absolute top-0 right-0 w-2 h-full bg-[#106EBE]/5 group-hover:bg-[#106EBE]/10 transition-colors"></div>
                          
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-black text-[#106EBE] uppercase tracking-[0.2em] bg-[#106EBE]/5 px-3 py-1 rounded-full">{exp.period}</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1"><MapPin size={10} /> {exp.location}</span>
                              </div>
                              <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#106EBE] transition-colors">{exp.role}</h3>
                              <p className="text-lg font-bold text-slate-600">{exp.company}</p>
                            </div>
                            
                            <div className="flex flex-col items-end">
                              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Impact Velocity</div>
                              <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${exp.velocity}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: i * 0.2 }}
                                  className="h-full bg-gradient-to-r from-[#106EBE] to-[#0FFCBE]"
                                />
                              </div>
                            </div>
                          </div>

                          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-3xl">{exp.description}</p>
                          
                          {exp.achievements && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {exp.achievements.map((a, j) => (
                                <div key={j} className="flex gap-3 text-[11px] font-medium text-slate-600 bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50 group-hover:bg-white transition-colors">
                                  <div className="w-5 h-5 rounded-full bg-[#0FFCBE]/20 text-[#106EBE] flex items-center justify-center text-[10px] shrink-0 font-black">✓</div>
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
              </div>

              <div className="lg:col-span-4 space-y-8">
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
          ) : null}
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
      {/* FLOATING AI AGENT */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-[95vw] sm:w-[400px] h-[80vh] sm:h-[600px] bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-r from-[#106EBE] to-[#0FFCBE] p-6 text-white flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Sparkles size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-base leading-tight tracking-tight">Digital Sadish</h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0FFCBE] animate-pulse"></div>
                      <span className="text-[10px] text-white/80 uppercase tracking-widest font-bold">Online • AI Assistant</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="w-10 h-10 rounded-2xl bg-black/10 flex items-center justify-center hover:bg-black/20 transition-all active:scale-90"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50/50 flex flex-col custom-scrollbar">
                {chatLogs.map((log, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: log.role === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex ${log.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] px-5 py-4 rounded-[1.5rem] text-[13px] font-medium leading-relaxed shadow-sm ${log.role === 'user' ? 'bg-[#106EBE] text-white rounded-tr-none' : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'}`}>
                      {log.text}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white border border-slate-100 px-5 py-3 rounded-[1.5rem] rounded-tl-none shadow-sm flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-[#106EBE] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-[#106EBE] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-[#106EBE] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sadish is thinking...</span>
                    </div>
                  </motion.div>
                )}
                
                {!isTyping && chatLogs.length === 1 && (
                  <div className="flex flex-wrap gap-2 pt-4">
                    {QUICK_QUESTIONS.map((q, i) => (
                      <button 
                        key={i}
                        onClick={() => sendQuickQuestion(q)}
                        className="text-[11px] font-bold text-[#106EBE] bg-[#106EBE]/5 border border-[#106EBE]/10 px-4 py-2 rounded-xl hover:bg-[#106EBE] hover:text-white transition-all active:scale-95"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={handleChat} className="p-4 bg-white border-t border-slate-100 flex gap-3">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-[#106EBE]/10 transition-all"
                />
                <button type="submit" className="w-14 h-14 bg-[#106EBE] text-white rounded-2xl flex items-center justify-center shadow-xl shadow-[#106EBE]/20 active:scale-95 transition-all hover:bg-[#0d599a]">
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group ${isChatOpen ? "bg-slate-900 rotate-90" : "bg-[#106EBE] hover:scale-110"}`}
        >
          {isChatOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <>
              <div className="absolute inset-0 rounded-full bg-[#106EBE] animate-ping opacity-20"></div>
              <MessageCircle size={28} className="text-white" />
            </>
          )}
        </button>
      </div>

    </div>
  );
}
