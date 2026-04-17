import { motion } from "motion/react";
import { ArrowRight, Users, Building2, Landmark } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full aspect-video rounded-[3rem] overflow-hidden border border-brand-primary/10 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
        >
          <video 
            src="https://video.wixstatic.com/video/b20068_d4e8b3a8131b430585909fa012998467/1080p/mp4/file.mp4" 
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Subtle overlay to soften the video slightly and tie it to the aesthetic */}
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none opacity-40" />
        </motion.div>
      </div>
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)]" />
      </div>
    </section>
  );
}

