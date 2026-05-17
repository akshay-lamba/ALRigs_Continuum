
import React from 'react';
import { motion } from "motion/react";
import { Users } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="bg-transparent text-slate-300 min-h-screen font-sans overflow-x-hidden pt-12 pb-20 flex flex-col items-center justify-center">
      
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            <Users className="w-4 h-4" /> Global Continuity
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            Country Leadership <br /> Coming Soon.
          </h1>
          <p className="text-xs md:text-sm font-black text-blue-500 uppercase tracking-[0.4em] max-w-2xl mx-auto">
            ALRigs | Intelligence | Humanely
          </p>
        </motion.div>
      </div>
    </div>
  );
}
