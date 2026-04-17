import { motion } from "motion/react";
import { Users, Cpu, ShieldCheck } from "lucide-react";

export default function ARCTeamPage() {
  const teams = [
    {
      title: "ARC Consulting Team",
      tagline: "(The Strategists)",
      desc: "Vision and Architecture. This team works directly with leadership to map out where AI will have the most impact. They handle the 'why' and 'where', ensuring the strategy aligns with company goals or state policies while keeping ethics at the forefront.",
      focus: ["Vision & Architecture", "Strategic Alignment", "Ethics & Governance", "Impact Mapping"],
      icon: <Users className="w-10 h-10" />
    },
    {
      title: "ARC AI Implementation Team",
      tagline: "(The Builders)",
      desc: "Technical Deployment and Security. These are our hands-on experts. They integrate the ARC Engine into your existing world using the .it framework. They ensure the technical pipes are secure, sovereign, and built to last without ever compromising your data ownership.",
      focus: ["Technical Deployment", "Security Infrastructure", ".it Framework Integration", "Systems Longevity"],
      icon: <Cpu className="w-10 h-10" />
    },
    {
      title: "ARC Human Upgrade Team",
      tagline: "(The Enablers)",
      desc: "People and Culture. We believe AI should empower people, not replace them. This team focuses on the 'Humanely' aspect of our promise. They provide high-level training and cultural coaching to ensure that staff and leaders feel confident, capable, and upgraded by the new technology.",
      focus: ["Cultural Coaching", "High-Level Training", "Human-AI Synergy", "Capability Upgrading"],
      icon: <ShieldCheck className="w-10 h-10" />
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
            THREE TEAMS. <span className="gradient-text uppercase">ONE MISSION.</span>
          </h1>
          <p className="max-w-4xl mx-auto text-xl leading-relaxed gradient-text-muted font-light px-4">
            For our Business and Transparency tiers, we don't just provide software; we provide a mission-ready task force. We deploy three specialized teams to ensure the transition to AI is seamless, secure, and human-centered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teams.map((team, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-glass gradient-border flex flex-col h-full"
            >
              <div className="mb-8 p-5 rounded-2xl bg-brand-primary/10 inline-block self-start">
                <div className="gradient-text">{team.icon}</div>
              </div>
              
              <h3 className="text-3xl font-black mb-1 uppercase tracking-tighter gradient-text">{team.title}</h3>
              <div className="text-xs font-mono mb-6 uppercase tracking-widest text-brand-primary/60">{team.tagline}</div>
              
              <p className="text-lg leading-relaxed gradient-text-muted font-light mb-8 flex-grow">{team.desc}</p>
              
              <div className="space-y-3 pb-4">
                {team.focus.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-primary/40">
                    <div className="w-1 h-1 bg-brand-primary rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
