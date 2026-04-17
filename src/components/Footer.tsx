import { motion } from "motion/react";
import { Twitter, Linkedin, Github, Mail, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://static.wixstatic.com/media/b20068_73160301523d4ab7a1a4b98949dd480e~mv2.jpeg" 
                alt="ALRigs Continuum Logo" 
                className="h-12 w-auto object-contain mix-blend-screen"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-2xl tracking-tighter uppercase gradient-text">
                ALRigs Continuum
              </span>
            </div>
            <p className="text-brand-primary/30 max-w-sm leading-relaxed text-sm mb-6">
              Building the permanent economic moat for the world's most ambitious enterprises through sovereign AI coordination.
            </p>
            <div className="space-y-2">
               <p className="text-[10px] text-brand-primary/20 font-mono uppercase tracking-[0.2em]">Global Logistics: 5-Day Direct Delivery</p>
               <p className="text-[10px] text-brand-primary/20 font-mono uppercase tracking-[0.2em]">Architecture: The .it Framework</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-[10px] text-brand-primary/50">Platform</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:gradient-text transition-all gradient-text-muted">ARC Engine</button></li>
              <li><a href="#" className="hover:gradient-text transition-all gradient-text-muted">Sovereign Logic</a></li>
              <li><a href="#" className="hover:gradient-text transition-all gradient-text-muted">Factorial Synthesis</a></li>
              <li><a href="#" className="hover:gradient-text transition-all gradient-text-muted">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-[10px] text-brand-primary/50">Company</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:gradient-text transition-all gradient-text-muted">About Us</a></li>
              <li><a href="#" className="hover:gradient-text transition-all gradient-text-muted">Global Presence</a></li>
              <li><a href="#" className="hover:gradient-text transition-all gradient-text-muted">Contact</a></li>
              <li><a href="#" className="hover:gradient-text transition-all gradient-text-muted">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-brand-primary/10 font-mono uppercase tracking-widest">
            © 2026 ALRigs Continuum. Registered in DIFC, UAE. Sovereign | Business AI | Humanely.
          </p>
          <div className="flex gap-6 text-brand-primary/20">
            <a href="https://www.youtube.com/channel/UCsXh4lFKLMXeC9S6sdkP5RA" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><Youtube className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/alrigs.aus" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><Mail className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
