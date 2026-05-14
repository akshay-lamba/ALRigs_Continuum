
import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export default function PEOPLELayer() {
  const navigate = useNavigate();

  const personas = [
    {
      id: "owner",
      title: "The Owner",
      world: "Legacy & Asset Value",
      desc: "The Owner views AI as a foundational asset. In this world, the focus is on building a digital legacy that grows in value over decades. It is about turning the soul of the organization into a permanent, intelligent advantage.",
      perspective: "Long-term wealth and brand survival.",
      focus: "Data sovereignty and proprietary intelligence.",
      success: "Does this AI make the company more valuable to sell or pass on?",
      path: "/owner",
      color: "from-emerald-500/20"
    },
    {
      id: "ceo",
      title: "The CEO",
      world: "Strategy & Performance",
      desc: "The CEO views AI as a growth engine. In this world, AI is used to navigate the market with speed. It is a tool to maximize profit, outperform competitors, and scale the business without losing control.",
      perspective: "Quarterly results and market dominance.",
      focus: "Predictive insights and high-level decision support.",
      success: "Does this AI improve our margins and speed to market?",
      path: "/people/company",
      color: "from-blue-500/20"
    },
    {
      id: "functional",
      title: "The Functional Leader",
      world: "Productivity & Workflow",
      desc: "The Functional Leader views AI as a force multiplier. In this world, AI lives in the daily grind, removing friction from specific departments like Sales, HR, or Finance to let people focus on high-value work.",
      perspective: "Team efficiency and operational excellence.",
      focus: "Task automation and departmental optimization.",
      success: "Does this AI remove bottlenecks and stop team burnout?",
      path: "/people/division",
      color: "from-indigo-500/20"
    },
    {
      id: "state",
      title: "The State Leader",
      world: "Ethics & Public Utility",
      desc: "The State Leader views AI as a public service. In this world, AI must be as reliable and fair as a utility. It is used to protect citizens, manage public resources, and ensure that technology benefits everyone, not just a few.",
      perspective: "Safety, equity, and civic stability.",
      focus: "Bias prevention, security, and universal access.",
      success: "Does this AI make life safer and fairer for every citizen?",
      path: "/people/country",
      color: "from-orange-500/20"
    },
    {
      id: "tech",
      title: "The Tech Leader",
      world: "Systems & Infrastructure",
      desc: "The Tech Leader views AI as a technical architecture. In this world, the 'magic' is stripped away to reveal the pipes. They care about how the models are built, where the data sits, and how to keep the systems running smoothly.",
      perspective: "Stability, security, and scalability.",
      focus: "Integration, model reliability, and data privacy.",
      success: "Is the system secure, fast, and built to scale?",
      path: "/people/building",
      color: "from-amber-500/20"
    }
  ];

  return (
    <div className="bg-[#020617] text-slate-300 min-h-screen font-sans">
      {/* Hero with interactive desktop view */}
      <div className="relative w-full h-[60vh] md:h-[80vh] min-h-[500px] overflow-hidden">
        <img 
          src="https://static.wixstatic.com/media/b20068_59d6149bef4a4422b5726b5afc5c2048~mv2.jpeg" 
          alt="The Persona Collection" 
          className="absolute inset-0 w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />
        
        {/* Interactive Overlay - Desktop Only */}
        <div className="absolute inset-0 hidden md:flex z-10 w-full mx-auto">
          {personas.map((persona) => (
            <div 
              key={persona.id}
              onClick={() => navigate(persona.path)}
              className="flex-1 cursor-pointer transition-all duration-300 group relative border-r border-white/5 last:border-r-0 hover:bg-white/5"
              role="button"
              tabIndex={0}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-x-0 bottom-12 flex flex-col items-center px-4 transition-transform duration-500 group-hover:-translate-y-4">
                <span className="text-[10px] font-black tracking-[0.2em] text-blue-500 mb-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
                <h3 className="text-xl font-bold text-white tracking-tighter uppercase whitespace-nowrap mb-1">
                  {persona.title}
                </h3>
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {persona.world}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Static Title for Mobile */}
        <div className="absolute inset-0 flex md:hidden items-end justify-center pb-12 z-10 bg-gradient-to-t from-[#020617] via-transparent to-transparent">
          <div className="text-center px-6">
            <h1 className="text-3xl font-black text-white tracking-tighter mb-2 uppercase">THE PERSONA COLLECTION</h1>
            <p className="text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase">Select your world below</p>
          </div>
        </div>
      </div>

      {/* Grid of Descriptions - Descriptive and Mobile Friendly */}
      <div className="max-w-[1400px] w-full mx-auto px-6 py-16 md:py-32">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase leading-none">The Persona<br/>Collection</h2>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed">
              Five worlds. Five perspectives. Five ways to own the future. Choose the lens that matches your strategy.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {personas.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              onClick={() => navigate(p.path)}
              className="group cursor-pointer relative"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-20">
                {/* ID & Title */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-black text-white/5 tracking-tighter">{idx + 1}</span>
                    <div className={`flex-grow h-px bg-gradient-to-r ${p.color} to-transparent`} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2 uppercase group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-sm font-bold text-blue-500 tracking-[0.15em] uppercase">{p.world}</p>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed mb-10">
                    {p.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/5">
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Perspective</h4>
                      <p className="text-sm md:text-base text-slate-300 leading-snug">{p.perspective}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">AI Focus</h4>
                      <p className="text-sm md:text-base text-slate-300 leading-snug">{p.focus}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Success Metric</h4>
                      <p className="text-sm md:text-base text-slate-300 leading-snug">{p.success}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover highlight line */}
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-500 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
