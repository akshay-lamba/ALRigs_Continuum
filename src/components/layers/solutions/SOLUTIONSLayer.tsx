
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function SOLUTIONSLayer() {
  const navigate = useNavigate();

  const solutions = [
    {
      id: "proai",
      path: "/solutions/proai",
      tagline: "Private | Pro AI | Humanely",
      image: "https://static.wixstatic.com/media/b20068_e10e35105f184034a2ed7dddb7b9a16a~mv2.jpeg"
    },
    {
      id: "businessai",
      path: "/solutions/businessai",
      tagline: "Sovereign | Business AI | Humanely",
      image: "https://static.wixstatic.com/media/b20068_cfdfa9463b1042b281a440b5da9c2746~mv2.jpeg",
      glow: true
    },
    {
      id: "transparencyai",
      path: "/solutions/transparencyai",
      tagline: "Sovereign | State AI | Humanely",
      image: "https://static.wixstatic.com/media/b20068_a25acc7d35e347f6a6220895956d3fd5~mv2.jpeg"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-[1400px] w-full mx-auto min-h-screen">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-4"
        >
          Intelligence Dedicated | Humanely
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-9xl font-black text-white tracking-tighter text-center uppercase leading-none"
        >
          Solutions.
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {solutions.map((sol, idx) => (
          <motion.div 
            key={sol.id} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col gap-6"
          >
            <div 
              onClick={() => navigate(sol.path)}
              className={`rounded-3xl bg-[#050505] flex flex-col overflow-hidden relative group cursor-pointer aspect-[4/5] md:aspect-[3/4] transition-all duration-700 border border-white/5 hover:border-blue-500/50 ${sol.glow ? 'ring-1 ring-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]' : ''}`}
            >
              <div className="absolute inset-0 z-0 flex items-center justify-center p-8 md:p-12">
                <img 
                  src={sol.image} 
                  alt={sol.id}
                  className="w-full h-full object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Learn more</span>
              </div>
            </div>
            <p className="text-[10px] md:text-xs font-black tracking-[0.2em] text-slate-500 uppercase text-center md:text-left px-4 md:px-0">
              {sol.tagline}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
