
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SOLUTIONSBusinessAI() {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Navigation */}
      <div className="mb-12">
        <button 
          onClick={() => navigate('/solutions')}
          className="flex items-center text-slate-500 hover:text-blue-500 font-semibold tracking-widest text-xs uppercase transition-colors relative z-10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to SOLUTIONS
        </button>
      </div>

      {/* Seamless Image Sections */}
      <div className="w-full flex flex-col rounded-[2rem] overflow-hidden border border-blue-900/30 shadow-2xl">
        {/* Hero Section */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_53b55a5786a3447e9d363d32633575f6~mv2.jpeg" 
            alt="Business AI Hero"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section 1 */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_566722d1d8bd4e92af98b70c5f195706~mv2.jpeg" 
            alt="Business AI Section 1"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section 2 */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_b23b7ffab8ce443f8cc4bed928bfbad4~mv2.jpeg" 
            alt="Business AI Section 2"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
