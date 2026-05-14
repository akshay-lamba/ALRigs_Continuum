import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HubLink {
  id: string;
  title: string;
  description: string;
}

export default function HubPage({ 
  title, 
  subtitle, 
  links 
}: { 
  title: string; 
  subtitle: string; 
  links: HubLink[];
}) {
  const navigate = useNavigate();
  return (
    <div className="pt-32 pb-20 bg-transparent min-h-screen flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] bg-blue-800/10 rounded-full blur-[150px]" 
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl font-medium tracking-wide text-slate-400 max-w-3xl mx-auto mb-20"
        >
          {subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, i) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              onClick={() => navigate(link.id)}
              className="flex flex-col p-10 rounded-[2rem] bg-gradient-to-b from-[#0f172a] to-[#020617] backdrop-blur-xl border border-blue-900/30 shadow-2xl hover:border-blue-800/50 hover:shadow-blue-900/20 transition-all duration-500 cursor-pointer group relative overflow-hidden text-left"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-400/0 via-slate-400/5 to-slate-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-black text-slate-400 mb-4 tracking-tighter">
                  {link.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed mb-12 flex-grow">
                  {link.description}
                </p>
                <div className="mt-auto flex items-center gradient-text text-sm font-bold tracking-widest group-hover:text-blue-800 transition-colors border-t border-blue-900/30 pt-6 relative z-10">
                  Explore <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
