import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-neutral-950 border-t border-white/5 py-16 md:py-24 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-slate-500">
          <button onClick={() => navigate('/trust/press')} className="hover:text-blue-500 transition-colors">media kit</button>
          <button onClick={() => navigate('/people')} className="hover:text-blue-500 transition-colors">our team</button>
          <button onClick={() => navigate('/trust')} className="hover:text-blue-500 transition-colors">reach us</button>
        </div>

        <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="flex flex-col items-center justify-center text-center gap-6">
          <p className="text-xs md:text-sm font-black tracking-[0.5em] font-display text-slate-400 uppercase italic">
            Intelligence <span className="text-blue-500 not-italic">Dedicated</span> Humanely
          </p>
          <div className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">
            © 2026 ALRigs Continuum | Proprietary Foundations
          </div>
        </div>
      </div>
    </footer>
  );
}
