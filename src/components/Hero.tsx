import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export default function Hero({}: { }) {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center items-center overflow-hidden space-bg pt-24 pb-12">
      {/* Background Blue Orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[60vw] h-[60vw] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-blue-900 via-blue-600 to-transparent rounded-full blur-[100px] md:blur-[120px]" 
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-4 tracking-tighter  text-slate-400 leading-tight"
        >
          Your competitors are renting intelligence. <br className="hidden md:block" />
          <span className="gradient-text">You can own it.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg font-light text-slate-400 max-w-2xl mx-auto mb-8"
        >
          Transform variable operating expenses into permanent structural margin advantages.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate('/blueprint/architecture')}
          className="relative px-8 py-4 bg-gradient-to-b from-[#0f172a] to-[#020617] text-slate-400 font-bold  tracking-widest text-sm rounded-full overflow-hidden group border border-blue-900/30 shadow-2xl hover:border-blue-500/50 hover:shadow-blue-900/40 transition-all duration-300"
        >
          {/* Internal Glass Highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-400/0 via-slate-400/10 to-slate-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <span className="relative z-10">See ARC Engine</span>
        </motion.button>
      </div>
    </section>
  );
}

