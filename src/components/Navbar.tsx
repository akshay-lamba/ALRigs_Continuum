import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LAYERS = [
  { name: 'HOME', path: '/' },
  { name: 'PEOPLE', path: '/people' },
  { name: 'SOLUTIONS', path: '/solutions' },
  { name: 'INTELLIGENCE', path: '/intelligence' },
  { name: 'MARKET', path: '/market' },
  { name: 'TRUST', path: '/trust' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/5 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-28 flex items-center justify-between">
          
          {/* Logo */}
          <button onClick={() => navigate('/')} className="hover:opacity-80 transition-opacity">
            <img src="https://static.wixstatic.com/media/b20068_2c836ed25c204a9284ce8a4a72b85375~mv2.jpeg" alt="ALRigs" className="h-10 md:h-12 object-contain mix-blend-screen" referrerPolicy="no-referrer" />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8 gap-4 md:gap-6 xl:gap-8">
            {LAYERS.map(layer => (
              <button
                key={layer.name}
                onClick={() => navigate(layer.path)}
                className={`text-xs font-bold tracking-widest lowercase transition-colors ${isActive(layer.path) ? 'text-blue-500' : 'text-slate-400 hover:text-slate-400'}`}
              >
                {layer.name}
              </button>
            ))}
          </div>

          {/* CTA Group (Desktop) */}
          <div className="hidden lg:flex items-center">
            <a 
              href="mailto:g@alrigs.com"
              className="inline-block px-5 py-2 md:px-6 md:py-2.5 bg-blue-900 text-slate-400 font-bold lowercase tracking-widest text-[10px] md:text-xs rounded-full hover:bg-slate-300 hover:text-slate-900 transition-all shadow-[0_0_20px_rgba(148,163,184,0.1)]"
            >
              talk to us
            </a>
          </div>

          {/* Mobile Menu Toggle & CTA Group */}
          <div className="flex lg:hidden items-center gap-4 ml-auto">
            <a 
              href="mailto:g@alrigs.com"
              className="inline-block px-4 py-2 border border-blue-900/50 bg-blue-900/10 text-slate-400 font-bold lowercase tracking-widest text-[10px] rounded-full hover:bg-blue-900/30 transition-all"
            >
              talk to us
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black pt-36 px-6 pb-8 flex flex-col lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 font-bold text-2xl tracking-tighter lowercase items-start">
              {LAYERS.map(layer => (
                <button
                  key={layer.name}
                  onClick={() => { navigate(layer.path); setIsOpen(false); }}
                  className={`text-left transition-colors ${isActive(layer.path) ? 'text-blue-500' : 'text-slate-400 hover:text-slate-400'}`}
                >
                  {layer.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
