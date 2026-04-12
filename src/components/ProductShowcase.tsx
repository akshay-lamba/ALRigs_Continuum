import { motion } from "motion/react";
import { Users, Building2, Landmark } from "lucide-react";

export default function ProductShowcase({ onNavigate }: { onNavigate: (page: string) => void }) {
  const products = [
    {
      id: "pro",
      name: "Pro AI",
      target: "Family-Owned Businesses",
      description: "Preserving legacy through digital sovereignty. We turn generational know-how into a permanent, automated asset.",
      icon: <Users className="w-12 h-12" />,
      gradient: "from-blue-600/20 to-cyan-400/20"
    },
    {
      id: "business",
      name: "Business AI",
      target: "Large Commercial Organizations",
      description: "Achieving structural margin expansion. Factorial coordination velocity for complex, multi-national operations.",
      icon: <Building2 className="w-12 h-12" />,
      gradient: "from-brand-secondary/20 to-brand-primary/20"
    },
    {
      id: "transparency",
      name: "Transparency AI",
      target: "Public Sector & State Utilities",
      description: "Deterministic, audited execution for public trust. Sovereign intelligence for critical national infrastructure.",
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
            OUR <span className="gradient-text uppercase">PRODUCTS</span>
          </motion.h2>
          <p className="text-xl font-light tracking-widest uppercase gradient-text-muted">
            Tailored for the specific needs of your organization
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className={`relative p-10 rounded-[3rem] bg-gradient-to-br ${product.gradient} border border-white/5 group overflow-hidden`}
            >
              {/* Animated Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="mb-8 p-4 rounded-2xl bg-black/40 inline-block gradient-border-muted group-hover:gradient-border transition-all">
                  <div className="gradient-text">{product.icon}</div>
                </div>
                
                <h3 className="text-3xl font-black mb-2 tracking-tighter uppercase gradient-text">
                  {product.name}
                </h3>
                <div className="text-xs font-mono mb-6 uppercase tracking-[0.2em] text-brand-primary/60">
                  {product.target}
                </div>
                
                <p className="text-lg leading-relaxed gradient-text-muted font-light">
                  {product.description}
                </p>
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
