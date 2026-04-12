import { motion } from "motion/react";
import { Target, TrendingUp, Shield, Zap } from "lucide-react";

export default function ValueProp() {
  const points = [
    {
      title: "Sovereign Ownership",
      desc: "Shift from OpEx liability to a permanent CapEx digital asset.",
      icon: <Shield className="text-brand-primary" />
    },
    {
      title: "Instant Coordination",
      desc: "Eliminate the 'Delay Tax' with real-time factorial logic.",
      icon: <Zap className="text-brand-primary" />
    },
    {
      title: "Human Upgrade",
      desc: "Transition your staff from tactical doers to strategic auditors.",
      icon: <Target className="text-brand-primary" />
    },
    {
      title: "Permanent Profit",
      desc: "Achieve mathematically impossible leads over linear competitors.",
      icon: <TrendingUp className="text-brand-primary" />
    }
  ];

  return (
    <section id="value-prop" className="py-24 relative overflow-hidden bg-black border-y border-brand-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">
              The Strategic Path to <br />
              <span className="gradient-text uppercase">Sovereign AI Value</span>
            </h2>
            <p className="text-xl mb-12 leading-relaxed font-light gradient-text-muted">
              Our framework redefines how enterprises interact with intelligence, moving from rented utilities to owned, high-velocity assets.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((point, i) => (
                <div key={i} className="p-6 rounded-2xl bg-brand-primary/5 gradient-border-muted hover:gradient-border transition-all">
                  <div className="mb-4 gradient-text">{point.icon}</div>
                  <h4 className="font-bold mb-2 text-sm uppercase tracking-widest gradient-text">{point.title}</h4>
                  <p className="text-[11px] leading-relaxed font-medium gradient-text-muted">{point.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-[2rem] overflow-hidden gradient-border shadow-2xl">
              <img 
                src="https://static.wixstatic.com/media/b20068_6aad00fde32d402e90103651719eade4~mv2.png" 
                alt="ALRigs Continuum Strategic Path Infographic" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
