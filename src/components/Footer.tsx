import { useNavigate } from "react-router-dom";
import { Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-neutral-950 border-t border-white/5 py-12 md:py-16 mt-auto">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-8">
        
        <div className="flex justify-center items-center gap-8 md:gap-12 text-[10px] font-black tracking-[0.4em] uppercase text-slate-500">
          <button onClick={() => navigate('/team')} className="hover:text-blue-500 transition-colors cursor-pointer">team</button>
          <button onClick={() => navigate('/contact')} className="hover:text-blue-500 transition-colors cursor-pointer">contact</button>
          <button onClick={() => navigate('/vision')} className="hover:text-blue-500 transition-colors cursor-pointer">about</button>
        </div>

        <div className="flex gap-6">
          <a 
            href="https://www.linkedin.com/company/alrigs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="https://www.youtube.com/@alrigs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-red-500 transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="flex flex-col items-center justify-center text-center gap-4">
          <p className="text-[10px] md:text-xs font-black tracking-[0.5em] text-blue-500 uppercase">
            ALRigs | Intelligence | Humanely
          </p>
          <div className="text-[9px] text-slate-600 font-mono tracking-widest uppercase">
            (c) ALRigs Continuum
          </div>
        </div>
      </div>
    </footer>
  );
}
