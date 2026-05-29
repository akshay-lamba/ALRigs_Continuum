import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  DollarSign, Cpu, Users, Wrench, BarChart3, ArrowRight, Sparkles, 
  CheckCircle2, ShieldCheck, Heart, ArrowUpLeft, ClipboardCheck,
  ShoppingBag, Truck, Thermometer, TrendingUp, Lock, RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Type definitions for interactive dashboard domains
interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface DomainData {
  title: string;
  icon: React.ComponentType<any>;
  summary: string;
  metrics: Metric[];
  telemetryStream: { time: string; value: number }[];
  leaksPlugged: string[];
}

const DOMAINS: Record<string, DomainData> = {
  finance: {
    title: "Money & Invoices",
    icon: DollarSign,
    summary: "Keeps an eye on all money coming in, client billing, and customer payments. Instantly flags missing invoice matches and shows your profit levels in real-time.",
    metrics: [
      { label: "Cash Position", value: "8.43m AED", change: "+14.2% Growth", isPositive: true },
      { label: "Software Bills Saved", value: "0 AED/month", change: "Private ownership", isPositive: true },
      { label: "Completed Client Billing", value: "98.7%", change: "No manual delay", isPositive: true },
      { label: "Profit Margin", value: "+18.5%", change: "Last 30 days", isPositive: true }
    ],
    telemetryStream: [
      { time: "08:00", value: 85 }, { time: "10:00", value: 92 }, { time: "12:00", value: 89 },
      { time: "14:00", value: 94 }, { time: "16:00", value: 97 }, { time: "18:00", value: 98 }
    ],
    leaksPlugged: [
      "No per-user licensing fees",
      "Auto-matches customer payments with delivery paper slips",
      "Immediate warnings on late client payments or port delivery disputes"
    ]
  },
  operations: {
    title: "Daily Operations & Deliveries",
    icon: Cpu,
    summary: "Tracks current customer orders, stock arrivals from suppliers, and port clearance delays. Spots shipping hold-ups before your deliveries run late.",
    metrics: [
      { label: "On-Time Deliveries", value: "99.4%", change: "No missed runs", isPositive: true },
      { label: "Port Clearance Speed", value: "1.8 Days avg", change: "Fewer delays", isPositive: true },
      { label: "Dispatch Response Time", value: "Minutes avg", change: "Fast handoffs", isPositive: true },
      { label: "Warehouse Safety Inventory", value: "15 Days stable", change: "Safe levels", isPositive: true }
    ],
    telemetryStream: [
      { time: "08:00", value: 72 }, { time: "10:00", value: 81 }, { time: "12:00", value: 88 },
      { time: "14:00", value: 95 }, { time: "16:00", value: 99 }, { time: "18:00", value: 99 }
    ],
    leaksPlugged: [
      "Alerts dispatch teams early to avoid expensive port storage penalty bills",
      "Tracks delivery handovers at busy local port docks smoothly",
      "Warns about filled-up storage space before supplier trucks arrive"
    ]
  },
  hr: {
    title: "Staff & Deliveries Scheduling",
    icon: Users,
    summary: "Creates simple schedule charts for drivers, loaders, and shop assistants. Coordinates shifts so your teams work smoothly without expensive overtime bills.",
    metrics: [
      { label: "Staff Efficiency", value: "92.1%", change: "Optimal", isPositive: true },
      { label: "Shift Assigner Accuracy", value: "97.8%", change: "+5.1% matching", isPositive: true },
      { label: "Schedule Mistakes Guarded", value: "0", change: "No overlaps", isPositive: true },
      { label: "Delivery Time average", value: "32 Mins", change: "Fastest turnaround", isPositive: true }
    ],
    telemetryStream: [
      { time: "08:00", value: 60 }, { time: "10:00", value: 78 }, { time: "12:00", value: 85 },
      { time: "14:00", value: 82 }, { time: "16:00", value: 91 }, { time: "18:00", value: 93 }
    ],
    leaksPlugged: [
      "Re-schedules drivers automatically to avoid morning traffic jams",
      "Catches double-booked driver shifts during busy cargo arrivals",
      "Matches driver counts directly with incoming delivery orders so you don't pay staff to sit idle"
    ]
  },
  assets: {
    title: "Warehouse Stock & Temperature",
    icon: Wrench,
    summary: "Monitors cold rooms, stock counts, and vehicle health. Keeps stock from spoiling and stops fuel or electricity waste.",
    metrics: [
      { label: "Cold Room Integrity", value: "-18° Constant", change: "Perfect safety", isPositive: true },
      { label: "Smart Energy Savings", value: "24.7% drop", change: "Reduced costs", isPositive: true },
      { label: "Fleet Readiness", value: "100%", change: "No breakdowns", isPositive: true },
      { label: "Stock shrinkage level", value: "0%", change: "Safe", isPositive: true }
    ],
    telemetryStream: [
      { time: "08:00", value: 99 }, { time: "10:00", value: 99 }, { time: "12:00", value: 98 },
      { time: "14:00", value: 99 }, { time: "16:00", value: 99 }, { time: "18:00", value: 100 }
    ],
    leaksPlugged: [
      "Cools storage freezers during cheaper night hours to cut utility bills",
      "Warns you of engine maintenance before long delivery trucks break down on the road",
      "Stops stock theft by double-checking truck weight receipts automatically"
    ]
  },
  analytics: {
    title: "Simple Dynamic Reports",
    icon: BarChart3,
    summary: "Combines all records into one easy-to-read dashboard. Finds where money goes missing and gives simple tips you can use instantly.",
    metrics: [
      { label: "Local Data Safety", value: "100% Private", change: "In your office", isPositive: true },
      { label: "Daily Records Watched", value: "All Active", change: "Saves manual check", isPositive: true },
      { label: "Checkpoints Checked", value: "Continuous", change: "Auto checked", isPositive: true },
      { label: "Profit Alerts Found", value: "12 Clear Tips", change: "Ready now", isPositive: true }
    ],
    telemetryStream: [
      { time: "08:00", value: 91 }, { time: "10:00", value: 95 }, { time: "12:00", value: 94 },
      { time: "14:00", value: 96 }, { time: "16:00", value: 98 }, { time: "18:00", value: 99 }
    ],
    leaksPlugged: [
      "Saves hours spent on manual paperwork and calculator totals every weekend",
      "Matches staff hours directly with invoice processing speeds",
      "Guards your profit margins by showing clear, early stock alerts"
    ]
  }
};

