import { motion } from "motion/react";
import { Zap } from "lucide-react";
import Solution from "./Solution";
import ValueProp from "./ValueProp";

export default function ArcEnginePage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            THE <span className="gradient-text uppercase">ARC ENGINE</span> <br />
            ARCHITECTURE
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed gradient-text-muted">
            The core infrastructure for corporate autonomy. 
            A private, sovereign environment where your business logic lives and executes at machine speed.
          </p>
        </motion.div>

        {/* The ARC Engine Details */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">The ARC Engine Architecture</h2>
            <p className="font-mono tracking-widest uppercase gradient-text-muted">Context • Depth • Velocity²</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-brand-primary/5 gradient-border-muted">
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight gradient-text">Step 01: Private Environment</h4>
                <p className="gradient-text-muted">Architecting a private operational environment where your business logic lives exclusively.</p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-primary/5 gradient-border-muted">
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight gradient-text">Step 02: Institutional Memory</h4>
                <p className="gradient-text-muted">Capturing the specific know-how, effort, and years of experience of your best people.</p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-primary/5 gradient-border-muted">
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight gradient-text">Step 03: Verified Execution</h4>
                <p className="gradient-text-muted">Delivering deterministic, safe, and verified autonomous execution through the Parallel Audit Layer.</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-brand-primary/10 bg-black flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)]" />
              <Zap className="w-32 h-32 text-brand-primary animate-pulse" />
            </div>
          </div>
        </div>

        <Solution />
        <ValueProp />
      </div>
    </div>
  );
}
