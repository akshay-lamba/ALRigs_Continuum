import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ProductsPage({ productId }: { productId?: string }) {
  const products = {
    rio: {
      id: "rio",
      headline: "Intelligence for life. Owned by you.",
      positioning: "Life | Intelligence | Privately",
      audience: "High-net-worth individuals and families",
      painHook: "Your personal data, health records, and family coordination should never belong to a cloud provider.",
      cta: "Request Access",
    },
    proai: {
      id: "proai",
      headline: "The business brain your competitors already have.",
      positioning: "Private | Pro AI | Humanely",
      audience: "Regional and family businesses",
      painHook: "Stop losing to margin erosion, cash blind spots, and the lack of a real-time view.",
      cta: "Order Now",
    },
    business: {
      id: "business",
      headline: "Enterprise intelligence. Sovereign by design.",
      positioning: "Sovereign | Business AI | Humanely",
      audience: "Global corporations",
      painHook: "Break free from vendor lock-in, data leaving the organisation, and rented intelligence at scale.",
      cta: "Request a Pilot",
    },
    transparency: {
      id: "transparency",
      headline: "Public sector AI. Accountable by default.",
      positioning: "Sovereign | State AI | Humanely",
      audience: "State and public sector",
      painHook: "Eliminate opaque AI decisions, risks to citizen data sovereignty, and compliance exposure.",
      cta: "Let's Connect",
    }
  };

  const product = products[(productId as keyof typeof products)] || products.proai;

  const getBgImage = () => {
    switch(product.id) {
      case 'rio': return 'https://static.wixstatic.com/media/b20068_73b841c0138d4adfa58256bb26be8227~mv2.jpeg';
      case 'proai': return 'https://static.wixstatic.com/media/b20068_e10e35105f184034a2ed7dddb7b9a16a~mv2.jpeg';
      case 'business': return 'https://static.wixstatic.com/media/b20068_cfdfa9463b1042b281a440b5da9c2746~mv2.jpeg';
      case 'transparency': return 'https://static.wixstatic.com/media/b20068_a25acc7d35e347f6a6220895956d3fd5~mv2.jpeg';
      default: return '';
    }
  };

  return (
    <div className="pt-32 pb-20 bg-[#020617] min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Product Specific Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src={getBgImage()} 
          alt="" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
      </div>

      {/* Ambient Blue Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px]" 
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 bg-[#0f172a] border border-blue-500/20 rounded-full text-xs font-bold tracking-widest  gradient-text mb-6">
            {product.positioning}
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-400 mb-8 leading-tight">
            {product.headline}
          </h1>
          <div className="inline-block px-4 py-1.5 bg-[#1e293b]/50 border border-blue-900/30 rounded text-[10px] font-mono tracking-widest  text-slate-400 mb-12">
            For {product.audience}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-xl md:text-2xl font-light text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {product.painHook}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
