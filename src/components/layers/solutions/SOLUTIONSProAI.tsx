
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { motion } from "motion/react";

export default function SOLUTIONSProAI() {
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
    <div className="pt-16 pb-12 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Navigation */}
      <div className="mb-12">
        <button 
          onClick={() => navigate('/solutions')}
          className="flex items-center text-slate-500 hover:text-blue-500 font-semibold tracking-widest text-xs uppercase transition-colors relative z-10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to SOLUTIONS
        </button>
      </div>

      {/* Seamless Image Sections */}
      <div className="w-full flex flex-col rounded-[2rem] overflow-hidden border border-blue-900/30 shadow-2xl bg-black">
        {/* Section 1: Hero */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_d7a489c1e3114463a9214241ca83d14e~mv2.jpeg" 
            alt="Pro AI Section 1"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Video Embedding Section */}
        <div className="w-full relative bg-neutral-950 py-12 md:py-24 px-6 flex flex-col items-center justify-center border-y border-white/5 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-5xl relative z-10"
          >
            <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-black shadow-[0_0_100px_-20px_rgba(59,130,246,0.2)]">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/videoseries?list=PL4_49j8YRffwdE0V0iu4IGkC7ic2XOKGK" 
                title="ALRigs Pro AI Showcase" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            
            {/* Subtle Label */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Integrated Intelligence View</span>
            </div>
          </motion.div>
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
        </div>

        {/* Section 2 */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_c7f75ab3cd904dfca17e90121d8df495~mv2.jpeg" 
            alt="Pro AI Section 2"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section 3 */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_da288a2ee964471d87c1ca357c70f94c~mv2.jpeg" 
            alt="Pro AI Section 3"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section 4 */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_dd503391d3b242e8967527396398b504~mv2.jpeg" 
            alt="Pro AI Section 4"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section 5: Resource Download - Minimalist */}
        <div className="w-full relative bg-neutral-900 py-20 px-8 flex flex-col items-center justify-center text-center border-t border-white/5 overflow-hidden group/download">
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

          <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2 group-hover/download:text-blue-500 transition-colors duration-700">
              Access intelligence.
            </h3>
            <p className="text-[10px] font-black text-blue-500/60 uppercase tracking-[0.5em] mb-12">
              Pro AI Technical Specifications & Insights
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 w-full">
              {/* ARC Engine Card */}
              <a 
                href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_a2476c1ee7e54b939da6d181780c27d7.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/card relative w-48 h-48 md:w-56 md:h-56 bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover/card:scale-110 transition-transform duration-500">
                   <Download className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-sm md:text-base text-white text-center leading-tight">
                  The ARC Engine
                </span>
                
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500/20 group-hover/card:bg-blue-500 transition-colors" />
              </a>

              {/* Insights Layer Card */}
              <a 
                href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_08b3abfeb9a84a018ed00777ca7e1495.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/card relative w-48 h-48 md:w-56 md:h-56 bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.3)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20 group-hover/card:scale-110 transition-transform duration-500">
                   <Download className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-sm md:text-base text-white text-center leading-tight">
                  The Insights Layer
                </span>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-indigo-500/20 group-hover/card:bg-indigo-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
