import { motion } from "motion/react";
import { Clock, AlertTriangle, Layers } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="py-24 relative overflow-hidden space-bg border-y border-brand-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter uppercase">
              Diagnosing the <br />
              <span className="text-brand-primary/20">Enterprise Bottleneck</span>
            </h2>
            <p className="text-xl text-brand-primary/40 mb-12 leading-relaxed font-light">
              The central barrier to peak performance is the manual retrieval and synchronization of context across disconnected departments.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-brand-primary/5 gradient-border-muted">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Clock className="text-red-500/50" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 tracking-tight gradient-text">The Delay Tax</h4>
                  <p className="text-sm gradient-text-muted">Friction and meetings create a permanent tax on your profit margins.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-brand-primary/5 gradient-border-muted">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <AlertTriangle className="text-orange-500/50" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 tracking-tight gradient-text">Rented Intelligence</h4>
                  <p className="text-sm gradient-text-muted">Public AI is a "rented" liability. It offers zero competitive advantage.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-glass p-8 flex items-center justify-center overflow-hidden gradient-border">
              {/* Abstract Bottleneck Visualization */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-64 h-64 border border-brand-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-48 h-48 border border-brand-primary/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                <div className="z-10 text-center">
                  <div className="text-6xl font-black text-red-500/40 mb-2 tracking-tighter">DELAY</div>
                  <div className="text-2xl font-bold tracking-[0.4em] uppercase opacity-20 text-brand-primary">TAX</div>
                </div>
                
                {/* Connecting Lines */}
                <div className="absolute top-0 left-0 w-full h-full">
                   <div className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent to-red-500/20" />
                   <div className="absolute bottom-1/4 right-0 w-1/2 h-px bg-gradient-to-l from-transparent to-red-500/20" />
                </div>
              </div>
            </div>
            
            {/* Floating Labels */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-red-500/20 text-red-500 text-[10px] font-bold rounded-lg border border-red-500/30 uppercase tracking-widest">
              OPEX LIABILITY
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-brand-primary/10 backdrop-blur-md text-brand-primary text-[10px] font-bold rounded-lg border border-brand-primary/20 uppercase tracking-widest">
              MANUAL SYNCING
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
