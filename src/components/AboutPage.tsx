import { motion } from "motion/react";
import { Download, Shield, Target, Cpu, Zap, ArrowRight, Linkedin, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-48 pb-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-40 mt-16"
        >
          <p className="font-mono tracking-[0.3em] uppercase gradient-text-muted mb-12">The ALRigs Philosophy</p>
          <p className="max-w-4xl mx-auto text-2xl md:text-3xl leading-relaxed gradient-text-muted font-light px-4">
            Who we are and why we believe AI should be private, sovereign, and—above all—humane.
          </p>
        </motion.div>

        {/* Core Beliefs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
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
            },
            {
              icon: <Zap className="w-8 h-8 text-brand-primary" />,
              title: "Open Design",
              desc: "We are an open design company. Our architectures are transparent, ensuring absolute, verifiable trust across all integrations."
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

        {/* Leadership Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <p className="font-mono tracking-widest uppercase gradient-text-muted text-lg">The Vision Behind ALRigs</p>
          </div>
          
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 justify-between">
            <div className="text-center md:text-left order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-2 gradient-text uppercase tracking-tight">Geetika Chawla Lamba</h3>
              <p className="text-xl font-mono tracking-widest uppercase gradient-text-muted mb-6">CEO, ALRigs Continuum</p>
              
              <div className="flex items-center justify-center md:justify-start gap-6">
                <a 
                  href="https://www.linkedin.com/in/geetika-chawla/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-primary/60 hover:text-brand-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:g@alrigs.com" 
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-primary/60 hover:text-brand-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden order-1 md:order-2">
              <img 
                src="https://static.wixstatic.com/media/b20068_a5fd8255a66f4b4099e20969ce7e54a4~mv2.jpeg" 
                alt="Geetika Chawla Lamba - CEO" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* From Our Management */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <p className="font-mono tracking-widest uppercase gradient-text-muted text-lg">Insights & Vision From Our Management</p>
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
