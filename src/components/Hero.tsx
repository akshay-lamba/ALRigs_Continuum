import { motion } from "motion/react";
import { ArrowRight, Users, Building2, Landmark } from "lucide-react";

export default function Hero({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        
        {/* Top: Tagline & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-secondary/40 text-xs font-bold tracking-[0.2em] uppercase mb-8 text-brand-primary">
            The ARC Engine
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight gradient-text uppercase mb-8 whitespace-nowrap">
            Sovereign | Business AI | Humanely
          </h1>
          <p className="text-lg md:text-xl font-light tracking-[0.1em] uppercase text-brand-primary/80 max-w-3xl mx-auto leading-relaxed">
            Structural Margin Expansion for the Global Enterprise through Private, Deterministic Intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

