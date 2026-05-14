
import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Cpu, Database, Server } from "lucide-react";
import { motion } from "motion/react";

export default function PEOPLEBuildingWithUs() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#020617] text-slate-300 min-h-screen font-sans overflow-x-hidden pt-24 pb-20">
      
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] bg-amber-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Navigation */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 mb-12">
        <button 
          onClick={() => navigate('/people')}
          className="flex items-center text-slate-500 hover:text-amber-400 font-semibold tracking-widest text-xs uppercase transition-colors"
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
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none text-balance">
            The<br/><span className="text-amber-500">Tech Leader.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed mb-16">
            Systems & Infrastructure. Stability, security, and scalability. Stripping away the magic to reveal the pipes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <Database className="w-10 h-10 text-amber-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Data Integrity</h3>
            <p className="text-slate-400 leading-relaxed">
              Maintain absolute control over where the data sits. Focus on integration, model reliability, and strict data privacy protocols.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 md:p-12 rounded-3xl bg-amber-500/5 border border-amber-500/10 backdrop-blur-xl"
          >
            <Server className="w-10 h-10 text-amber-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Scalable Architecture</h3>
            <p className="text-slate-400 leading-relaxed">
              Build systems that are secure, fast, and created to scale. Ensure that the technical foundation is built to last decades.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-16 rounded-[2rem] bg-gradient-to-br from-amber-900/20 to-black border border-amber-500/20"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">System Sovereignty</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Empower your organization with a technical architecture that you own. Not AI that owns you, but a system built to your exact specifications.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <Cpu className="w-32 h-32 text-amber-500 opacity-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
