/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import ValueProp from "./components/ValueProp";
import Comparison from "./components/Comparison";
import GlobalMap from "./components/GlobalMap";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ImpactPage from "./components/ImpactPage";
import ArcEnginePage from "./components/ArcEnginePage";
import ProductShowcase from "./components/ProductShowcase";
import ProductsPage from "./components/ProductsPage";
import ITFrameworkPage from "./components/ITFrameworkPage";
import ARCTeamPage from "./components/ARCTeamPage";
import TeamsSection from "./components/TeamsSection";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Dynamic Title for SEO
    const titles: Record<string, string> = {
      home: "ALRigs Continuum | Sovereign AI",
      products: "The Continuum | ALRigs Continuum",
      "product-pro": "Pro AI | ALRigs Continuum",
      "product-business": "Business AI | ALRigs Continuum",
      "product-transparency": "Transparency AI | ALRigs Continuum",
      about: "About Us | ALRigs Philosophy",
      impact: "Impact | Real World Change",
      "arc-engine": "ARC Engine | The Heart of the Continuum",
      "it-framework": ".it Framework | Architecture of Sovereignty",
      "arc-team": "ARC Teams | The Delivery Mission"
    };
    document.title = titles[currentPage] || "ALRigs Continuum";
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#000000] selection:bg-brand-primary/30">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <ProductShowcase onNavigate={setCurrentPage} />
            <TeamsSection onNavigate={setCurrentPage} />
          </>
        )}
        
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'product-pro' && <ProductsPage productId="pro" />}
        {currentPage === 'product-business' && <ProductsPage productId="business" />}
        {currentPage === 'product-transparency' && <ProductsPage productId="transparency" />}
        
        {currentPage === 'about' && (
          <>
            <AboutPage />
            <Problem />
            <GlobalMap />
          </>
        )}
        
        {currentPage === 'impact' && (
          <>
            <ImpactPage />
            <Comparison />
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
