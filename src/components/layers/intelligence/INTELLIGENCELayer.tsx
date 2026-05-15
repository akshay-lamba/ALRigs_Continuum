
import { useNavigate } from "react-router-dom";
import { ArrowRight, Layers, Globe, ShieldCheck, Zap, User, Cpu, Target, Code2, Server, Fingerprint } from "lucide-react";
import { motion } from "motion/react";

const stackLayers = [
  {
    id: "01",
    title: "L01 — C: Context — The Ground Truth Layer",
    subtitle: "Ground truth. Your data. Your soul.",
    desc: "MD files injected. Your proprietary data becomes the intelligence foundation.",
    icon: Fingerprint,
    color: "from-teal-500/30",
    iconColor: "text-teal-400",
    bgImage: "https://static.wixstatic.com/media/b20068_ae9c1d0559f343608b50dcdf1ecb3034~mv2.jpg"
  },
  {
    id: "02",
    title: "L02 — Zero Stack — The Sovereign Compute Layer",
    subtitle: "Private sovereign compute.",
    desc: "7-layer stack. Your hardware. Your key. Zero cloud dependency.",
    icon: Server,
    color: "from-slate-500/30",
    iconColor: "text-slate-400",
    bgImage: "https://static.wixstatic.com/media/b20068_0cc55b2432234c9fa59fed2f9797cf63~mv2.jpeg"
  },
  {
    id: "03",
    title: "L03 — The .it Framework — The Action Language Layer",
    subtitle: "The action language.",
    desc: "English in. Code out. The bridge between human intent and machine execution.",
    icon: Code2,
    color: "from-orange-500/30",
    iconColor: "text-orange-400",
    bgImage: "https://static.wixstatic.com/media/b20068_ae9c1d0559f343608b50dcdf1ecb3034~mv2.jpg"
  },
  {
    id: "04",
    title: "L04 — D: Depth — The Precision Reasoning Layer",
    subtitle: "Precision reasoning.",
    desc: "AI capabilities tuned to your industry, geography, and business context.",
    icon: Target,
    color: "from-rose-500/30",
    iconColor: "text-rose-400",
    bgImage: "https://static.wixstatic.com/media/b20068_45817304e39b4aa39b5fa45d12a4c7ed~mv2.jpg"
  },
  {
    id: "05",
    title: "L05 — The ARC Engine — The Sovereign Intelligence Layer",
    subtitle: "The thinking core.",
    desc: "C + D + V² = ARC. Velocity of action multiplied by velocity of audit. Simultaneously.",
    icon: Cpu,
    color: "from-cyan-500/30",
    iconColor: "text-cyan-400",
    bgImage: "https://static.wixstatic.com/media/b20068_1d6d96b9b0f64824b1baf1223457eaec~mv2.jpg"
  },
  {
    id: "06",
    title: "L06 — The ARC Insight Stack — The Clarity Layer",
    subtitle: "See everything clearly.",
    desc: "Finance. Human. Analytics. Assets. Process. Five views. One brain.",
    icon: Layers,
    color: "from-indigo-500/30",
    iconColor: "text-indigo-400",
  },
  {
    id: "07",
    title: "L07 — Human Upgrade — The Owner Transformation Layer",
    subtitle: "Become a better version.",
    desc: "Owner grows alongside the system. Better questions. Sharper decisions.",
    icon: User,
    color: "from-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    id: "08",
    title: "L08 — V²: Velocity Squared — The Execution Layer",
    subtitle: "Instant action and audit.",
    desc: "Execution and proof happen simultaneously. Speed without blind spots.",
    icon: Zap,
    color: "from-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    id: "09",
    title: "L09 — The Zero Promise — The Trust Contract Layer",
    subtitle: "We own the outcome.",
    desc: "Zero latency for your business. Privacy by design. No vendor lock-in.",
    icon: ShieldCheck,
    color: "from-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    id: "10",
    title: "L10 — Sovereignty — The Worldview Layer",
    subtitle: "Intelligence. Humanely.",
    desc: "Your data, model, hardware. Nothing rented. Nothing exposed.",
    icon: Globe,
    color: "from-blue-500/30",
    iconColor: "text-blue-400",
  }
];

