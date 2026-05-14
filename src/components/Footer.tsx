import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 py-4 bg-[#020617]/90 backdrop-blur-md border-t border-blue-900/30 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col gap-4">
        
        <div className="flex flex-row justify-center items-center gap-6 md:gap-8 xl:gap-10 text-xs font-bold tracking-widest lowercase text-slate-400 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <button onClick={() => navigate('/trust/press')} className="hover:text-blue-500 transition-colors">media kit</button>
          <button onClick={() => navigate('/people')} className="hover:text-blue-500 transition-colors">our team</button>
          <button onClick={() => navigate('/trust/contact')} className="hover:text-blue-500 transition-colors">reach us</button>
        </div>

        <div className="w-full border-t border-blue-900/30"></div>

        <div className="flex flex-col items-center justify-center text-center gap-1">
          <p className="text-[10px] font-bold tracking-[0.2em] font-sans text-slate-400">
            ALRigs | Intelligence | Humanely
          </p>
          <p className="text-[10px] font-medium tracking-wide text-slate-500">
            Regulated by the Dubai Financial Services Authority
          </p>
        </div>

      </div>
    </footer>
  );
}
