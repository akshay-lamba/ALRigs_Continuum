/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solution from "./components/Solution";
import ValueProp from "./components/ValueProp";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ImpactPage from "./components/ImpactPage";
import ArcEnginePage from "./components/ArcEnginePage";
import ProductShowcase from "./components/ProductShowcase";
import ProductsPage from "./components/ProductsPage";
import ITFrameworkPage from "./components/ITFrameworkPage";
import ARCTeamPage from "./components/ARCTeamPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Dynamic Title for SEO
    const titles: Record<string, string> = {
      home: "ALRigs Continuum | Sovereign AI & Open Design",
      products: "The Continuum | Products | ALRigs Continuum",
      "product-pro": "Pro AI | Private Business AI | ALRigs Continuum",
      "product-business": "Business AI | Sovereign Margin Expansion | ALRigs",
      "product-transparency": "Transparency AI | Sovereign State Operations | ALRigs",
      about: "The Philosophy | Open Design & Sovereignty | ALRigs",
      impact: "Real World Impact | ALRigs Continuum",
      "arc-engine": "ARC Engine | Sovereign Logic Architecture | ALRigs",
      "it-framework": "The .it Framework | System Integration Architecture",
      "arc-team": "ARC Teams | Sovereign Mission Operations"
    };
    document.title = titles[currentPage] || "ALRigs Continuum | Sovereign AI & Open Design Architecture";
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#000000] selection:bg-brand-primary/30">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <ProductShowcase onNavigate={setCurrentPage} />
          </>
        )}
        
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'product-pro' && <ProductsPage productId="pro" />}
        {currentPage === 'product-business' && <ProductsPage productId="business" />}
        {currentPage === 'product-transparency' && <ProductsPage productId="transparency" />}
        
        {currentPage === 'about' && (
          <>
            <AboutPage />
          </>
        )}
        
        {currentPage === 'impact' && (
          <>
            <ImpactPage />
          </>
        )}

        {currentPage === 'arc-engine' && <ArcEnginePage />}
        
        {currentPage === 'it-framework' && <ITFrameworkPage />}
        
        {currentPage === 'arc-team' && <ARCTeamPage />}
      </main>
      
      <Footer />
    </div>
  );
}
