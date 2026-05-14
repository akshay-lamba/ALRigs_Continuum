import { motion, AnimatePresence } from "motion/react";
import { Shield, Lock, Share2, Database, Layers, Download, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ITFrameworkPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Note: PowerPoint files cannot be dynamically converted to JPEGs in the browser.
  // Please export your PPTX slides as JPEGs using PowerPoint ("Save As > JPEG") 
  // and upload them to Wix, then paste their URLs in this array:
  const slides = [
    "https://placehold.co/1920x1080/111111/888888?text=Slide+1%0A(Export+from+PPTX+and+replace+URL)",
    "https://placehold.co/1920x1080/111111/888888?text=Slide+2%0A(Export+from+PPTX+and+replace+URL)",
    "https://placehold.co/1920x1080/111111/888888?text=Slide+3%0A(Export+from+PPTX+and+replace+URL)",
    "https://placehold.co/1920x1080/111111/888888?text=Slide+4%0A(Export+from+PPTX+and+replace+URL)"
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const principles = [
    {
      title: "Private Intelligence Layer",
      desc: "Your business logic is fully protected from being used for public trainer models. It is captured and stored as a permanent balance-sheet asset.",
      icon: <Database className="w-8 h-8" />
    },
    {
      id: "integration",
      title: "Interoperable Trust",
      desc: "Designed to sit as a bridge between legacy systems and the autonomous age, ensuring safe data flow.",
      icon: <Share2 className="w-8 h-8" />
    },
    {
      title: "Data Sovereignty",
      desc: "Zero-leakage architecture ensuring all business logic stays within your physical or digital perimeter.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Slide Carousel Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 mt-16 text-center"
        >
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter  text-slate-400">
              The <span className="gradient-text">.it</span> Framework
            </h1>
            <p className="text-lg md:text-xl font-light tracking-widest  text-gray-400 max-w-3xl mx-auto">
              System Integration Architecture
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-[2rem] overflow-hidden bg-[#0f172a] border border-blue-900/30 shadow-2xl group hover:border-blue-500/50 transition-all duration-500 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slides[currentSlide]}
                alt={`.it Framework Slide ${currentSlide + 1}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full object-contain bg-[#020617]"
                style={{ backgroundColor: "#000" }}
              />
            </AnimatePresence>

            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 p-3 rounded-full bg-[#020617]/50 hover:bg-blue-800 text-slate-400 backdrop-blur-md border border-slate-500/20 transition-colors z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-4 p-3 rounded-full bg-[#020617]/50 hover:bg-blue-800 text-slate-400 backdrop-blur-md border border-slate-500/20 transition-colors z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "bg-blue-800 scale-125" : "bg-slate-500/30 hover:bg-slate-500/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-glass gradient-border"
            >
              <div className="mb-8 gradient-text">{p.icon}</div>
              <h3 className="text-2xl font-bold mb-4  tracking-tight gradient-text">{p.title}</h3>
              <p className="text-lg leading-relaxed gradient-text-muted font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Hero PDF Download Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_0b31fb23a22f406083fd1962c51378ae.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full overflow-hidden rounded-[3rem] bg-brand-primary/5 hover:bg-brand-primary/10 border border-brand-primary/20 hover:border-brand-primary/50 transition-all duration-500 cursor-pointer"
          >
            {/* Dynamic Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1.5s]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 items-center relative z-10">
              
              {/* Product Thumbnail Section */}
              <div className="col-span-1 lg:col-span-2 p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-brand-primary/10 bg-[#020617]/40">
                <img 
                  src="https://static.wixstatic.com/media/b20068_c2e91dd7c1b541c68e66bdf3b0ce6146~mv2.png" 
                  alt=".it Framework" 
                  className="w-40 sm:w-48 lg:w-56 object-contain mix-blend-screen drop-shadow-[0_0_25px_rgba(59,130,246,0.2)] group-hover:drop-shadow-[0_0_35px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Document Details Section */}
              <div className="col-span-1 lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6 flex items-center gap-3">
                  <div className="p-3 bg-[#020617] rounded-lg border border-brand-primary/30 gradient-text shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-[0.2em]  gradient-text/60 mb-1">
                      Technical Deep Dive
                    </span>
                    <span className="text-xl md:text-2xl font-black  tracking-tight text-slate-400">
                      The .it Framework Architecture
                    </span>
                  </div>
                </div>

                <p className="text-lg font-light text-slate-400/50 mb-8 max-w-lg leading-relaxed">
                  Explore the foundational mechanics of the proprietary framework enabling deterministic, zero-leakage enterprise intelligence.
                </p>

                <div className="flex items-center gap-6">
                  <div className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-slate-300 font-bold  tracking-widest text-xs hover:from-blue-500 hover:to-blue-700 transition-colors">
                    <Download className="w-4 h-4 text-slate-300" />
                    Download PDF
                  </div>
                  <span className="text-xs font-mono tracking-[0.2em]  gradient-text/40 hidden md:block">
                    Size: 1.1 MB
                  </span>
                </div>
              </div>
            </div>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
