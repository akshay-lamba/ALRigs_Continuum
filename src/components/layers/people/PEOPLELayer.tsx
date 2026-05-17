
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Download } from "lucide-react";

function PersonaSlideshow({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} Slide ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 scale-105"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      {/* Overlay controls */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              className={`w-8 h-1 rounded-full transition-all duration-500 ${
                i === currentIndex ? "bg-blue-500 w-12" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Indicator Text */}
      {images.length > 1 && (
        <div className="absolute top-10 right-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-[10px] font-black text-white/60 tracking-widest uppercase">
            0{currentIndex + 1} <span className="mx-1 text-blue-500">/</span> 0{images.length}
          </span>
        </div>
      )}
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
      desc: "Views AI as a growth engine. AI is used to navigate the market with speed, maximize profit, outperform competitors, and scale the business without losing control.",
      perspective: "Quarterly results and market dominance.",
      focus: "Predictive insights and high-level decision support.",
      success: "Does this AI improve our margins and speed to market?",
      path: "/people/company",
      images: [
        "https://static.wixstatic.com/media/b20068_a3cd1b6959f3463e8ce2cd9df30311b9~mv2.jpeg",
        "https://static.wixstatic.com/media/b20068_d397ed88447947c08edd4f7c77ba528d~mv2.jpeg",
        "https://static.wixstatic.com/media/b20068_e5e9d7d998e74fa09e7d4260ee1897ea~mv2.jpeg"
      ]
    },
    {
      id: "functional",
      title: "The Functional Leader",
      world: "Productivity & Workflow",
      desc: "Views AI as a force multiplier. AI lives in the daily grind, removing friction from specific departments like Sales, HR, or Finance to let people focus on high-value work.",
      perspective: "Team efficiency and operational excellence.",
      focus: "Task automation and departmental optimization.",
      success: "Does this AI remove bottlenecks and stop team burnout?",
      path: "/people/division",
      images: [
        "https://static.wixstatic.com/media/b20068_5135e878c75b4af396c37198e7078f67~mv2.jpeg",
        "https://static.wixstatic.com/media/b20068_01b4e4157a3f438c96dfc8916359d70a~mv2.jpeg",
        "https://static.wixstatic.com/media/b20068_8ea95d95cfaf43d5871475c643a452fa~mv2.jpeg"
      ]
    },
    {
      id: "state",
      title: "The State Leader",
      world: "Ethics & Public Utility",
      desc: "Views AI as a public service. AI must be as reliable and fair as a utility. It is used to protect citizens, manage public resources, and ensure that technology benefits everyone.",
      perspective: "Safety, equity, and civic stability.",
      focus: "Bias prevention, security, and universal access.",
      success: "Does this AI make life safer and fairer for every citizen?",
      path: "/people/country",
      images: [
        "https://static.wixstatic.com/media/b20068_5b93919fb379407b9c6f271e0c55442b~mv2.jpeg",
        "https://static.wixstatic.com/media/b20068_48a99022b8fa4681b136623d47e1d9fc~mv2.jpeg",
        "https://static.wixstatic.com/media/b20068_14d45ddc24bd4dd68a31f3a7f9f7ac5d~mv2.jpeg"
      ]
    },
    {
      id: "tech",
      title: "The Tech Leader",
      world: "Systems & Infrastructure",
      desc: "Views AI as a technical architecture. The \"magic\" is stripped away to reveal the pipes. Focus is on how the models are built, where the data sits, and how to keep systems running smoothly.",
      perspective: "Stability, security, and scalability.",
      focus: "Integration, model reliability, and data privacy.",
      success: "Is the system secure, fast, and built to scale?",
      path: "/people/tech",
      images: [
        "https://static.wixstatic.com/media/b20068_b64347f2e3f24d0b9ed87da2436f6af6~mv2.jpeg",
        "https://static.wixstatic.com/media/b20068_fa7bfad1ece6444c85cd1d2a2ba93877~mv2.jpeg",
        "https://static.wixstatic.com/media/b20068_36051c87c78e4c138047793eb171a77c~mv2.jpeg"
      ]
    }
  ];

  return (
    <div className="bg-transparent text-slate-300 min-h-screen font-sans overflow-x-hidden">
      {/* Section 01: Pure Hero Visual (3D Glass Aesthetic) */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img 
            src="https://static.wixstatic.com/media/b20068_b51a4121dce940de8a25eec055735243~mv2.jpeg" 
            alt="The Collection" 
            className="w-full h-full object-cover object-top filter brightness-90 contrast-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Sophisticated Glass Atmosphere */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Main glass surface */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10" />
          
          {/* Chromatic Aberration / Color Bleed edges */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
          
          {/* 3D Directional Light Glows */}
          <motion.div 
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
              x: ['-5%', '5%']
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-1/4 w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_60%)] blur-[120px]"
          />
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 z-20">
          <div className="relative group cursor-pointer">
            <div className="w-px h-16 bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent" />
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" 
            />
          </div>
        </div>
      </div>

      {/* Section 02: Immersive Video (Seamless Transition) */}
      <div className="relative w-full py-12 md:py-20 bg-black">
        {/* Seamless Blend Layer */}
        <div className="absolute -top-20 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/5 bg-neutral-900 group shadow-2xl"
          >
            {/* Glass frame effect */}
            <div className="absolute inset-0 z-20 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[3rem]" />
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-30" />
            
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100"
            >
              <source src="https://video.wixstatic.com/video/b20068_18138afdf0f0495898d7a3fa656c9d28/720p/mp4/file.mp4" type="video/mp4" />
            </video>

            {/* Video Title Overlays */}
            <div className="absolute bottom-12 left-12 z-20">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-black text-blue-500 tracking-[0.4em] uppercase">Documentary</span>
                <div className="w-12 h-px bg-blue-500/40" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                Our Philosophical <br /> <span className="text-blue-500">Foundation</span>
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 03: Central Persona Gallery (2 per line, uniform design) */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {personas.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col h-full"
            >
              {/* Image / Slideshow Container: Identical Aspect Ratio */}
              <div 
                onClick={() => navigate(p.path)}
                className="relative aspect-[16/11] rounded-[2rem] overflow-hidden mb-6 cursor-pointer bg-neutral-900 border border-white/5 transition-all duration-1000 group-hover:border-blue-500/40 group-hover:shadow-2xl"
              >
                {/* 3D Glass reflection overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out" />
                </div>

                <div className="absolute inset-0 z-0">
                  <PersonaSlideshow images={p.images} title={p.title} />
                </div>
                
                {/* Vignette & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000 z-5" />
                
                {/* Index & World Tag */}
                <div className="absolute top-10 left-10 flex items-center gap-5 z-20">
                  <span className="text-[10px] font-black text-blue-500 tracking-[0.4em] uppercase">0{idx + 1}</span>
                  <div className="w-10 h-px bg-blue-500/40" />
                  <span className="text-[10px] font-black text-white/50 tracking-[0.4em] uppercase group-hover:text-white transition-colors">{p.world}</span>
                </div>
              </div>

              {/* Minimalist Content Block */}
              <div className="flex flex-col px-4 flex-grow">
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-[0.9] transition-colors duration-500 group-hover:gradient-text-blue gradient-text min-h-[3rem] md:min-h-[4.5rem]">
                  {p.title}
                </h3>
                
                <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed mb-6 line-clamp-3 min-h-[4rem] md:min-h-[4.5rem]">
                  {p.desc}
                </p>

                {/* Sub-details: High-end Minimalist List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-white/5 mb-8 relative overflow-hidden min-h-[12rem] sm:min-h-[6rem]">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  <div className="flex flex-col">
                    <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4">Identity</h4>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold leading-tight mt-auto">{p.perspective}</p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4">Mechanism</h4>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold leading-tight mt-auto">{p.focus}</p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[9px] font-black text-blue-500/60 uppercase tracking-widest mb-4">Metric</h4>
                    <p className="text-xs md:text-[11px] text-blue-400 font-black leading-tight italic mt-auto">"{p.success}"</p>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <button 
                    onClick={() => navigate(p.path)}
                    className="group/btn relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-blue-500/5 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] overflow-hidden transition-all duration-700 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10">Enter your world</span>
                    <span className="relative z-10 translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-500">&rarr;</span>
                    
                    {/* Inner Button Shine */}
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
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
