import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ProductsHubPage() {
  const navigate = useNavigate();
  const links = [
    { 
      id: '/products/rio', 
      title: 'Rio AI', 
      description: 'Life Intelligence for personal and high-net-worth sovereignty.',
      tagline: 'Personal | Intelligence | Sovereignly',
      image: 'https://static.wixstatic.com/media/b20068_73b841c0138d4adfa58256bb26be8227~mv2.jpeg' // Using similar image for now
    },
    { 
      id: '/products/proai', 
      title: 'ALRigs Pro AI', 
      description: 'Professional Intelligence for private organisations.',
      tagline: 'Private | Pro AI | Humanely',
      image: 'https://static.wixstatic.com/media/b20068_e10e35105f184034a2ed7dddb7b9a16a~mv2.jpeg'
    },
    { 
      id: '/products/business', 
      title: 'ALRigs Business AI', 
      description: 'Sovereign Business AI for global corporations.',
      tagline: 'Sovereign | Business AI | Humanely',
      image: 'https://static.wixstatic.com/media/b20068_cfdfa9463b1042b281a440b5da9c2746~mv2.jpeg'
    },
    { 
      id: '/products/transparency', 
      title: 'ALRigs State AI', 
      description: 'Sovereign State Intelligence for the public sector.',
      tagline: 'Sovereign | State AI | Humanely',
      image: 'https://static.wixstatic.com/media/b20068_a25acc7d35e347f6a6220895956d3fd5~mv2.jpeg'
    }
  ];

  return (
    <div className="bg-transparent min-h-screen flex flex-col pb-20 pt-32">
      {/* Hero Section with Glassy Frame Center Aligned */}
      <div className="w-full max-w-5xl mx-auto px-6 mb-16 relative z-10">
        <div className="p-2 md:p-4 rounded-[2rem] bg-gradient-to-b from-[#0f172a]/60 to-[#020617]/60 backdrop-blur-xl border border-blue-900/30 shadow-2xl relative w-full">
            <img 
              src="https://static.wixstatic.com/media/b20068_0091d5e05b574a7dbe4889ac9184e97c~mv2.jpeg" 
              alt="Products Hero" 
              className="w-full h-auto object-contain rounded-[1.5rem] opacity-90"
              referrerPolicy="no-referrer"
            />
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {links.map((link, i) => (
            <div key={link.id} className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1) }}
                onClick={() => navigate(link.id)}
                className="rounded-3xl bg-[#050505] flex flex-col overflow-hidden relative group cursor-pointer aspect-[3/4] transition-all duration-500 border border-[#1a1a1a] hover:border-slate-500/50"
              >
                <div className="absolute inset-0 z-0 flex items-center justify-center p-8">
                  {link.image && (
                    <img 
                      src={link.image} 
                      alt={link.title} 
                      className="w-full h-full object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
                
                <div className="flex-grow relative z-10" />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase text-center px-4 whitespace-nowrap"
              >
                {link.tagline}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
