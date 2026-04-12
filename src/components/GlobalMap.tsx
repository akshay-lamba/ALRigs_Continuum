import { motion } from "motion/react";
import { Globe } from "lucide-react";

export default function GlobalMap() {
  const locations = [
    { name: "US", x: "20%", y: "35%" },
    { name: "Middle East", x: "55%", y: "40%" },
    { name: "India", x: "65%", y: "50%" },
    { name: "Australia", x: "85%", y: "75%" },
    { name: "Africa", x: "50%", y: "65%" },
  ];

  return (
    <section id="global" className="py-24 space-bg border-t border-brand-primary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter uppercase">The ALRigs <span className="gradient-text">Continuum</span></h2>
          
          <div className="relative aspect-[2/1] w-full max-w-5xl mx-auto bg-brand-primary/[0.02] rounded-[3rem] gradient-border-muted overflow-hidden group">
            {/* Simple Dot Map Background */}
            <div className="absolute inset-0 opacity-5" 
                 style={{ backgroundImage: 'radial-gradient(circle, #00D2FF 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
            
            {/* Location Markers */}
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="absolute w-4 h-4 rounded-full bg-brand-primary shadow-[0_0_20px_#00D2FF]"
                style={{ left: loc.x, top: loc.y }}
              >
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-[10px] font-bold tracking-[0.2em] uppercase gradient-text-muted">
                  {loc.name}
                </div>
                <div className="absolute inset-0 rounded-full bg-brand-primary animate-ping opacity-50" />
              </motion.div>
            ))}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <Globe className="w-64 h-64 text-brand-primary/5 animate-[spin_60s_linear_infinite]" />
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-[10px] font-bold tracking-[0.4em] uppercase gradient-text-muted">
            {locations.map(l => l.name).join(' • ')}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
