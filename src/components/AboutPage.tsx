import { motion } from "motion/react";
import { Download, Shield, Target, Cpu, Zap, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 space-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            THE EVENT HORIZON OF <br />
            <span className="gradient-text uppercase">Corporate Intelligence</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed gradient-text-muted">
            Building the infrastructure for corporate autonomy in the autonomous age. 
            We are the bridge to a future where corporate intelligence is a private, protected, and permanent asset.
          </p>
        </motion.div>

        {/* Core Beliefs */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Shield className="w-8 h-8 text-brand-primary" />,
              title: "Sovereign by Design",
              desc: "We build the infrastructure for corporate autonomy, ensuring your intelligence stays within your perimeter."
            },
            {
              icon: <Target className="w-8 h-8 text-brand-primary" />,
              title: "The Mission",
              desc: "To transform corporate intelligence into a private, protected, and permanent balance-sheet asset."
            },
            {
              icon: <Cpu className="w-8 h-8 text-brand-primary" />,
              title: "The Core Belief",
              desc: "The intelligence that runs a business belongs exclusively to the people who built that business."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-glass gradient-border"
            >
              <div className="mb-6 gradient-text">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight gradient-text">{item.title}</h3>
              <p className="leading-relaxed gradient-text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* The ARC Engine Details */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">The ARC Engine Architecture</h2>
            <p className="font-mono tracking-widest uppercase gradient-text-muted">Context • Depth • Velocity²</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-brand-primary/5 gradient-border-muted">
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight gradient-text">Step 01: Private Environment</h4>
                <p className="gradient-text-muted">Architecting a private operational environment where your business logic lives exclusively.</p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-primary/5 gradient-border-muted">
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight gradient-text">Step 02: Institutional Memory</h4>
                <p className="gradient-text-muted">Capturing the specific know-how, effort, and years of experience of your best people.</p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-primary/5 gradient-border-muted">
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight gradient-text">Step 03: Verified Execution</h4>
                <p className="gradient-text-muted">Delivering deterministic, safe, and verified autonomous execution through the Parallel Audit Layer.</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-brand-primary/10 bg-black flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)]" />
              <Zap className="w-32 h-32 text-brand-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Download Deck */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[4rem] bg-gradient-to-br from-brand-primary/10 to-transparent gradient-border flex flex-col md:flex-row items-center gap-12"
        >
          <div className="w-full md:w-1/3 aspect-[4/3] rounded-3xl bg-black gradient-border overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <span className="text-2xl font-bold tracking-tighter uppercase leading-none gradient-text">
                ALRigs <br /> Company Deck
              </span>
            </div>
            <div className="absolute bottom-4 right-4 p-3 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-full text-black">
              <Download className="w-6 h-6" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Deep Dive into Sovereign AI</h3>
            <p className="mb-8 text-lg gradient-text-muted">
              Download our full company deck to understand the technical architecture, 
              financial models, and the roadmap for corporate autonomy.
            </p>
            <a 
              href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_469a7ae16f1343f6a5bf5f81c8ba4137.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary text-black font-bold hover:scale-105 transition-all"
            >
              Download Company Deck
              <Download className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
