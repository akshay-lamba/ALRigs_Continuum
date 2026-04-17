import { motion } from "motion/react";
import { Users, Building2, Landmark, ArrowRight, Shield, Zap, Cpu, Package, Download, FileText, Lock, Activity } from "lucide-react";

export default function ProductsPage({ productId }: { productId?: string }) {
  const products = [
    {
      id: "pro",
      name: "Pro AI",
      tagline: "Private | Pro AI | Humanely",
      target: "Family-Owned Businesses",
      description: "Built for the heart of the economy—family-owned businesses. Preserving legacy through digital sovereignty.",
      sections: [
        {
          title: "The Hardware",
          content: "Order online. A high-spec professional AI box delivered to your door in 5 days through our efficient global logistics network."
        },
        {
          title: "Setup",
          content: "Ultimate ease of use. Simply plug the box in, navigate to Pro.local on your browser, and the setup is complete."
        },
        {
          title: "The Human Touch",
          content: "Every Pro AI purchase includes dedicated setup time with an ALRigs engineer who handles the implementation and integration for the business."
        }
      ],
      iconUrl: "https://static.wixstatic.com/media/b20068_cfb9ed16735b406c8b391af00fd7e084~mv2.png",
      gradient: "from-blue-600/20 to-cyan-400/20",
      videoUrl: "https://video.wixstatic.com/video/b20068_833f83e6b2584376aa3a4e5c1d682afa/720p/mp4/file.mp4",
      pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_e1b7e495f77f4301a8ea8a7c07874706.pdf",
      pdfName: "Pro AI - Product Details",
      pdfSize: "2.4 MB",
      aspectRatio: "aspect-video"
    },
    {
      id: "business",
      name: "Business AI",
      tagline: "Sovereign | Business AI | Humanely",
      target: "Large Multinationals",
      description: "Designed for large multinational companies requiring total control and structural margin expansion.",
      sections: [
        {
          title: "Total Sovereignty",
          content: "Your data stays yours. Our .it framework ensures your AI is independent and secure, residing entirely within your sovereign perimeter."
        },
        {
          title: "Full-Service Delivery",
          content: "We provide high-level systems integration to weave intelligence into your global operations at machine speed."
        },
        {
          title: "Mission Ready",
          content: "Deployment and ongoing success managed by the ARC Consulting, Implementation, and Human Upgrade teams."
        }
      ],
      iconUrl: "https://static.wixstatic.com/media/b20068_f185e9d0ab444966a8cfb62ca8e483ab~mv2.png",
      gradient: "from-brand-secondary/20 to-brand-primary/20",
      videoUrl: "https://video.wixstatic.com/video/b20068_d4e8b3a8131b430585909fa012998467/1080p/mp4/file.mp4",
      pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_1da6490a296141048d7fd869837b36c9.pdf",
      pdfName: "Business AI - Commercial Outcomes Deck",
      pdfSize: "3.1 MB"
    },
    {
      id: "transparency",
      name: "Transparency AI",
      tagline: "Sovereign | State AI | Humanely",
      target: "Public Sector & Government Bodies",
      description: "Empowering state leadership with secure, ethical infrastructure and transparent decision-making processes.",
      sections: [
        {
          title: "Leadership Enabled",
          content: "We don't just build tools; we enable public leaders to guide the state with clarity, ethics, and sovereign intelligence."
        },
        {
          title: "Public Trust",
          content: "Built on the .it framework to ensure every action is sovereign and every decision-making process is fully auditable and transparent."
        },
        {
          title: "The ARC Approach",
          content: "Dedicated mission teams ensuring state-level security and human-centered leadership across public service."
        }
      ],
      icon: <Landmark className="w-12 h-12" />,
      gradient: "from-cyan-500/20 to-indigo-500/20",
      pdfName: "Transparency AI Overview",
      isComingSoon: true
    }
  ];

  const currentProduct = productId ? products.find(p => p.id === productId) : null;
  const displayProducts = currentProduct ? [currentProduct] : products;

  return (
    <div className="pt-48 pb-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-40 mt-16"
        >
          <p className="font-mono tracking-[0.3em] uppercase gradient-text-muted mb-12">The Continuum</p>
          <p className="max-w-4xl mx-auto text-2xl md:text-3xl leading-relaxed gradient-text-muted font-light px-4">
            {currentProduct ? currentProduct.tagline : "Three tiers of private and sovereign intelligence for family businesses, multinationals, and the public sector."}
          </p>
        </motion.div>

        <div className="space-y-32">
          {displayProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className={i % 2 === 1 && !currentProduct ? "lg:order-2" : ""}>
                <div className="mb-8">
                  {product.iconUrl ? (
                    <img src={product.iconUrl} alt={`${product.name} Icon`} className="w-20 h-20 md:w-24 md:h-24 object-contain mix-blend-screen" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="gradient-text scale-150 origin-left">{product.icon}</div>
                  )}
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase gradient-text">
                  {product.name}
                </h2>
                <div className="text-sm font-mono mb-8 uppercase tracking-[0.3em] text-brand-primary/60">
                  {product.target}
                </div>
                <div className="text-xl leading-relaxed mb-6 gradient-text font-bold tracking-tight uppercase">
                  {product.tagline}
                </div>
                <p className="text-xl leading-relaxed mb-10 gradient-text-muted font-light">
                  {product.description}
                </p>
                <div className="space-y-4">
                  {product.sections.map((section, idx) => (
                    <div key={idx} className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-brand-primary/20 transition-colors">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-brand-primary flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        {section.title}
                      </h4>
                      <p className="gradient-text-muted leading-relaxed text-sm">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
                {(product.pdfUrl || product.isComingSoon) && (
                  <div className="mt-12">
                    {product.pdfUrl ? (
                      <a 
                        href={product.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center p-4 pr-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/20 hover:bg-brand-primary/10 hover:border-brand-primary/40 transition-all duration-300 w-fit cursor-pointer overflow-hidden"
                      >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/0 via-brand-primary/10 to-brand-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        
                        <div className="w-16 h-20 rounded-lg bg-black border border-brand-primary/30 flex flex-col items-center justify-center mr-6 relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:border-brand-primary/50 transition-colors">
                          <FileText className="w-6 h-6 text-brand-primary mb-2" />
                          <span className="text-[8px] font-bold tracking-widest text-brand-primary uppercase">PDF</span>
                        </div>

                        <div className="flex flex-col relative z-10">
                          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-brand-primary/60 mb-1">
                            Technical Document
                          </span>
                          <span className="text-sm font-bold tracking-tight uppercase text-white mb-2">
                            {product.pdfName}
                          </span>
                          <div className="flex items-center gap-4">
                            <span className="text-xs text-brand-primary/50 flex items-center gap-1.5">
                              <Download className="w-3.5 h-3.5" />
                              {product.pdfSize}
                            </span>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="relative flex items-center p-4 pr-8 rounded-2xl bg-white/5 border border-white/10 w-fit opacity-60">
                        <div className="w-16 h-20 rounded-lg bg-black border border-white/20 flex flex-col items-center justify-center mr-6 relative z-10">
                          <Lock className="w-5 h-5 text-white/50 mb-2" />
                        </div>

                        <div className="flex flex-col relative z-10">
                          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/40 mb-1">
                            Technical Document
                          </span>
                          <span className="text-sm font-bold tracking-tight uppercase text-white/60 mb-2">
                            {product.pdfName}
                          </span>
                          <div className="flex items-center gap-4">
                            <span className="text-[9px] font-bold tracking-widest uppercase text-brand-primary opacity-80 flex items-center gap-1.5">
                              <Activity className="w-3.5 h-3.5" />
                              In Development
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className={`relative flex items-center justify-center w-full min-h-[400px] ${i % 2 === 1 && !currentProduct ? "lg:order-1" : ""}`}>
                {product.videoUrl ? (
                  <div className="relative w-full flex items-center justify-center">
                    <video 
                      src={product.videoUrl} 
                      className="w-full h-auto max-h-[80vh] object-contain mix-blend-screen opacity-90"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    {/* Radial blend overlay to feather any sharp edges of the video source into black */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_black_90%)] pointer-events-none" />
                  </div>
                ) : product.isComingSoon ? (
                  <div className="relative w-full aspect-video flex flex-col items-center justify-center">
                    <img 
                      src="https://static.wixstatic.com/media/b20068_73160301523d4ab7a1a4b98949dd480e~mv2.jpeg" 
                      alt="ALRigs Logo" 
                      className="w-32 h-32 md:w-48 md:h-48 object-contain mix-blend-screen mb-8 opacity-40 animate-pulse"
                      referrerPolicy="no-referrer"
                    />
                    <div className="px-8 py-3 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary font-mono uppercase tracking-[0.3em] text-sm backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                      Coming Soon
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
