
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
    { name: "USA", x: 200, y: 150, delay: 0 },
    { name: "UK", x: 480, y: 120, delay: 0.1 },
    { name: "Middle East", x: 550, y: 220, delay: 0.2 },
    { name: "India", x: 680, y: 240, delay: 0.3 },
    { name: "Africa", x: 520, y: 360, delay: 0.4 }
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
          <div className="flex items-center justify-center gap-4 mb-8">
             <span className="text-3xl md:text-5xl">{flag}</span>
             <h1 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                {countryName}
             </h1>
          </div>
          
          <p className="text-xl md:text-4xl text-slate-400 font-black leading-[1.1] uppercase tracking-tighter mb-12 text-balance">
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
          initial={{ opacity: 0, scale: 0.95, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="w-full max-w-6xl relative perspective-[2000px]"
        >
          <div className="relative aspect-[16/8] w-full rounded-[4rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] transform-gpu hover:rotate-x-2 transition-transform duration-1000">
             <svg viewBox="0 0 1000 500" className="w-full h-full">
                {/* World Map Skeleton */}
                <path 
                  d="M100,200 Q150,150 250,180 T400,150 T600,200 T800,150 T900,250 T800,400 T600,350 T400,380 T200,350 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="1"
                />

                {/* Connection Arcs */}
                {hubs.map((hub, i) => (
                  hubs.slice(i + 1).map((target, j) => (
                    <motion.path
                      key={`arc-${i}-${j}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.2 }}
                      transition={{ duration: 3, delay: 1.5 + (i * 0.2) }}
                      d={`M${hub.x},${hub.y} Q${(hub.x + target.x) / 2},${Math.min(hub.y, target.y) - 80} ${target.x},${target.y}`}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                    />
                  ))
                ))}

                {/* Hub Points */}
                {hubs.map((hub, i) => (
                  <g key={i}>
                    <motion.circle
                      initial={{ r: 0 }}
                      animate={{ r: 5 }}
                      transition={{ type: "spring", stiffness: 100, delay: 1 + hub.delay }}
                      cx={hub.x}
                      cy={hub.y}
                      fill="#3b82f6"
                    />
                    <motion.circle
                      animate={{ r: [5, 12, 5], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      cx={hub.x}
                      cy={hub.y}
                      fill="#3b82f6"
                    />
                    <text 
                      x={hub.x} 
                      y={hub.y + 20} 
                      textAnchor="middle" 
                      className="fill-slate-600 text-[8px] font-black uppercase tracking-widest"
                    >
                      {hub.name}
                    </text>
                  </g>
                ))}
             </svg>

             {/* Floating UI Elements */}
             <div className="absolute top-8 left-8 flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-blue-500 animate-pulse" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Real-time Continuity Verified</span>
             </div>
          </div>

          {/* Table-top reflection effect */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />
        </motion.div>

      </div>
    </div>
  );
}

