import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* block 1 — above the fold */}
      <div className="min-h-[calc(100vh-112px)] bg-transparent flex flex-col items-center justify-center relative px-6 py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 text-center">
            
          <div className="flex flex-col items-center max-w-5xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans tracking-tighter leading-[0.95] mb-10 font-black flex flex-col gap-2 uppercase">
              <div className="gradient-text-blue">
                Intelligence dedicated to your business.
              </div>
              <div className="gradient-text">
                Exclusively owned by you.
              </div>
            </h1>
            <p className="text-xs md:text-sm font-black tracking-[0.4em] text-blue-500 uppercase mb-10">
              ALRigs | Intelligence | Humanely
            </p>
            <p className="text-base md:text-lg text-slate-400 mb-12 font-medium tracking-wide max-w-3xl leading-relaxed">
              Owned entirely. Running exclusively on your infrastructure. Permanently.
            </p>
          </div>
        </div>
      </div>

      {/* block 3 — products image section */}
      <div className="w-full bg-transparent py-16 px-6 md:px-12 flex justify-center pb-32 text-slate-400 border-none">
        <div 
          onClick={() => navigate('/solutions')}
          className="w-full max-w-6xl rounded-[2.5rem] p-4 md:p-6 bg-gradient-to-b from-[#121212]/80 to-[#0a0a0a]/90 backdrop-blur-xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group cursor-pointer transition-all duration-700 hover:border-blue-500/30"
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
