
import React, { useState } from 'react';
import { motion } from "motion/react";
import { Mail, MessageSquare, Send, Globe2 } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle form submission.
    // For now, we'll open a mailto link as requested to a@alrigs.com
    const subject = `Contact from ${formState.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
    window.location.href = `mailto:a@alrigs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-transparent text-slate-300 min-h-screen font-sans overflow-x-hidden pt-24 pb-20">
      
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[60vh] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            <MessageSquare className="w-4 h-4" /> Global Reach
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            Talk to us.
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto uppercase tracking-wide">
            ALRigs | Intelligence | Humanely
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.6em] mb-8">Direct Contact</h2>
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href = 'mailto:a@alrigs.com'}>
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl text-white font-medium group-hover:text-blue-400 transition-colors">a@alrigs.com</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.6em] mb-8">Sovereign HUB</h2>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                  <Globe2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Jurisdiction</p>
                  <p className="text-xl text-white font-medium">DIFC, Dubai, UAE</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm italic">
                "Our commitment is to regional focus and global delivery. Intelligence, humanely applied to your specific sovereign needs."
              </p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#050505] rounded-[3rem] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Corporate Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                  placeholder="email@company.com"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Brief Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit"
                className="w-full group relative flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.4em] rounded-[1.5rem] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Talk to us <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
