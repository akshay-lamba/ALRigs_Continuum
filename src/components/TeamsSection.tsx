import { motion } from "motion/react";
import { Users, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

export default function TeamsSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const teams = [
    {
      title: "ARC Consulting Team",
      desc: "Vision and Architecture. Strategic planning and architectural alignment for the global enterprise.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: "implementation",
      title: "ARC AI Implementation Team",
      desc: "The Builders. Hands-on integration using the .it framework for secure, technical deployment.",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      id: "upgrade",
      title: "ARC Human Upgrade Team",
      desc: "The Enablers. Training and cultural coaching to ensure AI empowers people humanely.",
      icon: <ShieldCheck className="w-8 h-8" />,
    }
  ];

  return (
    <section className="py-32 bg-black border-t border-brand-primary/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase gradient-text">Our Delivery Teams</h2>
          <p className="text-xl font-light tracking-widest uppercase gradient-text-muted">The Experts Behind the Transformation</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teams.map((team, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-brand-primary/5 gradient-border flex flex-col items-center text-center group hover:bg-brand-primary/10 transition-colors"
            >
              <div className="mb-8 p-6 rounded-2xl bg-black/40 gradient-border-muted group-hover:gradient-border transition-all">
                <div className="gradient-text">{team.icon}</div>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight gradient-text">{team.title}</h3>
              <p className="text-lg leading-relaxed gradient-text-muted font-light mb-8">{team.desc}</p>
              
              <button 
                onClick={() => onNavigate('arc-team')}
                className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary/40 group-hover:text-brand-primary transition-colors"
              >
                Meet the Team <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
