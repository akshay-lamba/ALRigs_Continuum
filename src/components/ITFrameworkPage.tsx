import { motion } from "motion/react";
import { Shield, Lock, Share2, Database, Layers } from "lucide-react";

export default function ITFrameworkPage() {
  const principles = [
    {
      title: "Data Sovereignty",
      desc: "Zero-leakage architecture ensuring all business logic stays within your physical or digital perimeter.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: "privacy",
      title: "Encrypted Execution",
      desc: "Deterministic execution where even the AI models operate within a privacy-hardened shell.",
      icon: <Lock className="w-8 h-8" />
    },
    {
      id: "integration",
      title: "Interoperable Trust",
      desc: "Designed to sit as a bridge between legacy systems and the autonomous age, ensuring safe data flow.",
      icon: <Share2 className="w-8 h-8" />
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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase">
            THE ARCHITECTURE OF <span className="gradient-text uppercase">SOVEREIGNTY</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed gradient-text-muted font-light px-4">
            This is our proprietary system integration framework. It is the foundation for Business and Transparency AI, designed to give large organizations and states absolute ownership over their data and AI logic.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-glass gradient-border"
            >
              <div className="mb-8 gradient-text">{p.icon}</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight gradient-text">{p.title}</h3>
              <p className="text-lg leading-relaxed gradient-text-muted font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive */}
        <div className="grid lg:grid-cols-2 gap-20 items-center bg-brand-primary/5 p-12 md:p-20 rounded-[4rem] gradient-border-muted overflow-hidden relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px]" />
           <div className="relative z-10">
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter gradient-text">Architecture of Ownership</h2>
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/40 gradient-border flex items-center justify-center text-brand-primary">
                       <Database className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold mb-2 uppercase gradient-text">Private Intelligence Layer</h4>
                       <p className="gradient-text-muted leading-relaxed">Your business logic is no longer used for public trainer models. It is captured and stored as a permanent balance-sheet asset.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/40 gradient-border flex items-center justify-center text-brand-primary">
                       <Layers className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold mb-2 uppercase gradient-text">Sovereign Coordination</h4>
                       <p className="gradient-text-muted leading-relaxed">Enabling factor-level coordination across global departments without sacrificing security or privacy.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="relative aspect-square bg-black rounded-3xl overflow-hidden border border-brand-primary/10 flex items-center justify-center group">
              <Database className="w-48 h-48 text-brand-primary/10 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-transparent opacity-50" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center bg-black/80 backdrop-blur-md">
                 <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-primary underline underline-offset-8">Deterministic Data Pipeline V4.2</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
