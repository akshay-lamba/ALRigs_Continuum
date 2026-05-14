import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProAIPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 bg-transparent min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] absolute -top-1/4 -right-1/4" 
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] absolute -bottom-1/4 -left-1/4" 
        />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 mb-8">
         <button 
           onClick={() => navigate('/products')}
           className="flex items-center text-slate-500 hover:text-blue-500 font-semibold tracking-widest text-xs uppercase mb-8 transition-colors"
         >
           <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
         </button>
      </div>

      {/* Hero Section with Glassy Frame */}
      <div className="w-full max-w-5xl mx-auto px-6 mb-16 relative z-10">
        <div className="p-2 md:p-4 rounded-[2rem] bg-gradient-to-b from-[#0f172a]/60 to-[#020617]/60 backdrop-blur-xl border border-blue-900/30 shadow-2xl relative w-full flex items-center justify-center">
            <img 
              src="https://static.wixstatic.com/media/b20068_de2e0aadaf324f84a36facacd1882d69~mv2.jpeg" 
              alt="Pro AI Hero" 
              className="w-full h-auto object-contain rounded-[1.5rem] opacity-90"
              referrerPolicy="no-referrer"
            />
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10 space-y-16">
        {/* Title and Intro */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-400">
            Pro AI
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-wide text-slate-400 leading-relaxed">
            Private Business AI for single organizations. Uncompromising sovereignty over your models and data, designed to turn operating expenses into margin.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Absolute Privacy",
              description: "Keep your data completely secure on-premise. Your models run in your environment."
            },
            {
              title: "Custom Trained",
              description: "Fine-tuned natively on your proprietary data streams to understand your specific domain."
            },
            {
              title: "Margin Expansion",
              description: "Replace costly human hours on repetitive cognitive tasks with near-zero marginal cost AI."
            },
            {
              title: "Rapid Deployment",
              description: "Integrates directly with your existing infrastructure via the .it Framework."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-gradient-to-b from-[#0f172a] to-[#020617] border border-blue-900/30 shadow-xl hover:border-blue-900/50 transition-colors"
            >
              <CheckCircle2 className="w-8 h-8 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-300 mb-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-blue-900/30">
        </div>
      </div>
    </div>
  );
}
