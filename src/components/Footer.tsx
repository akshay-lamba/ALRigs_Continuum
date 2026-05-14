import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-[#020617] border-t border-blue-900/30 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
          <button onClick={() => navigate('/trust/press')} className="hover:text-blue-500 transition-colors">media kit</button>
          <button onClick={() => navigate('/people')} className="hover:text-blue-500 transition-colors">our team</button>
          <button onClick={() => navigate('/trust')} className="hover:text-blue-500 transition-colors">reach us</button>
        </div>

        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>

        <div className="flex flex-col items-center justify-center text-center gap-3">
          <p className="text-[10px] md:text-xs font-black tracking-[0.3em] font-sans text-slate-400 uppercase">
            ALRigs <span className="text-blue-500">|</span> Intelligence <span className="text-blue-500">|</span> Humanely
          </p>
          <p className="text-[9px] md:text-[10px] font-medium tracking-widest text-slate-500 uppercase">
            Regulated by the Dubai Financial Services Authority
          </p>
        </div>

        <div className="text-[8px] text-slate-600 font-mono tracking-widest uppercase mt-4">
          © 2026 ALRigs Continuum. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
