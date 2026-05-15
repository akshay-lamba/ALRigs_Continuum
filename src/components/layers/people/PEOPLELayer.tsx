
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Download } from "lucide-react";

function OwnerSlideshow({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="mb-12 rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] group/slideshow relative aspect-video">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      {/* Overlay controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(i);
            }}
            className={`w-12 h-1 rounded-full transition-all duration-500 ${
              i === currentIndex ? "bg-blue-500 w-20" : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      
      {/* Indicator Text */}
      <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <span className="text-[10px] font-black text-white/60 tracking-widest uppercase">
          0{currentIndex + 1} <span className="mx-1 text-blue-500">/</span> 0{images.length}
        </span>
      </div>
    </div>
  );
}

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
      color: "from-emerald-500/20",
      images: [
        "https://static.wixstatic.com/media/b20068_7db440d7d54346bab18199f0ef18c9d9~mv2.jpeg",
        "https://static.wixstatic.com/media/b20068_d317516f22bd45408f6dc8ad399f8a73~mv2.jpeg",
        "https://static.wixstatic.com/media/b20068_0e16ebc9b03a4cbe81bc8d518b8a56e9~mv2.jpeg"
      ]
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
    <div className="bg-transparent text-slate-300 min-h-screen font-sans overflow-x-hidden">
      {/* Hero: Pure Visual Entry */}
      <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
        <img 
          src="https://static.wixstatic.com/media/b20068_7db440d7d54346bab18199f0ef18c9d9~mv2.jpeg" 
          alt="The Collection" 
          className="absolute inset-0 w-full h-full object-cover object-top filter brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        {/* Invisible Clickable Zones for Desktop Navigation */}
        <div className="absolute inset-0 hidden md:flex z-10 w-full">
          {personas.map((persona) => (
            <div 
              key={persona.id}
              onClick={() => navigate(persona.path)}
              className="flex-1 cursor-pointer transition-colors duration-500 hover:bg-blue-500/5 group relative"
              role="button"
              aria-label={`Explore ${persona.title}`}
            >
              {/* Subtle visual indicator on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
          ))}
        </div>
      </div>

      {/* The Narrative Collection */}
      <div className="max-w-[1400px] w-full mx-auto px-6 py-20 md:py-40">
        <div className="mb-24 md:mb-40 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-9xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.85]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Collection.</span>
            </h2>
            <p className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Five distinct worlds of leadership. Select the framework that governs your organization.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-32 md:gap-64">
          {personas.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              onClick={() => navigate(p.path)}
              className="group cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24 relative">
                {/* Numbered Index */}
                <div className="absolute -top-12 -left-4 md:-left-12 opacity-5 pointer-events-none">
                  <span className="text-[12rem] md:text-[20rem] font-black text-white leading-none tracking-tighter">0{idx + 1}</span>
                </div>

                {/* Left: Persona Header */}
                <div className="lg:w-2/5 relative z-10">
                  <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase group-hover:text-blue-500 transition-colors duration-500 leading-none">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-px bg-blue-500" />
                    <p className="text-xs md:text-sm font-black text-blue-500 tracking-[0.25em] uppercase whitespace-nowrap">
                      {p.world}
                    </p>
                  </div>
                </div>

                {/* Right: Persona Deep-Dive */}
                <div className="lg:w-3/5 relative z-10">
                  {p.images ? (
                    <OwnerSlideshow images={p.images} title={p.title} />
                  ) : p.image ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mb-12 rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] group/img relative"
                    >
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-auto object-cover max-h-[600px] transition-transform duration-1000 group-hover/img:scale-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </motion.div>
                  ) : null}
                  
                  {p.id === 'owner' && (
                    <div className="mb-12">
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all group"
                      >
                        <Download className="w-4 h-4 group-hover:animate-bounce" />
                        Download Portfolio Strategy PDF
                      </a>
                    </div>
                  )}

                  <p className="text-xl md:text-3xl text-slate-300 font-medium leading-relaxed mb-12">
                    {p.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pt-12 border-t border-white/10">
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Perspective</h4>
                      <p className="text-sm md:text-lg text-slate-400 font-medium leading-snug">{p.perspective}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">AI Focus</h4>
                      <p className="text-sm md:text-lg text-slate-400 font-medium leading-snug">{p.focus}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Success</h4>
                      <p className="text-sm md:text-lg text-slate-400 font-medium leading-snug">{p.success}</p>
                    </div>
                  </div>

                  <div className="mt-12 flex justify-end md:justify-start">
                    <button className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform duration-500 border-b border-blue-500/30 pb-1">
                      Enter World &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
