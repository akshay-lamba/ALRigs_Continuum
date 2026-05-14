
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function INTELLIGENCEPerformanceData() {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen space-y-16">
      <button 
        onClick={() => navigate('/intelligence')}
        className="flex items-center text-slate-500 hover:text-blue-500 font-semibold tracking-widest text-xs uppercase transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to INTELLIGENCE
      </button>

      <div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-400 mb-6 tracking-tighter">Performance Data</h1>
        <p className="text-xl font-medium text-slate-400 leading-relaxed mb-12">
          Headline content for Performance Data. Sublines and specific paragraphs will go here to explain the core concept concisely without fluff.
        </p>
      </div>

      <div className="p-8 rounded-[1rem] border-l-4 border-l-slate-400 bg-slate-900/30">
        <h3 className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-4">Business Track</h3>
        <p className="text-lg text-slate-300 font-medium">Revenue. Margin. Control. Ownership. (Three lines maximum, no jargon).</p>
      </div>

      <div className="p-8 rounded-[1rem] border-l-4 border-l-blue-500 bg-blue-900/10">
        <h3 className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-4">Technical Track</h3>
        <p className="text-lg text-slate-400 font-medium">Architecture. Mechanism. Framework. Data. Full technical language permitted here.</p>
      </div>

      <div className="p-8 rounded-[1rem] border-l-4 border-l-blue-500 bg-blue-900/10">
        <h3 className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-4">State Track</h3>
        <p className="text-lg text-slate-400 font-medium">Compliance. Governance. Accountability. Regulation. Validates the fit for jurisdiction.</p>
      </div>
    </div>
  );
}
