import * as fs from 'fs';
import * as path from 'path';

const appPath = path.resolve('src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

appContent = appContent.replace(
  /import { useState, useEffect } from "react";[\s\S]*?export default function App\(\) \{/,
  `import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solution from "./components/Solution";
import ValueProp from "./components/ValueProp";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ArcEnginePage from "./components/ArcEnginePage";
import ProductShowcase from "./components/ProductShowcase";
import ProductsPage from "./components/ProductsPage";
import ITFrameworkPage from "./components/ITFrameworkPage";
import ARCTeamPage from "./components/ARCTeamPage";
import HubPage from "./components/HubPage";
import GenericPage from "./components/GenericPage";

export default function App() {`
);

appContent = appContent.replace(
  /const titles: Record<string, string> = \{[\s\S]*?\};/,
  `const titles: Record<string, string> = {
      home: "ALRigs Continuum | Sovereign AI & Open Design",
      
      products: "Products | ALRigs Continuum",
      "product-pro": "Pro AI | Private Business AI | ALRigs Continuum",
      "product-business": "Business AI | Sovereign Margin Expansion | ALRigs",
      "product-transparency": "Transparency AI | Sovereign State Operations | ALRigs",
      
      blueprint: "Blueprint | Architecture & Systems | ALRigs",
      "blueprint-architecture": "Architecture | ALRigs",
      "blueprint-model": "The Model | Mathematical Foundations | ALRigs",
      "blueprint-it-framework": "The .it Framework | System Integration Architecture",
      
      ai: "AI Innovation | Tech Stack & Capabilities | ALRigs",
      "ai-tech-stack": "Tech Stack | Core AI Technologies | ALRigs",
      "ai-capabilities": "Capabilities | Pattern Recognition & Efficiency | ALRigs",
      
      about: "About Us | The Philosophy | ALRigs",
      "about-team": "ARC Teams | Sovereign Mission Operations",
      contact: "Contact | Reach Out | ALRigs"
    };`
);

const newRouting = `
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={setCurrentPage} />
            <ProductShowcase onNavigate={setCurrentPage} />
          </>
        )}
        
        {currentPage === 'products' && (
          <HubPage 
            title="Products"
            subtitle="The main landing page for our tools."
            links={[
              { id: 'product-pro', title: 'Pro AI', description: 'Individual page for the first product.' },
              { id: 'product-business', title: 'Business AI', description: 'Individual page for the second product.' },
              { id: 'product-transparency', title: 'Transparency AI', description: 'Individual page for the third product.' }
            ]}
            onNavigate={setCurrentPage}
          />
        )}
        {currentPage === 'product-pro' && <ProductsPage productId="pro" />}
        {currentPage === 'product-business' && <ProductsPage productId="business" />}
        {currentPage === 'product-transparency' && <ProductsPage productId="transparency" />}
        
        {currentPage === 'blueprint' && (
          <HubPage 
            title="Blueprint"
            subtitle="The page for our hidden systems and logic."
            links={[
              { id: 'blueprint-architecture', title: 'Architecture', description: 'How our systems are built.' },
              { id: 'blueprint-model', title: 'The Model', description: 'The math or logic behind the work.' },
              { id: 'blueprint-it-framework', title: 'The .it Framework', description: 'The step-by-step method we use to get results.' }
            ]}
            onNavigate={setCurrentPage}
          />
        )}
        {currentPage === 'blueprint-architecture' && <ArcEnginePage />}
        {currentPage === 'blueprint-model' && <GenericPage title="The Model" subtitle="The mathematical foundation of sovereign intelligence." content="A rigid, mathematics-first approach to deterministic and generative behavior modeling." />}
        {currentPage === 'blueprint-it-framework' && <ITFrameworkPage />}
        
        {currentPage === 'ai' && (
          <HubPage 
            title="AI Innovation"
            subtitle="The technology powering sovereign ecosystems."
            links={[
              { id: 'ai-tech-stack', title: 'Tech Stack', description: 'The specific AI tools we use.' },
              { id: 'ai-capabilities', title: 'Capabilities', description: 'What the AI does: saves time, finds patterns, executes.' }
            ]}
            onNavigate={setCurrentPage}
          />
        )}
        {currentPage === 'ai-tech-stack' && <GenericPage title="Tech Stack" subtitle="The specific AI tools we use." content="From tightly scoped local models to robust state-scale transformers, our stack is designed for autonomy." />}
        {currentPage === 'ai-capabilities' && <GenericPage title="Capabilities" subtitle="What our AI does." content="Time compression, hyper-pattern recognition, automated structural synthesis, and robust systemic execution." />}
        
        {currentPage === 'about' && (
          <HubPage 
            title="About ALRigs"
            subtitle="The company, the mission, and the connection."
            links={[
              { id: 'about-team', title: 'Team', description: 'Who we are and what we build.' },
              { id: 'contact', title: 'Contact', description: 'How to reach us and collaborate.' },
              { id: 'socials', title: 'Socials', description: 'Connect with us on LinkedIn and other networks.' }
            ]}
            onNavigate={setCurrentPage}
          />
        )}
        {currentPage === 'about-team' && <ARCTeamPage />}
        {currentPage === 'contact' && <GenericPage title="Contact" subtitle="How to reach us." content="Initiate connection with ALRigs command." />}
        {currentPage === 'socials' && <GenericPage title="Social Links" subtitle="Network & Outreach" content="LinkedIn, X, and direct encrypted channels." />}
        
      </main>
`;

appContent = appContent.replace(
  /<main>[\s\S]*?<\/main>/,
  newRouting
);

fs.writeFileSync(appPath, appContent, 'utf8');
console.log('App.tsx updated');
