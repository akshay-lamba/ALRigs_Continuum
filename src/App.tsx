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
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ImpactPage from "./components/ImpactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Dynamic Title for SEO
    const titles: Record<string, string> = {
      home: "ALRigs Continuum | Sovereign AI ARC Engine",
      about: "About Us | ALRigs Continuum - Corporate Intelligence",
      impact: "Impact & Outcomes | ALRigs Continuum - 90-Day Pilot"
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
            <Problem />
            <ValueProp />
            <Comparison />
            <GlobalMap />
            <CTASection />
          </>
        )}
        
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'impact' && <ImpactPage />}
      </main>
      
      <Footer />
    </div>
  );
}
