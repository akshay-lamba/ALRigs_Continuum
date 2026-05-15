
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";

export default function MARKETLayer() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const regions = [
    {
      name: "United States",
      fullName: "United States of America",
      path: "/market/usa",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2800&q=80",
      desc: "Sovereign intelligence empowering the leading economy.",
      flag: "🇺🇸",
      color: "from-blue-600/20"
    },
    {
      name: "India",
      fullName: "Republic of India",
      path: "/market/india",
      image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?auto=format&fit=crop&w=2800&q=80",
      desc: "Digital acceleration at population scale.",
      flag: "🇮🇳",
      color: "from-orange-500/20"
    },
    {
      name: "Middle East",
      fullName: "Middle East Engine",
      path: "/market/middle-east",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=2800&q=80",
      desc: "Rapid modernization fueled by secure AI capabilities.",
      flag: "🇦🇪",
      color: "from-emerald-600/20"
    },
    {
      name: "Africa",
      fullName: "African Continent",
      path: "/market/africa",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2800&q=80",
      desc: "The next frontier of human-centric technological growth.",
      flag: "🇿🇦",
      color: "from-amber-600/20"
    },
    {
      name: "United Kingdom",
      fullName: "United Kingdom",
      path: "/market/uk",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2800&q=80",
      desc: "Governance, compliance and tradition meeting future tech.",
      flag: "🇬🇧",
      color: "from-red-600/20"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center pt-32 pb-20 px-4 md:px-8 overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="flex flex-col items-center mb-16 text-center z-10 relative">
        <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-4 flex items-center gap-2">
          <Globe className="w-4 h-4" /> Global Sovereignty
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-slate-100 tracking-tighter uppercase drop-shadow-2xl">
          Markets
        </h1>
        <p className="text-slate-400 mt-6 max-w-2xl text-lg font-medium">
          ALRigs models are deployed globally, tailored to the unique regulatory, cultural, and operational sovereignty needs of each region.
        </p>
      </div>

      <div className="w-full max-w-[1400px] h-[65vh] min-h-[550px] flex flex-col md:flex-row gap-4 relative z-10">
        {regions.map((region, idx) => {
          const isHovered = hoveredIndex === null ? idx === 0 : hoveredIndex === idx;
          
          return (
            <div
              key={region.name}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(region.path)}
              className={`
                relative overflow-hidden rounded-[2rem] 
                transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                cursor-pointer border border-white/10
                flex flex-col justify-end group
                ${isHovered ? 'md:flex-[3.5] flex-[3.5] shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/30' : 'md:flex-[1] flex-[1] grayscale-[0.8] hover:grayscale-[0.4]'}
              `}
            >
              <img 
                src={region.image} 
                alt={region.fullName} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 origin-center"
                style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                referrerPolicy="no-referrer"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`} />
              <div className={`absolute inset-0 bg-gradient-to-b ${region.color} mix-blend-overlay transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-30'}`} />

              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end overflow-hidden">
                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <span className="text-3xl md:text-5xl drop-shadow-lg filter">{region.flag}</span>
                  {!isHovered && (
                    <h3 className="text-lg font-bold text-white uppercase tracking-widest block md:hidden drop-shadow-md">
                      {region.name}
                    </h3>
                  )}
                </div>
                
                <div className="relative">
                  {/* Hovered Content */}
                  <div className={`transition-all duration-700 ease-in-out ${isHovered ? 'opacity-100 translate-y-0 relative z-20' : 'opacity-0 translate-y-8 absolute pointer-events-none'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter drop-shadow-lg leading-tight mt-2 whitespace-normal line-clamp-2 md:line-clamp-none">
                      {region.fullName}
                    </h2>
                    <p className="text-slate-200 text-sm md:text-base font-medium max-w-sm leading-relaxed mb-6 mt-4 opacity-90">
                      {region.desc}
                    </p>
                    
                    <div className="flex items-center text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-900/50 w-max px-4 py-2 hover:bg-blue-800/80 rounded-full border border-blue-400/30 backdrop-blur-md transition-all group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      View Market <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Non-Hovered Vertical Text */}
                  <div className={`absolute left-0 bottom-0 top-auto md:top-0 h-full flex md:items-center justify-start md:justify-center transition-all duration-700 pointer-events-none ${isHovered ? 'opacity-0 scale-110' : 'opacity-60 scale-100'}`}>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest rotate-0 md:rotate-[-90deg] whitespace-nowrap drop-shadow-lg hidden md:block">
                      {region.name}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
