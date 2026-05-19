
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { motion } from "motion/react";

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
    <div className="pt-16 pb-12 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Navigation */}
      <div className="mb-12">
        <button 
          onClick={() => navigate('/solutions')}
          className="flex items-center text-slate-500 hover:text-blue-500 font-semibold tracking-widest text-xs transition-colors relative z-10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> back to solutions
        </button>
      </div>

      {/* Seamless Image Sections */}
      <div className="w-full flex flex-col rounded-[2rem] overflow-hidden border border-blue-900/30 shadow-2xl bg-black">
        {/* Section 1: Hero */}
        <div className="w-full relative">
          <img 
            src="https://static.wixstatic.com/media/b20068_d7a489c1e3114463a9214241ca83d14e~mv2.jpeg" 
            alt="Pro AI Section 1"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Video Embedding Section */}
        <div className="w-full relative bg-neutral-950 py-12 md:py-24 px-6 flex flex-col items-center justify-center border-y border-white/5 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-5xl relative z-10"
          >
            <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-black shadow-[0_0_100px_-20px_rgba(59,130,246,0.2)]">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/videoseries?list=PL4_49j8YRffwdE0V0iu4IGkC7ic2XOKGK" 
                title="ALRigs Pro AI Showcase" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            
            {/* Subtle Label */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-black text-slate-500 tracking-[0.4em]">integrated intelligence view</span>
            </div>
          </motion.div>
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
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

        {/* Pricing Section */}
        <div className="w-full relative bg-neutral-950 border-t border-white/5 py-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
          <div className="w-full max-w-6xl relative z-10 flex flex-col items-center">
            
            <div className="grid grid-cols-1 gap-16 w-full">
              
              {/* Section 1: The big idea */}
              <div className="max-w-4xl mx-auto w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-8">
                    The big idea: stop renting, start owning
                  </h3>
                  <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                    <p>
                      <strong className="text-white">Most business software never stops charging you.</strong>
                    </p>
                    <p>
                      Every month, another bill lands. Then another. It adds up fast, and you never actually own anything.
                    </p>
                    <p className="text-white font-medium">
                      Pro AI is different. You buy it once, and it is yours forever.
                    </p>
                    <ul className="space-y-6 pt-4">
                      <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                        <span><strong className="text-white font-semibold">You own it.</strong> One payment and the system belongs to your business permanently. No monthly fees, no per-employee charges, no contracts to renegotiate.</span>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                        <span><strong className="text-white font-semibold">Your whole team moves faster.</strong> Tasks that used to take hours get done in minutes. Your people stop wasting time on repetitive work and start focusing on things that actually grow your business.</span>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                        <span><strong className="text-white font-semibold">No bill surprises, ever.</strong> One predictable cost covers everything — updates, new tools, fixes, and improvements. No shock when you hire someone new, and no price hikes when the vendor feels like it.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Section 2: System size */}
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { line1: "Pro AI", line2: "Nano", staff: "up to 100 employees", price: "AED 49,999", best: "Small offices and local retail businesses" },
                    { line1: "Pro AI", line2: "Standard", staff: "up to 300 employees", price: "AED 99,999", best: "Growing businesses automating daily tasks", glow: true },
                    { line1: "Pro AI", line2: "Platinum", staff: "up to 500 employees", price: "AED 199,999", best: "Larger companies handling heavy workloads" }
                  ].map((pkg, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className={`relative p-10 rounded-[2.5rem] border flex flex-col justify-between h-[500px] transition-all duration-700 ${pkg.glow ? 'bg-blue-600/10 border-blue-500/30 shadow-[0_40px_80px_-20px_rgba(59,130,246,0.2)]' : 'bg-white/[0.03] border-white/10 shadow-xl'}`}
                    >
                      {pkg.glow && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500/90 backdrop-blur-md py-1.5 px-5 rounded-full text-[10px] font-bold text-white shadow-xl">
                          most popular
                        </div>
                      )}
                      <div>
                        <div className="text-[10px] font-bold text-blue-500 tracking-widest mb-10">{pkg.staff}</div>
                        <h4 className="text-4xl md:text-5xl font-light text-white tracking-tighter leading-[0.9] mb-4">
                          {pkg.line1}<br />
                          <span className="font-medium text-blue-100">{pkg.line2}</span>
                        </h4>
                      </div>
                      <div className="mt-auto">
                        <div className="text-3xl font-medium text-white mb-8 tracking-tighter">{pkg.price}</div>
                        <div className="text-sm text-slate-500 font-light border-t border-white/10 pt-8 leading-relaxed italic">
                          {pkg.best}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="w-full p-16 md:p-24 rounded-[4rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5 mt-0 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                <h4 className="text-2xl md:text-3xl font-medium text-slate-300 tracking-tighter mb-16 text-center">Implementation and support</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
                  <div className="text-center md:text-left flex flex-col items-center md:items-start group">
                    <h5 className="text-white font-medium text-lg mb-4 tracking-tight group-hover:text-blue-400 transition-colors">Delivery to your doorstep</h5>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">Safe, secure, and prompt physical logistics to your business location.</p>
                  </div>
                  <div className="text-center md:text-left flex flex-col items-center md:items-start group">
                    <h5 className="text-white font-medium text-lg mb-4 tracking-tight group-hover:text-blue-400 transition-colors">White glove setup and technology support</h5>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">End-to-engineering deployment and strategic onboarding tailored to your workflow.</p>
                  </div>
                  <div className="text-center md:text-left flex flex-col items-center md:items-start group">
                    <h5 className="text-white font-medium text-lg mb-4 tracking-tight group-hover:text-blue-400 transition-colors">Transparent ongoing support costs</h5>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">No hidden fees. Absolute clarity on every future engagement with our technical team.</p>
                  </div>
                </div>
                <div className="mt-20 pt-12 border-t border-white/5 text-center">
                  <p className="text-slate-400 text-sm font-medium tracking-wide">
                    Sovereign intelligence backed by local engineering excellence. We showcase real business value through every installation.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Section 5: Resource Download - Minimalist */}
        <div className="w-full relative bg-neutral-900 py-20 px-8 flex flex-col items-center justify-center text-center border-t border-white/5 overflow-hidden group/download">
          {/* Amazing Sliding Graphic */}
          <motion.div 
            animate={{ 
              x: ['-100%', '100%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
          <motion.div 
            animate={{ 
              x: ['100%', '-100%'],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          />

          <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-16 w-full">
              {/* Row 1: PDF Resources */}
              <div className="flex flex-wrap items-center justify-center gap-8 w-full">
                {/* ARC Engine Card */}
                <a 
                  href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_a2476c1ee7e54b939da6d181780c27d7.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/card relative w-48 h-48 md:w-56 md:h-56 bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover/card:scale-110 transition-transform duration-500">
                     <Download className="w-6 h-6 text-blue-400" />
                   </div>
                  <span className="text-sm md:text-base text-white text-center leading-tight">
                    the arc engine
                  </span>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500/20 group-hover/card:bg-blue-500 transition-colors" />
                </a>

                {/* Insights Layer Card */}
                <a 
                  href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_08b3abfeb9a84a018ed00777ca7e1495.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/card relative w-48 h-48 md:w-56 md:h-56 bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.3)]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20 group-hover/card:scale-110 transition-transform duration-500">
                     <Download className="w-6 h-6 text-indigo-400" />
                   </div>
                  <span className="text-sm md:text-base text-white text-center leading-tight">
                    the insights layer
                  </span>

                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-indigo-500/20 group-hover/card:bg-indigo-500 transition-colors" />
                </a>
              </div>

              {/* Row 2: Support Credits */}
              <div className="flex flex-wrap items-center justify-center gap-8 w-full">
                {/* Single Ticket - Integration */}
                <div className="group/card relative w-48 h-48 md:w-56 md:h-56 bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-slate-500/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(200,200,200,0.1)]">
                  <div className="text-2xl font-bold text-white mb-2 leading-none tracking-tighter">AED 5,000</div>
                  <span className="text-xs text-slate-400 tracking-widest font-bold mb-4">single credit</span>
                  <p className="text-[10px] text-slate-500 text-center leading-tight">individual software task or upgrade</p>
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-slate-500/20 group-hover/card:bg-slate-400 transition-colors" />
                </div>

                {/* Ticket Bundle - Integration */}
                <div className="group/card relative w-48 h-48 md:w-56 md:h-56 bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)]">
                  <div className="text-2xl font-bold text-white mb-2 leading-none tracking-tighter">AED 22,500</div>
                  <span className="text-xs text-blue-400 tracking-widest font-bold mb-4">5 credits bundle</span>
                  <p className="text-[10px] text-slate-500 text-center leading-tight">software upgrades, tasks & connections</p>
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500/20 group-hover/card:bg-blue-500 transition-colors" />
                </div>

                {/* Ticket Enterprise - Integration */}
                <div className="group/card relative w-48 h-48 md:w-56 md:h-56 bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.3)]">
                  <div className="text-2xl font-bold text-white mb-2 leading-none tracking-tighter">AED 40,000</div>
                  <span className="text-xs text-indigo-400 tracking-widest font-bold mb-4">10 credits bundle</span>
                  <p className="text-[10px] text-slate-500 text-center leading-tight">strategic on-demand engineering</p>
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-indigo-500/20 group-hover/card:bg-indigo-500 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
