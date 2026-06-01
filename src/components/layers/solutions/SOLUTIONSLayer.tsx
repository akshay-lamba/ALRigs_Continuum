
import { useNavigate } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";
import AIProductsShowcase from "../../AIProductsShowcase";

export default function SOLUTIONSLayer() {
  const navigate = useNavigate();

  const solutions = [
    {
      id: "proai",
      path: "/solutions/proai",
      tagline: "Private | Pro AI | Humanely",
      image: "https://static.wixstatic.com/media/b20068_e10e35105f184034a2ed7dddb7b9a16a~mv2.jpeg"
    },
    {
      id: "businessai",
      path: "/solutions/businessai",
      tagline: "Sovereign | Business AI | Humanely",
      image: "https://static.wixstatic.com/media/b20068_cfdfa9463b1042b281a440b5da9c2746~mv2.jpeg",
      glow: true
    },
    {
      id: "transparencyai",
      path: "/solutions/transparencyai",
      tagline: "Sovereign | State AI | Humanely",
      image: "https://static.wixstatic.com/media/b20068_a25acc7d35e347f6a6220895956d3fd5~mv2.jpeg"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-[1400px] w-full mx-auto min-h-screen">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-3"
        >
          Intelligence Dedicated | Humanely
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-black tracking-tighter text-center uppercase leading-none gradient-text-blue"
        >
          Solutions.
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
        {solutions.map((sol, idx) => (
          <motion.div 
            key={sol.id} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col gap-6"
          >
            <div 
              onClick={() => navigate(sol.path)}
              className={`rounded-3xl bg-[#050505] flex flex-col overflow-hidden relative group cursor-pointer aspect-[4/5] md:aspect-[3/4] transition-all duration-700 border border-white/5 hover:border-blue-500/50 ${sol.glow ? 'ring-1 ring-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]' : ''}`}
            >
              <div className="absolute inset-0 z-0 flex items-center justify-center p-8 md:p-12">
                <img 
                  src={sol.image} 
                  alt={sol.id}
                  className="w-full h-full object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Learn more</span>
              </div>
            </div>
            <p className="text-[10px] md:text-xs font-black tracking-[0.2em] text-slate-500 uppercase text-center md:text-left px-4 md:px-0">
              {sol.tagline}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Dynamic Immersive Showcase of Three Distinct AI Products */}
      <AIProductsShowcase />

      {/* Global Resource Download Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full relative bg-[#050505] rounded-[3rem] py-32 px-8 flex flex-col items-center justify-center text-center border border-white/5 overflow-hidden group/download shadow-[0_0_100px_rgba(0,0,0,1)]"
      >
        {/* Animated Scanning Lines */}
        <motion.div 
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0, 0.4, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />
        <motion.div 
          animate={{ 
            x: ['100%', '-100%'],
            opacity: [0, 0.2, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
        />

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-10 p-6 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            <Download className="w-8 h-8 text-blue-500" />
          </motion.div>

          <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-2 group-hover/download:text-blue-500 transition-colors duration-700 leading-[0.9]">
            Full Portfolio <br/> Download here.
          </h3>
          <p className="text-[10px] md:text-xs font-black text-blue-500/60 uppercase tracking-[0.5em] mb-12">
            Complete ALRigs Systems & Intelligence Framework
          </p>
          
          <a 
            href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_df8b0eefb0b44ff397a0e79abb30ef7d.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative px-16 py-6 bg-white font-black text-xs text-black uppercase tracking-[0.5em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10">Access Portfolio</span>
            <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 z-20">
              Access Portfolio
            </span>
          </a>
        </div>

        {/* Ambient Pulsing Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_60%)] pointer-events-none" />
        
        {/* Dynamic Edge Glow */}
        <div className="absolute inset-0 border border-white/0 group-hover:border-blue-500/20 transition-all duration-1000 pointer-events-none rounded-[3rem]" />
      </motion.div>
    </div>
  );
}
