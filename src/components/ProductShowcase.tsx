import { motion } from "motion/react";
import { Landmark, ArrowRight, Activity, CheckCircle2 } from "lucide-react";

export default function ProductShowcase({ onNavigate }: { onNavigate: (page: string) => void }) {
  const products = [
    {
      id: "pro",
      name: "Pro AI",
      tagline: "Private | Pro AI | Humanely",
      icon: <img src="https://static.wixstatic.com/media/b20068_a31ff2583fe843b39b8053f8ef067211~mv2.png" className="w-12 h-12 object-contain mix-blend-screen" referrerPolicy="no-referrer" alt="Pro AI" />,
      features: [
        "Professional-Grade AI Hardware",
        "5-Day Global Logistics Delivery",
        "Zero-Config Plug & Play Setup",
        "Absolute Data Privacy",
        "Dedicated Engineer Implementation"
      ],
      comingSoon: false
    },
    {
      id: "business",
      name: "Business AI",
      tagline: "Sovereign | Business AI | Humanely",
      icon: <img src="https://static.wixstatic.com/media/b20068_34f70c080077492b9d251a04e3a6bc28~mv2.png" className="w-12 h-12 object-contain mix-blend-screen" referrerPolicy="no-referrer" alt="Business AI" />,
      features: [
        "The .it Framework",
        "Total Sovereign Perimeter",
        "Structural Margin Expansion",
        "Global Operations Coordination",
        "Full-Service Mission Teams"
      ],
      comingSoon: false
    },
    {
      id: "transparency",
      name: "Transparency AI",
      tagline: "Sovereign | State AI | Humanely",
      icon: <Landmark className="w-10 h-10 text-white" />,
      features: [
        "Sovereign Framework Design",
        "Ethical Public Leadership AI",
        "100% Auditable Intelligence",
        "State-Level Security",
        "Advanced Civic Coordination"
      ],
      comingSoon: true
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            THE <span className="gradient-text uppercase">CONTINUUM</span>
          </motion.h2>
          <p className="text-sm md:text-xl font-light tracking-widest uppercase gradient-text-muted">
            Three Tiers of Private and Sovereign Intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => !product.comingSoon && onNavigate(`product-${product.id}`)}
              className={`flex flex-col p-10 rounded-[2.5rem] bg-brand-primary/5 border border-brand-primary/10 hover:bg-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 group ${product.comingSoon ? '' : 'cursor-pointer'}`}
            >
              <div className="mb-8 flex justify-between items-start">
                <div className="w-20 h-20 rounded-2xl bg-black/60 border border-brand-primary/10 flex items-center justify-center p-3 shadow-xl">
                  {product.icon}
                </div>
                {product.comingSoon && (
                  <div className="px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center gap-2">
                    <Activity className="w-3 h-3 text-brand-primary animate-pulse" />
                    <span className="text-[9px] uppercase tracking-widest font-bold text-brand-primary">Coming Soon</span>
                  </div>
                )}
              </div>
              
              <h3 className="text-3xl font-black uppercase tracking-tighter gradient-text mb-2">
                {product.name}
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/60 mb-10">
                {product.tagline}
              </p>
              
              <div className="space-y-5 mb-12 flex-grow">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary/50 shrink-0" />
                    <span className="text-sm gradient-text-muted font-light leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {!product.comingSoon && (
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary/40 group-hover:text-brand-primary transition-colors mt-auto pt-6 border-t border-brand-primary/10">
                  Explore Product <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
