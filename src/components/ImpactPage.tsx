import { motion } from "motion/react";
import { Download, TrendingUp, ShieldCheck, Zap, ArrowRight, CheckCircle } from "lucide-react";

export default function ImpactPage() {
  return (
    <div className="pt-48 pb-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-40 mt-16"
        >
          <p className="font-mono tracking-[0.3em]  gradient-text-muted mb-12">Impact</p>
          <p className="max-w-4xl mx-auto text-2xl md:text-3xl leading-relaxed gradient-text-muted font-light px-4">
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 gradient-border-muted text-xs font-bold tracking-widest  mb-6">
              <span className="gradient-text">Zero Risk • High Impact</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter ">
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
                  <CheckCircle className="w-6 h-6 gradient-text flex-shrink-0" />
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
            <div className="text-2xl font-bold tracking-widest  mb-8 gradient-text-muted">DAYS</div>
            <div className="p-6 rounded-2xl bg-brand-primary/10 gradient-border-muted">
              <h4 className="text-xl font-bold mb-2  tracking-tight gradient-text">The 10x Guarantee</h4>
              <p className="text-sm gradient-text-muted">
                If the system cannot clearly show it will pay for itself ten times over by the end of 90 days, 
                we help you delete the engine. You keep the insights; we take the risk.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
