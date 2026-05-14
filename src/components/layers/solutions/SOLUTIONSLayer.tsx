
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col items-center mb-16">
        <p className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">
          Intelligence | Humanely
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-slate-400 tracking-tighter text-center">
          SOLUTIONS
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((sol) => (
          <div key={sol.id} className="flex flex-col gap-4">
            <div 
              onClick={() => navigate(sol.path)}
              className={`rounded-3xl bg-[#050505] flex flex-col overflow-hidden relative group cursor-pointer aspect-[3/4] transition-all duration-500 border border-[#1a1a1a] hover:border-slate-500/50 ${sol.glow ? 'ring-1 ring-slate-500/20' : ''}`}
            >
              <div className="absolute inset-0 z-0 flex items-center justify-center p-8">
                <img 
                  src={sol.image} 
                  alt={sol.id}
                  className="w-full h-full object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-grow relative z-10" />
            </div>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase text-center px-4 whitespace-nowrap">
              {sol.tagline}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
