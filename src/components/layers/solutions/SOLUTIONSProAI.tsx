
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SOLUTIONSProAI() {
  const navigate = useNavigate();

  const solutions = [
    {
      id: "proai",
      path: "/solutions/proai",
      tagline: "Private | Pro AI | Humanely",
      image: "https://static.wixstatic.com/media/b20068_e10e35105f184034a2ed7dddb7b9a16a~mv2.jpeg"
    },
    {
      id: "businessai",
      path: "/solutions/businessai",
      tagline: "Sovereign | Business AI | Humanely",
      image: "https://static.wixstatic.com/media/b20068_cfdfa9463b1042b281a440b5da9c2746~mv2.jpeg",
      glow: true
    },
    {
      id: "transparencyai",
      path: "/solutions/transparencyai",
      tagline: "Sovereign | State AI | Humanely",
      image: "https://static.wixstatic.com/media/b20068_a25acc7d35e347f6a6220895956d3fd5~mv2.jpeg"
    }
  ];

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
        {/* Section 1: Hero */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_d7a489c1e3114463a9214241ca83d14e~mv2.jpeg" 
            alt="Pro AI Section 1"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section 2 */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_c7f75ab3cd904dfca17e90121d8df495~mv2.jpeg" 
            alt="Pro AI Section 2"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section 3 */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_da288a2ee964471d87c1ca357c70f94c~mv2.jpeg" 
            alt="Pro AI Section 3"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section 4 */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_dd503391d3b242e8967527396398b504~mv2.jpeg" 
            alt="Pro AI Section 4"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
