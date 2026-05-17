
import { motion } from "motion/react";
import { ShieldCheck, ExternalLink, Building2, Calendar, Scale, MapPin, Mail, Fingerprint, FileCheck, Linkedin, Youtube, UserCircle } from "lucide-react";

export default function TRUSTLayer() {
  const companyDetails = [
    { label: "Company Name", value: "ALRigs AI Continuum Ltd", icon: <Building2 className="w-5 h-5 text-blue-500" /> },
    { label: "Registration Number", value: "12771", icon: <Fingerprint className="w-5 h-5 text-blue-500" /> },
    { label: "Company Type", value: "Private Company", icon: <Scale className="w-5 h-5 text-blue-500" /> },
    { label: "Jurisdiction", value: "Dubai International Financial Centre (DIFC), UAE", icon: <MapPin className="w-5 h-5 text-blue-500" /> },
    { label: "Incorporated", value: "3 March 2026", icon: <Calendar className="w-5 h-5 text-blue-500" /> },
    { label: "Governing Law", value: "DIFC Law No. 5 of 2018 (Companies Law)", icon: <FileCheck className="w-5 h-5 text-blue-500" /> },
    { label: "Contact", value: "a@alrigs.com", icon: <Mail className="w-5 h-5 text-blue-500" /> },
  ];

  return (
    <div className="bg-transparent text-slate-300 min-h-screen font-sans overflow-x-hidden pt-12 pb-20">
      
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-24">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            <ShieldCheck className="w-4 h-4" /> Compliance by Transparency
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            Trust & Legal
          </h1>
          <p className="text-xs md:text-sm font-black text-blue-500 uppercase tracking-[0.4em] max-w-2xl mx-auto">
            ALRigs | Intelligence | Humanely
          </p>
        </motion.div>

        {/* The "Certificate" Card */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="w-full relative bg-[#050505] rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden p-8 md:p-16 mb-20"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.6em] mb-8">Corporate Identity</h2>
                <div className="space-y-8">
                  {companyDetails.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-lg text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
               <div>
                <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.6em] mb-8">Registration Details</h2>
                <div className="space-y-8">
                  {companyDetails.slice(4, 6).map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-lg text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex gap-4">
                    <div className="mt-1"><MapPin className="w-5 h-5 text-blue-500" /></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Registered Address</p>
                      <p className="text-base text-white font-medium leading-relaxed max-w-sm">
                        Unit IH-00-01-01-OF-01, Level 01, Innovation One, Dubai International Financial Centre, Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
               <div className="px-6 py-3 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                  <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-1 text-center">Licence Status</p>
                  <p className="text-sm font-black text-white uppercase text-center">Active</p>
               </div>
               <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Coverage</p>
                  <p className="text-sm text-slate-300 font-mono">February 2026 — February 2027</p>
               </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Last System Verification</p>
              <p className="text-sm text-slate-300 font-mono">3 March 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Connect & Leadership Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center text-center"
          >
            <UserCircle className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Leadership</h3>
            <p className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Geetika Chawla Lamba</p>
            <p className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-8">Chief Executive Officer</p>
            <button 
              onClick={() => window.open('https://www.linkedin.com/in/geetika-chawla/', '_blank')}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-300 hover:bg-white hover:text-black transition-all"
            >
              <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn Profile
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center text-center"
          >
            <Mail className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Connect with us</h3>
            <p className="text-xl font-bold text-white mb-8 select-all">a@alrigs.com</p>
            
            <div className="flex gap-4">
              <button 
                onClick={() => window.open('https://www.linkedin.com/company/alrigs', '_blank')}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all text-slate-400 hover:text-blue-400"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </button>
              <button 
                onClick={() => window.open('https://www.youtube.com/@alrigs', '_blank')}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-red-500/50 transition-all text-slate-400 hover:text-red-500"
                title="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Verification Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-[2rem] bg-white/[0.02] border border-white/5 p-8 md:p-12 text-center"
        >
          <h3 className="text-lg font-black text-white uppercase tracking-widest mb-6">Independent Verification</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            As a firm operating within the DIFC, our registration and licence status are matters of public record. You may verify these details directly via the DIFC Public Register.
          </p>
          
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="bg-black/50 border border-white/5 px-6 py-4 rounded-xl flex flex-col items-center">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">Verification Code</p>
              <p className="text-lg text-blue-400 font-mono font-bold select-all">SR-718179-MHoI-35590761-PKdBNk</p>
            </div>
          </div>

          <button 
            onClick={() => window.open('https://difc.ae/operating/document-verification', '_blank')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] rounded-full hover:scale-105 active:scale-95 transition-all"
          >
            Verify Independently <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </div>
  );
}

