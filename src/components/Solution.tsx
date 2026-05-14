import { motion } from "motion/react";
import { Cpu, Zap, ShieldCheck, Database } from "lucide-react";

export default function Solution() {
  return (
    <section id="solution" className="py-24 space-bg border-y border-brand-primary/5 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #00D2FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter"
          >
            The <span className="gradient-text ">ARC Engine</span> Architecture
          </motion.h2>
          <p className="text-xl font-mono tracking-[0.3em]  gradient-text-muted">
            Context • Depth • Velocity²
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Instant Synthesis",
              desc: "Moving from 'knowing' to 'doing' with zero friction. Factorial synthesis at machine speed.",
              color: "gradient-text"
            },
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Audited Accuracy",
              desc: "Every engine-generated insight is rigorously verified against your specific business history.",
              color: "text-brand-secondary"
            },
            {
              icon: <Database className="w-8 h-8" />,
              title: "Unified Intelligence",
              desc: "Pulling ERP, CRM, and Communications into a single, sovereign on-prem/private cloud boundary.",
              color: "gradient-text"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-glass gradient-border-muted hover:gradient-border transition-all group"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-brand-primary/5 inline-block group-hover:scale-110 transition-transform`}>
                <div className="gradient-text">{item.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight  gradient-text">{item.title}</h3>
              <p className="leading-relaxed text-sm font-light gradient-text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 gradient-border relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 gradient-text">Sovereign & Factorial</h3>
              <p className="text-lg mb-8 leading-relaxed gradient-text-muted">
                Deploying on-prem ensures core business logic and "Secret Sauce" remain entirely under your control. 
                The engine bridges coordination gap, instantly calculating factorial relationships between cross-departmental events.
              </p>
              <ul className="space-y-4">
                {['Own an AI Brain (Asset)', 'Permanent Economic Moat', 'Automated Strategic Pivoting'].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary shadow-[0_0_10px_#00D2FF]" />
                    <span className="gradient-text">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-2xl bg-black border border-brand-primary/10 flex items-center justify-center overflow-hidden">
               <Cpu className="w-32 h-32 gradient-text opacity-20 animate-pulse" />
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
               <div className="absolute bottom-6 left-6 right-6 p-4 bg-glass rounded-xl text-xs font-mono gradient-text">
                 $ ARC_ENGINE_STATUS: OPTIMIZED_COORDINATION_VELOCITY
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
