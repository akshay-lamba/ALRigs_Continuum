
import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PEOPLELayer() {
  const navigate = useNavigate();

  const peopleRoles = [
    {
      id: "business",
      path: "/people/business",
      seat: "SEAT ONE",
      name: "The Owner",
      subtitle: "You built the business. You still don't know if it made money this week.",
      shift: "See every dollar. Before the damage is done.",
      borderColor: "border-emerald-500/40 hover:border-emerald-500",
      textColor: "text-emerald-400"
    },
    {
      id: "division",
      path: "/people/division",
      seat: "SEAT TWO",
      name: "The operator",
      subtitle: "You know where things break. You just can't prove it — or fix it fast enough.",
      shift: "See every bottleneck. Before it costs you.",
      borderColor: "border-blue-500/40 hover:border-blue-500",
      textColor: "text-blue-400"
    },
    {
      id: "company",
      path: "/people/company",
      seat: "SEAT THREE",
      name: "The CXO",
      subtitle: "You set the direction. The data you decide with belongs to someone else's cloud.",
      shift: "Own your intelligence. Not rent it.",
      borderColor: "border-indigo-500/40 hover:border-indigo-500",
      textColor: "text-indigo-400"
    },
    {
      id: "country",
      path: "/people/country",
      seat: "SEAT FOUR",
      name: "Public sector",
      subtitle: "You run a government agency. Millions of people depend on decisions you make with incomplete information.",
      shift: "Sovereign intelligence. Built for public institutions. Data never leaves your walls.",
      borderColor: "border-orange-500/40 hover:border-orange-500",
      textColor: "text-orange-400"
    },
    {
      id: "building",
      path: "/people/building",
      seat: "SEAT FIVE",
      name: "Everyone else",
      subtitle: "You don't fit a box. You just know you need AI that you own — not AI that owns you.",
      shift: "If you're building, experimenting, or just starting — this is still for you.",
      borderColor: "border-amber-500/40 hover:border-amber-500",
      textColor: "text-amber-400"
    }
  ];

  return (
    <div className="relative w-full h-[75vh] md:h-[85vh] min-h-[600px] max-h-[900px] bg-[#020617] overflow-hidden">
      {/* Background Image containing the text and subjects */}
      <img 
        src="https://static.wixstatic.com/media/b20068_59d6149bef4a4422b5726b5afc5c2048~mv2.jpeg" 
        alt="Who We Serve" 
        className="absolute inset-0 w-full h-full object-cover object-top"
        referrerPolicy="no-referrer"
      />

      {/* Invisible Interactive Grid */}
      <div className="absolute inset-x-0 bottom-0 top-0 flex z-10 w-full mx-auto">
        {peopleRoles.map((role) => (
          <div 
            key={role.id}
            onClick={() => navigate(role.path)}
            className="flex-1 cursor-pointer hover:bg-white/10 transition-all duration-300 group"
            title={role.name}
            role="button"
            tabIndex={0}
          >
             {/* Optional interactive hint (e.g. slight glow on hover at bottom) */}
             <div className="w-full h-full flex items-end justify-center pb-16 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white backdrop-blur-md bg-black/40 px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl border border-white/10">
                  Explore {role.name}
                </span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
