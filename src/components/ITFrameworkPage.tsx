import { motion } from "motion/react";
import { Shield, Lock, Share2, Database, Layers, Download, FileText } from "lucide-react";

export default function ITFrameworkPage() {
  const principles = [
    {
      title: "Private Intelligence Layer",
      desc: "Your business logic is no longer used for public trainer models. It is captured and stored as a permanent balance-sheet asset.",
      icon: <Database className="w-8 h-8" />
    },
    {
      id: "integration",
      title: "Interoperable Trust",
      desc: "Designed to sit as a bridge between legacy systems and the autonomous age, ensuring safe data flow.",
      icon: <Share2 className="w-8 h-8" />
    },
    {
      title: "Data Sovereignty",
      desc: "Zero-leakage architecture ensuring all business logic stays within your physical or digital perimeter.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-48 pb-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24 mt-16"
        >
          <p className="font-mono tracking-[0.3em] uppercase gradient-text-muted">The .it Framework</p>
        </motion.div>

        <div className="mb-12 max-w-4xl">
          <p className="text-xl md:text-2xl leading-relaxed gradient-text-muted font-light">
            This is our system integration framework. It is the foundation for Business and Transparency AI, designed to give large organizations and states absolute ownership over their data and AI logic.
          </p>
        </div>

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

        {/* Hero PDF Download Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_0b31fb23a22f406083fd1962c51378ae.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full overflow-hidden rounded-[3rem] bg-brand-primary/5 hover:bg-brand-primary/10 border border-brand-primary/20 hover:border-brand-primary/50 transition-all duration-500 cursor-pointer"
          >
            {/* Dynamic Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1.5s]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 items-center relative z-10">
              
              {/* Product Thumbnail Section */}
              <div className="col-span-1 lg:col-span-2 p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-brand-primary/10 bg-black/40">
                <img 
                  src="https://static.wixstatic.com/media/b20068_c2e91dd7c1b541c68e66bdf3b0ce6146~mv2.png" 
                  alt=".it Framework" 
                  className="w-40 sm:w-48 lg:w-56 object-contain mix-blend-screen drop-shadow-[0_0_25px_rgba(59,130,246,0.2)] group-hover:drop-shadow-[0_0_35px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Document Details Section */}
              <div className="col-span-1 lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6 flex items-center gap-3">
                  <div className="p-3 bg-black rounded-lg border border-brand-primary/30 text-brand-primary shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-brand-primary/60 mb-1">
                      Technical Deep Dive
                    </span>
                    <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
                      The .it Framework Architecture
                    </span>
                  </div>
                </div>

                <p className="text-lg font-light text-white/50 mb-8 max-w-lg leading-relaxed">
                  Explore the foundational mechanics of the proprietary framework enabling deterministic, zero-leakage enterprise intelligence.
                </p>

                <div className="flex items-center gap-6">
                  <div className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-primary text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                    <Download className="w-4 h-4 text-black" />
                    Download PDF
                  </div>
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-brand-primary/40 hidden md:block">
                    Size: 1.1 MB
                  </span>
                </div>
              </div>
            </div>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
