import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* block 1 — above the fold */}
      <div className="min-h-[80vh] md:min-h-[calc(100vh-112px)] bg-transparent flex flex-col items-center justify-center relative px-6 py-20 md:py-24 leading-none">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 text-center">
            
          <div className="flex flex-col items-center max-w-6xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans tracking-tighter leading-[1.1] mb-8 font-black flex flex-wrap items-center justify-center gap-x-3 gap-y-2 uppercase">
              <span className="gradient-text-blue">
                Intelligence dedicated to your business
              </span>
              <span className="gradient-text">
                Exclusively owned by you
              </span>
            </h1>
            <p className="text-[10px] md:text-sm font-black tracking-[0.3em] md:tracking-[0.4em] text-blue-500 uppercase mb-6">
              ALRigs | Intelligence | Humanely
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