// 120 Business Insights mapped in 5 categories (each category has 24 unique points)
const CHECKPOINT_CATEGORIES = [
  {
    id: "finance",
    title: "Money & Invoices Indicators",
    count: 24,
    points: [
      "Spotting slow-paying clients early",
      "Double-billing/duplicate invoice warnings",
      "Overlooked extra client labor charges",
      "Mistyped costing & invoice keyboard errors",
      "Underpriced or outdated job quotes used",
      "Missed supplier discount timelines"
    ]
  },
  {
    id: "operations",
    title: "Operations & Delivery Indicators",
    count: 24,
    points: [
      "Late cargo arrival & dispatch delays",
      "Uncaught customs port clearance hold-ups",
      "Extra port storage penalty triggers",
      "Driver route delivery backtracking leaks",
      "Mismatched fuel card spend vs engine miles",
      "Missed raw stock supplier order times"
    ]
  },
  {
    id: "hr",
    title: "Staff & Schedule Indicators",
    count: 24,
    points: [
      "Driver overtime manual rounding leaks",
      "Double-booked worker rosters",
      "Too many staff scheduled on slow days",
      "Lunchbreak motor engine idle fuel waste",
      "Driver logs vs customer sign-off disparities",
      "Driver overtime claims with zero trip dispatches"
    ]
  },
  {
    id: "assets",
    title: "Warehouse & Space Indicators",
    count: 24,
    points: [
      "Utility cooling motor spikes during peak charges",
      "Freezer temperature stock spoilage hazard alerts",
      "Freight scale weight-slip mismatch checks",
      "Missing stock shelf shrinkage count gaps",
      "Failing delivery van motor oil early traps",
      "Idle empty storage bay cooling power waste"
    ]
  },
  {
    id: "analytics",
    title: "Simple Reports Indicators",
    count: 24,
    points: [
      "Driver payroll sheets vs invoicing speed cross-matches",
      "Travel delivery times vs fuel cost spikes",
      "Real net-profit per client calculations",
      "Unexpected cost spikes on standard work quotes",
      "Weekend hand-written total mistakes",
      "Missed cash discount opportunities with suppliers"
    ]
  }
];

