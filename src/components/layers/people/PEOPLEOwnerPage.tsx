import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PEOPLEOwnerPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#020617] min-h-screen font-sans overflow-x-hidden pt-24 pb-20">
      
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] bg-emerald-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Navigation */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 mb-12">
        <button 
          onClick={() => navigate('/people')}
          className="flex items-center text-slate-500 hover:text-emerald-400 font-semibold tracking-widest text-xs uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to People
        </button>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col gap-12 px-6">
        
        {/* Section 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(16,185,129,0.15)] group"
        >
          <img 
            src="https://static.wixstatic.com/media/b20068_f8c91e499bb140048216a0947ec4d4d7~mv2.jpeg" 
            alt="Section 1" 
            className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/20 to-transparent pointer-events-none opacity-80" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full relative rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)] group hover:bg-[#0a0a0a] transition-all duration-500 hover:border-white/10"
        >
          <img 
            src="https://static.wixstatic.com/media/b20068_9fa90575e66a4e579bca39912badb4fc~mv2.jpeg" 
            alt="Section 2" 
            className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-[2rem] pointer-events-none" />
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full relative rounded-[2rem] overflow-hidden border border-emerald-500/10 shadow-2xl group transition-all duration-500 hover:border-emerald-500/20"
        >
          <img 
            src="https://static.wixstatic.com/media/b20068_014d67e950934bb0930e21cd87a227e5~mv2.jpeg" 
            alt="Section 3" 
            className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
        </motion.div>
        
      </div>
    </div>
  );
}
