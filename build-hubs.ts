import * as fs from 'fs';
import * as path from 'path';

const navbarPath = path.resolve('src/components/Navbar.tsx');
let navbarContent = fs.readFileSync(navbarPath, 'utf8');

navbarContent = navbarContent.replace(
  /<div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">([\s\S]*?)<\/div>/,
  `<div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <button onClick={() => onNavigate('home')} className={\`hover:text-slate-300 transition-all \${currentPage === 'home' ? 'gradient-text' : 'text-slate-400'}\`}>Home</button>
          <button onClick={() => onNavigate('products')} className={\`hover:text-slate-300 transition-all \${currentPage.startsWith('product') ? 'gradient-text' : 'text-slate-400'}\`}>Products</button>
          <button onClick={() => onNavigate('blueprint')} className={\`hover:text-slate-300 transition-all \${currentPage.startsWith('blueprint') ? 'gradient-text' : 'text-slate-400'}\`}>Blueprint</button>
          <button onClick={() => onNavigate('ai')} className={\`hover:text-slate-300 transition-all \${currentPage.startsWith('ai') ? 'gradient-text' : 'text-slate-400'}\`}>AI</button>
          <button onClick={() => onNavigate('about')} className={\`hover:text-slate-300 transition-all \${currentPage.startsWith('about') ? 'gradient-text' : 'text-slate-400'}\`}>About</button>
          
          <button 
            onClick={() => onNavigate('contact')}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-slate-400 transition-all duration-300 font-bold ml-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            Connect
          </button>
        </div>`
);

navbarContent = navbarContent.replace(
  /<div className="h-12" \/> \{\/\* Spacer for close button \*\/\}[\s\S]*?<div className="mt-8 pt-8 border-t border-\[\#1e293b\]">/,
  `<div className="h-12" /> {/* Spacer for close button */}
              <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className={\`font-semibold tracking-wide text-lg text-left py-2 \${currentPage === 'home' ? 'gradient-text' : 'text-slate-400'}\`}>Home</button>
              <button onClick={() => { onNavigate('products'); setIsOpen(false); }} className={\`font-semibold tracking-wide text-lg text-left py-2 \${currentPage.startsWith('product') ? 'gradient-text' : 'text-slate-400'}\`}>Products</button>
              <button onClick={() => { onNavigate('blueprint'); setIsOpen(false); }} className={\`font-semibold tracking-wide text-lg text-left py-2 \${currentPage.startsWith('blueprint') ? 'gradient-text' : 'text-slate-400'}\`}>Blueprint</button>
              <button onClick={() => { onNavigate('ai'); setIsOpen(false); }} className={\`font-semibold tracking-wide text-lg text-left py-2 \${currentPage.startsWith('ai') ? 'gradient-text' : 'text-slate-400'}\`}>AI</button>
              <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className={\`font-semibold tracking-wide text-lg text-left py-2 \${currentPage.startsWith('about') ? 'gradient-text' : 'text-slate-400'}\`}>About</button>
              
              <div className="mt-8 pt-8 border-t border-[#1e293b]">`
);

fs.writeFileSync(navbarPath, navbarContent, 'utf8');
console.log('Navbar updated');

const footerPath = path.resolve('src/components/Footer.tsx');
let footerContent = fs.readFileSync(footerPath, 'utf8');

footerContent = footerContent.replace(
  /<div className="w-full max-w-7xl mx-auto px-6">[\s\S]*?<\/div>\s*<\/footer>/,
  `<div className="w-full max-w-7xl mx-auto px-6">
        {/* Row 1: Logo & Vision */}
        <div className="flex flex-col items-center mb-16">
          <button onClick={() => onNavigate && onNavigate('home')} className="flex items-center gap-1 mb-6 hover:opacity-80 transition-opacity">
            <span className="font-display font-bold text-3xl tracking-tighter text-slate-400">
              ALRigs
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-800 mt-1 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
          </button>
          <p className="text-sm font-medium tracking-wide text-slate-400 text-center max-w-md leading-relaxed">
            Sovereign Intelligence Architecture.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-left max-w-4xl mx-auto">
          <div>
            <h4 className="font-bold text-slate-300 mb-4 tracking-widest text-xs uppercase">Products</h4>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-500">
              <button onClick={() => onNavigate && onNavigate('product-pro')} className="hover:text-blue-500 transition-colors text-left">Pro AI</button>
              <button onClick={() => onNavigate && onNavigate('product-business')} className="hover:text-blue-500 transition-colors text-left">Business AI</button>
              <button onClick={() => onNavigate && onNavigate('product-transparency')} className="hover:text-blue-500 transition-colors text-left">Transparency AI</button>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-300 mb-4 tracking-widest text-xs uppercase">Blueprint</h4>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-500">
              <button onClick={() => onNavigate && onNavigate('blueprint-architecture')} className="hover:text-blue-500 transition-colors text-left">Architecture</button>
              <button onClick={() => onNavigate && onNavigate('blueprint-model')} className="hover:text-blue-500 transition-colors text-left">The Model</button>
              <button onClick={() => onNavigate && onNavigate('blueprint-it-framework')} className="hover:text-blue-500 transition-colors text-left">The .it Framework</button>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-300 mb-4 tracking-widest text-xs uppercase">AI</h4>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-500">
              <button onClick={() => onNavigate && onNavigate('ai-tech-stack')} className="hover:text-blue-500 transition-colors text-left">Tech Stack</button>
              <button onClick={() => onNavigate && onNavigate('ai-capabilities')} className="hover:text-blue-500 transition-colors text-left">Capabilities</button>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-300 mb-4 tracking-widest text-xs uppercase">About</h4>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-500">
              <button onClick={() => onNavigate && onNavigate('about-team')} className="hover:text-blue-500 transition-colors text-left">Team</button>
              <button onClick={() => onNavigate && onNavigate('contact')} className="hover:text-blue-500 transition-colors text-left">Contact</button>
              <a href="#" className="hover:text-blue-500 transition-colors text-left">Socials</a>
            </div>
          </div>
        </div>

        {/* Row 3: Legal & Copyright block */}
        <div className="pt-8 border-t border-[#1e293b] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-semibold text-slate-500 tracking-wider">
            &copy; {new Date().getFullYear()} ALRigs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>`
);

fs.writeFileSync(footerPath, footerContent, 'utf8');
console.log('Footer updated');
