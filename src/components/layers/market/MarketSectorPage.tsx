import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, GraduationCap, ShoppingBag, Wrench, Truck, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

interface SectorDetails {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  themeColor: string;
  intro: string;
  pain: string;
  wedgeTitle: string;
  wedgeDescription: string;
}

const sectorData: Record<string, SectorDetails> = {
  healthcare: {
    id: "healthcare",
    title: "Private Healthcare, Clinics & Pharmacies",
    subtitle: "Medical Care & Privacy | Permanent Pain & Pro AI Solutions",
    icon: Shield,
    themeColor: "from-blue-500/15 via-blue-500/5 to-transparent",
    intro: "People cannot pause their health. However, healthcare is the most heavily regulated sector in the UAE, constantly under the microscope of the DHA (Dubai Health Authority).",
    pain: "The absolute nightmare of managing sensitive patient data, staff rotas, and critical medical inventory, while being terrified of a public cloud data leak.",
    wedgeTitle: "Absolute Data Sovereignty",
    wedgeDescription: "runs on a private hardware box that sits securely right on their office floor. Patient records and business secrets never leave the building. They get cutting-edge intelligence without ever violating data privacy laws."
  },
  education: {
    id: "education",
    title: "Education (Schools, Nurseries & Training Institutes)",
    subtitle: "Mandatory Learning | Permanent Pain & Pro AI Solutions",
    icon: GraduationCap,
    themeColor: "from-indigo-500/15 via-indigo-500/5 to-transparent",
    intro: "Education is a mandatory spend for families. However, schools operate on strictly fixed annual budgets but are currently being bled dry by rising software subscriptions per teacher and administrator.",
    pain: "Drowning in subscription fatigue—paying software bills per employee every month forever—while trying to manage complex daily timetables and parent communications.",
    wedgeTitle: "Stop Renting, Start Owning",
    wedgeDescription: "A school makes a one-time purchase from AED 49,999 and completely eliminates their recurring SaaS bills. The backend runs itself, saving their fixed budget."
  },
  groceries: {
    id: "groceries",
    title: "Essential Groceries & Food Distribution (FMCG)",
    subtitle: "Daily Food Supply | Permanent Pain & Pro AI Solutions",
    icon: ShoppingBag,
    themeColor: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    intro: "We aren't talking about luxury fine dining here; we are talking about supermarkets, daily bakeries, and essential food distributors. People must eat.",
    pain: "They operate on the thinnest margins imaginable. Money is constantly leaking out of the business in ways they can't see. A slight spike in wasted stock or inefficient labor destroys their weekly profit.",
    wedgeTitle: "The Automated Margin Guard",
    wedgeDescription: "The AI acts as an automated guard over their wallet. Because it connects inventory, staff hours, and costs, it catches leaks before they hurt the bottom line. If food waste spikes, it flags it immediately so the owner can fix it today, not next month."
  },
  facilities: {
    id: "facilities",
    title: "Facilities Management & Essential Maintenance",
    subtitle: "Building Upkeep (AC/Water) | Permanent Pain & Pro AI Solutions",
    icon: Wrench,
    themeColor: "from-amber-500/15 via-amber-500/5 to-transparent",
    intro: "In a desert city like Dubai, AC maintenance, plumbing, and waste management are critical survival services. These companies manage hundreds of blue-collar workers across the city daily.",
    pain: "Constantly playing firefighter and reacting to crises. They are manually chasing staff to see if tasks got done, building schedules, and trying to match invoices.",
    wedgeTitle: "The Frictionless Interaction Points",
    wedgeDescription: "When a technician finishes an AC repair, the system registers it instantly, and the invoice is already prepared. If a job starts running over time, the system flags it instantly, stopping the margin rot."
  },
  logistics: {
    id: "logistics",
    title: "Essential Logistics (Cold Chain Medical & Food Transport)",
    subtitle: "Moving Food & Medicine | Permanent Pain & Pro AI Solutions",
    icon: Truck,
    themeColor: "from-purple-500/15 via-purple-500/5 to-transparent",
    intro: "Essential goods are useless if they don't move. Moving temperature-sensitive food and medicine requires flawless execution.",
    pain: "The \"Domino Effect.\" If a cold-chain supplier is delayed, the inventory spoils, and the client goes furious.",
    wedgeTitle: "6th Sense Predictive Insights",
    wedgeDescription: "The system watches the supplier network. It spots a minor delay on their end and instantly alerts the manager days before it causes an actual fire. They get a multi-day head start to pivot the schedule and save the delivery."
  }
};

export default function MarketSectorPage() {
  const { sectorId } = useParams();
  const navigate = useNavigate();
  const sector = sectorId ? sectorData[sectorId] : null;

  if (!sector) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center py-20">
        <h2 className="text-2xl mb-4 font-bold">Sector Not Found</h2>
        <button onClick={() => navigate('/market/middle-east')} className="px-6 py-2 bg-blue-600 rounded-full">
          Back to Middle East Market
        </button>
      </div>
    );
  }

  const IconComponent = sector.icon;

  return (
    <div className="bg-transparent min-h-[80vh] font-sans text-slate-400 relative overflow-hidden py-12 px-6">
      
      {/* Background glow specific to sector color theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[50vh] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Navigation */}
      <div className="relative z-10 max-w-4xl mx-auto mb-12">
        <button 
          onClick={() => navigate('/market/middle-east')}
          className="flex items-center text-slate-500 hover:text-blue-400 font-bold tracking-[0.3em] text-[10px] uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Middle East
        </button>
      </div>

      {/* Main Content Card Container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative p-6 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-b ${sector.themeColor} border border-white/5 shadow-2xl overflow-hidden`}
        >
          {/* Subtle upper glow bar */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          
          {/* Header Layout */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div className="text-left max-w-2xl">
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-3 block">
                Evergreen Sector Profile
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight font-serif uppercase">
                {sector.title}
              </h1>
              <p className="text-xs text-slate-400 mt-2 font-mono tracking-widest uppercase">
                {sector.subtitle}
              </p>
            </div>
            
            {/* Visual Icon Container */}
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shadow-inner shrink-0 leading-none">
              <IconComponent className="w-8 h-8" />
            </div>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-8 border-t border-white/5 pt-12">
            
            {/* Permanent Pain Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-red-400">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <h3 className="text-xs font-black uppercase tracking-widest">The Permanent Pain</h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                {sector.pain}
              </p>
              <div className="text-sm text-slate-500 leading-normal italic py-4 border-l-2 border-slate-700 pl-4">
                {sector.intro}
              </div>
            </div>

            {/* Pro AI Wedge Column */}
            <div className="space-y-6 p-8 rounded-3xl bg-blue-500/[0.03] border border-blue-500/10 hover:border-blue-500/25 transition-all duration-500">
              <div className="flex items-center gap-3 text-blue-400">
                <Lightbulb className="w-5 h-5 shrink-0" />
                <h3 className="text-xs font-black uppercase tracking-widest">The Pro AI Wedge</h3>
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight">
                {sector.wedgeTitle}
              </h4>
              <p className="text-slate-300 text-base leading-relaxed">
                <strong className="text-blue-400 font-semibold">{sector.wedgeTitle}:</strong> {sector.wedgeDescription}
              </p>
              
              <div className="pt-6">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Fully Configured & Installed Locally</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer of the Profile */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
              ALRigs Pro AI • Sovereign Enterprise Architecture
            </span>
            <button 
              onClick={() => navigate('/market/middle-east')}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Back to Regional Overview
            </button>
          </div>

        </motion.div>
      </div>

    </div>
  );
}
