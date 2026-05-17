
import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Globe, Scale } from "lucide-react";
import { motion } from "motion/react";

export default function PEOPLERunningaCountry() {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent text-slate-300 min-h-screen font-sans overflow-x-hidden pt-12 pb-10">
      
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] bg-orange-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Navigation */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 mb-12">
        <button 
          onClick={() => navigate('/people')}
          className="flex items-center text-slate-500 hover:text-orange-400 font-semibold tracking-widest text-xs uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to People
        </button>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none text-balance gradient-text">
            The<br/><span className="gradient-text-blue">State Leader.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 font-medium leading-relaxed mb-12">
            Ethics & Public Utility. Safety, equity, and civic stability. Built for public institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Public Service</h3>
            <p className="text-slate-400 leading-relaxed">
              AI must be as reliable and fair as a utility. Protect citizens and manage public resources with sovereign intelligence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 md:p-12 rounded-3xl bg-orange-500/5 border border-orange-500/10 backdrop-blur-xl"
          >
            <Globe className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Universal Access</h3>
            <p className="text-slate-400 leading-relaxed">
              Ensure that technology benefits everyone. Focus on bias prevention, security, and equal access for all citizens.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-16 rounded-[2rem] bg-gradient-to-br from-orange-900/20 to-black border border-orange-500/20"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">Civic Stability</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Empower government agencies to make decisions with full confidence. Sovereign intelligence ensuring data never leaves your walls.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <Scale className="w-32 h-32 text-orange-500 opacity-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
