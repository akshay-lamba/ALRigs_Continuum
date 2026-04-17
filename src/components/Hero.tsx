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
          className="relative w-full aspect-video flex items-center justify-center"
        >
          <video 
            src="https://video.wixstatic.com/video/b20068_fa128b75ad3a466e8b648cedc0cdaf32/1080p/mp4/file.mp4" 
            className="w-full h-full object-cover mix-blend-screen"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Radial fade to ensure video edges seamlessly blend into the black background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_black_80%)] pointer-events-none" />
        </motion.div>
      </div>
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)]" />
      </div>
    </section>
  );
}

