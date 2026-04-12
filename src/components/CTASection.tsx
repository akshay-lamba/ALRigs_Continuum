import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden space-bg border-t border-brand-primary/5">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-16 rounded-[4rem] bg-glass gradient-border relative overflow-hidden"
        >
          {/* Background Infinity Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/5 blur-[100px] pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter uppercase text-brand-primary/90">
            Build Your <br />
            <span className="gradient-text uppercase">Permanent Moat</span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-light gradient-text-muted">
            Stop renting intelligence. Start owning your future. Deploy the ARC Engine across your global enterprise today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-10 py-5 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary text-black font-bold text-xl hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(0,210,255,0.3)]">
              Get Started Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-full gradient-border font-bold text-xl hover:scale-105 transition-all">
              <span className="gradient-text">Schedule a Demo</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
