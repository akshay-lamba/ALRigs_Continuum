
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
      desc: "Views AI as a foundational asset. Focus is on building a digital legacy that grows in value over decades. It is about turning the soul of the organization into a permanent, intelligent advantage.",
      perspective: "Long-term wealth and brand survival.",
      focus: "Data sovereignty and proprietary intelligence.",
      success: "Does this AI make the company more valuable to sell or pass on?",
      path: "/owner",
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
      desc: "Views AI as a growth engine. Used to navigate the market with speed, maximize profit, outperform competitors, and scale the business without losing control.",
      perspective: "Quarterly results and market dominance.",
      focus: "Predictive insights and high-level decision support.",
      success: "Does this AI improve our margins and speed to market?",
      path: "/people/company",
      image: "https://static.wixstatic.com/media/b20068_f2f81156fe934989b526d701e67e3760~mv2.jpeg"
    },
    {
      id: "functional",
      title: "The Functional Leader",
      world: "Productivity & Workflow",
      desc: "Views AI as a force multiplier. AI lives in the daily grind, removing friction from departments like Sales, HR, or Finance to let people focus on high-value work.",
      perspective: "Team efficiency and operational excellence.",
      focus: "Task automation and departmental optimization.",
      success: "Does this AI remove bottlenecks and stop team burnout?",
      path: "/people/division",
      image: "https://static.wixstatic.com/media/b20068_546d26f6ffbe4326a5df8b186607eb5b~mv2.jpeg"
    },
    {
      id: "state",
      title: "The State Leader",
      world: "Ethics & Public Utility",
      desc: "Views AI as a public service. AI must be as reliable and fair as a utility. Used to protect citizens, manage public resources, and ensure technology benefits everyone.",
      perspective: "Safety, equity, and civic stability.",
      focus: "Bias prevention, security, and universal access.",
      success: "Does this AI make life safer and fairer for every citizen?",
      path: "/people/country",
      image: "https://static.wixstatic.com/media/b20068_a4da7cb2042845618cdb397441584282~mv2.jpeg"
    },
    {
      id: "tech",
      title: "The Tech Leader",
      world: "Systems & Infrastructure",
      desc: "Views AI as a technical architecture. The 'magic' is stripped away to reveal the pipes. Focus on how models are built, data location, and system reliability.",
      perspective: "Stability, security, and scalability.",
      focus: "Integration, model reliability, and data privacy.",
      success: "Is the system secure, fast, and built to scale?",
      path: "/people/building",
      image: "https://static.wixstatic.com/media/b20068_36d6a54f8f4a47a1957297e6878b37f4~mv2.jpeg"
    }
  ];

  return (
    <div className="bg-transparent text-slate-300 min-h-screen font-sans overflow-x-hidden">
      {/* Section 01: Pure Hero Visual (No Text) */}
      <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://static.wixstatic.com/media/b20068_7db440d7d54346bab18199f0ef18c9d9~mv2.jpeg" 
            alt="The Collection" 
            className="w-full h-full object-cover object-top filter brightness-75 scale-105"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Glass Overlay Style */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        {/* Animated Visual Lines for Depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ x: ['100%', '-100%'], opacity: [0, 0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 left-0 w-full h-[1px] bg-white/20"
          />
          <motion.div 
            animate={{ x: ['-100%', '100%'], opacity: [0, 0.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-1/4 left-0 w-full h-[1px] bg-white/10"
          />
        </div>

        {/* Subtle Indicator to Scroll */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
          <div className="w-px h-16 bg-gradient-to-b from-blue-500 to-transparent" />
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] animate-pulse">The Collection</span>
        </div>
      </div>

      {/* Section 02: The Persona Gallery */}
      <div className="max-w-[1400px] w-full mx-auto px-6 py-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {personas.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`group relative flex flex-col ${idx === 4 ? "md:col-span-2 md:max-w-3xl md:mx-auto" : ""}`}
            >
              {/* Image Container */}
              <div 
                onClick={() => navigate(p.path)}
                className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-10 cursor-pointer border border-white/5 bg-white/[0.02] shadow-2xl transition-all duration-700 hover:border-blue-500/30"
              >
                {p.images ? (
                  <OwnerSlideshow images={p.images} title={p.title} />
                ) : (
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="w-full h-full object-cover grayscale opacity-40 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Meta */}
                <div className="absolute top-8 left-8 flex items-center gap-4 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-[10px] font-black text-blue-500 tracking-[0.3em] uppercase">0{idx + 1}</span>
                  <div className="w-8 h-px bg-blue-500/30" />
                  <span className="text-[10px] font-black text-white/40 tracking-[0.3em] uppercase">{p.world}</span>
                </div>
              </div>

              {/* Content Block */}
              <div className="px-2">
                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 leading-none group-hover:text-blue-400 transition-colors duration-500">
                  {p.title}
                </h3>
                
                <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-10 min-h-[5.5rem] line-clamp-3">
                  {p.desc}
                </p>

                {/* Sub-details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 py-8 border-y border-white/5">
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Perspective</h4>
                    <p className="text-sm text-slate-300 font-medium leading-snug">{p.perspective}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">AI Focus</h4>
                    <p className="text-sm text-slate-300 font-medium leading-snug">{p.focus}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Success</h4>
                    <p className="text-sm text-[11px] text-blue-400/80 font-bold leading-tight italic">"{p.success}"</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <button 
                    onClick={() => navigate(p.path)}
                    className="group/btn relative px-8 py-4 rounded-full bg-blue-500/5 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:bg-blue-500 hover:text-white"
                  >
                    <span className="relative z-10 transition-transform duration-500 group-hover/btn:translate-x-1">Enter your world &rarr;</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
