
import { useNavigate } from "react-router-dom";

export default function VISIONLayer() {
  const navigate = useNavigate();
  const rooms = [{"name":"The Belief","path":"/vision/belief"},{"name":"The Problem We Saw","path":"/vision/problem"},{"name":"The World We Build","path":"/vision/world"},{"name":"Intelligence Humanely","path":"/vision/intelligence-humanely"},{"name":"The Timeline","path":"/vision/timeline"}];

    return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col items-center mb-16">
        <p className="text-[10px] md:text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">
          ALRigs | Intelligence | Humanely
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-center uppercase gradient-text-blue">
          VISION
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
        {rooms.map(room => (
          <div key={room.path} className="flex flex-col gap-4">
            <div 
              onClick={() => navigate(room.path)}
              className="rounded-3xl bg-[#050505] flex flex-col overflow-hidden relative group cursor-pointer aspect-[3/4] transition-all duration-500 border border-[#1a1a1a] hover:border-slate-500/50"
            >
              <div className="absolute inset-0 z-0 flex items-center justify-center p-8">
                <span className="text-5xl md:text-6xl text-slate-800 opacity-30 font-black tracking-tighter group-hover:opacity-60 transition-opacity text-center uppercase">
                  {room.name.split(' ').map(w => w[0]).join('').substring(0, 3)}
                </span>
              </div>
              
              <div className="flex-grow relative z-10" />
            </div>
            <p className="text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-slate-500 uppercase text-center px-2">
              {room.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
