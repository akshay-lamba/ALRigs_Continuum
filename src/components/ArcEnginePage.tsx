import { motion } from "motion/react";
import { Zap, Download, FileText } from "lucide-react";

export default function ArcEnginePage() {
  return (
    <div className="pt-32 pb-20 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24 mt-16"
        >
          <p className="font-mono tracking-[0.3em]  gradient-text-muted">ARC Engine</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          <div>
            <h2 className="text-3xl font-black mb-6  tracking-tighter gradient-text">Exactly ARC Engine</h2>
            <p className="text-xl leading-relaxed gradient-text-muted font-light mb-12 pr-8">
              A simple explanation of the core intelligence technology that powers everything from the Pro AI box to state-level infrastructure. It is the common thread of intelligence that makes the Continuum possible.
            </p>
            <div className="space-y-10">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center gradient-text font-bold">1</div>
                <h4 className="text-xl font-bold mb-2  gradient-text">Capture</h4>
                <p className="gradient-text-muted leading-relaxed">Most AI relies on the general internet. The ARC Engine relies only on <strong>your company's history</strong>. It captures the years of institutional know-how trapped in emails, documents, and the minds of your experts.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center gradient-text font-bold">2</div>
                <h4 className="text-xl font-bold mb-2  gradient-text">Contain</h4>
                <p className="gradient-text-muted leading-relaxed">Unlike public AI platforms, this intelligence remains securely within your office walls. It lives in a private environment where <strong>only you hold the key</strong>. Your competitive advantage remains strictly guarded and securely contained to a public server.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center gradient-text font-bold">3</div>
                <h4 className="text-xl font-bold mb-2  gradient-text">Coordinate</h4>
                <p className="gradient-text-muted leading-relaxed">The Engine then acts as a high-speed conductor, helping every department talk to each other perfectly. It ensures that when sales moves, production is already prepared—automatically and securely.</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-[4rem] aspect-square overflow-hidden gradient-border bg-glass flex items-center justify-center">
             <div className="absolute inset-x-0 bottom-0 p-8 text-center bg-[#020617]/80 backdrop-blur-sm z-20">
                <p className="font-mono text-xs  tracking-[0.3em] gradient-text">The Heart of Corporate Autonomy</p>
             </div>
             <div className="relative z-10 p-12 text-center">
                <Zap className="w-24 h-24 gradient-text mx-auto mb-8 animate-pulse" />
                <h3 className="text-4xl font-black gradient-text  mb-4">Sovereign Logic</h3>
                <p className="gradient-text-muted text-lg font-light tracking-wide">Deterministic • Private • High Velocity</p>
             </div>
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)]" />
          </div>
        </div>

        <section className="py-20 border-t border-brand-primary/10 mb-20">
           <div className="text-center">
              <h2 className="text-4xl font-black mb-8  tracking-tighter gradient-text">Why It Matters</h2>
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
              <div className="col-span-1 lg:col-span-2 p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-brand-primary/10 bg-[#020617]/40">
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
                  <div className="p-3 bg-[#020617] rounded-lg border border-brand-primary/30 gradient-text shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-[0.2em]  gradient-text/60 mb-1">
                      Technical Deep Dive
                    </span>
                    <span className="text-xl md:text-2xl font-black  tracking-tight text-slate-400">
                      The ARC Engine Architecture
                    </span>
                  </div>
                </div>

                <p className="text-lg font-light text-slate-400/50 mb-8 max-w-lg leading-relaxed">
                  Discover how the ARC Engine converts your institutional memory into a secure, deterministic operating system.
                </p>

                <div className="flex items-center gap-6">
                  <div className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-slate-300 font-bold  tracking-widest text-xs hover:from-blue-500 hover:to-blue-700 transition-colors">
                    <Download className="w-4 h-4 text-slate-300" />
                    Download PDF
                  </div>
                  <span className="text-xs font-mono tracking-[0.2em]  gradient-text/40 hidden md:block">
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
