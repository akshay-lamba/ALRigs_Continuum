import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isContinuumOpen, setIsContinuumOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="https://static.wixstatic.com/media/b20068_73160301523d4ab7a1a4b98949dd480e~mv2.jpeg" 
            alt="ALRigs Continuum Logo" 
            className="h-12 w-auto object-contain mix-blend-screen"
            referrerPolicy="no-referrer"
          />
          <span className="font-display font-bold text-xl tracking-tighter uppercase gradient-text">
            ALRigs Continuum
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase">
          <button onClick={() => onNavigate('home')} className={`hover:gradient-text transition-all ${currentPage === 'home' ? 'gradient-text' : 'gradient-text-muted'}`}>Home</button>
          
          <div className="relative group" onMouseEnter={() => setIsContinuumOpen(true)} onMouseLeave={() => setIsContinuumOpen(false)}>
            <button className={`hover:gradient-text transition-all flex items-center gap-1 ${currentPage.startsWith('product-') ? 'gradient-text' : 'gradient-text-muted'}`}>
              Our Products <ChevronDown className={`w-3 h-3 transition-transform ${isContinuumOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isContinuumOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full -left-4 pt-4"
                >
                  <div className="bg-black border border-brand-primary/10 rounded-2xl p-4 min-w-[200px] shadow-2xl backdrop-blur-xl">
                    <button onClick={() => onNavigate('product-pro')} className="block w-full text-left px-4 py-2 hover:bg-brand-primary/5 rounded-lg transition-colors gradient-text-muted hover:gradient-text mb-1">Pro AI</button>
                    <button onClick={() => onNavigate('product-business')} className="block w-full text-left px-4 py-2 hover:bg-brand-primary/5 rounded-lg transition-colors gradient-text-muted hover:gradient-text mb-1">Business AI</button>
                    <button onClick={() => onNavigate('product-transparency')} className="block w-full text-left px-4 py-2 hover:bg-brand-primary/5 rounded-lg transition-colors gradient-text-muted hover:gradient-text">Transparency AI</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => onNavigate('arc-engine')} className={`hover:gradient-text transition-all ${currentPage === 'arc-engine' ? 'gradient-text' : 'gradient-text-muted'}`}>ARC Engine</button>
          <button onClick={() => onNavigate('it-framework')} className={`hover:gradient-text transition-all ${currentPage === 'it-framework' ? 'gradient-text' : 'gradient-text-muted'}`}>.it Framework</button>
          <button onClick={() => onNavigate('arc-team')} className={`hover:gradient-text transition-all ${currentPage === 'arc-team' ? 'gradient-text' : 'gradient-text-muted'}`}>ARC Teams</button>
          <button onClick={() => onNavigate('impact')} className={`hover:gradient-text transition-all ${currentPage === 'impact' ? 'gradient-text' : 'gradient-text-muted'}`}>Impact</button>
          <button onClick={() => onNavigate('about')} className={`hover:gradient-text transition-all ${currentPage === 'about' ? 'gradient-text' : 'gradient-text-muted'}`}>About Us</button>
          
          <a href="mailto:a@alrigs.com" className="px-6 py-2 rounded-full gradient-border hover:scale-105 transition-all duration-300 font-bold ml-4">
            <span className="gradient-text">Connect</span>
          </a>
        </div>

        <button className="lg:hidden text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-black border-b border-brand-primary/10 p-6 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-sm text-left">Home</button>
            <div className="flex flex-col gap-2 pl-2 border-l border-brand-primary/10">
              <span className="text-[10px] text-brand-primary/30 uppercase tracking-[0.2em] font-bold mb-1">Our Products</span>
              <button onClick={() => { onNavigate('product-pro'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-xs text-left py-1">Pro AI</button>
              <button onClick={() => { onNavigate('product-business'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-xs text-left py-1">Business AI</button>
              <button onClick={() => { onNavigate('product-transparency'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-xs text-left py-1">Transparency AI</button>
            </div>
            <button onClick={() => { onNavigate('arc-engine'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-sm text-left">ARC Engine</button>
            <button onClick={() => { onNavigate('it-framework'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-sm text-left">.it Framework</button>
            <button onClick={() => { onNavigate('arc-team'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-sm text-left">ARC Teams</button>
            <button onClick={() => { onNavigate('impact'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-sm text-left">Impact</button>
            <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-sm text-left">About Us</button>
            <a href="mailto:a@alrigs.com" className="w-full py-3 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-center mt-2">
              Connect
            </a>
          </motion.div>
      )}
    </nav>
  );
}
