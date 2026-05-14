
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SOLUTIONSTransparencyAI() {
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
          <video 
            src="https://video.wixstatic.com/video/b20068_72f8babf4bac4cf584ee3d046082f8eb/1080p/mp4/file.mp4"
            className="w-full h-auto block"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Section 2 */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_35659a0a94244bcca51c471be779bea0~mv2.jpeg" 
            alt="State AI Section 2"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section 3 */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_184c59eef10041028307d11ebb0125ed~mv2.jpeg" 
            alt="State AI Section 3"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section 4 */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_8b71ac6492344ca79837137e7bd10961~mv2.jpeg" 
            alt="State AI Section 4"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
