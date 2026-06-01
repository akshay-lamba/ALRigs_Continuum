import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  DollarSign, 
  Settings, 
  Users, 
  ShieldAlert, 
  Heart, 
  Activity, 
  ArrowRight, 
  Zap, 
  AlertCircle, 
  CheckCircle,
  Database,
  Volume2,
  Lock,
  Globe,
  Building,
  HeartPulse,
  Flame,
  Droplet,
  Shuffle
} from "lucide-react";

// Types
interface Domain {
  id: string;
  name: string;
  title: string;
  struggle: string;
  solution: string;
  impact: string;
}

interface Product {
  id: string;
  name: string;
  tagline: string;
  sub: string;
  coreValue: string;
  accent: string;
  domains: Domain[];
}

const PRODUCTS_DATA: Product[] = [
  {
    id: "proai",
    name: "Pro AI",
    sub: "The SMB Cash Flow & Operational Lifeline",
    tagline: "Private | Pro AI | Humanely",
    coreValue: "Eliminating the crushing mental weight of running an independent business. Pro AI automates the movement of money and projects, giving business owners their weekends back and ensuring workers are always paid on time.",
    accent: "sky",
    domains: [
      {
        id: "finance",
        name: "Finance",
        title: "The 8-Stage Money Flow",
        struggle: "Small business owners live in constant anxiety, chasing unpaid client invoices while wondering if they can cover payroll on Friday or pay their taxes at the end of the year.",
        solution: "1. Opportunity: Filters leads for profitability. 2. Estimation: Calculates fair live pricing. 3. Conversion: Drafts clean digital contracts. 4. Delivery: Tracks live job costs. 5. Invoicing: Bills milestone completions. 6. Collection: Automates smart reminders. 7. Allocation: Routes tax/payroll envelopes. 8. Profit: Signals safe owner take-home.",
        impact: "Sleep knowing payroll is 100% funded, taxes are saved, and weekends are your own."
      },
      {
        id: "operations",
        name: "Operations",
        title: "Logistics & Scheduling",
        struggle: "Double-bookings, forgotten supply orders, and sudden delays that leave crews standing around idle and clients angry.",
        solution: "Syncs team calendars, material deliveries, and vehicle routes. If a supplier delays, the system instantly shifts schedules to alternative local tasks and alerts clients.",
        impact: "Frantic, last-minute phone calls disappear. The workday runs smoothly, and the crew goes home on time."
      },
      {
        id: "hr",
        name: "HR",
        title: "Team Capacity & Payroll Peace",
        struggle: "Keeping track of part-time hours, processing payroll documents manually, and failing to notice when a great employee is burning out.",
        solution: "Automatically compiles work hours through simple daily check-ins, matches them directly to job budgets, processes payroll securely, and flags extreme workloads.",
        impact: "Subcontractors and employees are always paid accurately on Friday, building deep trust."
      },
      {
        id: "assets",
        name: "Assets",
        title: "Predictive Tool & Vehicle Care",
        struggle: "Expensive tools get lost on job sites, and work vehicles break down unexpectedly, causing cancelled jobs and lost revenue.",
        solution: "Keeps a real-time inventory of tools and tracks vehicle health. By watching mileage and usage patterns, it proactively schedules routine oil changes during natural downtime.",
        impact: "No lost workdays due to a dead truck battery, keeping promises to customers unbroken."
      },
      {
        id: "analytics",
        name: "Analytics",
        title: "Plain-English Guidance",
        struggle: "Looking at complex financial spreadsheets and confusing charts, feeling completely blind about how the business is actually performing.",
        solution: "Translates raw operational data into simple, written sentences: 'Your residential jobs made 20% more profit than commercial. Focus efforts there.'",
        impact: "Receive clear, actionable wisdom to make smart business decisions without needing a business degree."
      }
    ]
  },
  {
    id: "businessai",
    name: "Business AI",
    sub: "The Enterprise Common Intelligence Platform",
    tagline: "Sovereign | Business AI | Humanely",
    coreValue: "Ending the daily friction, communication breakdowns, and burnout in large corporations. Business AI connects global offices and fragmented software to ensure everyone operates with the exact same clear, empathetic context.",
    accent: "blue",
    domains: [
      {
        id: "distributed",
        name: "Distributed Teams",
        title: "Synchronized Global Collaboration",
        struggle: "Teams in different countries, time zones, and cultures duplicate work, misunderstand decisions, and pull in opposite directions.",
        solution: "Continuously monitors, translates, and summarizes project tasks and challenges across international offices, delivering a clean, synchronized daily brief to everyone.",
        impact: "Early-morning and late-night panic meetings are replaced by trust. Tokyo and London offices collaborate seamlessly."
      },
      {
        id: "systems",
        name: "Disparate Systems",
        title: "Software Silo Unification",
        struggle: "Critical corporate data is trapped in disconnected legacy systems—sales data in Salesforce, shipment tracking in SAP, and team decisions lost in endless emails.",
        solution: "Acts as an intelligent translator, reading, translating, and linking records across all different databases to build one, unified story of truth.",
        impact: "Frontline staff stop wasting hours digging through multiple complex programs just to find deep, simple answers."
      },
      {
        id: "structure",
        name: "Org Structure",
        title: "Multi-Layer Context Unity",
        struggle: "In large hierarchies, information gets distorted as it travels. Executives decide on old data, while frontline workers are the last to know strategic changes.",
        solution: "Connects every single layer to the exact same context engine. High-level directives automatically map down to practical frontline tasks in real-time.",
        impact: "Eliminates the corporate game of 'telephone'. Every employee operates with absolute clarity and confidence."
      },
      {
        id: "alignment",
        name: "Cross-Layer Alignment",
        title: "Frontline to C-Suite",
        struggle: "Top executives make strategic decisions without knowing what is actually happening on the ground, while frontline workers feel invisible.",
        solution: "Automatically translates high-level corporate goals into practical priorities, while instantly bubbling up everyday operational feedback to executive dashboards.",
        impact: "Corporate strategies are grounded in reality, and everyday workers see that their work is valued by leadership."
      },
      {
        id: "decision",
        name: "Decision Intelligence",
        title: "Cross-Department Sync",
        struggle: "Departments make isolated choices that accidentally hurt other departments (e.g., sales sells a contract for a product procurement cannot source).",
        solution: "Simulates the ripple effects of choices across departments. If logistics flags global supply issues, procurement and sales adjust strategies instantly.",
        impact: "Internal corporate friction and blame games are replaced by calm, collaborative, and predictable planning."
      }
    ]
  },
  {
    id: "stateai",
    name: "State AI",
    sub: "The Proactive Civic Health & Safety Ecosystem",
    tagline: "Sovereign | State AI | Humanely",
    coreValue: "Transforming public safety and healthcare from a reactive system that responds after a tragedy into a proactive guardian that protects lives and prevents suffering before it happens.",
    accent: "indigo",
    domains: [
      {
        id: "emergency",
        name: "Emergency Infrastructure",
        title: "Proactive Emergency Rescue",
        struggle: "Ambulances and fire trucks are purely reactive, only rushing out with sirens blaring after a citizen has collapsed, a car has crashed, or a building is on fire.",
        solution: "Analyzes public and edge sensors (ventilation, thermal load, structural pressure). Automatically alerts building owners of gas leaks and drops low-priority safety reminders to stations.",
        impact: "Catastrophic fires and structural collapses are prevented entirely. Emergency crews save lives via preventive alerts."
      },
      {
        id: "healthcare",
        name: "Healthcare & Hospitals",
        title: "Proactive Clinical Care & Dispatch",
        struggle: "Emergency rooms are suddenly overwhelmed by patients, while doctors are left in the dark until the ambulance doors open.",
        solution: "Links localized micro-climate risks (e.g. freezing temperatures) with temperature sensors of solo-living elderly. Dispatches paramedics early and streams context, history & vitals directly to ER staff.",
        impact: "Vulnerable citizens are protected at home before reaching emergency state. ER doctors operate with prepared clarity."
      },
      {
        id: "compliance",
        name: "Regulatory Compliance",
        title: "Collaborative Safety Guardrails",
        struggle: "Small business owners live in fear of sudden, surprise government audits, confusing rules, and hefty fines that destroy livelihoods.",
        solution: "Establishes a continuous, transparent safety scorecard where the system guides business owners step-by-step through local health and safety rules for easy correction.",
        impact: "Inspections become educational safety partnerships instead of punitive, stressful investigations."
      },
      {
        id: "utilities",
        name: "Public Utilities",
        title: "Water, Power, and Grid Stability",
        struggle: "A water main bursts or a power grid fails overnight, leaving thousands of homes, clinics, and schools without utilities.",
        solution: "Monitors microscopic vibrations, pressure metrics, and electromagnetic shifts across municipal systems to flag physical weak points prior to rupture.",
        impact: "Crews patch weaknesses during quiet afternoons. Communities face zero sudden power cut-offs or flooded roads."
      },
      {
        id: "environmental",
        name: "Environmental Safety",
        title: "Public Health Monitoring",
        struggle: "Invisible environmental threats—toxic creek runoff, micro-contamination near schools, or localized air quality danger—sickening residents without warning.",
        solution: "Deploys smart air, soil, and water sensors, continuously rendering local environmental anomalies into plain recommendations for school groups and health officials.",
        impact: "Vulnerable families are warned in advance of environmental spikes, avoiding unnecessary hospital visits and building long-term stamina."
      }
    ]
  }
];