// 8 steps simplified for a trader
const FLOW_STEPS = [
  {
    step: "01",
    name: "Opportunity",
    desc: "Keeps track of hot client leads so follow-ups never slow down."
  },
  {
    step: "02",
    name: "Qualification",
    desc: "Reveals true potential profit margins before sending delivery teams or committing trucks."
  },
  {
    step: "03",
    name: "Proposal",
    desc: "Stops accidental underpricing or giving away silent discounts on your job quotes."
  },
  {
    step: "04",
    name: "Win",
    desc: "Saves profitable job specifications so your teams can repeat successful wins easily."
  },
  {
    step: "05",
    name: "Delivery",
    desc: "Compares ongoing actual work times with initial job proposals in real-time."
  },
  {
    step: "06",
    name: "Invoice",
    desc: "Scans bills for missing charges so invoice disputes don't hold back your cash."
  },
  {
    step: "07",
    name: "Collection",
    desc: "Watches payment delays closely so late payers don't hurt your bank account."
  },
  {
    step: "08",
    name: "Profit Realised",
    desc: "Compares cash received with predicted profits to show if the job truly made you money."
  }
];

// Interactive cross-domain recommendations
const INTERACTION_MAP: Record<string, { title: string; text: string; action: string }> = {
  "finance-operations": {
    title: "Speed Up Invoices",
    text: "Matches truck drop-offs with your client billing records. This gets you paid faster and keeps cash flowing in your bank account.",
    action: "Automatically update billing schedules the moment deliveries are accepted."
  },
  "finance-hr": {
    title: "Stop Overtime Leaks",
    text: "Compares driver hours with your invoice totals. Spotting duplicate shifts or extra hours on slow routes saves you up to 18,200 AED a month.",
    action: "Coordinate and balance driver schedules automatically."
  },
  "finance-assets": {
    title: "Cut Warehouse Power Bills",
    text: "Matches delivery schedules with your cold storage coolers. This cuts down unnecessary power use by 24% when the warehouse is empty.",
    action: "Programmed evening storage power shutdown controls safely."
  },
  "finance-analytics": {
    title: "Spot Late Payment Risks",
    text: "Watches pending bills against customer habits. It warns you about late payment risks up to 12 days early so you don't run low on cash.",
    action: "Triggers polite, automatic digital payment follow-ups."
  },
  "operations-hr": {
    title: "Avoid Traffic Delays",
    text: "Finds traffic delays during busy school hours. Changing morning shift times saves your drivers from getting stuck in Jebel Ali traffic.",
    action: "Rescheduled cargo routes smoothly and automatically."
  },
  "operations-assets": {
    title: "Keep Food Shipments Fresh",
    text: "Matches freezer temperatures with delivery schedules. This keeps your fresh food safe and stops expensive inventory from spoiling.",
    action: "Sends a cell phone notification for priority cooler checks."
  },
  "operations-analytics": {
    title: "Spot Port Delays Early",
    text: "Keeps an eye on custom clearances at local ports to spot delayed shipments early. Helps you warn clients so they stay happy.",
    action: "Let the system update supplier schedules dynamically."
  },
  "hr-assets": {
    title: "Prevent Truck Breakdowns",
    text: "Matches delivery logs with engine checkups. This stops breakdowns on hot highways by warning you when a truck needs an oil change or repair.",
    action: "Set a priority maintenance warning to prevent trailer damage."
  },
  "hr-analytics": {
    title: "Train New Starters Fast",
    text: "Checks delivery run speeds with hire dates. This spots where new drivers need training so you can get them up to speed quickly.",
    action: "Directs target training modules straight to warehouse and driver teams."
  },
  "assets-analytics": {
    title: "Reduce Driver Fuel Bills",
    text: "Checks fuel receipts to find duplicate or repeating routes. It helps consolidate trips in Deira and Jebel Ali to cut fuel bills by 15%.",
    action: "Consolidated travel schedules to reduce fuel bills by 15%."
  }
};

