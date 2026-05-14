
import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, TrendingUp, Zap, Target } from "lucide-react";
import { motion } from "motion/react";

export default function PEOPLERunningaCompany() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#020617] text-slate-300 min-h-screen font-sans overflow-x-hidden pt-24 pb-20">
      
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Navigation */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 mb-12">
        <button 
          onClick={() => navigate('/people')}
          className="flex items-center text-slate-500 hover:text-blue-400 font-semibold tracking-widest text-xs uppercase transition-colors"
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
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
            The<br/><span className="text-blue-500">CEO.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed mb-16">
            Strategy & Performance. Maximum profit. Market dominance. Scale without losing control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <TrendingUp className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Market Velocity</h3>
            <p className="text-slate-400 leading-relaxed">
              Navigate the market with speed. Outperform competitors by turning predictive insights into immediate strategy.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 md:p-12 rounded-3xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-xl"
          >
            <Zap className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Growth Engine</h3>
            <p className="text-slate-400 leading-relaxed">
              AI shouldn't just answer questions; it should drive growth. Focus on improving margins and reducing speed to market.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-16 rounded-[2rem] bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">Decision Support</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                High-level decision support that adapts to your intent. Predictive models that don't just guess, but provide the architecture for certain outcomes.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <Target className="w-32 h-32 text-blue-500 opacity-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
