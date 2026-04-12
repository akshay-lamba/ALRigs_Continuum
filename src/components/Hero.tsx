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
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-secondary/40 text-xs font-bold tracking-[0.2em] uppercase mb-8 text-brand-primary">
            The ARC Engine
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-tight gradient-text uppercase mb-8 whitespace-nowrap">
            Sovereign | Business AI | Humanely
          </h1>
          <p className="text-lg md:text-xl font-light tracking-[0.1em] uppercase text-brand-primary/60 max-w-3xl mx-auto leading-relaxed">
            Structural Margin Expansion for the Global Enterprise through Private, Deterministic Intelligence.
          </p>
        </motion.div>

        {/* Bottom: Product Focus Cards */}
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
          {[
            { id: 'pro', name: 'Pro AI', desc: 'Family-Owned Businesses', icon: <Users className="w-6 h-6" /> },
            { id: 'business', name: 'Business AI', desc: 'Large Commercial Orgs', icon: <Building2 className="w-6 h-6" /> },
            { id: 'transparency', name: 'Transparency AI', desc: 'Public Sector & Utilities', icon: <Landmark className="w-6 h-6" /> },
          ].map((prod, i) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
              onClick={() => onNavigate && onNavigate('products')}
              className="p-8 rounded-2xl bg-[#050A15] border border-brand-primary/10 hover:border-brand-primary/40 transition-all duration-300 cursor-pointer group text-left flex flex-col"
            >
              <div className="mb-6 p-3 rounded-lg bg-brand-secondary/50 inline-block text-brand-primary group-hover:scale-110 transition-transform duration-300">
                {prod.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-brand-primary transition-colors">{prod.name}</h3>
              <p className="text-sm font-mono uppercase tracking-widest text-brand-primary/50 mb-8 flex-grow">{prod.desc}</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary group-hover:text-white transition-colors">
                Explore Product <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

