import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) {
  const [isOpen, setIsOpen] = useState(false);

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

        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
          <button onClick={() => onNavigate('home')} className={`hover:gradient-text transition-all ${currentPage === 'home' ? 'gradient-text' : 'gradient-text-muted'}`}>Home</button>
          <button onClick={() => onNavigate('products')} className={`hover:gradient-text transition-all ${currentPage === 'products' ? 'gradient-text' : 'gradient-text-muted'}`}>Our Products</button>
          <button onClick={() => onNavigate('arc-engine')} className={`hover:gradient-text transition-all ${currentPage === 'arc-engine' ? 'gradient-text' : 'gradient-text-muted'}`}>ARC Engine</button>
          <button onClick={() => onNavigate('impact')} className={`hover:gradient-text transition-all ${currentPage === 'impact' ? 'gradient-text' : 'gradient-text-muted'}`}>Impact</button>
          <button onClick={() => onNavigate('about')} className={`hover:gradient-text transition-all ${currentPage === 'about' ? 'gradient-text' : 'gradient-text-muted'}`}>About Us</button>
          <a href="mailto:a@alrigs.com" className="px-6 py-2 rounded-full gradient-border hover:scale-105 transition-all duration-300 font-bold">
            <span className="gradient-text">Connect</span>
          </a>
        </div>

        <button className="md:hidden text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-black border-b border-brand-primary/10 p-6 flex flex-col gap-4"
          >
            <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-sm text-left">Home</button>
            <button onClick={() => { onNavigate('products'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-sm text-left">Our Products</button>
            <button onClick={() => { onNavigate('arc-engine'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-sm text-left">ARC Engine</button>
            <button onClick={() => { onNavigate('impact'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-sm text-left">Impact</button>
            <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="text-brand-primary/60 font-bold uppercase tracking-widest text-sm text-left">About Us</button>
            <a href="mailto:a@alrigs.com" className="w-full py-3 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary text-black font-bold text-center">
              Connect
            </a>
          </motion.div>
      )}
    </nav>
  );
}
