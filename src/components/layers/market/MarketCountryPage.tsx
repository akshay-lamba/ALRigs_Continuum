
import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe2, Download, Shield, GraduationCap, ShoppingBag, Wrench, Truck, ArrowRight } from "lucide-react";
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

          {countryName === "Middle East" && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
               <a 
                 href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_74fd473fedf14ed2aadf5b11b97bc308.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-500 shadow-xl backdrop-blur-md"
               >
                 <Download className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                 <span className="text-[10px] font-black uppercase tracking-[0.25em]">Pro AI Pricing Details</span>
               </a>
            </motion.div>
          )}
        </motion.div>

        {/* Middle East Specific Content: Big Idea, Pricing, Implementation */}
        {countryName === "Middle East" && (
          <div className="w-full max-w-6xl mx-auto mb-24 px-6">
            <div className="grid grid-cols-1 gap-24 w-full">
              


              {/* Section 1.5: The Evergreen Economy - 5 Sector Cards */}
              <div className="w-full text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* 5 Sector Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                     {[
                       { 
                         id: "healthcare", 
                         title: "Private Healthcare, Clinics & Pharmacies", 
                         desc: "Patient privacy under DHA microscope.", 
                         icon: Shield,
                         color: "group-hover:border-blue-500/50 group-hover:bg-blue-500/[0.02]" 
                       },
                       { 
                         id: "education", 
                         title: "Education (Schools & Training)", 
                         desc: "Fixed annual budgets under subscription creep.", 
                         icon: GraduationCap,
                         color: "group-hover:border-indigo-500/50 group-hover:bg-indigo-500/[0.02]" 
                       },
                       { 
                         id: "groceries", 
                         title: "Essential Groceries & FMCG Distribution", 
                         desc: "Razor-thin margins leaking physical inventory.", 
                         icon: ShoppingBag,
                         color: "group-hover:border-emerald-500/50 group-hover:bg-emerald-500/[0.02]" 
                       },
                       { 
                         id: "facilities", 
                         title: "Facilities Management", 
                         desc: "Operational firefighting and blue-collar coordination.", 
                         icon: Wrench,
                         color: "group-hover:border-amber-500/50 group-hover:bg-amber-500/[0.02]" 
                       },
                       { 
                         id: "logistics", 
                         title: "Essential Logistics (Cold Chain)", 
                         desc: "Delays ruining temperature-sensitive supplies.", 
                         icon: Truck,
                         color: "group-hover:border-purple-500/50 group-hover:bg-purple-500/[0.02]" 
                       }
                     ].map((sector) => {
                       const IconComp = sector.icon;
                       return (
                         <div 
                           key={sector.id}
                           onClick={() => navigate(`/market/middle-east/${sector.id}`)}
                           className={`group cursor-pointer p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] transition-all duration-500 flex flex-col justify-between h-[300px] hover:-translate-y-2 hover:shadow-2xl ${sector.color}`}
                         >
                           <div>
                             <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors mb-6">
                               <IconComp className="w-5 h-5" />
                             </div>
                             <h4 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors leading-snug">
                               {sector.title}
                             </h4>
                             <p className="text-xs text-slate-500 font-light leading-relaxed">
                               {sector.desc}
                             </p>
                           </div>
                           <div className="flex items-center gap-1.5 text-[10px] text-blue-500 font-bold uppercase tracking-wider mt-4">
                             <span>Explore Profile</span>
                             <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                           </div>
                         </div>
                       );
                     })}
                  </div>

                  {/* Sector Summary Comparison Table */}
                  <div className="mb-20">
                     <div className="overflow-x-auto w-full border border-white/5 rounded-3xl bg-white/[0.01] backdrop-blur-xl">
                        <table className="min-w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-white/10 bg-white/[0.02]">
                              <th className="p-6 text-xs font-black uppercase tracking-wider text-slate-400">Essential Sector</th>
                              <th className="p-6 text-xs font-black uppercase tracking-wider text-slate-400">Focus</th>
                              <th className="p-6 text-xs font-black uppercase tracking-wider text-slate-400">Key Feature</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            <tr>
                              <td className="p-6 text-sm font-semibold text-white whitespace-nowrap">Healthcare & Clinics</td>
                              <td className="p-6 text-sm text-slate-400">Medical Care & Privacy</td>
                              <td className="p-6 text-sm text-slate-300 font-light">
                                <strong className="text-blue-400 font-medium">Data Sovereignty:</strong> Private hardware ensures patient data never goes to the cloud.
                              </td>
                            </tr>
                            <tr>
                              <td className="p-6 text-sm font-semibold text-white whitespace-nowrap font-sans">Education & Schools</td>
                              <td className="p-6 text-sm text-slate-400">Mandatory Learning</td>
                              <td className="p-6 text-sm text-slate-300 font-light">
                                <strong className="text-blue-400 font-medium">AED 0 Monthly Fees:</strong> Saves fixed school budgets by eliminating SaaS subscriptions.
                              </td>
                            </tr>
                            <tr>
                              <td className="p-6 text-sm font-semibold text-white whitespace-nowrap">Groceries & FMCG</td>
                              <td className="p-6 text-sm text-slate-400">Daily Food Supply</td>
                              <td className="p-6 text-sm text-slate-300 font-light">
                                <strong className="text-blue-400 font-medium">Margin Protection:</strong> Plugs invisible leaks (wasted stock/labor) before they hit the bank.
                              </td>
                            </tr>
                            <tr>
                              <td className="p-6 text-sm font-semibold text-white whitespace-nowrap font-sans font-sans">Facilities Management</td>
                              <td className="p-6 text-sm text-slate-400 font-sans">Building Upkeep (AC/Water)</td>
                              <td className="p-6 text-sm text-slate-300 font-light">
                                <strong className="text-blue-400 font-medium font-sans">Automated Backend:</strong> Task tracking runs itself; invoices prep automatically when physical work is done.
                              </td>
                            </tr>
                            <tr>
                              <td className="p-6 text-sm font-semibold text-white whitespace-nowrap">Essential Logistics</td>
                              <td className="p-6 text-sm text-slate-400">Moving Food & Medicine</td>
                              <td className="p-6 text-sm text-slate-300 font-light">
                                <strong className="text-blue-400 font-medium">6th Sense Alerts:</strong> Predictive warnings stop minor delays from ruining critical shipments.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                     </div>
                  </div>

                </motion.div>
              </div>

              {/* Section 2: Pricing Cards */}
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { line1: "Pro AI", line2: "Nano", staff: "up to 100 employees", price: "AED 49,999", best: "Small offices and local retail businesses" },
                    { line1: "Pro AI", line2: "Standard", staff: "up to 300 employees", price: "AED 99,999", best: "Growing businesses automating daily tasks", glow: true },
                    { line1: "Pro AI", line2: "Platinum", staff: "up to 500 employees", price: "AED 199,999", best: "Larger companies handling heavy workloads" }
                  ].map((pkg, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className={`relative p-10 rounded-[2.5rem] border flex flex-col justify-between h-[500px] transition-all duration-700 ${pkg.glow ? 'bg-blue-600/10 border-blue-500/30 shadow-[0_40px_80px_-20px_rgba(59,130,246,0.2)]' : 'bg-white/[0.03] border-white/10 shadow-xl'}`}
                    >
                      {pkg.glow && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500/90 backdrop-blur-md py-1.5 px-5 rounded-full text-[10px] font-bold text-white shadow-xl">
                          most popular
                        </div>
                      )}
                      <div>
                        <div className="text-[10px] font-bold text-blue-500 tracking-widest mb-10 text-left">{pkg.staff}</div>
                        <h4 className="text-4xl md:text-5xl font-light text-white tracking-tighter leading-[0.9] mb-4 text-left font-serif">
                          {pkg.line1}<br />
                          <span className="font-medium text-blue-100">{pkg.line2}</span>
                        </h4>
                      </div>
                      <div className="mt-auto text-left">
                        <div className="text-3xl font-medium text-white mb-8 tracking-tighter">{pkg.price}</div>
                        <div className="text-sm text-slate-500 font-light border-t border-white/10 pt-8 leading-relaxed italic">
                          {pkg.best}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Section 3: Implementation */}
              <div className="w-full p-12 md:p-16 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5 shadow-2xl relative overflow-hidden text-left">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                <h4 className="text-xl md:text-2xl font-medium text-slate-300 tracking-tighter mb-12 text-center">Implementation and support</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="flex flex-col items-start group">
                    <h5 className="text-white font-medium text-lg mb-3 tracking-tight group-hover:text-blue-400 transition-colors">Delivery to your doorstep</h5>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">Safe, secure, and prompt physical logistics to your business location.</p>
                  </div>
                  <div className="flex flex-col items-start group">
                    <h5 className="text-white font-medium text-lg mb-3 tracking-tight group-hover:text-blue-400 transition-colors">White glove setup and technology support</h5>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">End-to-engineering deployment and strategic onboarding tailored to your workflow.</p>
                  </div>
                  <div className="flex flex-col items-start group">
                    <h5 className="text-white font-medium text-lg mb-3 tracking-tight group-hover:text-blue-400 transition-colors">Transparent ongoing support costs</h5>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">No hidden fees. Absolute clarity on every future engagement with our technical team.</p>
                  </div>
                </div>
                <div className="mt-12 pt-10 border-t border-white/5 text-center">
                  <p className="text-slate-400 text-xs font-medium tracking-wide">
                    Sovereign intelligence backed by local engineering excellence. We showcase real business value through every installation.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

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

        {/* Global Support Credits Section - Only for Middle East */}
        {countryName === "Middle East" && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full mt-32 mb-20"
          >
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase mb-2">Pro AI Support Integration</h3>
              <p className="text-[10px] font-black text-blue-500/60 uppercase tracking-[0.4em]">Strategic Credits for Regional Growth</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 w-full">
              {/* Single Ticket - Integration */}
              <div className="group/card relative w-48 h-48 md:w-56 md:h-56 bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-slate-500/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(200,200,200,0.1)]">
                <div className="text-2xl font-bold text-white mb-2 leading-none tracking-tighter">AED 5,000</div>
                <span className="text-xs text-slate-400 tracking-widest font-bold mb-4 uppercase">single credit</span>
                <p className="text-[10px] text-slate-500 text-center leading-tight">individual software task or upgrade</p>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-slate-500/20 group-hover/card:bg-slate-400 transition-colors" />
              </div>

              {/* Ticket Bundle - Integration */}
              <div className="group/card relative w-48 h-48 md:w-56 md:h-56 bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)]">
                <div className="text-2xl font-bold text-white mb-2 leading-none tracking-tighter">AED 22,500</div>
                <span className="text-xs text-blue-400 tracking-widest font-bold mb-4 uppercase">5 credits bundle</span>
                <p className="text-[10px] text-slate-500 text-center leading-tight">software upgrades, tasks & connections</p>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500/20 group-hover/card:bg-blue-500 transition-colors" />
              </div>

              {/* Ticket Enterprise - Integration */}
              <div className="group/card relative w-48 h-48 md:w-56 md:h-56 bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.3)]">
                <div className="text-2xl font-bold text-white mb-2 leading-none tracking-tighter">AED 40,000</div>
                <span className="text-xs text-indigo-400 tracking-widest font-bold mb-4 uppercase">10 credits bundle</span>
                <p className="text-[10px] text-slate-500 text-center leading-tight">strategic on-demand engineering</p>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-indigo-500/20 group-hover/card:bg-indigo-500 transition-colors" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

