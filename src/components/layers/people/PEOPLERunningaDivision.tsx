
import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Repeat, Layers } from "lucide-react";
import { motion } from "motion/react";

export default function PEOPLERunningaDivision() {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent text-slate-300 min-h-screen font-sans overflow-x-hidden pt-24 pb-20">
      
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] bg-indigo-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Navigation */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 mb-12">
        <button 
          onClick={() => navigate('/people')}
          className="flex items-center text-slate-500 hover:text-indigo-400 font-semibold tracking-widest text-xs uppercase transition-colors"
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
            The<br/><span className="text-indigo-500">Functional Leader.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed mb-16">
            Productivity & Workflow. Team efficiency. Remove friction. Force multiplier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <Users className="w-10 h-10 text-indigo-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Team Empowerment</h3>
            <p className="text-slate-400 leading-relaxed">
              Let people focus on high-value work. AI removes the daily grind from departments like Sales, HR, or Finance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 md:p-12 rounded-3xl bg-indigo-500/5 border border-indigo-500/10 backdrop-blur-xl"
          >
            <Repeat className="w-10 h-10 text-indigo-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Workflow Sync</h3>
            <p className="text-slate-400 leading-relaxed">
              Remove friction from the workflow. Automate tasks and optimize departmental output without adding complexity.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-16 rounded-[2rem] bg-gradient-to-br from-indigo-900/20 to-black border border-indigo-500/20"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">Operational Excellence</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Identify and remove bottlenecks instantly. Ensure that your team is upgraded by technology, not burned out by it.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <Layers className="w-32 h-32 text-indigo-500 opacity-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
