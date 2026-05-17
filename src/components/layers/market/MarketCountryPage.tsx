
import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe2 } from "lucide-react";
import { motion } from "motion/react";

interface MarketCountryPageProps {
  countryName: string;
  flag: string;
}

export default function MarketCountryPage({ countryName, flag }: MarketCountryPageProps) {
  const navigate = useNavigate();

  // Primary global hubs for the map
  const hubs = [
    { name: "Americas", x: 180, y: 180, delay: 0 },
    { name: "Europe", x: 480, y: 120, delay: 0.1 },
    { name: "Middle East", x: 560, y: 210, delay: 0.2 },
    { name: "India", x: 680, y: 240, delay: 0.3 },
    { name: "Africa", x: 520, y: 360, delay: 0.4 },
    { name: "Sydney", x: 880, y: 380, delay: 0.5 }
  ];

  return (
    <div className="bg-transparent min-h-screen font-sans overflow-x-hidden flex flex-col pt-12 pb-10">
      
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[60vh] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Navigation */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 mb-8">
        <button 
          onClick={() => navigate('/market')}
          className="flex items-center text-slate-500 hover:text-blue-400 font-bold tracking-[0.3em] text-[10px] uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Markets
        </button>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-[1400px] mx-auto px-6 text-center">
        
        {/* Animated Headline Group */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8 text-balance">
             <span className="text-3xl md:text-5xl drop-shadow-2xl">{flag}</span>
             <h1 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                {countryName}
             </h1>
          </div>
          
          <p className="text-xl md:text-4xl text-slate-400 font-black leading-[1.1] uppercase tracking-tighter mb-12 text-balance lg:px-20">
            Coming to your city with our country leaders to ensure regional focus, delivery and commitments to our customers globally.
          </p>

          <div className="flex flex-col items-center gap-4">
             <div className="w-12 h-px bg-blue-500/50" />
             <p className="text-[10px] md:text-xs font-black text-blue-500 uppercase tracking-[0.5em]">
                ALRigs | Intelligence | Humanely
             </p>
          </div>
        </motion.div>

        {/* 3D Perspective Global Map */}
        <motion.div 
          initial={{ opacity: 0, rotateX: 25, y: 100 }}
          animate={{ opacity: 1, rotateX: 15, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="w-full max-w-6xl relative perspective-[2000px] group"
        >
          <div className="relative aspect-[16/8] w-full rounded-[4rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,58,138,0.3)] transition-all duration-1000 group-hover:border-blue-500/30 group-hover:rotate-x-10 group-hover:scale-[1.01]">
             
             {/* Animated Radar/Scanner Line */}
             <motion.div 
               animate={{ left: ["-10%", "110%"] }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-12 z-20 pointer-events-none"
             />

             <svg viewBox="0 0 1000 500" className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* World Map Background (Simplified Dots Grid representing land) */}
                <defs>
                   <pattern id="dotGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.1)" />
                   </pattern>
                </defs>
                
                {/* Simulated World Outline */}
                <path 
                  d="M150,150 Q180,80 250,100 T350,150 T450,200 T550,150 T650,120 T750,180 T850,220 T900,350 T800,450 T650,400 T500,420 T350,450 T200,400 T150,300 Z"
                  fill="url(#dotGrid)"
                  className="opacity-50"
                />

                {/* Connection Arcs with Pulse Effects */}
                {hubs.map((hub, i) => (
                  hubs.slice(i + 1).map((target, j) => (
                    <g key={`arc-group-${i}-${j}`}>
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 3, delay: 1.5 + (i * 0.1) }}
                        d={`M${hub.x},${hub.y} Q${(hub.x + target.x) / 2},${Math.min(hub.y, target.y) - 60} ${target.x},${target.y}`}
                        fill="none"
                        stroke="url(#arcGradient)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      <motion.circle
                        r="2"
                        fill="#60a5fa"
                      >
                         <animateMotion 
                            dur="4s" 
                            repeatCount="indefinite" 
                            path={`M${hub.x},${hub.y} Q${(hub.x + target.x) / 2},${Math.min(hub.y, target.y) - 60} ${target.x},${target.y}`}
                         />
                      </motion.circle>
                    </g>
                  ))
                ))}

                <defs>
                  <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                  </linearGradient>
                </defs>

                {/* Hub Points - Enhanced Glassy Nodes */}
                {hubs.map((hub, i) => (
                  <g key={i}>
                    {/* Ring */}
                    <motion.circle
                      initial={{ r: 0 }}
                      animate={{ r: 4 }}
                      transition={{ type: "spring", stiffness: 100, delay: 1 + hub.delay }}
                      cx={hub.x}
                      cy={hub.y}
                      fill="#3b82f6"
                    />
                    {/* Pulsing Outer Circle */}
                    <motion.circle
                      animate={{ r: [4, 15, 4], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      cx={hub.x}
                      cy={hub.y}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1"
                    />
                    
                    {/* Label Container - Glassy */}
                    <foreignObject x={hub.x - 40} y={hub.y + 15} width="80" height="30">
                       <div className="flex justify-center">
                          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[7px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
                             {hub.name}
                          </span>
                       </div>
                    </foreignObject>
                  </g>
                ))}
             </svg>

             {/* Floating UI Elements */}
             <div className="absolute top-10 left-10 flex items-center gap-4 bg-white/[0.03] px-5 py-3 rounded-2xl border border-white/5 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <div className="flex flex-col">
                   <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Continuity Active</span>
                   <span className="text-[8px] font-bold text-blue-500/50 uppercase tracking-[0.1em]">Syncing Global Hubs</span>
                </div>
             </div>

             {/* Bottom Connectivity Stats */}
             <div className="absolute bottom-10 right-10 flex gap-8">
                <div className="text-right">
                   <p className="text-[14px] font-black text-white uppercase tracking-tighter">0.02ms</p>
                   <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Latency Core</p>
                </div>
                <div className="text-right">
                   <p className="text-[14px] font-black text-white uppercase tracking-tighter">100%</p>
                   <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Sovereign Link</p>
                </div>
             </div>
          </div>

          {/* Heavy Deep Reflection */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] h-32 bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none opacity-50" />
        </motion.div>

      </div>
    </div>
  );
}

