
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { motion } from "motion/react";

export default function PEOPLERunningaCompany() {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent min-h-screen font-sans overflow-x-hidden pt-12 pb-10">
      
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

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col px-6">
        
        {/* Seamless Image Sections */}
        <div className="w-full flex flex-col rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
          {/* Section 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full relative group"
          >
            <img 
              src="https://static.wixstatic.com/media/b20068_a3cd1b6959f3463e8ce2cd9df30311b9~mv2.jpeg" 
              alt="CEO Section 1" 
              className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/20 to-transparent pointer-events-none opacity-80" />
          </motion.div>

          {/* Section 2 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full relative group border-t border-white/5"
          >
            <img 
              src="https://static.wixstatic.com/media/b20068_d397ed88447947c08edd4f7c77ba528d~mv2.jpeg" 
              alt="CEO Section 2" 
              className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 to-transparent pointer-events-none" />
          </motion.div>

          {/* Section 3 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full relative group border-t border-white/5"
          >
            <img 
              src="https://static.wixstatic.com/media/b20068_e5e9d7d998e74fa09e7d4260ee1897ea~mv2.jpeg" 
              alt="CEO Section 3" 
              className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none" />
          </motion.div>

          {/* Section 4: Resource Download - Minimalist */}
          <div className="w-full relative bg-neutral-900 py-20 px-8 flex flex-col items-center justify-center text-center border-t border-white/10 overflow-hidden group/download">
            {/* Amazing Sliding Graphic */}
            <motion.div 
              animate={{ 
                x: ['-100%', '100%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
            <motion.div 
              animate={{ 
                x: ['100%', '-100%'],
                opacity: [0, 0.3, 0]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
            />

            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2 group-hover/download:text-blue-500 transition-colors duration-700">
                Download brochure here.
              </h3>
              <p className="text-[10px] font-black text-blue-500/60 uppercase tracking-[0.5em] mb-12">
                CEO AI Strategy & Growth Framework
              </p>
              
              <a 
                href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_aa209a18d631453491b64d665277f5d0.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative px-12 py-5 bg-white font-black text-[10px] text-black uppercase tracking-[0.6em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
              >
                <span className="relative z-10">Access Document</span>
                <div className="absolute inset-0 bg-blue-500 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 z-20">
                  Access Document
                </span>
              </a>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
          </div>
        </div>
        
      </div>
    </div>
  );
}

