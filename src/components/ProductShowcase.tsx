import { motion } from "motion/react";
import { Users, Building2, Landmark, Zap, ArrowRight } from "lucide-react";

export default function ProductShowcase({ onNavigate }: { onNavigate: (page: string) => void }) {
  const products = [
    {
      id: "pro",
      name: "Pro AI",
      target: "Family-Owned Businesses",
      tagline: "Private | Business AI | Humanely",
      description: "Preserving legacy through digital sovereignty. We turn generational know-how into a permanent, automated asset.",
      icon: <Users className="w-12 h-12" />,
      gradient: "from-blue-600/20 to-cyan-400/20"
    },
    {
      id: "business",
      name: "Business AI",
      target: "Large Multinational",
      tagline: "Sovereign | Business AI | Humanely",
      description: "Achieving structural margin expansion through specialized SI teams and our proprietary .it framework.",
      icon: <Building2 className="w-12 h-12" />,
      gradient: "from-brand-secondary/20 to-brand-primary/20"
    },
    {
      id: "transparency",
      name: "Transparency AI",
      target: "Public Sector",
      tagline: "Sovereign | State | Humanely",
      description: "Specialized Systems Integration for state and government bodies, enabling transparent and ethical governance.",
      icon: <Landmark className="w-12 h-12" />,
      gradient: "from-cyan-500/20 to-indigo-500/20"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter"
          >
            THE <span className="gradient-text uppercase">CONTINUUM</span>
          </motion.h2>
          <p className="text-xl font-light tracking-widest uppercase gradient-text-muted">
            Three Tiers of Private and Sovereign Intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              onClick={() => onNavigate(`product-${product.id}`)}
              className={`relative p-8 rounded-[2.5rem] bg-gradient-to-br ${product.gradient} border border-white/5 group overflow-hidden flex flex-col cursor-pointer transition-all duration-300`}
            >
              {/* Animated Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 p-4 rounded-2xl bg-black/40 inline-block gradient-border-muted group-hover:gradient-border transition-all self-start">
                  <div className="gradient-text">{product.icon}</div>
                </div>
                
                <h3 className="text-2xl font-black mb-1 tracking-tighter uppercase gradient-text">
                  {product.name}
                </h3>
                <div className="text-[10px] font-mono mb-4 uppercase tracking-[0.2em] text-brand-primary/60">
                  {product.target}
                </div>
                
                <div className="text-xs font-bold mb-4 gradient-text uppercase tracking-tight">
                  {product.tagline}
                </div>

                <p className="text-sm leading-relaxed gradient-text-muted font-light flex-grow">
                  {product.description}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary/40 group-hover:text-brand-primary transition-colors">
                  Learn More <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Decorative Lines */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
