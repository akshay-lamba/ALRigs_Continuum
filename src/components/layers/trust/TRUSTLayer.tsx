
import { motion } from "motion/react";
import { ArrowRight, FileText, Download, Printer, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const hubData = [
  {
    id: "zone-2",
    title: "ZONE 2 — Core Legal Documents",
    docs: [
      {
        title: "Terms & Conditions",
        version: "v2.1.0",
        effective: "1 May 2026",
        reviewed: "15 Apr 2026",
        summary: [
          "Scope of services",
          "Client classification framework (Professional vs Retail)",
          "What your AI does and does not constitute",
          "No-reliance clause & Limitation of liability",
          "Governing law: DIFC / Jurisdiction: DIFC Courts"
        ]
      },
      {
        title: "Privacy Policy (DIFC DPL Amendment)",
        version: "v3.0.0",
        effective: "1 Jun 2026",
        reviewed: "10 May 2026",
        summary: [
          "Identity of data controller & DPO contact details",
          "Purpose and legal basis for processing",
          "Transfers outside DIFC — safeguards in place",
          "Full list of data subject rights",
          "Automated decision-making and profiling disclosure"
        ]
      },
      {
        title: "AI Systems Transparency Notice (DIFC Reg 10)",
        version: "v1.2.0",
        effective: "1 May 2026",
        reviewed: "1 May 2026",
        summary: [
          "AI systems operated and functions",
          "Personal data processed and purpose",
          "Human oversight mechanisms",
          "DPIA status confirmation",
          "AI ethics principles applied"
        ]
      },
      {
        title: "Cookie Policy",
        version: "v1.5.0",
        effective: "1 Jan 2026",
        reviewed: "1 Jan 2026",
        summary: [
          "First-party vs third-party cookies",
          "Purpose of each category",
          "Consent mechanism and withdrawal"
        ]
      },
      {
        title: "Complaints Policy",
        version: "v2.0.0",
        effective: "1 Jan 2026",
        reviewed: "1 Jan 2026",
        summary: [
          "How to submit a complaint",
          "Resolution and escalation paths",
          "Right to escalate to DFSA & DIFC Courts"
        ]
      },
      {
        title: "Risk Disclosure Statement",
        version: "v1.0.0",
        effective: "1 Mar 2026",
        reviewed: "1 Mar 2026",
        summary: [
          "Limitations of AI outputs",
          "No guarantee of accuracy or completeness",
          "User responsibility for decisions",
          "Regulatory and legal risks"
        ]
      }
    ]
  },
  {
    id: "zone-3",
    title: "ZONE 3 — Data Governance Documents",
    docs: [
      {
        title: "Data Retention Policy",
        version: "v1.1.0",
        effective: "1 Feb 2026",
        reviewed: "15 Jan 2026",
        summary: [
          "Retention period by data category",
          "Deletion and anonymisation process",
          "Legal basis for extended retention"
        ]
      },
      {
        title: "Data Breach Response Policy",
        version: "v2.0.0",
        effective: "1 Jan 2026",
        reviewed: "1 Jan 2026",
        summary: [
          "Internal response timeline",
          "DIFC Commissioner notification obligation (72 hours)",
          "Public summary of notified breaches"
        ]
      },
      {
        title: "Cross-Border Data Transfer Notice",
        version: "v1.3.0",
        effective: "1 Apr 2026",
        reviewed: "1 Apr 2026",
        summary: [
          "Adequacy basis or safeguards for transfers",
          "Standard contractual clauses",
          "Post July 2025: adequacy assessment conducted"
        ]
      },
      {
        title: "Sub-Processor / Third-Party Vendor List",
        version: "v4.0.0",
        effective: "15 May 2026",
        reviewed: "10 May 2026",
        summary: [
          "Every third party processing client data",
          "Data received and processing locations",
          "Regulatory/certification status"
        ]
      }
    ]
  },
  {
    id: "zone-4",
    title: "ZONE 4 — AI Governance",
    subtitle: "Publishing this is our competitive moat. True operational transparency.",
    docs: [
      {
        title: "AI Ethics Policy",
        version: "v1.0.0",
        effective: "1 Feb 2026",
        reviewed: "1 Feb 2026",
        summary: [
          "Ethics, fairness, transparency, security, accountability",
          "How mechanisms are operationalised",
          "Internal accountability"
        ]
      },
      {
        title: "AI System Register (Summary)",
        version: "v1.2.0",
        effective: "10 May 2026",
        reviewed: "1 May 2026",
        summary: [
          "Processing purpose & Data inputs",
          "Risk classification (standard vs high-risk)",
          "DPIA conducted: yes + date"
        ]
      },
      {
        title: "DPIA Summary",
        version: "v1.0.0",
        effective: "15 Mar 2026",
        reviewed: "15 Mar 2026",
        summary: [
          "Confirmation DPIA exists",
          "Scope, outcome, and review date"
        ]
      },
      {
        title: "AI Limitations Disclosure",
        version: "v2.1.0",
        effective: "1 Apr 2026",
        reviewed: "15 Mar 2026",
        summary: [
          "Known failure modes or edge cases",
          "How errors are identified and corrected",
          "User responsibilities"
        ]
      },
      {
        title: "Acceptable Use Policy for AI",
        version: "v1.0.0",
        effective: "1 Jan 2026",
        reviewed: "1 Jan 2026",
        summary: [
          "Permitted and prohibited uses",
          "Consequences of misuse"
        ]
      }
    ]
  },
  {
    id: "zone-5",
    title: "ZONE 5 — Financial Crime & AML",
    docs: [
      {
        title: "AML/CFT Policy Summary",
        version: "v1.0.0",
        effective: "1 Jan 2026",
        reviewed: "1 Jan 2026",
        summary: [
          "Commitment to comply with DIFC AML and FATF",
          "KYC overview & Sanctions screening",
          "MLRO appointment and Training"
        ]
      },
      {
        title: "Sanctions Policy",
        version: "v1.0.0",
        effective: "1 Jan 2026",
        reviewed: "1 Jan 2026",
        summary: [
          "Regimes complied with (UAE, UN, EU, US OFAC)",
          "Screening process & match actions"
        ]
      }
    ]
  },
  {
    id: "zone-6",
    title: "ZONE 6 — Cybersecurity & Operational Resilience",
    docs: [
      {
        title: "Cybersecurity Policy Summary",
        version: "v2.0.0",
        effective: "1 Feb 2026",
        reviewed: "15 Jan 2026",
        summary: [
          "ISO 27001 applied framework",
          "Vulnerability management & Incident response",
          "Certification commitment timeline"
        ]
      },
      {
        title: "Business Continuity Summary",
        version: "v1.5.0",
        effective: "1 Mar 2026",
        reviewed: "1 Mar 2026",
        summary: [
          "RTO and RPO commitments",
          "Key risk scenarios covered",
          "Last tested date"
        ]
      },
      {
        title: "Outsourcing & Third-Party Risk Policy Summary",
        version: "v1.2.0",
        effective: "1 Jan 2026",
        reviewed: "1 Jan 2026",
        summary: [
          "Selection and monitoring of third-parties",
          "Oversight of outsourced functions (AI APIs, cloud)"
        ]
      }
    ]
  },
  {
    id: "zone-7",
    title: "ZONE 7 — Corporate Governance",
    docs: [
      {
        title: "Corporate Governance Statement",
        version: "v1.0.0",
        effective: "1 Jan 2026",
        reviewed: "1 Jan 2026",
        summary: [
          "Board/governing body composition",
          "Authorised Individuals (SEO, CO, MLRO, FO)",
          "Conflicts of interest & Whistleblowing mechanism"
        ]
      },
      {
        title: "Regulatory Conduct Principles Statement",
        version: "v0.9.0",
        effective: "1 Jul 2026",
        reviewed: "Pending",
        summary: [
          "Commitment to the revised DFSA Conduct Principles framework",
          "Disclosure obligations",
          "Annual fitness and propriety review"
        ]
      }
    ]
  },
  {
    id: "zone-8",
    title: "ZONE 8 — Transparency Log",
    subtitle: "The cleanest public audit in DIFC is the audit that was already published before anyone asked.",
    docs: [
      {
        title: "Regulatory Correspondence Log",
        version: "Live",
        effective: "Current",
        reviewed: "Always On",
        summary: [
          "No enforcement actions to date",
          "Supervisory visits disclosed when applicable"
        ]
      },
      {
        title: "Policy Change Log",
        version: "Live",
        effective: "Current",
        reviewed: "Always On",
        summary: [
          "Record of every document, version, and change date",
          "Summary of changes and approvals"
        ]
      },
      {
        title: "Breach and Incident Log",
        version: "Live",
        effective: "Current",
        reviewed: "Always On",
        summary: [
          "No notifiable data breaches since inception"
        ]
      },
      {
        title: "Regulatory Updates Tracker",
        version: "Live",
        effective: "Current",
        reviewed: "Weekly",
        summary: [
          "DFSA Conduct Principles (1 Jul 2026): Implemented",
          "DIFC AI Certification (Reg 10, 2026 TBC): Monitoring, DPIA complete",
          "UAE E-Invoicing (Jul 2026 pilot): In preparation"
        ]
      }
    ]
  },
  {
    id: "zone-9",
    title: "ZONE 9 — Client Rights Centre",
    docs: [
      {
        title: "Data Subject Requests & Rights",
        version: "-",
        effective: "-",
        reviewed: "-",
        summary: [
          "How to make a Subject Access Request",
          "Right to erasure, rectification, portability, object",
          "Right to complain to DIFC Commissioner",
          "Response timeframes & Private right of action notice"
        ]
      }
    ]
  },
  {
    id: "zone-10",
    title: "ZONE 10 — Jurisdiction-Specific Addenda",
    docs: [
      {
        title: "Global Markets Notice",
        version: "v1.0.0",
        effective: "1 Jan 2026",
        reviewed: "1 Jan 2026",
        summary: [
          "Local laws for Dubai, Sydney, Nairobi, Joburg, Miami, Hyderabad",
          "Local regulatory registrations or notifications",
          "Consumer protection notices where required",
          "Currency and tax disclosure where applicable"
        ]
      }
    ]
  }
];

export default function TRUSTLayer() {
  const lastUpdated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="bg-transparent text-slate-300 min-h-screen font-sans overflow-x-hidden pt-12 pb-10">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-transparent">
        {/* Ethereal Color Pools */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: ['-25%', '10%', '-25%'],
            y: ['-20%', '15%', '-20%'],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-blue-600/10 blur-[160px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.3, 1, 1.3],
            x: ['20%', '-15%', '20%'],
            y: ['10%', '-20%', '10%'],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-full h-full bg-indigo-600/5 blur-[200px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-400/5 blur-[180px] rounded-full"
        />

        {/* Artistic Texture Overlay is now global in App.tsx */}
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 mb-12 pt-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <p className="text-[10px] md:text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Living Hub
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 gradient-text">
              Compliance Hub
            </h1>
            <p className="text-slate-500 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
              Every document is real, published, dated, and version-numbered. Visitors — clients, regulators, auditors, investors — can see everything. Nothing hidden, nothing "available on request."
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-1">Hub Generated On</p>
            <p className="text-sm text-slate-300 font-mono">{lastUpdated}</p>
          </div>
        </div>
      </div>

      {/* ZONE 1 — Regulatory Identity */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 mb-24 cursor-default">
        <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-6">ZONE 1 — Regulatory Identity</h2>
        
        <div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight">ALRigs Limited</p>
              <p className="text-blue-400 font-semibold mb-8 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Regulated by the Dubai Financial Services Authority
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">DFSA Licence Number</span>
                  <span className="text-base text-slate-300">F000000 (Placeholder)</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">DIFC Company Registration Number</span>
                  <span className="text-base text-slate-300">0000000</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Registered Address</span>
                  <span className="text-base text-slate-300">DIFC Physical Address, Dubai, UAE</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Licence Category & Permitted Activities</span>
                  <span className="text-base text-slate-300">[Insert Exact Category from Licence]</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Date of Authorisation</span>
                  <span className="text-base text-slate-300">[Insert Date]</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <a href="#" className="inline-flex items-center text-sm font-bold tracking-wider uppercase text-blue-400 hover:text-white transition-colors group/link">
                  Verify our regulatory status on the DFSA Public Register
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout - Zones 2-10 */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Scrollspy / Sticky Nav */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 flex flex-col gap-3 border-l border-white/10 pl-6">
              {hubData.map((zone) => (
                <a 
                  key={zone.id} 
                  href={`#${zone.id}`}
                  className="text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-blue-400 transition-colors py-1"
                >
                  {zone.title.split('—')[0].trim()}
                </a>
              ))}
              <Link to="/trust/press" className="text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-blue-400 transition-colors py-1 mt-4 pt-4 border-t border-white/10 flex items-center">
                Media & Press <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </div>
          </div>

          {/* Zones Container */}
          <div className="flex-1 space-y-24">
            
            {hubData.map((zone) => (
              <div key={zone.id} id={zone.id} className="scroll-mt-32">
                
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight border-b border-white/10 pb-4 mb-2">
                  {zone.title}
                </h3>
                {zone.subtitle && (
                  <p className="text-sm text-blue-400 font-medium mb-8">
                    {zone.subtitle}
                  </p>
                )}
                <div className={!zone.subtitle ? "mb-8" : ""} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {zone.docs.map((doc, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4 }}
                      className="bg-[#050505]/60 hover:bg-[#0a0a0a] border border-white/5 hover:border-white/10 rounded-2xl p-6 flex flex-col transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-bold text-slate-200 tracking-tight pr-4">
                          {doc.title}
                        </h4>
                        <FileText className="w-5 h-5 text-slate-700 shrink-0" />
                      </div>
                      
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs font-mono text-slate-500">
                        <span className="bg-white/5 px-2 py-1 rounded">Ver: {doc.version}</span>
                        <span className="bg-white/5 px-2 py-1 rounded">Eff: {doc.effective}</span>
                        <span className="bg-white/5 px-2 py-1 rounded">Rev: {doc.reviewed}</span>
                      </div>

                      <ul className="space-y-2 text-sm text-slate-400 mb-8 flex-grow">
                        {doc.summary.map((item, idx) => (
                          <li key={idx} className="flex gap-2 items-start">
                            <span className="text-blue-500/50 block mt-1">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                        <button className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                          <Download className="w-3.5 h-3.5" /> PDF
                        </button>
                        <button className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                          <Printer className="w-3.5 h-3.5" /> Print
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

    </div>
  );
}

