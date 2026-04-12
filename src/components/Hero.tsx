import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 space-bg">
      {/* Space Particles / Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 1, 0.5],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-brand-primary rounded-full"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Side: Tagline & Messaging */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-20"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight gradient-text uppercase mb-8">
              Sovereign | Business AI | Humanely
            </h1>
            <p className="text-xl font-light tracking-[0.2em] uppercase gradient-text-muted max-w-md leading-relaxed">
              The ARC Engine: Structural Margin Expansion for the Global Enterprise.
            </p>
          </motion.div>

          {/* Right Side: Hero Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative w-full flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full aspect-video lg:w-[120%] lg:-mr-[10%] overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover object-center opacity-70"
              >
                <source src="https://video.wixstatic.com/video/b20068_fa128b75ad3a466e8b648cedc0cdaf32/1080p/mp4/file.mp4" type="video/mp4" />
              </video>
              
              {/* Seamless Blending Gradients - No Frame */}
              {/* Stronger left fade to merge with text */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-primary/20">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-primary/30 to-transparent" />
      </motion.div>
    </section>
  );
}