export default function INTELLIGENCELayer() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center relative overflow-hidden font-sans pt-32 pb-24">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[50vh] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[40vw] h-[40vh] bg-emerald-900/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="px-6 w-full max-w-[1600px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Main Image and Download Section */}
        <div className="flex flex-col items-end gap-4 w-full max-w-6xl mb-32">
          {/* Main Image Container with cutting-edge effects */}
          <div className="relative w-full aspect-video max-h-[85vh] rounded-[2rem] overflow-hidden group border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
            
            <img 
              src="https://static.wixstatic.com/media/b20068_0cba3352b662445f9c57cb1ffcd99dff~mv2.jpeg" 
              alt="The Intelligence Stack" 
              className="w-full h-full object-contain md:object-cover object-center transform transition-transform duration-1000 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />

            {/* Overlays for depth and atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 opacity-60" />
            
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px] mix-blend-overlay" />
            
            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />

            {/* Hover Buttons */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <button onClick={() => navigate('/intelligence/arc-engine')} className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400 hover:text-white transition-colors bg-blue-500/10 hover:bg-blue-500/20 px-6 py-3 rounded-full border border-blue-500/20 hover:border-blue-500/50 flex items-center gap-2 backdrop-blur-md">
                Explore Arc Engine <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate('/intelligence/science')} className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 hover:border-white/30 flex items-center gap-2 backdrop-blur-md">
                The Science
              </button>
            </div>
          </div>
          
          {/* PDF Download Link */}
          <a
            href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_52bd4ddeeac34463b087a6c335560752.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-2 pr-6 rounded-[1rem] bg-[#050505]/60 hover:bg-[#0a0a0a] backdrop-blur-xl border border-white/5 shadow-[0_4px_20px_rgb(0,0,0,0.5)] group hover:border-white/10 transition-all duration-500 w-max"
          >
            <div className="w-16 h-12 overflow-hidden rounded-md bg-[#050505] border border-white/5 shrink-0 relative">
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <img 
                src="https://static.wixstatic.com/media/b20068_1cc0be0eb86a4104bc87011720046199~mv2.jpeg" 
                alt="Architecture Overview PDF" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-300 tracking-wider uppercase group-hover:text-white transition-colors">Download Architecture</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1 group-hover:text-blue-400 transition-colors mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                PDF Document
              </span>
            </div>
          </a>
        </div>

        {/* 10 Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[90rem] pb-24 px-4 md:px-0">
          {stackLayers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div 
                key={layer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="relative group bg-[#050505]/60 hover:bg-[#0a0a0a] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col h-full"
              >
                {/* Image Section (if configured) */}
                {layer.bgImage && (
                  <div className="w-full relative flex-grow min-h-[280px] overflow-hidden bg-black border-b border-white/10 flex items-center justify-center p-1">
                    <img 
                      src={layer.bgImage}
                      alt={layer.title}
                      className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-700 opacity-95"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Card Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none blur-3xl`} />
                
                <div className={`relative z-10 flex flex-col gap-1.5 ${layer.bgImage ? 'p-3 md:p-4 bg-[#050505] shrink-0' : 'p-6 md:p-8 flex-grow justify-end'}`}>
                  {!layer.bgImage && (
                    <div className="flex justify-between items-start mb-1">
                      <motion.div
                        animate={{
                          rotateY: [0, -15, 15, 0],
                          rotateX: [0, 10, -10, 0],
                          y: [0, -4, 4, 0]
                        }}
                        transition={{
                          duration: 6 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className={`p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl ${layer.iconColor} shadow-xl shadow-black/50`}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      
                      <div className="text-[90px] font-black leading-none opacity-5 text-white mix-blend-overlay tracking-tighter absolute -top-4 -right-2 pointer-events-none scale-150 transform origin-top-right">
                        {layer.id}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-grow flex flex-col justify-end">
                    {layer.bgImage && (
                      <div className="flex items-center gap-2 mb-1.5">
                        <motion.div
                          animate={{
                            rotateY: [0, -15, 15, 0],
                            rotateX: [0, 10, -10, 0],
                            y: [0, -4, 4, 0]
                          }}
                          transition={{
                            duration: 6 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className={`p-1.5 rounded bg-white/5 border border-white/10 backdrop-blur-xl ${layer.iconColor} shadow-xl shadow-black/50`}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </motion.div>
                        <div className="text-xl font-black leading-none opacity-10 text-white mix-blend-overlay tracking-tighter pointer-events-none ml-auto">
                          {layer.id}
                        </div>
                      </div>
                    )}

                    <h3 className="text-sm md:text-base font-bold text-slate-200 mb-0.5 tracking-tight leading-snug">
                      {layer.title}
                    </h3>
                    
                    <p className={`font-bold mb-1.5 ${layer.iconColor} tracking-widest text-[9px] uppercase`}>
                      {layer.subtitle}
                    </p>
                    
                    <div className="text-slate-400 text-[11px] leading-tight flex flex-col gap-1">
                      {layer.desc.split('.').filter(s => s.trim().length > 0).map((sentence, i) => (
                        <span key={i} className="block">{sentence.trim()}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
