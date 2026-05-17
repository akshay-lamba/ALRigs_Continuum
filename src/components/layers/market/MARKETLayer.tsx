
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";
import { motion } from "motion/react";

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
      color: "from-blue-600/20",
      coords: { x: 180, y: 150 } // Approx coordinates for SVG map
    },
    {
      name: "United Kingdom",
      fullName: "United Kingdom",
      path: "/market/uk",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2800&q=80",
      desc: "Governance, compliance and tradition meeting future tech.",
      flag: "🇬🇧",
      color: "from-red-600/20",
      coords: { x: 480, y: 120 }
    },
    {
      name: "Middle East",
      fullName: "Middle East Engine",
      path: "/market/middle-east",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=2800&q=80",
      desc: "Rapid modernization fueled by secure AI capabilities.",
      flag: "🇦🇪",
      color: "from-emerald-600/20",
      coords: { x: 580, y: 200 }
    },
    {
      name: "India",
      fullName: "Republic of India",
      path: "/market/india",
      image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?auto=format&fit=crop&w=2800&q=80",
      desc: "Digital acceleration at population scale.",
      flag: "🇮🇳",
      color: "from-orange-500/20",
      coords: { x: 700, y: 230 }
    },
    {
      name: "Africa",
      fullName: "African Continent",
      path: "/market/africa",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2800&q=80",
      desc: "The next frontier of human-centric technological growth.",
      flag: "🇿🇦",
      color: "from-amber-600/20",
      coords: { x: 530, y: 350 }
    }
  ];

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center pt-24 pb-20 px-4 md:px-8 overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="flex flex-col items-center mb-16 text-center z-10 relative">
        <p className="text-[10px] md:text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3 flex items-center gap-2">
          <Globe className="w-4 h-4" /> Global Sovereignty
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase drop-shadow-2xl gradient-text-blue">
          Markets
        </h1>
        <p className="text-slate-500 mt-4 max-w-2xl text-base font-medium leading-relaxed">
          ALRigs models are deployed globally, tailored to the unique regulatory, cultural, and operational sovereignty needs of each region.
        </p>
      </div>

      <div className="w-full max-w-[1400px] h-[65vh] min-h-[550px] flex flex-col md:flex-row gap-4 relative z-10 mb-32">
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
                    
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] bg-blue-900/40 w-max px-3 py-1 rounded-full border border-blue-400/20 backdrop-blur-sm">
                        Incoming 2026
                      </div>
                      <div className="flex items-center text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-900/50 w-max px-4 py-2 hover:bg-blue-800/80 rounded-full border border-blue-400/30 backdrop-blur-md transition-all group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        View Market <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
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

      {/* Global Map Infographic */}
      <div className="w-full max-w-7xl relative mx-auto py-24 mb-32 group/map px-6">
        <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[150px] transform -translate-y-1/2 pointer-events-none" />
        
        <div className="flex flex-col items-center mb-16 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
            A Global Continuity
          </h2>
          <p className="text-slate-500 max-w-xl text-sm md:text-base font-medium uppercase tracking-[0.2em]">
            Connecting sovereign clouds into a unified intelligence engine.
          </p>
        </div>

        <div className="relative aspect-[16/9] w-full bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-sm overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 1000 500" className="w-full h-full opacity-60">
            {/* World Map Placeholder (Simplified) */}
            <path 
              d="M150,100 Q180,80 220,100 T300,120 T400,100 T500,130 T600,100 T700,120 T800,100 T900,150 T850,250 T750,300 T650,350 T550,300 T450,280 T350,320 T250,300 T150,250 Z" 
              fill="rgba(255,255,255,0.02)" 
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.5"
            />
            {/* Connection Lines */}
            {regions.map((region, i) => (
              <g key={`lines-${i}`}>
                {regions.slice(i + 1).map((target, j) => (
                  <motion.path
                    key={`line-${i}-${j}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: (i + j) * 0.2 }}
                    d={`M${region.coords.x},${region.coords.y} Q${(region.coords.x + target.coords.x) / 2},${Math.min(region.coords.y, target.coords.y) - 50} ${target.coords.x},${target.coords.y}`}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    className="pointer-events-none"
                  />
                ))}
              </g>
            ))}

            {/* Glowing Points */}
            {regions.map((region, i) => (
              <g key={`point-${i}`} className="cursor-pointer" onClick={() => navigate(region.path)}>
                <motion.circle
                  initial={{ r: 0 }}
                  whileInView={{ r: 6 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
                  cx={region.coords.x}
                  cy={region.coords.y}
                  fill="#3b82f6"
                />
                <motion.circle
                  animate={{ r: [6, 12, 6], opacity: [0.5, 0.1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  cx={region.coords.x}
                  cy={region.coords.y}
                  fill="#3b82f6"
                  opacity="0.3"
                />
                <text 
                  x={region.coords.x} 
                  y={region.coords.y + 25} 
                  textAnchor="middle" 
                  className="fill-slate-400 text-[10px] font-black uppercase tracking-widest pointer-events-none"
                >
                  {region.name}
                </text>
              </g>
            ))}
          </svg>

          {/* Floating Data Legend */}
          <div className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-2xl hidden md:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Active Sovereignty Hub</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-blue-500/50" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Neural Link</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
