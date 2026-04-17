import { motion } from "motion/react";
import { Download, TrendingUp, ShieldCheck, Zap, ArrowRight, CheckCircle } from "lucide-react";

export default function ImpactPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase">
            REAL WORLD <span className="gradient-text uppercase">CHANGE</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed gradient-text-muted font-light">
            Stories and visions of how ALRigs is making business more private, corporations more sovereign, and states more transparent.
          </p>
        </motion.div>

        {/* 90-Day Pilot */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 gradient-border-muted text-xs font-bold tracking-widest uppercase mb-6">
              <span className="gradient-text">Zero Risk • High Impact</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter uppercase">
              The 90-Day <br />
              <span className="gradient-text-muted">Proof of Value Pilot</span>
            </h2>
            <p className="text-xl mb-12 leading-relaxed font-light gradient-text-muted">
              Isolate one single, highly critical area of your business (e.g., Supply Chain Management or Revenue Operations) 
              and prove exactly how much capital we can save your organization.
            </p>
            <div className="space-y-6">
              {[
                "Setup: Install ALRigs Engine (Gemma 4, Pinecone, ZeroClaw)",
                "Connection: Link securely to three most important data sources",
                "Action: Deploy 5 highly specific Digital Workers",
                "Visibility: Deliver clean, daily reports detailing exact actions taken"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-brand-primary/5 gradient-border-muted">
                  <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0" />
                  <span className="font-medium gradient-text-muted">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-[4rem] bg-glass gradient-border relative overflow-hidden flex flex-col items-center justify-center text-center"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)]" />
            <div className="text-9xl font-black mb-4 animate-pulse gradient-text">90</div>
            <div className="text-2xl font-bold tracking-widest uppercase mb-8 gradient-text-muted">DAYS</div>
            <div className="p-6 rounded-2xl bg-brand-primary/10 gradient-border-muted">
              <h4 className="text-xl font-bold mb-2 uppercase tracking-tight gradient-text">The 10x Guarantee</h4>
              <p className="text-sm gradient-text-muted">
                If the system cannot clearly show it will pay for itself ten times over by the end of 90 days, 
                we help you delete the engine. You keep the insights; we take the risk.
              </p>
            </div>
          </motion.div>
        </div>

        {/* The Human Upgrade */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase gradient-text">Humanely <br /><span className="text-3xl md:text-4xl gradient-text-muted">Designing the Transformation</span></h2>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed gradient-text-muted font-light">
              We define "Humanely" as the intentional upgrade of human capability through sovereign automation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 rounded-[4rem] bg-glass gradient-border"
            >
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tight gradient-text">For the Global Leader</h3>
              <p className="text-lg leading-relaxed gradient-text-muted font-light mb-8">
                Owners and CEOs achieve unprecedented "Sovereign Coordination Velocity". The AI removes the anxiety of information silos, providing deterministic clarity so leadership can focus on high-level growth and legacy preservation.
              </p>
              <div className="flex items-center gap-4 text-brand-primary/40 font-mono text-xs uppercase tracking-widest">
                <CheckCircle className="w-5 h-5" /> Deterministic Execution
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 rounded-[4rem] bg-glass gradient-border"
            >
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tight gradient-text">For the State & Public</h3>
              <p className="text-lg leading-relaxed gradient-text-muted font-light mb-8">
                Enabling public leaders with secure, ethical infrastructure. Large-scale utilities and state bodies gain back coordination velocity while ensuring full data ownership—the AI serves the people through transparent and audited systems.
              </p>
              <div className="flex items-center gap-4 text-brand-primary/40 font-mono text-xs uppercase tracking-widest">
                <ShieldCheck className="w-5 h-5" /> Ethical Sovereign Logic
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
