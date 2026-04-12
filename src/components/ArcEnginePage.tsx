import { motion } from "motion/react";
import Solution from "./Solution";
import ValueProp from "./ValueProp";

export default function ArcEnginePage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
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
      </div>
    </div>
  );
}
