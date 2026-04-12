import { motion } from "motion/react";
import { Users, Building2, Landmark, ArrowRight, Shield, Zap, Cpu } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      id: "pro",
      name: "Pro AI",
      target: "Family-Owned Businesses",
      description: "Preserving legacy through digital sovereignty. We turn generational know-how into a permanent, automated asset.",
      details: [
        "Institutional Memory Capture: Digitizing years of unwritten expertise.",
        "Private Knowledge Base: Your data never leaves your perimeter.",
        "Legacy Automation: Ensuring the business runs with your specific logic, forever."
      ],
      iconUrl: "https://static.wixstatic.com/media/b20068_a31ff2583fe843b39b8053f8ef067211~mv2.png",
      gradient: "from-blue-600/20 to-cyan-400/20",
      videoUrl: "https://video.wixstatic.com/video/b20068_833f83e6b2584376aa3a4e5c1d682afa/720p/mp4/file.mp4",
      aspectRatio: "aspect-video"
    },
    {
      id: "business",
      name: "Business AI",
      target: "Large Commercial Organizations",
      description: "Achieving structural margin expansion. Factorial coordination velocity for complex, multi-national operations.",
      details: [
        "Cross-Departmental Synthesis: Breaking silos with unified intelligence.",
        "Deterministic Execution: Safe, audited autonomous operations.",
        "Margin Expansion: Reducing operational friction at scale."
      ],
      iconUrl: "https://static.wixstatic.com/media/b20068_bf1e0b33f8fd4564be8918f7c5e7757a~mv2.jpeg",
      gradient: "from-brand-secondary/20 to-brand-primary/20",
      videoUrl: "https://video.wixstatic.com/video/b20068_d4e8b3a8131b430585909fa012998467/1080p/mp4/file.mp4",
      aspectRatio: "aspect-[9/16]"
    },
    {
      id: "transparency",
      name: "Transparency AI",
      target: "Public Sector & State Utilities",
      description: "Deterministic, audited execution for public trust. Sovereign intelligence for critical national infrastructure.",
      details: [
        "Public Trust Architecture: Fully auditable AI decision-making.",
        "Critical Infrastructure Security: Hardened against external influence.",
        "Sovereign Intelligence: National data remains under national control."
      ],
      icon: <Landmark className="w-12 h-12" />,
      gradient: "from-cyan-500/20 to-indigo-500/20",
      isComingSoon: true,
      aspectRatio: "aspect-video"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            OUR <span className="gradient-text uppercase">PRODUCTS</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed gradient-text-muted">
            Sovereign intelligence solutions tailored for the specific needs of your organization.
          </p>
        </motion.div>

        <div className="space-y-32">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-8 p-6 rounded-3xl bg-brand-primary/5 inline-block gradient-border">
                  {product.iconUrl ? (
                    <img src={product.iconUrl} alt={`${product.name} Icon`} className="w-12 h-12 object-cover rounded-lg mix-blend-screen" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="gradient-text">{product.icon}</div>
                  )}
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase gradient-text">
                  {product.name}
                </h2>
                <div className="text-sm font-mono mb-8 uppercase tracking-[0.3em] text-brand-primary/60">
                  {product.target}
                </div>
                <p className="text-xl leading-relaxed mb-10 gradient-text-muted font-light">
                  {product.description}
                </p>
                <div className="space-y-4">
                  {product.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <Zap className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                      <span className="gradient-text-muted">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`relative ${product.aspectRatio} rounded-[4rem] overflow-hidden gradient-border bg-glass flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                {product.videoUrl ? (
                  <>
                    <video 
                      src={product.videoUrl} 
                      poster={product.iconUrl}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/40 via-transparent to-brand-primary/40 mix-blend-overlay pointer-events-none" />
                  </>
                ) : product.isComingSoon ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
                    <img 
                      src="https://static.wixstatic.com/media/b20068_73160301523d4ab7a1a4b98949dd480e~mv2.jpeg" 
                      alt="ALRigs Logo" 
                      className="w-24 h-24 object-contain mix-blend-screen mb-6 opacity-50"
                      referrerPolicy="no-referrer"
                    />
                    <div className="px-6 py-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 text-brand-primary font-mono uppercase tracking-widest text-sm">
                      Coming Soon
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${product.gradient}`} />
                    <div className="relative z-10 scale-150 opacity-20">
                      {product.icon}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl animate-pulse" />
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
