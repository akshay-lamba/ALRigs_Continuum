
import { useNavigate } from "react-router-dom";
import { ArrowRight, Layers, Globe, ShieldCheck, Zap, User, Cpu, Target, Code2, Server, Fingerprint } from "lucide-react";
import { motion } from "motion/react";

const stackLayers = [
  {
    id: "01",
    title: "L01 — C: Context — The Ground Truth Layer",
    subtitle: "Ground truth Your data Your soul",
    desc: "MD files injected Your proprietary data becomes the intelligence foundation",
    icon: Fingerprint,
    color: "from-teal-500/30",
    iconColor: "text-teal-400",
    bgImage: "https://static.wixstatic.com/media/b20068_ae9c1d0559f343608b50dcdf1ecb3034~mv2.jpg"
  },
  {
    id: "02",
    title: "L02 — Zero Stack — The Sovereign Compute Layer",
    subtitle: "Private sovereign compute",
    desc: "7-layer stack Your hardware Your key Zero cloud dependency",
    icon: Server,
    color: "from-slate-500/30",
    iconColor: "text-slate-400",
    bgImage: "https://static.wixstatic.com/media/b20068_0cc55b2432234c9fa59fed2f9797cf63~mv2.jpeg"
  },
  {
    id: "03",
    title: "L03 — The .it Framework — The Action Language Layer",
    subtitle: "The action language",
    desc: "English in Code out The bridge between human intent and machine execution",
    icon: Code2,
    color: "from-orange-500/30",
    iconColor: "text-orange-400",
    bgImage: "https://static.wixstatic.com/media/b20068_ae9c1d0559f343608b50dcdf1ecb3034~mv2.jpg"
  },
  {
    id: "04",
    title: "L04 — D: Depth — The Precision Reasoning Layer",
    subtitle: "Precision reasoning",
    desc: "AI capabilities tuned to your industry geography and business context",
    icon: Target,
    color: "from-rose-500/30",
    iconColor: "text-rose-400",
    bgImage: "https://static.wixstatic.com/media/b20068_45817304e39b4aa39b5fa45d12a4c7ed~mv2.jpg"
  },
  {
    id: "05",
    title: "L05 — The ARC Engine — The Sovereign Intelligence Layer",
    subtitle: "The thinking core",
    desc: "C + D + V² = ARC Velocity of action multiplied by velocity of audit Simultaneously",
    icon: Cpu,
    color: "from-cyan-500/30",
    iconColor: "text-cyan-400",
    bgImage: "https://static.wixstatic.com/media/b20068_1d6d96b9b0f64824b1baf1223457eaec~mv2.jpg"
  },
  {
    id: "06",
    title: "L06 — The ARC Insight Stack — The Clarity Layer",
    subtitle: "See everything clearly",
    desc: "Finance Human Analytics Assets Process Five views One brain",
    icon: Layers,
    color: "from-indigo-500/30",
    iconColor: "text-indigo-400",
  },
  {
    id: "07",
    title: "L07 — Human Upgrade — The Owner Transformation Layer",
    subtitle: "Become a better version",
    desc: "Owner grows alongside the system Better questions Sharper decisions",
    icon: User,
    color: "from-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    id: "08",
    title: "L08 — V²: Velocity Squared — The Execution Layer",
    subtitle: "Instant action and audit",
    desc: "Execution and proof happen simultaneously Speed without blind spots",
    icon: Zap,
    color: "from-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    id: "09",
    title: "L09 — The Zero Promise — The Trust Contract Layer",
    subtitle: "We own the outcome",
    desc: "Zero latency for your business Privacy by design No vendor lock-in",
    icon: ShieldCheck,
    color: "from-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    id: "10",
    title: "L10 — Sovereignty — The Worldview Layer",
    subtitle: "Intelligence Humanely",
    desc: "Your data model hardware Nothing rented Nothing exposed",
    icon: Globe,
    color: "from-blue-500/30",
    iconColor: "text-blue-400",
  }
];

export default function INTELLIGENCELayer() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center relative overflow-hidden font-sans pt-24 pb-20">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[5vh] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[20vw] h-[20vh] bg-emerald-900/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="px-6 w-full max-w-[1600px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Main Image and Download Section */}
        <div className="flex flex-col items-end gap-4 w-full max-w-6xl mb-24">
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
        
        {/* Video Embedding Section */}
        <div className="w-full relative mb-24 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-6xl relative z-10"
          >
            <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-black shadow-[0_0_80px_rgba(0,0,0,0.5)]">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/videoseries?list=PL4_49j8YRffyEAkLDaHJJxTah8QnKU3vs" 
                title="ALRigs Intelligence Showcase" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            
            {/* Subtle Label */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Proprietary Intelligence Architecture</span>
            </div>
          </motion.div>
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
        </div>

        {/* 10 Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-[100rem] pb-24">
          {stackLayers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div 
                key={layer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col bg-[#050505] border border-white/5 hover:border-blue-500/30 rounded-[2.5rem] overflow-hidden transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-blue-500/5 h-full"
              >
                {/* Visual Section: Consistent Aspect Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900/50 border-b border-white/5">
                  {layer.bgImage ? (
                    <img 
                      src={layer.bgImage}
                      alt={layer.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-20`}>
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <Icon className="w-32 h-32 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Glass Reflection Overlays */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-8 left-8 z-20">
                    <div className={`p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 ${layer.iconColor} shadow-2xl`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* ID Tag */}
                  <div className="absolute top-8 right-8 z-20">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] group-hover:text-blue-500 transition-colors">
                      Stack {layer.id}
                    </span>
                  </div>
                </div>

                {/* Content Section: Unified Footer */}
                <div className="flex flex-col p-8 md:p-10 flex-grow">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-[1.1] mb-4 uppercase group-hover:text-blue-500 transition-colors duration-500">
                    {layer.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-blue-500/50" />
                    <p className={`font-black ${layer.iconColor} tracking-[0.25em] text-[10px] uppercase`}>
                      {layer.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2.5">
                    {layer.desc.split('.').filter(s => s.trim().length > 0).map((sentence, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-1 h-1 rounded-full bg-blue-500/40 mt-2 shrink-0" />
                        <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed tracking-wide">
                          {sentence.trim()}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Hint */}
                  <div className="mt-auto pt-10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-[9px] font-black text-blue-500 tracking-[0.4em] uppercase">Intelligence Node</span>
                    <ArrowRight className="w-4 h-4 text-blue-500" />
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
