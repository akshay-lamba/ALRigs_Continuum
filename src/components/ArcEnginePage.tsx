import { motion } from "motion/react";
import { Zap, Download, FileText } from "lucide-react";

export default function ArcEnginePage() {
  return (
    <div className="pt-48 pb-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-40 mt-16"
        >
          <p className="font-mono tracking-[0.3em] uppercase gradient-text-muted mb-12">ARC Engine</p>
          <p className="max-w-4xl mx-auto text-2xl md:text-3xl leading-relaxed gradient-text-muted font-light px-4">
            A simple explanation of the core intelligence technology that powers everything from the Pro AI box to state-level infrastructure. It is the common thread of intelligence that makes the Continuum possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter gradient-text">Exactly How It Works</h2>
            <div className="space-y-10">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">1</div>
                <h4 className="text-xl font-bold mb-2 uppercase gradient-text">Capture</h4>
                <p className="gradient-text-muted leading-relaxed">Most AI relies on the general internet. The ARC Engine relies only on <strong>your company's history</strong>. It captures the years of institutional know-how trapped in emails, documents, and the minds of your experts.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">2</div>
                <h4 className="text-xl font-bold mb-2 uppercase gradient-text">Contain</h4>
                <p className="gradient-text-muted leading-relaxed">Unlike public AI platforms, this intelligence never leaves your office. It lives in a private environment where <strong>only you hold the key</strong>. Your competitive advantage is never leaked to a public server.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">3</div>
                <h4 className="text-xl font-bold mb-2 uppercase gradient-text">Coordinate</h4>
                <p className="gradient-text-muted leading-relaxed">The Engine then acts as a high-speed conductor, helping every department talk to each other perfectly. It ensures that when sales moves, production is already prepared—automatically and securely.</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-[4rem] aspect-square overflow-hidden gradient-border bg-glass flex items-center justify-center">
             <div className="absolute inset-x-0 bottom-0 p-8 text-center bg-black/80 backdrop-blur-sm z-20">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-primary">The Heart of Corporate Autonomy</p>
             </div>
             <div className="relative z-10 p-12 text-center">
                <Zap className="w-24 h-24 text-brand-primary mx-auto mb-8 animate-pulse" />
                <h3 className="text-4xl font-black gradient-text uppercase mb-4">Sovereign Logic</h3>
                <p className="gradient-text-muted text-lg font-light tracking-wide">Deterministic • Private • High Velocity</p>
             </div>
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)]" />
          </div>
        </div>

        <section className="py-20 border-t border-brand-primary/10 mb-20">
           <div className="text-center">
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter gradient-text">Why It Matters</h2>
              <p className="max-w-2xl mx-auto text-xl gradient-text-muted leading-relaxed font-light">
                In the autonomous age, the company with the fastest, most private coordination velocity wins. The ARC Engine is the infrastructure that makes that velocity possible.
              </p>
           </div>
        </section>

        {/* Hero PDF Download Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_c394f138ae3d4a6a94dae22cca51c45a.pdf"
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
                  src="https://static.wixstatic.com/media/b20068_f185e9d0ab444966a8cfb62ca8e483ab~mv2.png" 
                  alt="ARC Engine Overview" 
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
                      The ARC Engine Architecture
                    </span>
                  </div>
                </div>

                <p className="text-lg font-light text-white/50 mb-8 max-w-lg leading-relaxed">
                  Discover how the ARC Engine converts your institutional memory into a secure, deterministic operating system.
                </p>

                <div className="flex items-center gap-6">
                  <div className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-primary text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                    <Download className="w-4 h-4 text-black" />
                    Download PDF
                  </div>
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-brand-primary/40 hidden md:block">
                    Size: 1.4 MB
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