export default function AIProductsShowcase() {
  const [activeTab, setActiveTab] = useState<string>("proai");
  const [activeDomainIndex, setActiveDomainIndex] = useState<number>(0);
  
  // Pro AI: Step animation
  const [activeStep, setActiveStep] = useState<number>(0);

  // Auto-advance active step for Pro AI loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 8);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const activeProduct = PRODUCTS_DATA.find(p => p.id === activeTab) || PRODUCTS_DATA[0];
  const activeDomain = activeProduct.domains[activeDomainIndex] || activeProduct.domains[0];

  // Safeguard domain selection when tab changes
  const handleTabChange = (productId: string) => {
    setActiveTab(productId);
    setActiveDomainIndex(0);
  };

  const getAccentColor = (prodId: string) => {
    if (prodId === "proai") return "from-sky-400 to-blue-500 text-sky-400 border-sky-500/30 bg-sky-500/10";
    if (prodId === "businessai") return "from-blue-400 to-indigo-500 text-blue-400 border-blue-500/30 bg-blue-500/10";
    return "from-indigo-400 to-violet-500 text-indigo-400 border-indigo-500/30 bg-indigo-500/10";
  };

  return (
    <div className="w-full bg-[#030303] rounded-[3rem] border border-white/5 p-8 md:p-16 my-24 overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.8)]">
      {/* Background glow aligned with active tab accent */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none transition-all duration-1000 ${
        activeTab === "proai" ? "bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_50%)]" :
        activeTab === "businessai" ? "bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_50%)]" :
        "bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_50%)]"
      }`} />

      {/* Header */}
      <div className="relative z-10 max-w-4xl mb-12 md:mb-16">
        <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-blue-500">
          Core Blueprint Portfolio
        </span>
        <h2 className="text-3xl md:text-5xl font-sans font-black text-white tracking-tighter uppercase mt-2 mb-4 leading-none">
          Three Distinct AI Products:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-sky-200 to-blue-400 font-serif lowercase italic font-normal">Built for Human Impact</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base font-normal max-w-3xl leading-relaxed">
          This blueprint details three separate, standalone software products. While they utilize advanced technology, their core purpose is deeply human: removing anxiety from business owners, ending corporate frustration for employees, and saving lives proactively for citizens.
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="relative z-10 grid grid-cols-3 gap-2 p-1.5 bg-white/[0.02] border border-white/5 rounded-2xl mb-12 max-w-2xl">
        {PRODUCTS_DATA.map((prod) => {
          const isActive = activeTab === prod.id;
          return (
            <button
              key={prod.id}
              onClick={() => handleTabChange(prod.id)}
              className={`relative py-3 px-2 md:px-4 rounded-xl text-[11px] font-mono font-black uppercase tracking-[0.15em] transition-all duration-500 overflow-hidden ${
                isActive 
                  ? "text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]" 
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="activeProductTab"
                  className={`absolute inset-0 bg-gradient-to-r ${getAccentColor(prod.id).split(" text-")[0]} opacity-10`}
                />
              )}
              {isActive && (
                <motion.div 
                  layoutId="activeProductBorder"
                  className={`absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r ${getAccentColor(prod.id).split(" text-")[0]}`}
                />
              )}
              {prod.name}
            </button>
          );
        })}
      </div>

      {/* Main product display section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Info Left Column (7/12 layout) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <span className={`text-[10px] font-mono tracking-[0.25em] font-black uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 ${
                activeTab === "proai" ? "text-sky-400" : activeTab === "businessai" ? "text-blue-400" : "text-indigo-400"
              }`}>
                {activeProduct.tagline}
              </span>
              <h3 className="text-2xl md:text-3xl font-sans font-black text-white tracking-tight uppercase leading-none">
                {activeProduct.sub}
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                <span className="font-bold text-white block mb-1">Core Value Promise</span>
                {activeProduct.coreValue}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Connected Domains Switchers */}
          <div className="border-t border-white/5 pt-6 mt-4">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em] block mb-4">
              Select product module to examine:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeProduct.domains.map((dom, index) => {
                const isSelected = activeDomainIndex === index;
                return (
                  <button
                    key={dom.id}
                    onClick={() => setActiveDomainIndex(index)}
                    className={`py-2 px-4 rounded-xl text-[10px] md:text-xs font-mono font-bold uppercase transition-all duration-350 flex items-center gap-2 border ${
                      isSelected 
                        ? `${activeTab === "proai" ? "border-sky-500/40 text-sky-400 bg-sky-500/[0.04]" : activeTab === "businessai" ? "border-blue-500/40 text-blue-400 bg-blue-500/[0.04]" : "border-indigo-500/40 text-indigo-400 bg-indigo-500/[0.04]"}`
                        : "border-white/5 text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      isSelected 
                        ? `${activeTab === "proai" ? "bg-sky-400 animate-ping" : activeTab === "businessai" ? "bg-blue-400 animate-ping" : "bg-indigo-400 animate-ping"}`
                        : "bg-slate-700"
                    }`} />
                    {dom.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Domain Panel */}
          <div className="mt-2 bg-white/[0.01] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 text-[8px] font-mono uppercase tracking-widest text-slate-600">
              Module Details
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id + activeDomain.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-slate-400 font-mono display block">
                    Domain {activeDomainIndex + 1}: {activeDomain.name}
                  </span>
                  <h4 className="text-base md:text-lg font-sans font-black text-white uppercase tracking-tight">
                    {activeDomain.title}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono tracking-widest text-red-500 uppercase flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> The Human Struggle
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {activeDomain.struggle}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-mono tracking-widest text-green-400 uppercase flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> The Proactive Blueprint
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {activeDomain.solution}
                    </p>
                  </div>
                </div>

                <div className={`mt-4 p-3 rounded-lg border flex items-center gap-3 ${
                  activeTab === "proai" ? "bg-sky-500/[0.04] border-sky-450/10 text-sky-200" :
                  activeTab === "businessai" ? "bg-blue-500/[0.04] border-blue-450/10 text-blue-200" :
                  "bg-indigo-500/[0.04] border-indigo-450/10 text-indigo-200"
                }`}>
                  <Heart className="w-4 h-4 shrink-0" />
                  <div className="text-xs">
                    <strong className="text-white">Human Impact: </strong>
                    {activeDomain.impact}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Graphic Column (5/12 layout) */}
        <div className="lg:col-span-5 h-full flex flex-col items-center justify-center p-4 bg-white/[0.02] rounded-3xl border border-white/5 relative min-h-[350px] overflow-hidden group/graphic">
          <div className="absolute top-4 left-4 font-mono text-[9px] tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
            Live Schema Analytics
          </div>

          {/* dynamic graphs depends on activeTab */}
          <div className="w-full h-full flex flex-col items-center justify-center py-6">
            {activeTab === "proai" && (
              <div className="w-full flex flex-col gap-6 items-center">
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest text-center">
                  PRO AI 8-STAGE MONEY FLOW
                </span>
                
                {/* 8-stage visual diagram list */}
                <div className="w-full grid grid-cols-2 gap-3 max-w-[320px] relative">
                  {[
                    "1. OPPORTUNITY",
                    "2. ESTIMATION",
                    "3. CONVERSION",
                    "4. DELIVERY",
                    "8. PROFIT",
                    "7. ALLOCATION",
                    "6. COLLECTION",
                    "5. INVOICING"
                  ].map((stage, idx) => {
                    const mappedStageIndex = idx < 4 ? idx : 11 - idx; // map visual grid to sequential index: 0,1,2,3 down to 4(Invoicing),5(Collection),6(Allocation),7(Profit)
                    // Sequential actual indexes order visually:
                    // Grid order:
                    // [0] Opp,   [1] Est,   [2] Conv,  [3] Deliv
                    // [7] Profit, [6] Alloc, [5] Collect, [4] Invoic
                    const visualMapping = [0, 1, 2, 3, 7, 6, 5, 4];
                    const stageIndex = visualMapping[idx];
                    const isStageActive = activeStep === stageIndex;

                    return (
                      <div 
                        key={stage}
                        className={`p-2.5 rounded-xl border font-mono text-[9px] font-black tracking-widest transition-all duration-500 text-center relative ${
                          isStageActive 
                            ? "border-sky-400 text-white bg-sky-500/20 shadow-[0_0_15px_rgba(56,189,248,0.25)] scale-105"
                            : "border-white/5 text-slate-600 bg-black/40"
                        }`}
                      >
                        {isStageActive && (
                          <span className="absolute -top-1 -right-1 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                          </span>
                        )}
                        {stage}
                      </div>
                    );
                  })}

                  {/* Flow Arrows via absolute positioning */}
                  <div className="absolute inset-x-0 top-[22%] h-[2px] bg-sky-500/5 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-[22%] h-[2px] bg-sky-500/5 pointer-events-none" />
                </div>

                <div className="flex gap-2 items-center text-[10px] text-slate-500 font-mono">
                  <Shuffle className="w-3.5 h-3.5 text-sky-400 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>Sequencing flow loops 24/7/365</span>
                </div>
              </div>
            )}

            {activeTab === "businessai" && (
              <div className="w-full flex flex-col gap-6 items-center px-4">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest text-center">
                  COMMON INTELLIGENCE NETWORK
                </span>

                <div className="flex flex-col items-center justify-between w-full max-w-[340px] gap-6 text-[9px] font-mono relative">
                  {/* Left Column (Legacy Silos) */}
                  <div className="flex justify-around w-full gap-2">
                    <div className="p-2 border border-white/5 bg-black/40 text-slate-500 rounded relative group-hover/graphic:border-red-500/20">
                      CRM / ERP [SILO]
                    </div>
                    <div className="p-2 border border-white/5 bg-black/40 text-slate-500 rounded">
                      EMAILS & CHATS
                    </div>
                    <div className="p-2 border border-white/5 bg-black/40 text-slate-500 rounded">
                      LEGACY FILES
                    </div>
                  </div>

                  {/* Connector lines pointing down to Central AI */}
                  <div className="flex flex-col items-center gap-1 py-1">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500/10 to-blue-400 animate-pulse" />
                    <div className="relative">
                      {/* Central Unified Brain */}
                      <div className="w-24 h-24 rounded-full border-2 border-blue-500/30 bg-blue-500/[0.04] flex items-center justify-center relative p-2 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                        <div className="absolute inset-0 border border-dashed border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '15s' }} />
                        <Database className="w-8 h-8 text-blue-400 animate-pulse" />
                        <span className="absolute -bottom-2 text-[8px] font-bold text-blue-400 whitespace-nowrap bg-[#030303] border border-blue-500/20 px-1.5 py-0.5 rounded">
                          BUSINESS AI
                        </span>
                      </div>
                    </div>
                    <div className="w-0.5 h-6 bg-gradient-to-b from-blue-400 to-blue-500/10 animate-pulse" />
                  </div>

                  {/* Distributed Layer Output */}
                  <div className="flex justify-between w-full gap-4 text-center">
                    <div className="flex-1 p-2 border border-blue-500/10 bg-blue-500/[0.02] text-blue-300 rounded">
                      Distributed Teams
                    </div>
                    <div className="flex-1 p-2 border border-blue-500/10 bg-blue-500/[0.02] text-blue-300 rounded">
                      Common Context
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "stateai" && (
              <div className="w-full flex flex-col gap-6 items-center">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest text-center">
                  PROACTIVE CIVIC HEALTH NETWORK
                </span>

                <div className="flex flex-col items-center justify-center w-full max-w-[300px] gap-4 text-[9px] font-mono">
                  
                  {/* Private side */}
                  <div className="w-full p-2.5 border border-white/5 bg-black/40 rounded-xl flex justify-between items-center px-4">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-400">CITIZENS & VENUES</span>
                    </div>
                    <span className="text-zinc-600">EDGE</span>
                  </div>

                  {/* Pulse link */}
                  <div className="flex flex-col items-center">
                    <div className="w-[1px] h-4 bg-indigo-500/20" />
                    
                    {/* Scanning Circle */}
                    <div className="w-16 h-16 rounded-full border border-indigo-500/30 flex items-center justify-center relative bg-indigo-500/5">
                      <div className="absolute inset-0 border border-indigo-400/40 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                      <Activity className="w-5 h-5 text-indigo-400 animate-pulse" />
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-black" />
                    </div>

                    <div className="w-[1px] h-4 bg-indigo-500/20" />
                  </div>

                  {/* Public Core side */}
                  <div className="w-full p-2.5 border border-indigo-500/20 bg-indigo-500/[0.03] rounded-xl flex justify-between items-center px-4">
                    <div className="flex items-center gap-2">
                      <HeartPulse className="w-4 h-4 text-indigo-400" />
                      <span className="text-indigo-200">PUBLIC EMERGENCY SIDE</span>
                    </div>
                    <span className="text-indigo-400 animate-pulse font-bold">READY</span>
                  </div>

                  <div className="text-[8px] text-slate-500 text-center leading-normal max-w-[240px]">
                    Sensors capture mechanical, thermal, & environmental drifts sequentially for direct clinic & safety prep.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
