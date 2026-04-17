import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export default function Comparison() {
  const data = [
    { metric: "Asset Class", traditional: "OpEx: Renting public AI (Liability)", sovereign: "CapEx: Owning an AI Brain (Asset)" },
    { metric: "Economic Moat", traditional: "Temporary (Brand & Data)", sovereign: "Permanent: Sovereign Coordination Velocity" },
    { metric: "Coordination", traditional: "Linear (Manual & Meetings)", sovereign: "Factorial: Automated Synthesis" },
    { metric: "Cost Basis", traditional: "Permanent Delay Tax", sovereign: "Structural Margin Expansion" },
  ];

  return (
    <section className="py-24 relative space-bg border-y border-brand-primary/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="gradient-border-muted">
                <th className="py-6 px-4 text-left font-mono text-[10px] uppercase tracking-[0.3em] gradient-text-muted">Metric</th>
                <th className="py-6 px-4 text-left font-mono text-[10px] uppercase tracking-[0.3em] gradient-text-muted">Traditional Corporate Logic</th>
                <th className="py-6 px-4 text-left font-mono text-[10px] uppercase tracking-[0.3em] gradient-text">ALRigs Sovereign Logic</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <motion.tr 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="gradient-border-muted hover:bg-brand-primary/[0.02] transition-colors group"
                >
                  <td className="py-8 px-4 font-bold text-lg tracking-tight gradient-text">{row.metric}</td>
                  <td className="py-8 px-4 flex items-center gap-3 text-sm italic gradient-text-muted">
                    <X className="w-4 h-4 text-red-500/30" />
                    {row.traditional}
                  </td>
                  <td className="py-8 px-4 font-bold flex items-center gap-3 text-sm tracking-tight gradient-text">
                    <Check className="w-4 h-4 text-brand-primary" />
                    {row.sovereign}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Growth Visual */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-3xl bg-glass p-12 overflow-hidden gradient-border">
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <path 
                  d="M0,350 Q100,340 200,250 T400,50" 
                  fill="none" 
                  stroke="var(--color-brand-primary)" 
                  strokeWidth="4" 
                  className="animate-[dash_3s_ease-in-out_infinite]"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                />
                <style>{`
                  @keyframes dash {
                    to { stroke-dashoffset: 0; }
                  }
                `}</style>
              </svg>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-2 gradient-text">Structural Margin Expansion</h4>
                <p className="gradient-text-muted">Decoupling Output Velocity from Operational Cost</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-mono uppercase gradient-text-muted">Revenue & Velocity</span>
                  <span className="font-bold gradient-text">+420%</span>
                </div>
                <div className="w-full h-1 bg-brand-primary/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-brand-secondary to-brand-primary shadow-[0_0_10px_#00E5FF]" 
                  />
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs font-mono uppercase gradient-text-muted">Operational Cost</span>
                  <span className="font-bold uppercase gradient-text-muted">Locked</span>
                </div>
                <div className="w-full h-1 bg-brand-primary/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '30%' }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-brand-secondary/40 to-brand-primary/40" 
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tighter uppercase text-brand-primary/90">
              Decoupling Output <br />
              <span className="text-brand-primary/30">from Operational Cost</span>
            </h3>
            <p className="text-xl leading-relaxed mb-8 font-light gradient-text-muted">
              By owning the intelligence layer and execution agents, operational costs remain locked while output velocity compounds at machine speed.
            </p>
            <div className="p-6 rounded-2xl bg-brand-primary/5 gradient-border-muted">
              <p className="font-bold italic text-sm gradient-text">
                "Revenue growth permanently decoupled from employee headcount."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
