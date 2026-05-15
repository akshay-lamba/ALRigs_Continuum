/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

// Imports to copy to App.tsx:
import VISIONLayer from './components/layers/vision/VISIONLayer';
import VISIONTheBelief from './components/layers/vision/VISIONTheBelief';
import VISIONTheProblemWeSaw from './components/layers/vision/VISIONTheProblemWeSaw';
import VISIONTheWorldWeBuild from './components/layers/vision/VISIONTheWorldWeBuild';
import VISIONIntelligenceHumanely from './components/layers/vision/VISIONIntelligenceHumanely';
import VISIONTheTimeline from './components/layers/vision/VISIONTheTimeline';
import PEOPLELayer from './components/layers/people/PEOPLELayer';
import PEOPLEOwnerPage from './components/layers/people/PEOPLEOwnerPage';
import PEOPLERunningaDivision from './components/layers/people/PEOPLERunningaDivision';
import PEOPLERunningaCompany from './components/layers/people/PEOPLERunningaCompany';
import PEOPLERunningaCountry from './components/layers/people/PEOPLERunningaCountry';
import PEOPLEBuildingWithUs from './components/layers/people/PEOPLEBuildingWithUs';
import SOLUTIONSLayer from './components/layers/solutions/SOLUTIONSLayer';
import SOLUTIONSProAI from './components/layers/solutions/SOLUTIONSProAI';
import SOLUTIONSBusinessAI from './components/layers/solutions/SOLUTIONSBusinessAI';
import SOLUTIONSTransparencyAI from './components/layers/solutions/SOLUTIONSTransparencyAI';
import SOLUTIONSHelpMeChoose from './components/layers/solutions/SOLUTIONSHelpMeChoose';
import SOLUTIONSHowTheyConnect from './components/layers/solutions/SOLUTIONSHowTheyConnect';
import INTELLIGENCELayer from './components/layers/intelligence/INTELLIGENCELayer';
import INTELLIGENCETheZeroStack from './components/layers/intelligence/INTELLIGENCETheZeroStack';
import INTELLIGENCETheARCEngine from './components/layers/intelligence/INTELLIGENCETheARCEngine';
import INTELLIGENCETheitFramework from './components/layers/intelligence/INTELLIGENCETheitFramework';
import INTELLIGENCETheScience from './components/layers/intelligence/INTELLIGENCETheScience';
import INTELLIGENCEPerformanceData from './components/layers/intelligence/INTELLIGENCEPerformanceData';
import MARKETLayer from './components/layers/market/MARKETLayer';
import MARKETSovereigntyShift from './components/layers/market/MARKETSovereigntyShift';
import MARKETIndustriesWeAreIn from './components/layers/market/MARKETIndustriesWeAreIn';
import MARKETStrategicPartners from './components/layers/market/MARKETStrategicPartners';
import MARKETIntegrationGallery from './components/layers/market/MARKETIntegrationGallery';
import MARKETMarketPapers from './components/layers/market/MARKETMarketPapers';
import TRUSTLayer from './components/layers/trust/TRUSTLayer';
import TRUSTInThePress from './components/layers/trust/TRUSTInThePress';
import ProductsPage from './components/ProductsPage';
import ProductsHubPage from './components/ProductsHubPage';
import { useParams } from "react-router-dom";

function ProductRouteWrapper() {
  const { id } = useParams();
  return <ProductsPage productId={id} />;
}


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = "ALRigs Continuum | Intelligence Exclusively Owned By You";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black selection:bg-blue-500/30 font-sans text-slate-400 relative overflow-x-hidden">
      <ScrollToTop />
      
      {/* Seamless Global Background Texture */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.06] mix-blend-screen" 
           style={{ 
             backgroundImage: `url('https://static.wixstatic.com/media/b20068_9fa90575e66a4e579bca39912badb4fc~mv2.jpeg')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundAttachment: 'fixed'
           }} />
      
      {/* Background Glows for Depth */}
      <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/5 blur-[150px]" />
      </div>

      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Area: Offset by navbar height */}
      <main className="pt-28 w-full min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/vision" element={<VISIONLayer />} />
            <Route path="/vision/belief" element={<VISIONTheBelief />} />
            <Route path="/vision/problem" element={<VISIONTheProblemWeSaw />} />
            <Route path="/vision/world" element={<VISIONTheWorldWeBuild />} />
            <Route path="/vision/intelligence-humanely" element={<VISIONIntelligenceHumanely />} />
            <Route path="/vision/timeline" element={<VISIONTheTimeline />} />
            <Route path="/people" element={<PEOPLELayer />} />
            <Route path="/owner" element={<PEOPLEOwnerPage />} />
            <Route path="/people/division" element={<PEOPLERunningaDivision />} />
            <Route path="/people/company" element={<PEOPLERunningaCompany />} />
            <Route path="/people/country" element={<PEOPLERunningaCountry />} />
            <Route path="/people/building" element={<PEOPLEBuildingWithUs />} />
            <Route path="/solutions" element={<SOLUTIONSLayer />} />
            <Route path="/solutions/proai" element={<SOLUTIONSProAI />} />
            <Route path="/solutions/businessai" element={<SOLUTIONSBusinessAI />} />
            <Route path="/solutions/transparencyai" element={<SOLUTIONSTransparencyAI />} />
            <Route path="/solutions/help" element={<SOLUTIONSHelpMeChoose />} />
            <Route path="/solutions/connect" element={<SOLUTIONSHowTheyConnect />} />
            <Route path="/products" element={<ProductsHubPage />} />
            <Route path="/products/:id" element={<ProductRouteWrapper />} />
            <Route path="/intelligence" element={<INTELLIGENCELayer />} />
            <Route path="/intelligence/zero-stack" element={<INTELLIGENCETheZeroStack />} />
            <Route path="/intelligence/arc-engine" element={<INTELLIGENCETheARCEngine />} />
            <Route path="/intelligence/it-framework" element={<INTELLIGENCETheitFramework />} />
            <Route path="/intelligence/science" element={<INTELLIGENCETheScience />} />
            <Route path="/intelligence/performance" element={<INTELLIGENCEPerformanceData />} />
            <Route path="/market" element={<MARKETLayer />} />
            <Route path="/market/sovereignty" element={<MARKETSovereigntyShift />} />
            <Route path="/market/industries" element={<MARKETIndustriesWeAreIn />} />
            <Route path="/market/partners" element={<MARKETStrategicPartners />} />
            <Route path="/market/integration" element={<MARKETIntegrationGallery />} />
            <Route path="/market/papers" element={<MARKETMarketPapers />} />
            <Route path="/trust" element={<TRUSTLayer />} />
            <Route path="/trust/press" element={<TRUSTInThePress />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </div>
  );
}
