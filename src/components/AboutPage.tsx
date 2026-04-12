import { motion } from "motion/react";
import { Download, Shield, Target, Cpu, Zap, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
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

        {/* From Our Management */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">From Our Management</h2>
            <p className="font-mono tracking-widest uppercase gradient-text-muted">Insights & Vision</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business AI: A Global Asset Class",
                url: "https://www.linkedin.com/pulse/business-ai-global-asset-class-geetika-chawla-lamba-fjjoc"
              },
              {
                title: "The Alrigs Continuum and the 'Born a Unicorn' Vision",
                url: "https://www.linkedin.com/pulse/alrigs-continuum-born-unicorn-vision-geetika-chawla-lamba-q7s1c"
              },
              {
                title: "When Owners Feel Anxious | They Buy Clarity",
                url: "https://www.linkedin.com/pulse/when-owners-feel-anxious-buy-clarity-geetika-chawla-lamba-vaeac"
              }
            ].map((article, i) => (
              <a 
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-3xl bg-glass gradient-border hover:border-brand-primary/40 transition-all duration-300 group flex flex-col justify-between h-full"
              >
                <h3 className="text-xl font-bold mb-6 leading-relaxed gradient-text group-hover:text-white transition-colors">{article.title}</h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary/60 group-hover:text-brand-primary transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
