import { motion } from "motion/react";

export default function GenericPage({ 
  title, 
  subtitle, 
  content 
}: { 
  title: string; 
  subtitle: string; 
  content?: string;
}) {
  return (
    <div className="pt-32 pb-20 bg-transparent min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] bg-blue-800/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-6 tracking-tighter gradient-text"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl font-medium tracking-wide text-slate-400 max-w-3xl mx-auto mb-12"
        >
          {subtitle}
        </motion.p>
        
        {content && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-[2rem] bg-gradient-to-b from-[#0f172a] to-[#020617] backdrop-blur-xl border border-blue-900/30 shadow-2xl text-left text-slate-400 leading-relaxed font-medium"
          >
            {content}
          </motion.div>
        )}
      </div>
    </div>
  );
}
