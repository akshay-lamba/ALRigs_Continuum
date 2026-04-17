import { motion } from "motion/react";
import { Zap } from "lucide-react";

export default function ArcEnginePage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase">
            THE HEART OF THE <span className="gradient-text uppercase">CONTINUUM</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed gradient-text-muted font-light px-4">
            A simple explanation of the core intelligence technology that powers everything from the Pro AI box to state-level infrastructure. It is the common thread of intelligence that makes the Continuum possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter gradient-text">Exactly How It Works</h2>
            <div className="space-y-10">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">1</div>
                <h4 className="text-xl font-bold mb-2 uppercase gradient-text">Capture</h4>
                <p className="gradient-text-muted leading-relaxed">Most AI relies on the general internet. The ARC Engine relies only on <strong>your company's history</strong>. It captures the years of institutional know-how trapped in emails, documents, and the minds of your experts.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">2</div>
                <h4 className="text-xl font-bold mb-2 uppercase gradient-text">Contain</h4>
                <p className="gradient-text-muted leading-relaxed">Unlike public AI platforms, this intelligence never leaves your office. It lives in a private environment where <strong>only you hold the key</strong>. Your competitive advantage is never leaked to a public server.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">3</div>
                <h4 className="text-xl font-bold mb-2 uppercase gradient-text">Coordinate</h4>
                <p className="gradient-text-muted leading-relaxed">The Engine then acts as a high-speed conductor, helping every department talk to each other perfectly. It ensures that when sales moves, production is already prepared—automatically and securely.</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-[4rem] aspect-square overflow-hidden gradient-border bg-glass flex items-center justify-center">
             <div className="absolute inset-x-0 bottom-0 p-8 text-center bg-black/80 backdrop-blur-sm z-20">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-primary">The Heart of Corporate Autonomy</p>
             </div>
             <div className="relative z-10 p-12 text-center">
                <Zap className="w-24 h-24 text-brand-primary mx-auto mb-8 animate-pulse" />
                <h3 className="text-4xl font-black gradient-text uppercase mb-4">Sovereign Logic</h3>
                <p className="gradient-text-muted text-lg font-light tracking-wide">Deterministic • Private • High Velocity</p>
             </div>
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)]" />
          </div>
        </div>

        <section className="py-20 border-t border-brand-primary/10">
           <div className="text-center">
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter gradient-text">Why It Matters</h2>
              <p className="max-w-2xl mx-auto text-xl gradient-text-muted leading-relaxed font-light">
                In the autonomous age, the company with the fastest, most private coordination velocity wins. The ARC Engine is the infrastructure that makes that velocity possible.
              </p>
           </div>
        </section>
      </div>
    </div>
  );
}
