import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ProductShowcase() {
  const navigate = useNavigate();
  const products = [
    {
      id: "pro",
      badge: "Private",
      name: "ALRigs Pro AI",
      positioning: "Private | Pro AI | Humanely",
      audience: "For regional and family businesses",
      image: "https://static.wixstatic.com/media/b20068_e10e35105f184034a2ed7dddb7b9a16a~mv2.jpeg"
    },
    {
      id: "business",
      badge: "Sovereign",
      name: "ALRigs Business AI",
      positioning: "Sovereign | Business AI | Humanely",
      audience: "For global corporations",
      image: "https://static.wixstatic.com/media/b20068_cfdfa9463b1042b281a440b5da9c2746~mv2.jpeg"
    },
    {
      id: "transparency",
      badge: "Sovereign",
      name: "ALRigs State AI",
      positioning: "Sovereign | State AI | Humanely",
      audience: "For state and public sector",
      image: "https://static.wixstatic.com/media/b20068_a25acc7d35e347f6a6220895956d3fd5~mv2.jpeg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-4 tracking-tighter"
          >
            THE <span className="gradient-text ">CONTINUUM</span>
          </motion.h2>
          <p className="text-sm md:text-lg font-light tracking-widest  text-slate-400">
            Three Tiers of Private and Sovereign Intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={product.id} className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate(product.id === 'pro' ? '/products/proai' : `/products/${product.id}`)}
                className="rounded-3xl bg-[#050505] flex flex-col overflow-hidden relative group cursor-pointer aspect-[3/4] transition-all duration-500 border border-[#1a1a1a] hover:border-slate-500/50"
              >
                <div className="absolute inset-0 z-0 flex items-center justify-center p-8">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex-grow relative z-10" />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase text-center px-4 whitespace-nowrap"
              >
                {product.positioning}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
