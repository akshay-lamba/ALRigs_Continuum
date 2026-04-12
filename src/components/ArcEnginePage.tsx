import { motion } from "motion/react";
import Solution from "./Solution";
import ValueProp from "./ValueProp";

export default function ArcEnginePage() {
  return (
    <div className="pt-32 pb-24 space-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            THE <span className="gradient-text uppercase">ARC ENGINE</span> <br />
            ARCHITECTURE
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed gradient-text-muted">
            The core infrastructure for corporate autonomy. 
            A private, sovereign environment where your business logic lives and executes at machine speed.
          </p>
        </motion.div>

        <Solution />
        <ValueProp />
        
        <div className="mt-32 p-12 rounded-[4rem] bg-glass gradient-border text-center">
          <h3 className="text-3xl font-bold mb-6 gradient-text uppercase">Ready for Sovereignty?</h3>
          <p className="text-xl mb-12 gradient-text-muted max-w-2xl mx-auto">
            Deploy the ARC Engine within your perimeter and start building your permanent economic moat today.
          </p>
          <a 
            href="mailto:a@alrigs.com"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary text-black font-bold hover:scale-105 transition-all text-lg"
          >
            Request Technical Briefing
          </a>
        </div>
      </div>
    </div>
  );
}
