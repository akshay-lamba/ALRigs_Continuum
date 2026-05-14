import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* block 1 — above the fold */}
      <div className="min-h-[calc(100vh-112px)] bg-transparent flex flex-col items-center justify-center relative px-6 py-10 md:px-12 lg:px-24">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 text-center py-10">
            
          <div className="flex flex-col items-center max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans text-slate-400 tracking-tight leading-snug mb-8 font-semibold">
              Intelligence dedicated to your business.<br />
              Exclusively owned by you.
            </h1>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-8">
              ALRigs | Intelligence | Humanely
            </p>
            <p className="text-sm md:text-base text-slate-400 mb-10 font-medium tracking-wide max-w-2xl">
              Owned entirely. Running exclusively on your infrastructure. Permanently.
            </p>
          </div>

        </div>
      </div>

      {/* block 3 — products image section */}
      <div className="w-full bg-transparent py-12 px-6 md:px-12 flex justify-center pb-24 text-slate-400 border-none mt-[-2rem]">
        <div 
          onClick={() => navigate('/solutions')}
          className="w-full max-w-5xl rounded-[1.5rem] p-3 md:p-4 bg-gradient-to-b from-[#121212]/80 to-[#0a0a0a]/90 backdrop-blur-xl border border-slate-700/50 shadow-[0_8px_30px_rgb(0,0,0,0.8)] relative group cursor-pointer transition-all duration-500 hover:border-slate-500/50"
        >
          <div className="w-full rounded-[1rem] overflow-hidden bg-[#050505] flex items-center justify-center relative">
            <img 
              src="https://static.wixstatic.com/media/b20068_1d975cec3cde46d8b4984649ed07fb9c~mv2.jpeg"
              alt="Products"
              className="w-full h-auto max-h-[70vh] object-contain grayscale mix-blend-screen opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