export default function ProAIDashPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('finance');
  const [selectedDomains, setSelectedDomains] = useState<string[]>(['finance', 'operations']);

  const getMultiDomainInsight = (selected: string[]) => {
    if (selected.length === 0) {
      return {
        title: "Systems Disconnected",
        text: "Please select one or more of the business areas on the left to link your local systems together.",
        action: "Select at least one area to see insights."
      };
    }

    if (selected.length === 1) {
      const d = selected[0];
      const domainName = DOMAINS[d]?.title || d;
      let text = "";
      let action = "";
      if (d === 'finance') {
        text = "Monitoring financial inflows and invoicing events locally. While secure, true savings come from connecting this to operations or staff scheduling to flag mistakes or duplicate shift hours.";
        action = "Toggle operations or staff scheduling to discover savings.";
      } else if (d === 'operations') {
        text = "Tracking cargo deliveries and shipments. Connect this with Finance or Staff Scheduling to automatically create invoices the moment deliveries arrive.";
        action = "Toggle money tracking or scheduling to activate automation.";
      } else if (d === 'hr') {
        text = "Rostering delivery drivers and shift assistants. Linking this with Finance helps stop overtime mistakes and matches work shifts with your busiest hours.";
        action = "Link with money tracking to optimize staff payroll.";
      } else if (d === 'assets') {
        text = "Monitoring cold room temperature and delivery vehicle health. Linking this with delivery logs lets you cool storage spaces at off-peak hours, cutting your utility bills.";
        action = "Connection with daily operations is recommended.";
      } else {
        text = "Connecting basic management insights on-site. Activating more modules enables the system to spot duplicate bookings and shift mistakes across departments.";
        action = "Connect primary business modules.";
      }
      return {
        title: `Tracking ${domainName} (Single Area)`,
        text,
        action
      };
    }

    if (selected.length === 2) {
      const sortedKeys = [...selected].sort();
      const key = sortedKeys.join('-');
      const matched = INTERACTION_MAP[key];
      if (matched) return matched;
      return {
        title: `${DOMAINS[selected[0]]?.title} & ${DOMAINS[selected[1]]?.title} Connected`,
        text: `Your local computer matches your records across both areas to find duplicate routes or customer credit warnings that normal software misses.`,
        action: "Connected securely on your office computer."
      };
    }

    if (selected.length === 3) {
      const sorted = [...selected].sort();
      if (sorted.includes('finance') && sorted.includes('operations') && sorted.includes('hr')) {
        return {
          title: "Bills, Deliveries & Staff Shifts Linked",
          text: "This links client bills, live delivery dispatches, and actual worker shift times together to find whenever fuel cards or overtime hours don't match actual drop-offs.",
          action: "Stops payslip errors, saving you money on your monthly office payroll."
        };
      }
      if (sorted.includes('finance') && sorted.includes('operations') && sorted.includes('assets')) {
        return {
          title: "Auto-Prep Cold Storage Rates",
          text: "Matches upcoming deliveries with your cold storage cooling schedule, prep-cooling the warehouse during cheaper off-peak electricity hours before cargo arrives.",
          action: "Cuts storage electricity bills by up to 24.7%."
        };
      }
      if (sorted.includes('hr') && sorted.includes('assets') && sorted.includes('operations')) {
        return {
          title: "Staff Shifts, Vehicle Checkups & Delivery Pathing",
          text: "Schedules standard truck maintenance during driver off-hours so delivery vehicles do not break down in the middle of urgent trips.",
          action: "Keeps your delivery vans and trucks ready with zero broken runs."
        };
      }
      // General 3 domains
      const names = selected.map(k => DOMAINS[k]?.title || k).slice(0, 3).join(', ');
      return {
        title: "Connecting 3 Business Areas",
        text: `Linking ${names} lets your own office computer check your records across three departments, replacing confusing manual spreadsheets.`,
        action: "Unifies your checks automatically instead of doing them by hand."
      };
    }

    if (selected.length === 4) {
      const missing = Object.keys(DOMAINS).filter(k => !selected.includes(k))[0];
      const missingName = DOMAINS[missing]?.title || '';
      return {
        title: "4 Departments Connected",
        text: `By keeping track of 4 departments at once, your office computer looks ahead to watch customer invoicing, driver rosters, and incoming cargo all in one view${missingName ? `, excluding only ${missingName}` : ''}.`,
        action: "Sends clear, simple warnings directly to your computer screen whenever something's off."
      };
    }

    // All 5 selected
    return {
      title: "All 5 Departments Connected",
      text: "All 5 parts of your business (Money, Deliveries, Shifts, Storage, and Reports) are connected on your office computer. It acts as an easy-to-read dashboard that spots delivery delays, checks staff shifts, warns of cash flow gaps, and guards your inventory without needing internet access or online cloud bills.",
      action: "All systems connected safely and checking for mistakes."
    };
  };

  const selectedInsight = getMultiDomainInsight(selectedDomains);

  return (
    <div className="bg-transparent text-slate-300 min-h-screen font-sans overflow-x-hidden pt-24 pb-20">
      
      {/* Background ambient accents inside theme parameters (blue/slate/indigo) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[50vh] bg-blue-950/10 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="fixed bottom-0 right-10 w-96 h-[40vh] bg-slate-900/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Navigation row */}
        <div className="mb-12 flex justify-between items-center">
          <button 
            onClick={() => navigate('/solutions/proai')}
            className="flex items-center text-slate-500 hover:text-sky-400 font-bold tracking-[0.3em] text-[10px] uppercase transition-colors pointer-events-auto cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Pro AI
          </button>
        </div>

        {/* Hero Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-8xl font-sans font-black text-white tracking-tighter uppercase mb-2 leading-none animate-fade-in">
            Pro AI
          </h1>
          <div className="mb-6">
            <span className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.3em] bg-white/5 border border-white/5 px-4 py-1.5 rounded-full inline-block">
              Private | Pro AI | Humanely
            </span>
          </div>
          <p className="text-base md:text-lg text-slate-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Pro AI brings all areas of your business together. By connecting daily tasks and money tracks, we spot hidden gaps to help you run your business with total confidence.
          </p>
        </motion.div>

        {/* =======================================================
            SECTION 1: 5-DOMAIN CORE CONTROLLER
            ======================================================= */}
        <div className="mb-32">
          <div className="text-left mb-12">
            <h2 className="text-2xl md:text-4xl font-sans font-black text-white tracking-tight uppercase">5 Connected Business Areas</h2>
            <p className="text-slate-500 text-sm mt-2 max-w-xl font-normal">
              Select one of the business areas below to see how our offline hardware box tracks daily operations and stops waste in real-time.
            </p>
          </div>

          {/* Interactive tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left side selector cards */}
            <div className="space-y-3 lg:col-span-1">
              {Object.keys(DOMAINS).map((key) => {
                const domain = DOMAINS[key];
                const Icon = domain.icon;
                const isSelected = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? 'bg-slate-800/40 border-sky-500/30 text-white shadow-xl scale-[1.02]' 
                        : 'bg-white/[0.01] border-white/5 text-slate-400 hover:bg-white/[0.03] hover:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${isSelected ? 'bg-sky-500/10 text-sky-400' : 'bg-white/5 text-slate-500'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider">{domain.title}</h4>
                        <span className="text-[9px] text-slate-500 font-mono">Continuous Active Feed</span>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'translate-x-1 text-sky-400' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            {/* Main Interactive tab detail card */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-black/40 border border-white/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden backdrop-blur-xl h-full flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
                  
                  <div>
                    {/* Top title and summary */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 text-left border-b border-white/5 pb-8">
                      <div>
                        <h3 className="text-xl md:text-2xl font-sans font-black text-white uppercase tracking-tight">
                          {DOMAINS[activeTab].title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-slate-400 max-w-sm font-normal">
                        {DOMAINS[activeTab].summary}
                      </p>
                    </div>

                    {/* Simple high-contrast grid metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {DOMAINS[activeTab].metrics.map((m, idx) => (
                        <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 text-left hover:border-sky-500/20 transition-all duration-300">
                          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-1">{m.label}</p>
                          <div className="flex items-baseline justify-between">
                            <span className="text-lg md:text-xl font-bold text-white tracking-tight">{m.value}</span>
                            <span className="text-[10px] font-mono text-sky-400">{m.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flow Graph SVG Simulation */}
                  <div className="mt-4 text-left border-t border-white/5 pt-6">
                    <h5 className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-3">Daily Activity Wave</h5>
                    <div className="h-24 bg-white/[0.01] rounded-2xl relative border border-white/5 p-4 overflow-hidden flex items-end">
                      
                      {/* Grid overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_16px]" />
                      
                      {/* Live SVG graph path */}
                      <svg className="w-full h-full absolute inset-0" viewBox="0 0 500 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path 
                          d={`M ${DOMAINS[activeTab].telemetryStream.map((p, i) => `${i * 100} ${100 - p.value}`).join(' L ')}`} 
                          fill="none" 
                          stroke="#38bdf8" 
                          strokeWidth="2.5" 
                          strokeLinecap="round"
                        />
                        <path 
                          d={`M 0 100 L ${DOMAINS[activeTab].telemetryStream.map((p, i) => `${i * 100} ${100 - p.value}`).join(' L ')} L 500 100 Z`} 
                          fill="url(#chartGlow)"
                        />
                      </svg>
                      
                      <div className="absolute bottom-2 left-6 right-6 flex justify-between text-[8px] font-mono text-slate-600 uppercase tracking-widest">
                        <span>Active Monitoring</span>
                        <span>Middle East Trading</span>
                        <span>Locked & Secure</span>
                      </div>
                    </div>
                  </div>

                  {/* Anti-Waste Gaps Closed */}
                  <div className="mt-6 bg-sky-500/[0.02] border border-sky-500/10 rounded-2xl p-5 text-left">
                    <div className="flex items-center gap-2 mb-3 text-sky-400">
                      <ShieldCheck className="w-4 h-4" />
                      <h5 className="text-[10px] font-bold uppercase tracking-widest">Identified Business Savings</h5>
                    </div>
                    <ul className="space-y-2">
                      {DOMAINS[activeTab].leaksPlugged.map((l, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* =======================================================
            SECTION 2: 8-STAGE MONEY FLOW
            ======================================================= */}
        <div className="mb-32 text-center">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-5xl font-sans font-black text-white tracking-tight uppercase">The 8-Stage Money Flow</h2>
            <p className="text-slate-500 text-sm mt-3 font-normal leading-relaxed">
              Not one big fix. Eight small improvements, happening simultaneously, every day.
            </p>
          </div>

          {/* Stepper Pipeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLOW_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-[#050505]/60 hover:bg-[#070707] p-6 rounded-[2rem] border border-white/5 hover:border-sky-500/20 transition-all duration-300 flex flex-col justify-between min-h-[180px] h-auto shadow-lg text-left"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-serif font-black text-slate-500/30 group-hover:text-sky-400 transition-colors">{step.step}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-sky-400 transition-all duration-500" />
                  </div>
                  
                  <h4 className="text-sm font-black text-white tracking-tight mb-2.5 group-hover:text-sky-400 transition-colors uppercase">
                    Stage {parseInt(step.step)}: {step.name}
                  </h4>
                  
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Slide Visual representation with no framing, minimal representation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/5 bg-black/45 hover:border-white/10 transition-colors duration-500 shadow-2xl p-1.5"
          >
            <img 
              src="https://static.wixstatic.com/media/b20068_e82825a29306494a979eba92ca50a41e~mv2.jpeg" 
              alt="The 8-Stage Money Flow Diagram" 
              className="w-full h-auto rounded-2xl block object-cover filter brightness-[0.85] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* =======================================================
            SECTION 3: THE PRIVATE INTERACTIVE INSIGHTS ENGINE
            ======================================================= */}
        <div className="mb-24">
          <div className="text-left mb-12">
            <h2 className="text-2xl md:text-4xl font-sans font-black text-white tracking-tight uppercase">ALRigs Pro AI Insights</h2>
            <p className="text-slate-500 text-sm mt-2 max-w-2xl font-normal leading-relaxed">
              See how the system works with you to enhance your insights and lends itself to proactive action as a business owner minimizing risks and enhancing growth.
            </p>
          </div>

          {/* Interactive Console */}
          <div className="bg-[#050505] border border-white/10 rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 w-60 h-60 bg-blue-500/5 blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
              
              {/* Multi-System Selector */}
              <div className="lg:col-span-12 xl:col-span-5 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Toggle Business Systems to Connect</label>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {selectedDomains.length} Areas Connected
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    Select any of the areas below. Our local office computer links your records to find simple ways to save time and money across 1 to 5 departments.
                  </p>
                  
                  <div className="space-y-3">
                    {Object.keys(DOMAINS).map((k) => {
                      const d = DOMAINS[k];
                      const Icon = d.icon;
                      const isActive = selectedDomains.includes(k);
                      
                      return (
                        <button
                          key={k}
                          onClick={() => {
                            if (isActive) {
                              if (selectedDomains.length > 1) {
                                setSelectedDomains(selectedDomains.filter(x => x !== k));
                              }
                            } else {
                              setSelectedDomains([...selectedDomains, k]);
                            }
                          }}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 pointer-events-auto cursor-pointer ${
                            isActive
                              ? 'bg-sky-500/[0.05] border-sky-400/40 text-white shadow-[0_0_15px_rgba(56,189,248,0.05)] scale-[1.01]'
                              : 'bg-white/[0.01] border-white/5 text-slate-400 hover:bg-white/[0.03] hover:text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-xl transition-colors ${
                              isActive ? 'bg-sky-500/10 text-sky-400' : 'bg-white/5 text-slate-600'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wide block">{d.title}</span>
                              <span className="text-[8px] text-slate-500 font-mono uppercase tracking-wider">{k} records</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 pr-1">
                            {isActive ? (
                              <>
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                                <span className="text-[9px] font-mono text-sky-400 uppercase tracking-widest font-bold">Active</span>
                              </>
                            ) : (
                              <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Muted</span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Visual indicator of the 120 points */}
                <div className="bg-sky-500/[0.02] border border-sky-450/10 rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Business Indicators Connected</span>
                    <span className="text-[11px] font-mono text-sky-400 font-bold">{selectedDomains.length * 24} / 120 Active</span>
                  </div>
                  
                  {/* Custom progress light indicator */}
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-sky-500 to-blue-400 transition-all duration-500"
                      style={{ width: `${(selectedDomains.length / 5) * 100}%` }}
                    />
                  </div>
                  
                  <p className="text-[10px] text-slate-500 leading-normal">
                    Each toggle above instantly connects 24 check-points, totaling 120 indicators running together to simplify your business checks.
                  </p>
                </div>
              </div>

              {/* Solved Output Screen */}
              <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden hover:border-sky-500/20 transition-all duration-500 min-h-[300px]">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/10 to-transparent" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs mb-6 font-mono border-b border-white/5 pb-4">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] leading-snug">
                    CONNECTED DEPARTMENTS: <strong className="text-white">{selectedDomains.map(d => d.toUpperCase()).join(' + ')}</strong>
                  </span>
                  <span className="text-sky-400 uppercase tracking-widest font-bold text-[9px] shrink-0 bg-sky-500/10 px-2 py-0.5 rounded">
                    {selectedDomains.length} areas checked
                  </span>
                </div>

                <div className="space-y-4 my-auto">
                  <span className="text-[9px] font-mono font-bold text-sky-400/80 uppercase tracking-widest block">
                    Desktop Check Results
                  </span>
                  <h4 className="text-xl md:text-2xl font-black font-sans text-white tracking-tight leading-snug uppercase">
                    {selectedInsight.title}
                  </h4>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                    {selectedInsight.text}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="p-2 w-8 h-8 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">HOW OUR SYSTEM HELPS YOU</p>
                      <p className="text-sm text-white font-medium mt-1 leading-snug">{selectedInsight.action}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Divider */}
            <div className="border-t border-white/5 my-10" />

            {/* Showcase of the 120 Business Insights */}
            <div className="space-y-6">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[9px] font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  {selectedDomains.length * 24} / 120 Private Insights Active
                </div>
                <h3 className="text-lg md:text-xl font-sans font-black text-white uppercase tracking-tight">
                  120 Private Business Insights
                </h3>
                <p className="text-slate-400 text-xs max-w-2xl font-normal mt-1 leading-relaxed">
                  Business insights that a business owner was missing that leads to controlled and confident growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
                {CHECKPOINT_CATEGORIES.map((cat) => {
                  const isActive = selectedDomains.includes(cat.id);
                  const d = DOMAINS[cat.id];
                  const Icon = d.icon;
                  
                  return (
                    <div 
                      key={cat.id}
                      className={`p-5 rounded-2xl border transition-all duration-500 flex flex-col justify-between text-left relative overflow-hidden ${
                        isActive 
                          ? 'bg-sky-500/[0.03] border-sky-400/20 shadow-lg shadow-sky-500/[0.01]' 
                          : 'bg-white/[0.01] border-white/5 opacity-40'
                      }`}
                    >
                      {/* Active status glow overlay */}
                      {isActive && (
                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-sky-500/[0.04] rounded-full blur-xl pointer-events-none" />
                      )}
                      
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className={`p-2 rounded-xl shrink-0 ${isActive ? 'bg-sky-500/10 text-sky-400' : 'bg-white/5 text-slate-600'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className={`text-[8px] font-mono font-bold tracking-widest uppercase pb-0.5 ${isActive ? 'text-sky-400' : 'text-slate-600'}`}>
                            {isActive ? '● Active' : '○ Standby'}
                          </span>
                        </div>
                        
                        <h4 className="text-xs font-black text-white uppercase tracking-wide mb-1 leading-tight">
                          {cat.id === 'analytics' ? 'Simple Reports' : d.title}
                        </h4>
                        
                        <p className={`text-[8px] font-mono leading-none tracking-wider ${isActive ? 'text-sky-400/80' : 'text-slate-500'}`}>
                          {isActive ? '24 OF 24 INDICATORS ACTIVE' : '0 OF 24 INDICATORS MUTED'}
                        </p>
                        
                        {/* Layman list elements */}
                        <ul className="space-y-2.5 mt-4 border-t border-white/5 pt-3">
                          {cat.points.map((p, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-[10px] leading-relaxed text-slate-400">
                              <span className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${isActive ? 'bg-sky-400' : 'bg-slate-700'}`} />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
