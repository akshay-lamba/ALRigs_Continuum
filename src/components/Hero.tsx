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
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Feature Card */}
            <div className="p-10 md:p-16 rounded-[3rem] bg-glass gradient-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/10 opacity-50" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-2">
                    ALRigs <br />
                    <span className="gradient-text uppercase">ARC Engine</span>
                  </h1>
                  <div className="h-1 w-20 bg-brand-primary rounded-full" />
                </motion.div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-primary/40 mb-4">Key Features:</h3>
                    <ul className="space-y-4">
                      {[
                        "Sovereign",
                        "Structural Margin Expansion",
                        "The last business moat"
                      ].map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                          className="flex items-center gap-4 text-xl md:text-2xl font-bold tracking-tight"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
                          <span className="gradient-text">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Hero Video - Half width layout */}
            <div className="rounded-[3rem] overflow-hidden gradient-border shadow-[0_0_50px_rgba(0,210,255,0.1)] aspect-video bg-black relative group">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              >
                <source src="https://video.wixstatic.com/video/b20068_fa128b75ad3a466e8b648cedc0cdaf32/1080p/mp4/file.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-secondary/10 rounded-full blur-[100px] animate-pulse" />
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
