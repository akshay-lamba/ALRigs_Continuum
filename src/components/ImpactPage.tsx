import { motion } from "motion/react";
import { Download, TrendingUp, ShieldCheck, Zap, ArrowRight, CheckCircle } from "lucide-react";

export default function ImpactPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            DEFINING <br />
            <span className="gradient-text uppercase">Business AI</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed gradient-text-muted">
            The era of outsourced, public-server AI is a dead end. 
            ALRigs engineers a bespoke AI ecosystem specifically for your enterprise perimeter.
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

        {/* Commercial Terms */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter gradient-text">Simple Commercial Terms</h2>
            <p className="font-mono tracking-widest uppercase gradient-text-muted">Transparent, outcome-based pricing models.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Phase 1 (The Pilot)",
                desc: "One flat fee. This covers our time fully setting up your private system and initially training the brain."
              },
              {
                title: "Phase 2 (Rollout)",
                desc: "Flexible structure. A shared-success model or a flat license fee, entirely dependent on what your Finance team prefers."
              },
              {
                title: "Maintenance",
                desc: "Optional annual support plan. Keeps your internal brain updated with the absolute latest technology every year."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-glass gradient-border">
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight gradient-text">{item.title}</h3>
                <p className="leading-relaxed gradient-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
