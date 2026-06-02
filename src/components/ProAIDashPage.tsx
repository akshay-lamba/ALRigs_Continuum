import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Wrench, 
  Cpu, 
  BarChart3, 
  Lightbulb, 
  CheckCircle, 
  AlertCircle,
  FileText, 
  Activity, 
  Clock, 
  ShieldAlert, 
  Zap, 
  MapPin, 
  Sparkles,
  RefreshCw,
  Wallet,
  Target,
  Hourglass,
  Sliders,
  ShieldCheck,
  Briefcase,
  Building,
  ArrowRight,
  HelpCircle,
  Globe,
  Gauge
} from 'lucide-react';

// Domain and state interfaces
interface StageData {
  name: string;
  count: string | number;
  icon: React.ComponentType<any>;
  details: {
    title: string;
    desc: string;
    kpis: { value: string; label: string; trend?: string; statusColor?: string }[];
  };
}

interface MetricCard {
  label: string;
  value: string;
  trend: string;
  isPositive: boolean;
  color: 'emerald' | 'sky' | 'slate' | 'purple' | 'amber';
  icon: React.ComponentType<any>;
}

interface DomainConfig {
  id: string;
  name: string;
  dotColor: string;
  tagline: string;
  stages: StageData[];
  metrics: MetricCard[];
}

const DOMAINS: Record<string, DomainConfig> = {
  finance: {
    id: "finance",
    name: "Finance",
    dotColor: "bg-emerald-400",
    tagline: "8-STAGE MONEY FLOW — NOT ONE BIG FIX. EIGHT SMALL IMPROVEMENTS, HAPPENING SIMULTANEOUSLY, EVERY DAY.",
    stages: [
      {
        name: "Opportunity",
        count: 24,
        icon: Lightbulb,
        details: {
          title: "Stage 1: Opportunity",
          desc: "Flags high-value leads before follow-up slows down.",
          kpis: [
            { value: "24", label: "Active", statusColor: "text-sky-400" },
            { value: "+12%", label: "vs Last Month", trend: "up", statusColor: "text-emerald-400" },
            { value: "3", label: "Flags", statusColor: "text-amber-500" }
          ]
        }
      },
      {
        name: "Qualification",
        count: 18,
        icon: Target,
        details: {
          title: "Stage 2: Qualification",
          desc: "Uncovers true potential profit margins before deploying delivery teams.",
          kpis: [
            { value: "18", label: "Vetted", statusColor: "text-sky-450" },
            { value: "96%", label: "Qualified Rate", statusColor: "text-emerald-450" },
            { value: "1", label: "Warning", statusColor: "text-red-400" }
          ]
        }
      },
      {
        name: "Proposal",
        count: 9,
        icon: FileText,
        details: {
          title: "Stage 3: Proposal",
          desc: "Stops accidental underpricing or giving away silent discounts on quotes.",
          kpis: [
            { value: "9", label: "Pending", statusColor: "text-sky-400" },
            { value: "+18%", label: "Margin Focus", statusColor: "text-emerald-400" },
            { value: "2", label: "Drafts", statusColor: "text-slate-400" }
          ]
        }
      },
      {
        name: "Win",
        count: 6,
        icon: Zap,
        details: {
          title: "Stage 4: Win",
          desc: "Locks in profitable specifications and records baseline deliverables.",
          kpis: [
            { value: "6", label: "Won", statusColor: "text-sky-400" },
            { value: "100%", label: "Sovereign Proof", statusColor: "text-indigo-400" },
            { value: "$142K", label: "Value", statusColor: "text-emerald-450" }
          ]
        }
      },
      {
        name: "Delivery",
        count: 11,
        icon: Cpu,
        details: {
          title: "Stage 5: Delivery",
          desc: "Monitors client milestone progresses vs actual operational expenses.",
          kpis: [
            { value: "11", label: "Active Jobs", statusColor: "text-sky-400" },
            { value: "98.2%", label: "SLA Match", statusColor: "text-emerald-400" },
            { value: "0", label: "Blocked", statusColor: "text-indigo-400" }
          ]
        }
      },
      {
        name: "Invoice",
        count: 8,
        icon: FileText,
        details: {
          title: "Stage 6: Invoice",
          desc: "Scans bills for missing charges so invoice disputes don't hold back cash.",
          kpis: [
            { value: "8", label: "Invoiced", statusColor: "text-purple-400" },
            { value: "24h", label: "Avg Handoff", statusColor: "text-sky-400" },
            { value: "2", label: "Pending Sign", statusColor: "text-amber-400" }
          ]
        }
      },
      {
        name: "Collection",
        count: 5,
        icon: Clock,
        details: {
          title: "Stage 7: Collection",
          desc: "Tracks late bills and alerts early warning cues without damaging client relationships.",
          kpis: [
            { value: "5", label: "Chasing", statusColor: "text-sky-400" },
            { value: "12 Days", label: "Reduction", statusColor: "text-emerald-400" },
            { value: "2", label: "Late Alerts", statusColor: "text-red-400" }
          ]
        }
      },
      {
        name: "Profit Realised",
        count: "$51K",
        icon: CheckCircle,
        details: {
          title: "Stage 8: Profit Realised",
          desc: "Compares cash received with predicted profits to verify real take-home margin.",
          kpis: [
            { value: "$51K", label: "Net Profit", statusColor: "text-purple-450" },
            { value: "101%", label: "vs Forecast", statusColor: "text-emerald-450" },
            { value: "0", label: "Gaps", statusColor: "text-sky-450" }
          ]
        }
      }
    ],
    metrics: [
      { label: "REVENUE MTD", value: "$284K", trend: "▲ 8.4% vs last month", isPositive: true, color: "emerald", icon: DollarSign },
      { label: "GROSS MARGIN", value: "41.2%", trend: "▲ 2.1pts vs target", isPositive: true, color: "sky", icon: Activity },
      { label: "OUTSTANDING AR", value: "$67K", trend: "▼ 2 invoices overdue", isPositive: false, color: "slate", icon: FileText },
      { label: "NET PROFIT", value: "$51K", trend: "▲ 5.7% vs forecast", isPositive: true, color: "purple", icon: Wallet }
    ]
  },
  humans: {
    id: "humans",
    name: "Humans",
    dotColor: "bg-sky-400",
    tagline: "HUMAN CAPACITY FLUIDITY — EMPOWERING TEAM MEMBERS, AVOIDING BURNOUT, AND ALIGNING REAL PAYROLLS.",
    stages: [
      {
        name: "Recruitment",
        count: 12,
        icon: Users,
        details: {
          title: "Stage 1: Recruitment",
          desc: "Matches candidate skills precisely to newly pipeline-won business workloads.",
          kpis: [
            { value: "12", label: "Candidates", statusColor: "text-sky-400" },
            { value: "88%", label: "Match Score", statusColor: "text-emerald-400" },
            { value: "2", label: "Fast Tracks", statusColor: "text-purple-400" }
          ]
        }
      },
      {
        name: "Onboarding",
        count: 8,
        icon: Sparkles,
        details: {
          title: "Stage 2: Onboarding",
          desc: "Tracks security and knowledge alignment times for new team joiners.",
          kpis: [
            { value: "8", label: "Active Boot", statusColor: "text-sky-400" },
            { value: "3.2 Days", label: "Avg Handoff", statusColor: "text-emerald-400" },
            { value: "100%", label: "Compliance", statusColor: "text-emerald-400" }
          ]
        }
      },
      {
        name: "Scheduling",
        count: 14,
        icon: Clock,
        details: {
          title: "Stage 3: Scheduling",
          desc: "Automates roster allocation to map driver and worker workloads cleanly.",
          kpis: [
            { value: "14", label: "Team Shifts", statusColor: "text-sky-400" },
            { value: "0", label: "Overlap Errors", statusColor: "text-emerald-455" },
            { value: "4", label: "Standbys", statusColor: "text-slate-400" }
          ]
        }
      },
      {
        name: "Retention",
        count: 98,
        icon: Briefcase,
        details: {
          title: "Stage 4: Motivation",
          desc: "Monitors task repetitions to gauge individual focus and team culture health.",
          kpis: [
            { value: "98%", label: "Retention Rate", statusColor: "text-emerald-400" },
            { value: "No Risks", label: "Burnout Alarms", statusColor: "text-sky-400" },
            { value: "High", label: "Team Morale", statusColor: "text-purple-400" }
          ]
        }
      },
      {
        name: "Duty Track",
        count: 42,
        icon: Cpu,
        details: {
          title: "Stage 5: Duty Tracking",
          desc: "Verifies safe working patterns on continuous field deliveries.",
          kpis: [
            { value: "42", label: "Active Duty", statusColor: "text-sky-400" },
            { value: "+12h", label: "Rest Buffers", statusColor: "text-emerald-455" },
            { value: "0", label: "SLA Overruns", statusColor: "text-slate-400" }
          ]
        }
      },
      {
        name: "Timesheets",
        count: 45,
        icon: FileText,
        details: {
          title: "Stage 6: Timesheets",
          desc: "Compiles hourly submissions through decentralized digital log interfaces.",
          kpis: [
            { value: "45", label: "Submitted", statusColor: "text-sky-400" },
            { value: "100%", label: "Matched Speed", statusColor: "text-emerald-450" },
            { value: "2", label: "Awaiting App", statusColor: "text-amber-500" }
          ]
        }
      },
      {
        name: "Payroll Sync",
        count: 45,
        icon: Wallet,
        details: {
          title: "Stage 7: Payroll Alignment",
          desc: "Ensures staff hourly wages align directly with billable project milestones.",
          kpis: [
            { value: "45", label: "Aligned Ready", statusColor: "text-sky-400" },
            { value: "$0.0", label: "Leaked Overtime", statusColor: "text-emerald-400" },
            { value: "Fri", label: "Disbursal Date", statusColor: "text-sky-400" }
          ]
        }
      },
      {
        name: "Empowerment",
        count: "$8.4K",
        icon: CheckCircle,
        details: {
          title: "Stage 8: Empowerment Goal",
          desc: "Monitors personal career growth tracks and calculated retention dividends.",
          kpis: [
            { value: "$8.4K", label: "Team Bonus Pool", statusColor: "text-purple-400" },
            { value: "+18%", label: "Productivity", statusColor: "text-emerald-400" },
            { value: "0", label: "Unresolved Gaps", statusColor: "text-sky-400" }
          ]
        }
      }
    ],
    metrics: [
      { label: "TOTAL PAYROLL MTD", value: "$112K", trend: "▲ 1.4% vs last month", isPositive: true, color: "emerald", icon: Users },
      { label: "BURNOUT INDEX", value: "4.2%", trend: "▼ 1.5pts vs target", isPositive: true, color: "sky", icon: Activity },
      { label: "PENDING TIMESHEETS", value: "3", trend: "▼ 2 late alerts cleared", isPositive: false, color: "slate", icon: Clock },
      { label: "EST. VALUE / HEAD", value: "$8.1K", trend: "▲ 3.2% vs target", isPositive: true, color: "purple", icon: Sparkles }
    ]
  },
  assets: {
    id: "assets",
    name: "Assets",
    dotColor: "bg-purple-400",
    tagline: "PREDICTIVE ASSET GUARDIAN — DEFENDING VEHICLE LIFESPANS, BULWARK STORAGE TEMPERATURES, AND TOOL INTEGRITY.",
    stages: [
      {
        name: "Sourcing",
        count: 7,
        icon: Wrench,
        details: {
          title: "Stage 1: Asset Sourcing",
          desc: "Analyzes warranty policies and expected physical lifespans prior to purchase.",
          kpis: [
            { value: "7", label: "Procure Pipelines", statusColor: "text-sky-450" },
            { value: "9.2 yrs", label: "Mean Expected", statusColor: "text-indigo-400" },
            { value: "$8k", label: "Negotiated Cap", statusColor: "text-emerald-400" }
          ]
        }
      },
      {
        name: "On-Ramp",
        count: 4,
        icon: Sliders,
        details: {
          title: "Stage 2: Tool Initialization",
          desc: "Calibrates thermal and vibration tracking modules for diagnostic telemetry.",
          kpis: [
            { value: "4", label: "Prepped Tools", statusColor: "text-sky-400" },
            { value: "100%", label: "Telemetry Live", statusColor: "text-emerald-405" },
            { value: "0", label: "Failures", statusColor: "text-sky-400" }
          ]
        }
      },
      {
        name: "Roster Plan",
        count: 3,
        icon: Clock,
        details: {
          title: "Stage 3: Dispatch Scheduling",
          desc: "Schedules machinery usage peaks to avoid extreme electricity or fuel pricing spans.",
          kpis: [
            { value: "3", label: "Scheduled Runs", statusColor: "text-sky-400" },
            { value: "92%", label: "Avoidance Score", statusColor: "text-emerald-450" },
            { value: "-14%", label: "Power Drifts", statusColor: "text-sky-400" }
          ]
        }
      },
      {
        name: "Allocation",
        count: 5,
        icon: Briefcase,
        details: {
          title: "Stage 4: Active Deployment",
          desc: "Locks machinery allocations to high-priority client assignments.",
          kpis: [
            { value: "5", label: "Heavy Machines", statusColor: "text-sky-400" },
            { value: "100%", label: "Dispatch Match", statusColor: "text-emerald-400" },
            { value: "0", label: "Idle Gaps", statusColor: "text-sky-400" }
          ]
        }
      },
      {
        name: "Telemetry",
        count: 18,
        icon: Cpu,
        details: {
          title: "Stage 5: Active Monitoring",
          desc: "Watches engine vibration levels and cold storage cooling motor cycles continuously.",
          kpis: [
            { value: "18", label: "Active Feeds", statusColor: "text-sky-400" },
            { value: "-18.2°C", label: "Cooler Temp", statusColor: "text-emerald-400" },
            { value: "0", label: "Anomalies", statusColor: "text-indigo-400" }
          ]
        }
      },
      {
        name: "Maintenance",
        count: 22,
        icon: Wrench,
        details: {
          title: "Stage 6: Maintenance Cycles",
          desc: "Triggers proactive routine oil, parts, or structural checkups during natural downtimes.",
          kpis: [
            { value: "22", label: "Fleet Checkups", statusColor: "text-sky-400" },
            { value: "0", label: "Late Tasks", statusColor: "text-emerald-400" },
            { value: "1", label: "Due Soon", statusColor: "text-amber-500" }
          ]
        }
      },
      {
        name: "Depreciation",
        count: 22,
        icon: FileText,
        details: {
          title: "Stage 7: Valuations",
          desc: "Runs automated checks matching physical wear and tears with asset value books.",
          kpis: [
            { value: "22", label: "Valued Assets", statusColor: "text-sky-400" },
            { value: "$2.4M", label: "Total Book value", statusColor: "text-indigo-455" },
            { value: "98.7%", label: "Fidelity", statusColor: "text-emerald-400" }
          ]
        }
      },
      {
        name: "Realised Life",
        count: "$14.5K",
        icon: CheckCircle,
        details: {
          title: "Stage 8: Lifespan Realised",
          desc: "Confirms asset value preservation margins at final trade-in or resale milestones.",
          kpis: [
            { value: "$14.5K", label: "Resale Gains", statusColor: "text-purple-400" },
            { value: "+14.2%", label: "Est Longevity", statusColor: "text-emerald-455" },
            { value: "0", label: "Write-offs", statusColor: "text-sky-400" }
          ]
        }
      }
    ],
    metrics: [
      { label: "FLEET UTILIZATION", value: "88.5%", trend: "▲ 4.2% vs last month", isPositive: true, color: "emerald", icon: Wrench },
      { label: "WAREHOUSE CAPACITY", value: "72.1%", trend: "▼ 1.1pts optimal zone", isPositive: true, color: "sky", icon: Cpu },
      { label: "COOLING MOTOR FEED", value: "100.0%", trend: "0 deviations tracked", isPositive: true, color: "slate", icon: Activity },
      { label: "REPLACEMENT RESERVE", value: "$42K", trend: "▲ 1.8% vs plan", isPositive: true, color: "purple", icon: Wallet }
    ]
  },
  operations: {
    id: "operations",
    name: "Operations",
    dotColor: "bg-amber-400",
    tagline: "OPERATIONS & CARGO SYNC — EXPEDITING PORT DOCK CLEANUPS, SUPPLY TRUCKING, AND DISPATCH PRECISION.",
    stages: [
      {
        name: "Order Intake",
        count: 31,
        icon: FileText,
        details: {
          title: "Stage 1: Order Intake",
          desc: "Indexes supplier delivery notes and schedules dispatch lines on desktop lists.",
          kpis: [
            { value: "31", label: "Orders Intake", statusColor: "text-sky-400" },
            { value: "4.2m", label: "Fidelity", statusColor: "text-indigo-400" },
            { value: "0", label: "Errors", statusColor: "text-emerald-450" }
          ]
        }
      },
      {
        name: "Customs Clear",
        count: 19,
        icon: ShieldAlert,
        details: {
          title: "Stage 2: Port Clearance",
          desc: "Watches dock storage cargo levels and processes customs declarations proactively.",
          kpis: [
            { value: "19", label: "Cleared Docks", statusColor: "text-sky-400" },
            { value: "1.2 Days", label: "Avg Speed", statusColor: "text-emerald-400" },
            { value: "1", label: "Storage Warning", statusColor: "text-amber-500" }
          ]
        }
      },
      {
        name: "Routing",
        count: 12,
        icon: Clock,
        details: {
          title: "Stage 3: Route Mapping",
          desc: "Maps Jebel Ali traffic signals and truck sizes to optimize delivery sequences.",
          kpis: [
            { value: "12", label: "Routes Mapped", statusColor: "text-sky-400" },
            { value: "15%", label: "Fuel Saved", statusColor: "text-emerald-400" },
            { value: "0", label: "Delays", statusColor: "text-emerald-405" }
          ]
        }
      },
      {
        name: "Activation",
        count: 9,
        icon: Zap,
        details: {
          title: "Stage 4: Win & Dispatch",
          desc: "Empowers field dispatch controllers with automated cargo loading lists.",
          kpis: [
            { value: "9", label: "Dispatched", statusColor: "text-sky-400" },
            { value: "100%", label: "Cargo Acc", statusColor: "text-emerald-400" },
            { value: "0", label: "Shortfalls", statusColor: "text-sky-400" }
          ]
        }
      },
      {
        name: "Transport",
        count: 16,
        icon: Cpu,
        details: {
          title: "Stage 5: Moving Control",
          desc: "Tracks active freight vehicles and alerts recipients early if delays pop up.",
          kpis: [
            { value: "16", label: "On Road", statusColor: "text-sky-400" },
            { value: "99.4%", label: "On time rate", statusColor: "text-emerald-400" },
            { value: "0", label: "Halt failures", statusColor: "text-indigo-400" }
          ]
        }
      },
      {
        name: "Delivery",
        count: 15,
        icon: CheckCircle,
        details: {
          title: "Stage 6: Sign-off",
          desc: "Verifies digital customer signature confirmations and releases cargo weight slips.",
          kpis: [
            { value: "15", label: "Delivered", statusColor: "text-emerald-400" },
            { value: "99.2%", label: "Satisfaction", statusColor: "text-indigo-400" },
            { value: "0", label: "Disputes", statusColor: "text-sky-400" }
          ]
        }
      },
      {
        name: "Reconciliation",
        count: 10,
        icon: FileText,
        details: {
          title: "Stage 7: Dispatch Audit",
          desc: "Compares trip times against recorded logs to audit fuel and overtime allocations.",
          kpis: [
            { value: "10", label: "Checked Logs", statusColor: "text-sky-400" },
            { value: "100%", label: "Fidelity", statusColor: "text-emerald-400" },
            { value: "0", label: "Leaked Fuel", statusColor: "text-emerald-400" }
          ]
        }
      },
      {
        name: "Profit Speed",
        count: "$38K",
        icon: CheckCircle,
        details: {
          title: "Stage 8: SLA Realised",
          desc: "Scores delivery accuracy metrics to lock in performance incentive bonuses.",
          kpis: [
            { value: "$38K", label: "SLA Margin", statusColor: "text-purple-400" },
            { value: "99.0%", label: "SLA Quality", statusColor: "text-emerald-400" },
            { value: "0", label: "Penalty Risks", statusColor: "text-sky-400" }
          ]
        }
      }
    ],
    metrics: [
      { label: "COMPLETED DELIVERIES", value: "342", trend: "▲ 12% vs last month", isPositive: true, color: "emerald", icon: Cpu },
      { label: "ON-TIME RATE", value: "98.2%", trend: "▲ 0.8pts vs target", isPositive: true, color: "sky", icon: Clock },
      { label: "SUPPLIER DELAYS", value: "1", trend: "▼ 2 delays cleared", isPositive: false, color: "slate", icon: ShieldAlert },
      { label: "AVG TRIP SPEED", value: "4.5h", trend: "▲ 1.1h vs baseline", isPositive: true, color: "purple", icon: Zap }
    ]
  },
  analytics: {
    id: "analytics",
    name: "Analytics",
    dotColor: "bg-[#e11d48]",
    tagline: "IMPACT ANALYSIS ENGINE — INTERPRETING PERFORMANCE METRICS AND TREND COEFFICIENTS TO SECURE SYSTEM MARGINS.",
    stages: [
      {
        name: "Target Lead Tracker",
        count: 24,
        icon: Lightbulb,
        details: {
          title: "Stage 1: Opportunity Performance",
          desc: "Filters leading commercial inquiries with targeted predictive outcome scoring rules.",
          kpis: [
            { value: "24", label: "Ranked Opps", statusColor: "text-sky-455" },
            { value: "88%", label: "Lead Precision", statusColor: "text-emerald-455" },
            { value: "3", label: "High Value", statusColor: "text-sky-400" }
          ]
        }
      },
      {
        name: "Qualify Precision",
        count: 18,
        icon: Target,
        details: {
          title: "Stage 2: Vetting Fidelity",
          desc: "Reviews historic client parameters to calculate precise win rate ratios.",
          kpis: [
            { value: "18", label: "Model Matches", statusColor: "text-sky-400" },
            { value: "96.5%", label: "Fidelity Run", statusColor: "text-emerald-400" },
            { value: "0", label: "Silo Gaps", statusColor: "text-sky-400" }
          ]
        }
      },
      {
        name: "Quote Optimizer",
        count: 9,
        icon: FileText,
        details: {
          title: "Stage 3: Proposal Intelligence",
          desc: "Runs simulated cost drift parameters to preserve proposal pricing benchmarks.",
          kpis: [
            { value: "9", label: "Optimized", statusColor: "text-sky-400" },
            { value: "+18%", label: "Profit Secure", statusColor: "text-emerald-450" },
            { value: "0", label: "Margin Errors", statusColor: "text-sky-400" }
          ]
        }
      },
      {
        name: "Win Analysis",
        count: 6,
        icon: Zap,
        details: {
          title: "Stage 4: Win Ratios",
          desc: "Pinpoints high-margin delivery triggers and records target execution timelines.",
          kpis: [
            { value: "62%", label: "Win Rate Speed", statusColor: "text-purple-400" },
            { value: "$38.4K", label: "Avg Deal Size", statusColor: "text-emerald-400" },
            { value: "+12%", label: "Value Growth", statusColor: "text-sky-400" }
          ]
        }
      },
      {
        name: "SLA Compliance",
        count: 11,
        icon: Cpu,
        details: {
          title: "Stage 5: Execution Analysis",
          desc: "Validates active operational metrics against baseline target estimates.",
          kpis: [
            { value: "11", label: "Trackers On", statusColor: "text-sky-400" },
            { value: "94%", label: "Deliver Success", statusColor: "text-emerald-400" },
            { value: "0", label: "Drifting Risks", statusColor: "text-indigo-400" }
          ]
        }
      },
      {
        name: "Billing Analytics",
        count: 8,
        icon: FileText,
        details: {
          title: "Stage 6: Invoice Health",
          desc: "Reviews invoice processing timelines and isolates billing leaks.",
          kpis: [
            { value: "8", label: "Audited Flows", statusColor: "text-sky-400" },
            { value: "89%", label: "Handoff Tempo", statusColor: "text-emerald-455" },
            { value: "24h", label: "Speed Index", statusColor: "text-purple-400" }
          ]
        }
      },
      {
        name: "Recoup Tracking",
        count: 5,
        icon: Clock,
        details: {
          title: "Stage 7: Collection Watch",
          desc: "Watches payment velocity behaviors to isolate early overdue profiles.",
          kpis: [
            { value: "5", label: "Bill Flags", statusColor: "text-sky-400" },
            { value: "78%", label: "Recoup Speed", statusColor: "text-emerald-400" },
            { value: "0", label: "Critical Risks", statusColor: "text-indigo-400" }
          ]
        }
      },
      {
        name: "Profit Realised",
        count: "$51K",
        icon: CheckCircle,
        details: {
          title: "Stage 8: Profit Realised",
          desc: "Outputs plain English directives highlighting structural margins.",
          kpis: [
            { value: "$51K", label: "Net Profit", statusColor: "text-purple-455" },
            { value: "101%", label: "vs Forecast", statusColor: "text-emerald-455" },
            { value: "0", label: "Gaps", statusColor: "text-sky-455" }
          ]
        }
      }
    ],
    metrics: [
      { label: "WIN RATE", value: "62%", trend: "▲ 7pts vs last 6mo", isPositive: true, color: "emerald", icon: Target },
      { label: "AVG DEAL VALUE", value: "$38.4K", trend: "▲ 12% vs prior year", isPositive: true, color: "sky", icon: Wallet },
      { label: "REPEAT REVENUE", value: "44%", trend: "▲ best on record", isPositive: true, color: "slate", icon: RefreshCw },
      { label: "AVG SALES CYCLE", value: "28d", trend: "▼ 4d above target", isPositive: false, color: "purple", icon: Hourglass }
    ]
  }
};

// Data for Invoice pipeline Stage 6 & 7 watch
const INVOICE_PIPELINE = [
  { client: "Apex Consulting", amount: "$18,400", stage: "S6 Invoice", due: "Jun 5", status: "Pending", action: "Chase", statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20", btnColor: "text-amber-400 hover:bg-amber-400/10" },
  { client: "Redline Systems", amount: "$32,000", stage: "S7 Collection", due: "May 28", status: "Overdue", action: "Escalate", statusColor: "bg-red-500/10 text-red-400 border-red-500/20", btnColor: "text-red-400 hover:bg-red-400/10" },
  { client: "NovaTech Pty", amount: "$9,750", stage: "S6 Invoice", due: "Jun 12", status: "On Track", action: "Monitor", statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", btnColor: "text-slate-400 hover:bg-slate-800" },
  { client: "Fortis Group", amount: "$44,200", stage: "S7 Collection", due: "Jun 1", status: "Late 2d", action: "Call", statusColor: "bg-red-500/10 text-amber-500 border-red-500/20", btnColor: "text-amber-500 hover:bg-amber-500/10" },
  { client: "Kestrel Media", amount: "$7,100", stage: "S8 Realised", due: "May 20", status: "Paid", action: "—", statusColor: "bg-sky-500/10 text-sky-400 border-sky-500/20", btnColor: "text-slate-600 cursor-default" }
];

export default function ProAIDashPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("finance");
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  // Set default active stage based on tab selection to match screenshots
  useEffect(() => {
    if (activeTab === "finance") {
      setActiveStageIndex(0); // Opportunity
    } else if (activeTab === "analytics") {
      setActiveStageIndex(7); // Profit Realised
    } else if (activeTab === "humans") {
      setActiveStageIndex(2); // Scheduling
    } else if (activeTab === "assets") {
      setActiveStageIndex(4); // Telemetry
    } else if (activeTab === "operations") {
      setActiveStageIndex(3); // Win dispatch
    }
  }, [activeTab]);

  const currentDomainConfig = DOMAINS[activeTab] || DOMAINS.finance;
  const currentStage = currentDomainConfig.stages[activeStageIndex] || currentDomainConfig.stages[0];

  return (
    <div className="bg-[#030712] text-slate-300 min-h-screen font-sans overflow-x-hidden pt-24 pb-20 selection:bg-sky-500/20 selection:text-white">
      
      {/* Background radial ambient glow aligned with top parameters */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[60vh] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.035)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-10 w-96 h-[40vh] bg-sky-950/[0.02] blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Navigation / Back row */}
        <div className="mb-8 flex justify-between items-center">
          <button 
            onClick={() => navigate('/solutions/proai')}
            className="group flex items-center text-slate-500 hover:text-sky-400 font-mono font-bold tracking-[0.3em] text-[10px] uppercase transition-colors pointer-events-auto cursor-pointer"
            id="back_to_pro_ai_btn"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Back to Pro AI
          </button>
        </div>

        {/* Domain Tabs Selector Pills */}
        <nav className="flex items-center justify-start gap-2 border-b border-white/5 pb-5 mb-8 overflow-x-auto scrollbar-none" aria-label="Dashboard domains selector">
          {Object.keys(DOMAINS).map((key) => {
            const dom = DOMAINS[key];
            const isSelected = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-2 px-5 rounded-full font-mono text-xs font-black tracking-widest uppercase transition-all duration-305 flex items-center gap-2 border cursor-pointer shrink-0 ${
                  isSelected 
                    ? "bg-[#0b132b] text-white border-sky-400/30 shadow-[0_4px_20px_rgba(56,189,248,0.15)]" 
                    : "bg-[#050914]/40 text-slate-500 border-transparent hover:text-slate-300 hover:bg-[#050914]/80"
                }`}
                style={{ animationDuration: '0.4s' }}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${dom.dotColor} ${isSelected ? 'animate-pulse scale-125' : 'opacity-60'}`} />
                {dom.name}
              </button>
            );
          })}
        </nav>

        {/* =======================================================
            SECTION A: The 8-Stage Profit Enhancer / Money Flow
            ======================================================= */}
        <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-10 mb-8 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/10 to-transparent" />
          
          <div className="text-left mb-6 border-b border-white/5 pb-4">
            <h2 className="text-lg md:text-xl font-sans font-black text-white tracking-tight uppercase">
              8 Stage Profit Enhancer
            </h2>
          </div>

          {/* Connected Steps Row */}
          <div className="relative mt-12 mb-8 select-none">
            {/* Connection Line */}
            <div className="absolute top-6 left-6 right-6 h-[2px] bg-sky-500/10 pointer-events-none z-0 hidden md:block" />
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 relative z-10">
              {currentDomainConfig.stages.map((stg, idx) => {
                const isActive = activeStageIndex === idx;
                const IconComponent = stg.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStageIndex(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    {/* Circle */}
                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 mb-3 relative shrink-0 ${
                      isActive 
                        ? "bg-[#0b132b] border-sky-400 text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-110" 
                        : "bg-black/60 border-white/10 text-slate-500 hover:border-slate-600 hover:text-slate-350"
                    }`}>
                      {isActive && (
                        <span className="absolute inset-x-0 -bottom-1 w-full h-[2px] bg-sky-400 blur-[2px] rounded" />
                      )}
                      
                      <span className="font-mono text-sm font-bold">{idx + 1}</span>
                    </div>

                    {/* Meta labels underneath */}
                    <span className={`text-[10px] font-mono tracking-wide transition-colors uppercase text-center block max-w-[85px] leading-tight truncate ${
                      isActive ? "text-white font-bold" : "text-slate-500 group-hover:text-slate-450"
                    }`}>
                      {stg.name}
                    </span>

                    <span className={`text-[10px] font-mono font-bold mt-1 text-center transition-colors ${
                      isActive ? "text-sky-400" : "text-slate-600"
                    }`}>
                      {stg.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stepper Active Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeStageIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4 text-left">
                <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl border border-sky-500/15 shrink-0 mt-0.5">
                  {activeStageIndex === 7 ? <CheckCircle className="w-5 h-5 text-emerald-400 bg-emerald-500/10 rounded-full border-none" /> : <Lightbulb className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-base font-sans font-black text-white uppercase tracking-tight flex items-center gap-2">
                    {activeStageIndex === 7 ? "✅" : ""} {currentStage.details.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-xl font-normal leading-relaxed">
                    {currentStage.details.desc}
                  </p>
                </div>
              </div>

              {/* Detail Card KPIs Grid */}
              <div className="grid grid-cols-3 gap-6 md:gap-10 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-10 shrink-0">
                {currentStage.details.kpis.map((k, kIdx) => (
                  <div key={kIdx} className="text-left font-mono">
                    <span className={`text-xl md:text-2xl font-black block tracking-tight ${k.statusColor || 'text-white'}`}>
                      {k.value}
                    </span>
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider block mt-0.5">
                      {k.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* =======================================================
            SECTION B: Primary 4 Overview Metrics
            ======================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentDomainConfig.metrics.map((m, idx) => {
            const IconComponent = m.icon;
            
            // Map card outlines matching custom mock representations
            const borderGlow = 
              m.color === 'emerald' ? 'border-t-emerald-500/40 hover:border-emerald-500/30' :
              m.color === 'sky' ? 'border-t-sky-400/40 hover:border-sky-400/30' :
              m.color === 'slate' ? 'border-t-slate-600/40 hover:border-slate-500/30' :
              m.color === 'purple' ? 'border-t-purple-500/40 hover:border-purple-500/30' :
              'border-t-amber-550/40 hover:border-amber-550/30';

            const bgGlow = 
              m.color === 'emerald' ? 'bg-gradient-to-b from-emerald-500/[0.02] to-transparent' :
              m.color === 'sky' ? 'bg-gradient-to-b from-sky-400/[0.02] to-transparent' :
              m.color === 'slate' ? 'bg-gradient-to-b from-slate-600/[0.02] to-transparent' :
              m.color === 'purple' ? 'bg-gradient-to-b from-purple-500/[0.02] to-transparent' :
              'bg-gradient-to-b from-amber-500/[0.02] to-transparent';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`bg-[#050914]/70 border-t-2 border border-x-white/5 border-b-white/5 ${borderGlow} ${bgGlow} rounded-2xl p-6 relative overflow-hidden backdrop-blur-md flex flex-col justify-between min-h-[145px] hover:scale-[1.01] transition-transform duration-300 text-left`}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">{m.label}</span>
                    <div className="p-2 bg-white/5 text-slate-400 rounded-lg">
                      <IconComponent className="w-4 h-4 opacity-70" />
                    </div>
                  </div>
                  
                  <span className="text-3xl font-bold text-white tracking-tighter block mb-3">
                    {m.value}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono">
                  <span className={m.isPositive ? "text-emerald-400" : "text-amber-500"}>
                    {m.trend}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =======================================================
            SECTION C & D: 4 Symmetric Premium Report Cards
            ======================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10"
          >
            {/* ---------------------------------------------------
                TAB 1: FINANCE
                --------------------------------------------------- */}
            {activeTab === "finance" && (
              <>
                {/* Finance Card 1: Revenue vs Profit */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:border-white/10 text-left">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-xs font-mono font-black uppercase text-slate-400 tracking-wider">MONTHLY REVENUE VS PROFIT</h3>
                        <span className="text-[9px] text-slate-600 font-mono">FINANCE TRACK RECORD AED (AED K equivalent)</span>
                      </div>
                      <div className="flex items-center gap-4 text-[10px] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 bg-sky-400 rounded" />
                          <span className="text-slate-400 font-black">Revenue</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 bg-violet-500 rounded" />
                          <span className="text-slate-400 font-black">Profit</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsive column chart */}
                    <div className="relative h-[240px] w-full flex items-end">
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 h-[200px]">
                        {[300, 200, 100, 0].map((val) => (
                          <div key={val} className="flex items-center justify-between w-full text-[9px] font-mono text-zinc-650 border-b border-white/[0.02] pb-0.5">
                            <span>{val}</span>
                          </div>
                        ))}
                      </div>

                      <div className="relative z-10 w-full h-[200px] flex justify-between items-end px-2 md:px-4">
                        {[
                          { m: "Jan", r: 210, p: 25 },
                          { m: "Feb", r: 230, p: 35 },
                          { m: "Mar", r: 195, p: 20 },
                          { m: "Apr", r: 260, p: 48 },
                          { m: "May", r: 270, p: 42 },
                          { m: "Jun", r: 284, p: 51 }
                        ].map((d) => {
                          const rHeight = (d.r / 300) * 100;
                          const pHeight = (d.p / 300) * 100;
                          return (
                            <div key={d.m} className="flex flex-col items-center justify-end h-full flex-1 mx-1.5 md:mx-2 group/bar">
                              <div className="flex items-end justify-center gap-1 w-full relative h-full">
                                <div 
                                  className="w-3 md:w-4 bg-sky-500 border border-sky-400 rounded-t-sm transition-all duration-350 relative"
                                  style={{ height: `${rHeight}%` }}
                                >
                                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 border border-white/10 px-2 py-0.5 rounded text-[8px] font-mono text-white opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                                    $ {d.r}K
                                  </div>
                                </div>
                                <div 
                                  className="w-3 md:w-4 bg-violet-600 border border-violet-500 rounded-t-sm transition-all duration-350 relative"
                                  style={{ height: `${pHeight}%` }}
                                >
                                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 border border-white/10 px-2 py-0.5 rounded text-[8px] font-mono text-white opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                                    $ {d.p}K
                                  </div>
                                </div>
                              </div>
                              <span className="text-[9px] font-mono text-slate-500 tracking-wider mt-3 block">{d.m}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Revenue Analytics</span> 
                    <span className="text-emerald-400 font-bold">104% Target Achieved</span>
                  </div>
                </div>

                {/* Finance Card 2: Margin Radar */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-505 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">MARGIN BY STAGE</h4>
                    <div className="flex justify-center items-center py-2 h-[240px]">
                      <svg className="w-52 h-52" viewBox="0 0 120 120">
                        {[1, 0.8, 0.6, 0.4, 0.2].map((ratio) => {
                          const r = 45 * ratio;
                          const points = [
                            `60,${60 - r}`, 
                            `${60 + r * 0.866},${60 - r * 0.5}`, 
                            `${60 + r * 0.866},${60 + r * 0.5}`, 
                            `60,${60 + r}`, 
                            `${60 - r * 0.866},${60 + r * 0.5}`, 
                            `${60 - r * 0.866},${60 - r * 0.5}`
                          ].join(" ");
                          return (
                            <polygon 
                              key={ratio}
                              points={points} 
                              fill="none" 
                              stroke="rgba(255,255,255,0.03)" 
                              strokeWidth="0.8" 
                            />
                          );
                        })}
                        {[0, 60, 120, 180, 240, 300].map((deg) => {
                          const rad = (Math.PI * deg) / 180;
                          const tx = 60 + 45 * Math.sin(rad);
                          const ty = 60 - 45 * Math.cos(rad);
                          return (
                            <line 
                              key={deg} 
                              x1="60" 
                              y1="60" 
                              x2={tx} 
                              y2={ty} 
                              stroke="rgba(255,255,255,0.03)" 
                              strokeWidth="0.8" 
                            />
                          );
                        })}
                        <polygon 
                          points="60,30 92,42 95,78 60,96 28,78 26,45" 
                          fill="rgba(56, 189, 248, 0.15)" 
                          stroke="#38bdf8" 
                          strokeWidth="1.5" 
                        />
                        <circle cx="60" cy="30" r="2" fill="#38bdf8" />
                        <circle cx="92" cy="42" r="2" fill="#38bdf8" />
                        <circle cx="95" cy="78" r="2" fill="#38bdf8" />
                        <circle cx="60" cy="96" r="2" fill="#38bdf8" />
                        <circle cx="28" cy="78" r="2" fill="#38bdf8" />
                        <circle cx="26" cy="45" r="2" fill="#38bdf8" />

                        <text x="60" y="10" textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="monospace">Opportunity</text>
                        <text x="111" y="44" textAnchor="start" fill="#64748b" fontSize="6.5" fontFamily="monospace">Proposal</text>
                        <text x="111" y="82" textAnchor="start" fill="#64748b" fontSize="6.5" fontFamily="monospace">Delivery</text>
                        <text x="60" y="115" textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="monospace">Invoice</text>
                        <text x="8" y="82" textAnchor="end" fill="#64748b" fontSize="6.5" fontFamily="monospace">Collection</text>
                        <text x="8" y="44" textAnchor="end" fill="#64748b" fontSize="6.5" fontFamily="monospace">Realised</text>
                      </svg>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Performance Radar</span> 
                    <span className="text-sky-400 font-bold">Optimized Conversion Gaps</span>
                  </div>
                </div>

                {/* Finance Card 3: Overdue Watch list */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-505 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">INVOICE PIPELINE — STAGE 6 & 7 WATCH</h4>
                    <div className="space-y-2.5 h-[260px] overflow-y-auto pr-1">
                      {INVOICE_PIPELINE.map((inv) => (
                        <div key={inv.client} className="flex justify-between items-center bg-white/[0.01] border border-white/5 rounded-xl p-2.5 hover:border-slate-800 transition-all">
                          <div className="text-left">
                            <span className="text-[10px] font-bold text-white uppercase tracking-tight block">{inv.client}</span>
                            <span className="text-[8.5px] font-mono text-slate-500">{inv.amount} | {inv.stage}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border ${inv.statusColor}`}>
                              {inv.status}
                            </span>
                            <span className={`text-[9px] font-mono font-bold uppercase shrink-0 ${inv.action === '—' ? 'text-slate-600' : 'text-sky-400'}`}>
                              {inv.action}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Invoice Tracking</span> 
                    <span className="text-amber-500 font-bold">2 Escalations Needed</span>
                  </div>
                </div>

                {/* Finance Card 4: Leakage & Cash Reserves */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-505 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">REVENUE LEAKAGE & RESERVES AUDIT</h4>
                    <div className="space-y-3 h-[260px] overflow-y-auto pr-1">
                      {[
                        { title: "Silent Discounts & Code Deviations", impact: "$4,200", risk: "Medium Risk", desc: "Flagged pricing differences from commercial catalogs.", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
                        { title: "Unaudited Subcontractor Charges", impact: "$2,100", risk: "Low Risk", desc: "Vendor invoices missing standard reference verification tag.", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
                        { title: "Overhead Route Pattern Drifts", impact: "$1,850", risk: "Active Monitor", desc: "Suboptimal dispatch runs causing hidden fuel spills.", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
                        { title: "Unallocated labor Overruns", impact: "$920", risk: "No Gaps", desc: "Hours allocated to clients without billing verification.", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" }
                      ].map((leak) => (
                        <div key={leak.title} className="p-2.5 bg-white/[0.01] border border-white/5 rounded-xl hover:border-slate-800 transition-all">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-[10px] font-bold text-white uppercase tracking-tight block max-w-[170px] truncate">{leak.title}</span>
                            <span className="text-[9.5px] font-mono text-red-400 font-bold shrink-0">{leak.impact}</span>
                          </div>
                          <p className="text-[8.5px] text-slate-500 leading-tight mb-1.5">{leak.desc}</p>
                          <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border ${leak.color}`}>{leak.risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Potential Margin Saved</span> 
                    <span className="text-emerald-400 font-bold">$9,070 Secure MTD</span>
                  </div>
                </div>
              </>
            )}

            {/* ---------------------------------------------------
                TAB 2: ANALYTICS
                --------------------------------------------------- */}
            {activeTab === "analytics" && (
              <>
                {/* Analytics Card 1: Pipeline stage value */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-xs font-mono font-black uppercase text-slate-400 tracking-wider">PIPELINE VALUE BY STAGE ($K)</h3>
                        <span className="text-[9px] text-slate-600 font-mono">DETERMINING SYSTEM CONVERSIONS IN THE 8-STAGE CORE</span>
                      </div>
                    </div>

                    <div className="relative h-[240px] w-full flex items-end">
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 h-[200px]">
                        {[400, 300, 200, 100, 0].map((val) => (
                          <div key={val} className="flex items-center justify-between w-full text-[9px] font-mono text-zinc-650 border-b border-white/[0.02] pb-0.5">
                            <span>{val}</span>
                          </div>
                        ))}
                      </div>

                      <div className="relative z-10 w-full h-[200px] flex justify-between items-end px-1 md:px-2">
                        {[
                          { m: "S1 Oppty", v: 380, color: "from-sky-500 to-sky-600", border: "border-sky-400" },
                          { m: "S2 Qual", v: 280, color: "from-sky-500/55 to-[#1d4ed8]/45", border: "border-sky-500/40" },
                          { m: "S3 Prop", v: 210, color: "from-[#1d4ed8]/35 to-transparent", border: "border-violet-500/30" },
                          { m: "S4 Win", v: 150, color: "from-transparent to-transparent", border: "border-violet-600/30" },
                          { m: "S5 Del", v: 130, color: "from-[#1d4ed8]/45 to-transparent", border: "border-sky-400/20" },
                          { m: "S6 Inv", v: 100, color: "from-transparent to-transparent", border: "border-emerald-500/20" },
                          { m: "S7 Coll", v: 70, color: "from-transparent to-transparent", border: "border-indigo-500/20" },
                          { m: "S8 Real", v: 40, color: "from-transparent to-transparent", border: "border-purple-600/20" }
                        ].map((d) => {
                          const colHeight = (d.v / 400) * 100;
                          return (
                            <div key={d.m} className="flex flex-col items-center justify-end h-full flex-1 mx-0.5 md:mx-1 group/bar relative">
                              <div className="w-full relative h-[170px] flex items-end justify-center">
                                <div 
                                  className={`w-full max-w-[28px] bg-gradient-to-t ${d.color} border-t-2 border-x border-b ${d.border} rounded-t-sm transition-all duration-300 relative`}
                                  style={{ height: `${colHeight}%` }}
                                >
                                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black/85 border border-white/10 px-1.5 py-0.5 rounded text-[8px] font-mono text-white opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                                    ${d.v}k
                                  </div>
                                </div>
                              </div>
                              <span className="text-[8px] font-mono text-slate-500 tracking-tighter mt-3 block whitespace-nowrap">{d.m}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Funnel Capacity</span> 
                    <span className="text-sky-400 font-bold">$1.34M Active Pipeline</span>
                  </div>
                </div>

                {/* Analytics Card 2: Revenue Trend line chart */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                      <h4 className="text-[10px] font-mono font-black text-slate-505 uppercase tracking-wider">REVENUE TREND — 8 MONTHS</h4>
                      <div className="flex gap-2 text-[8px] font-mono">
                        <span className="text-sky-400">● Rev $K</span>
                        <span className="text-violet-500">● Profit $K</span>
                      </div>
                    </div>

                    <div className="relative h-[220px] w-full flex items-end">
                      <svg className="w-full h-[180px] absolute inset-x-0 bottom-6 py-2" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                        <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                        <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                        <path d="M 10 70 Q 30 65 60 55 T 110 40 T 160 25 T 190 10" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                        <path d="M 10 90 Q 30 88 60 85 T 110 80 T 160 75 T 190 70" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" />
                        <circle cx="10" cy="70" r="1.5" fill="#38bdf8" />
                        <circle cx="60" cy="55" r="1.5" fill="#38bdf8" />
                        <circle cx="110" cy="40" r="1.5" fill="#38bdf8" />
                        <circle cx="190" cy="10" r="1.5" fill="#38bdf8" />
                        <circle cx="10" cy="90" r="1.5" fill="#8b5cf6" />
                        <circle cx="60" cy="85" r="1.5" fill="#8b5cf6" />
                        <circle cx="110" cy="80" r="1.5" fill="#8b5cf6" />
                        <circle cx="190" cy="70" r="1.5" fill="#8b5cf6" />
                      </svg>
                      <div className="absolute bottom-1 w-full flex justify-between text-[8px] font-mono text-slate-505 px-1">
                        <span>Nov</span>
                        <span>Dec</span>
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Performance Run</span> 
                    <span className="text-emerald-400 font-bold">Stable Profit Expansion</span>
                  </div>
                </div>

                {/* Analytics Card 3: Conversion Funnel */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-550 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">STAGE CONVERSION FUNNEL</h4>
                    <div className="space-y-2.5 h-[260px] overflow-y-auto pr-1">
                      {[
                        { step: "S1 → S2 Qualify", val: 82, color: "bg-sky-400" },
                        { step: "S2 → S3 Propose", val: 71, color: "bg-blue-500" },
                        { step: "S3 → S4 Win", val: 62, color: "bg-violet-500" },
                        { step: "S4 → S5 Deliver", val: 94, color: "bg-emerald-400" },
                        { step: "S5 → S6 Invoice", val: 89, color: "bg-emerald-400" },
                        { step: "S6 → S7 Collect", val: 78, color: "bg-amber-400" },
                        { step: "S7 → S8 Realised", val: 91, color: "bg-emerald-400" }
                      ].map((f) => (
                        <div key={f.step} className="space-y-1">
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-slate-400">{f.step}</span>
                            <span className="text-white font-bold">{f.val}%</span>
                          </div>
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full ${f.color} rounded-full`} style={{ width: `${f.val}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Funnel Accuracy</span> 
                    <span className="text-indigo-400 font-bold">81.4% Weighted Avg</span>
                  </div>
                </div>

                {/* Analytics Card 4: Predictive Anomaly Audits */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-505 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">AI PREDICTIVE ANOMALY AUDIT</h4>
                    <div className="space-y-3 h-[260px] overflow-y-auto pr-1">
                      {[
                        { title: "Calculated Profit-Drift Margin", impact: "±0.3%", risk: "Stable", desc: "Monitors historical variables for pricing security deviations.", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                        { title: "System Conversion Fidelity", impact: "94.8%", risk: "Optimal", desc: "Checks conversion progression speeds through pipeline stages.", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
                        { title: "Revenue Forecast Margin of Error", impact: "1.1%", risk: "Comfortable", desc: "Simulates model outcomes vs actual monthly contract receipts.", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
                        { title: "Dynamic Optimization Triggers", impact: "0 Flags", risk: "Secure", desc: "Scans for critical timing delays or dropbacks in stages.", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" }
                      ].map((an) => (
                        <div key={an.title} className="p-2.5 bg-white/[0.01] border border-white/5 rounded-xl hover:border-slate-800 transition-all">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-[10px] font-bold text-white uppercase tracking-tight block max-w-[170px] truncate">{an.title}</span>
                            <span className="text-[9.5px] font-mono text-sky-400 font-bold shrink-0">{an.impact}</span>
                          </div>
                          <p className="text-[8.5px] text-slate-505 leading-tight mb-1.5">{an.desc}</p>
                          <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border ${an.color}`}>{an.risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-655 uppercase">
                    <span>Forecast Confidence</span> 
                    <span className="text-sky-400 font-bold">98.9% Confidence Rating</span>
                  </div>
                </div>
              </>
            )}

            {/* ---------------------------------------------------
                TAB 3: HUMANS
                --------------------------------------------------- */}
            {activeTab === "humans" && (
              <>
                {/* Humans Card 1: Headcount Column Chart */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-xs font-mono font-black uppercase text-slate-400 tracking-wider">MONTHLY HEADCOUNT VS BURNOUT LIMIT</h3>
                        <span className="text-[9px] text-slate-600 font-mono">WEEKLY TEAM ALLOCATION MATRIX & ROSTERS</span>
                      </div>
                      <div className="flex items-center gap-4 text-[10px] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 bg-sky-400 rounded" />
                          <span className="text-slate-400 font-black">Active</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 bg-red-400 rounded" />
                          <span className="text-slate-400 font-black">Limit</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative h-[240px] w-full flex items-end">
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 h-[200px]">
                        {[100, 80, 60, 40, 20, 0].map((val) => (
                          <div key={val} className="flex items-center justify-between w-full text-[9px] font-mono text-zinc-650 border-b border-white/[0.02] pb-0.5">
                            <span>{val}%</span>
                          </div>
                        ))}
                      </div>

                      <div className="relative z-10 w-full h-[200px] flex justify-between items-end px-3 md:px-6">
                        {[
                          { m: "Jan", active: 78, limit: 90 },
                          { m: "Feb", active: 82, limit: 90 },
                          { m: "Mar", active: 85, limit: 90 },
                          { m: "Apr", active: 72, limit: 92 },
                          { m: "May", active: 81, limit: 92 },
                          { m: "Jun", active: 84, limit: 92 }
                        ].map((d) => {
                          const activeHeight = (d.active / 100) * 100;
                          const limitHeight = (d.limit / 100) * 105;
                          return (
                            <div key={d.m} className="flex flex-col items-center justify-end h-full flex-1 mx-1.5 md:mx-2.5 group/bar relative">
                              <div className="flex items-end justify-center w-full relative h-[160px] gap-1">
                                <div 
                                  className="w-3 md:w-4.5 bg-sky-500 border border-sky-400/50 rounded-t-sm relative"
                                  style={{ height: `${activeHeight}%` }}
                                />
                                <div 
                                  className="w-1 md:w-1.5 bg-red-500/20 border border-red-500/30 rounded-t-sm relative"
                                  style={{ height: `${limitHeight}%` }}
                                />
                              </div>
                              <span className="text-[10px] font-mono text-slate-505 tracking-wider mt-3 block">{d.m}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-655 uppercase">
                    <span>Staff Burnout Auditing</span> 
                    <span className="text-emerald-400 font-bold">Safe Workloads Maintained</span>
                  </div>
                </div>

                {/* Humans Card 2: Roster List */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-505 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">ACTIVE ROSTER SCHEDULING STATUS</h4>
                    <div className="space-y-2.5 h-[260px] overflow-y-auto pr-1">
                      {[
                        { team: "Logistics Crew A", rate: "94.2%", status: "Optimum", color: "text-sky-400 bg-sky-500/10 border-sky-500/25" },
                        { team: "Docks Dispatch B", rate: "88.1%", status: "On Track", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25" },
                        { team: "Loader Crew C", rate: "100.0%", status: "Full Shift", color: "text-purple-400 bg-purple-500/10 border-purple-500/25" },
                        { team: "Dubai Admin Store", rate: "42.5%", status: "Under-Roster", color: "text-slate-450 bg-slate-500/10 border-slate-550/25" }
                      ].map((hrItem) => (
                        <div key={hrItem.team} className="p-2.5 bg-white/[0.01] border border-white/5 rounded-xl flex items-center justify-between">
                          <div>
                            <span className="text-[10.5px] font-bold text-white uppercase tracking-tight block">{hrItem.team}</span>
                            <span className="text-[8.5px] font-mono text-slate-500 font-semibold">Utilization Rate: {hrItem.rate}</span>
                          </div>
                          <span className={`text-[8.5px] font-mono px-2 py-0.5 rounded border font-bold ${hrItem.color}`}>
                            {hrItem.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-605 uppercase">
                    <span>Shift Management</span> 
                    <span className="text-sky-400 font-bold">14 Active Team Blocks</span>
                  </div>
                </div>

                {/* Humans Card 3: Utilization Progress List */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-555 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">RESOURCE UTILIZATION INDEX</h4>
                    <div className="space-y-4 h-[260px] overflow-y-auto pr-1 pt-1">
                      {[
                        { area: "Logistics", val: 88, desc: "On-road transport drivers and delivery controllers." },
                        { area: "Cargo Loaders", val: 92, desc: "Wharf handling staff and freight loaders." },
                        { area: "Admin", val: 78, desc: "Office operations and client timesheet managers." }
                      ].map((ga) => (
                        <div key={ga.area} className="space-y-1.5">
                          <div className="flex justify-between items-center text-[10.5px] font-mono">
                            <span className="text-slate-350 font-bold">{ga.area}</span>
                            <span className="text-white font-black">{ga.val}%</span>
                          </div>
                          <p className="text-[8.5px] text-slate-500 leading-tight block">{ga.desc}</p>
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-sky-400 rounded-full" style={{ width: `${ga.val}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Labor Capacity</span> 
                    <span className="text-sky-400 font-bold">Zero SLA Backlogs</span>
                  </div>
                </div>

                {/* Humans Card 4: Recruiting & Talent */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-505 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">RECRUITING & TALENT VELOCITY</h4>
                    <div className="space-y-3 h-[260px] overflow-y-auto pr-1">
                      {[
                        { title: "Open Role Requisitions", impact: "4 Roles", risk: "Approved Plans", desc: "Sourcing replacement operators for upcoming contracts.", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                        { title: "S1 Candidate Pipeline", impact: "14 Inflow", risk: "Active Screening", desc: "Technical vetting for warehouse shift scheduler teams.", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
                        { title: "Security compliance checks", impact: "100%", risk: "Clean / Audited", desc: "Verified driver background records and labor documents.", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
                        { title: "Required Modules Completed", impact: "92% completed", risk: "High Success", desc: "Corporate hazard control and Jebel Ali safety standards.", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" }
                      ].map((t) => (
                        <div key={t.title} className="p-2.5 bg-white/[0.01] border border-white/5 rounded-xl hover:border-slate-800 transition-all">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-[10px] font-bold text-white uppercase tracking-tight block max-w-[170px] truncate">{t.title}</span>
                            <span className="text-[9.5px] font-mono text-sky-400 font-bold shrink-0">{t.impact}</span>
                          </div>
                          <p className="text-[8.5px] text-slate-500 leading-tight mb-1.5">{t.desc}</p>
                          <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border ${t.color}`}>{t.risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-650 uppercase">
                    <span>Talent Pool Yield</span> 
                    <span className="text-emerald-400 font-bold">+12.4% Hiring Speed</span>
                  </div>
                </div>
              </>
            )}

            {/* ---------------------------------------------------
                TAB 4: ASSETS
                --------------------------------------------------- */}
            {activeTab === "assets" && (
              <>
                {/* Assets Card 1: Motor Temperature column chart */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-xs font-mono font-black uppercase text-slate-400 tracking-wider">UTILITY COOLING MOTOR & WAREHOUSE</h3>
                        <span className="text-[9px] text-slate-600 font-mono">REDUCING PEAK MOTOR SURGES DURING HOT OUTSIDE HEAT</span>
                      </div>
                    </div>

                    <div className="relative h-[240px] w-full flex items-end">
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 h-[200px]">
                        {[50, 40, 30, 20, 10, 0].map((val) => (
                          <div key={val} className="flex items-center justify-between w-full text-[9px] font-mono text-zinc-650 border-b border-white/[0.02] pb-0.5">
                            <span>{val}°C</span>
                          </div>
                        ))}
                      </div>

                      <div className="relative z-10 w-full h-[200px] flex justify-between items-end px-3 md:px-6">
                        {[
                          { m: "08:00", temp: 31, cooler: 18 },
                          { m: "10:00", temp: 35, cooler: 18 },
                          { m: "12:00", temp: 42, cooler: 19 },
                          { m: "14:00", temp: 45, cooler: 19 },
                          { m: "16:00", temp: 41, cooler: 18 },
                          { m: "18:00", temp: 36, cooler: 18 }
                        ].map((d) => {
                          const tempHeight = (d.temp / 50) * 105;
                          const coolerHeight = (d.cooler / 50) * 105;
                          return (
                            <div key={d.m} className="flex flex-col items-center justify-end h-full flex-1 mx-1.5 md:mx-3 group/bar">
                              <div className="flex items-end justify-center w-full relative h-[160px] gap-2">
                                <div 
                                  className="w-3 md:w-4.5 bg-amber-500/40 border border-amber-450/20 rounded-t-sm"
                                  style={{ height: `${tempHeight}%` }}
                                />
                                <div 
                                  className="w-3 md:w-4.5 bg-sky-500/25 border border-sky-400/20 rounded-t-sm"
                                  style={{ height: `${coolerHeight}%` }}
                                />
                              </div>
                              <span className="text-[10px] font-mono text-slate-500 mt-3 block">{d.m}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-655 uppercase">
                    <span>Outside vs Internal Temperature</span> 
                    <span className="text-emerald-450 font-bold">Stable -18.5°C Mean</span>
                  </div>
                </div>

                {/* Assets Card 2: Telemetry Lists */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-505 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">ACTIVE FLEET HEALTH TELEMETRY</h4>
                    <div className="space-y-2.5 h-[260px] overflow-y-auto pr-1">
                      {[
                        { asset: "F-150 Truck 4", load: "74k km", alert: "Secure", statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25" },
                        { asset: "Heavy Compressor 2", load: "412 Hrs", alert: "Oil Change Due", statusColor: "bg-amber-500/10 text-amber-500 border-amber-500/25" },
                        { asset: "Deep Cooler Unit C", load: "-18.5°C const", alert: "Optimized", statusColor: "bg-sky-500/10 text-sky-400 border-sky-500/25" },
                        { asset: "Mercedes Trailer L", load: "92k km", alert: "Brakes Mtd", statusColor: "bg-red-500/10 text-red-500 border-red-500/25" }
                      ].map((astItem) => (
                        <div key={astItem.asset} className="p-2.5 bg-white/[0.01] border border-white/5 rounded-xl flex items-center justify-between hover:border-slate-800 transition-all">
                          <div>
                            <span className="text-[10.5px] font-bold text-white uppercase tracking-tight block">{astItem.asset}</span>
                            <span className="text-[8.5px] font-mono text-slate-500 font-semibold">Telemetry: {astItem.load}</span>
                          </div>
                          <span className={`text-[8px] font-mono px-2 py-0.5 rounded border font-semibold ${astItem.statusColor}`}>
                            {astItem.alert}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Fleet Audit</span> 
                    <span className="text-amber-500 font-bold">1 Action Required</span>
                  </div>
                </div>

                {/* Assets Card 3: Storage stability index bar */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-510 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">STORAGE SENSOR FIDELITY</h4>
                    <div className="space-y-4 h-[260px] overflow-y-auto pr-1">
                      {[
                        { title: "Main Cold Room Grid", desc: "Sensors tracking primary warehouse refrigerated boundaries.", status: "100.0% Stable", color: "bg-emerald-400", val: 100 },
                        { title: "Mobile Transit Coolers", desc: "On-ride trailer compressors tracing cargo shipments.", status: "98.2% Accurate", color: "bg-sky-400", val: 98 },
                        { title: "Engine Vibration Feeds", desc: "Dynamic diagnostic limits preventing structural breakdown.", status: "95.5% Calibrated", color: "bg-purple-500", val: 95 }
                      ].map((sensor) => (
                        <div key={sensor.title} className="space-y-1.5">
                          <div className="flex justify-between items-center text-[10.5px] font-mono">
                            <span className="text-slate-355 font-bold">{sensor.title}</span>
                            <span className="text-white font-black">{sensor.status}</span>
                          </div>
                          <p className="text-[8.5px] text-slate-500 leading-tight block">{sensor.desc}</p>
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full ${sensor.color} rounded-full`} style={{ width: `${sensor.val}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Fidelity Auditing</span> 
                    <span className="text-emerald-450 font-bold">All Calibration Green</span>
                  </div>
                </div>

                {/* Assets Card 4: Salvage & Depreciation */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-505 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">ASSET LIFETIME & DEPRECIATION FORECAST</h4>
                    <div className="space-y-3 h-[260px] overflow-y-auto pr-1">
                      {[
                        { title: "Average fleet longevity index", impact: "94.2%", risk: "Optimal", desc: "Proactive lubricating and cleaning routines delaying wear.", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                        { title: "Projected salvage valuation", impact: "$184K", risk: "Secure Assets", desc: "Evaluates trade-in cash-backs on trailers hitting draft milestones.", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
                        { title: "Active Maintenance backlog", impact: "0 Items", risk: "Zero Backlog", desc: "All scheduled lubrication and oil changes are verified.", color: "text-emerald-450 bg-emerald-500/10 border-emerald-500/20" },
                        { title: "Sustained fuel run efficiency", impact: "+8.4% up", risk: "Highly Efficient", desc: "Intelligent tire audits and route sequences limiting over-usage.", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" }
                      ].map((as) => (
                        <div key={as.title} className="p-2.5 bg-white/[0.01] border border-white/5 rounded-xl hover:border-slate-800 transition-all">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-[10px] font-bold text-white uppercase tracking-tight block max-w-[170px] truncate">{as.title}</span>
                            <span className="text-[9.5px] font-mono text-sky-400 font-bold shrink-0">{as.impact}</span>
                          </div>
                          <p className="text-[8.5px] text-slate-500 leading-tight mb-1.5">{as.desc}</p>
                          <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border ${as.color}`}>{as.risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-650 uppercase">
                    <span>Salvage Asset Cover</span> 
                    <span className="text-emerald-400 font-bold">$2.4M Book Value Locked</span>
                  </div>
                </div>
              </>
            )}

            {/* ---------------------------------------------------
                TAB 5: OPERATIONS
                --------------------------------------------------- */}
            {activeTab === "operations" && (
              <>
                {/* Operations Card 1: Delivery run speed vs SLA Target */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-xs font-mono font-black uppercase text-slate-400 tracking-wider">DELIVERY SPEED VS SLA TARGET</h3>
                        <span className="text-[9px] text-slate-600 font-mono">TRUCKING RUN DURATIONS BY ROAD PATHWAY</span>
                      </div>
                    </div>

                    <div className="relative h-[240px] w-full flex items-end">
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 h-[200px]">
                        {[8, 6, 4, 2, 0].map((val) => (
                          <div key={val} className="flex items-center justify-between w-full text-[9px] font-mono text-zinc-650 border-b border-white/[0.02] pb-0.5">
                            <span>{val}h</span>
                          </div>
                        ))}
                      </div>

                      <div className="relative z-10 w-full h-[200px] flex justify-between items-end px-3 md:px-6">
                        {[
                          { m: "Run A", speed: 4.8, target: 6 },
                          { m: "Run B", speed: 5.2, target: 6 },
                          { m: "Run C", speed: 4.1, target: 6 },
                          { m: "Run D", speed: 3.5, target: 5.5 },
                          { m: "Run E", speed: 4.5, target: 5.5 },
                          { m: "Run F", speed: 3.8, target: 5.5 }
                        ].map((d) => {
                          const speedHeight = (d.speed / 8) * 100;
                          const targetHeight = (d.target / 8) * 100;
                          return (
                            <div key={d.m} className="flex flex-col items-center justify-end h-full flex-1 mx-1.5 md:mx-3 group/bar">
                              <div className="flex items-end justify-center w-full relative h-[160px] gap-2">
                                <div 
                                  className="w-3.5 bg-sky-500 border border-sky-400 rounded-t-sm"
                                  style={{ height: `${speedHeight}%` }}
                                />
                                <div 
                                  className="w-1.5 bg-zinc-700 rounded-t-sm"
                                  style={{ height: `${targetHeight}%` }}
                                />
                              </div>
                              <span className="text-[9px] font-mono text-slate-500 mt-3 block truncate max-w-[42px] tracking-tight">{d.m}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-655 uppercase">
                    <span>Active Route Durations</span> 
                    <span className="text-emerald-450 font-bold">100% SLA Safe</span>
                  </div>
                </div>

                {/* Operations Card 2: Dispatch watch lists */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-505 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">OPERATIONAL DISPATCH LIVE CARGO</h4>
                    <div className="space-y-2.5 h-[260px] overflow-y-auto pr-1">
                      {[
                        { route: "Deira Port → Hub Wharf", cargo: "Copper Ingot Load", eta: "11 mins remaining", tag: "On Time", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25" },
                        { route: "Jebel Ali Zone 1", cargo: "Supply Tool Pallets", eta: "Delivered 08:30", tag: "Completed", color: "bg-sky-500/10 text-sky-400 border-sky-500/25" },
                        { route: "DIFC Trade Cent 3", cargo: "Premium File Vaults", eta: "Stuck in Traffic jam", tag: "Late 12m", color: "bg-red-500/10 text-amber-500 border-red-500/25" }
                      ].map((opsItem) => (
                        <div key={opsItem.route} className="p-2.5 bg-white/[0.01] border border-white/5 rounded-xl flex items-center justify-between hover:border-slate-800 transition-all">
                          <div>
                            <span className="text-[10.5px] font-bold text-white uppercase tracking-tight block max-w-[200px] truncate">{opsItem.route}</span>
                            <span className="text-[8.5px] font-mono text-slate-400 font-bold">{opsItem.cargo} ({opsItem.eta})</span>
                          </div>
                          <span className={`text-[8px] font-mono px-2 py-0.5 rounded border font-semibold ${opsItem.color}`}>
                            {opsItem.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Cargo Tracking</span> 
                    <span className="text-emerald-450 font-bold">2 Runs Complete</span>
                  </div>
                </div>

                {/* Operations Card 3: Dispatch accuracy progress list */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-550 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">ON-TIME DELIVERY ACCURACY INDEX</h4>
                    <div className="space-y-4 h-[260px] overflow-y-auto pr-1 pt-1">
                      {[
                        { title: "Logistics Dispatch Precision", desc: "On-time arrival success margins vs predicted schedules.", rate: "98.2%", val: 98 },
                        { title: "Terminal Loading Speed", desc: "Wharf turnaround handoffs from warehouse stack lists.", rate: "95.5%", val: 95 },
                        { title: "Customs Clear Speed Index", desc: "Processing timings for critical inbound supply lines.", rate: "91.1%", val: 91 }
                      ].map((pRec) => (
                        <div key={pRec.title} className="space-y-1.5">
                          <div className="flex justify-between items-center text-[10.5px] font-mono">
                            <span className="text-slate-355 font-bold">{pRec.title}</span>
                            <span className="text-white font-black">{pRec.rate}</span>
                          </div>
                          <p className="text-[8.5px] text-slate-500 leading-tight block">{pRec.desc}</p>
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-sky-450 rounded-full" style={{ width: `${pRec.val}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                    <span>Operational Quality</span> 
                    <span className="text-sky-455 font-bold">Excellent Speed Rate</span>
                  </div>
                </div>

                {/* Operations Card 4: Route Risk & Terminal Turnaround */}
                <div className="bg-[#050914]/70 border border-white/5 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[420px] transition-all duration-305 hover:border-white/10 text-left">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-slate-505 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">ROUTE RISK & TERMINAL TURNAROUND AUDIT</h4>
                    <div className="space-y-3 h-[260px] overflow-y-auto pr-1">
                      {[
                        { title: "Port Jebel Ali Congestion", impact: "Low Congestion", risk: "Stable Runway", desc: "No critical queues on primary stack lines or entry lanes.", color: "text-emerald-455 bg-emerald-500/10 border-emerald-500/20" },
                        { title: "Wharf Area Clearing Efficiency", impact: "+14.2% faster", risk: "Efficient Loop", desc: "Refined digital weight slips speed up terminal exit runs.", color: "text-sky-455 bg-sky-500/10 border-sky-500/20" },
                        { title: "Active Freight Road Incidents", impact: "0 Warnings", risk: "Zero Accidents", desc: "All continuous field delivery trucks are tracking safely.", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                        { title: "Average Cargo Transit Delay Risk", impact: "1.2% Risk Score", risk: "Extremely Safe", desc: "Simulates peak traffic delays around Dubai main paths.", color: "text-indigo-400 bg-indigo-505/10 border-indigo-550/20" }
                      ].map((rt) => (
                        <div key={rt.title} className="p-2.5 bg-white/[0.01] border border-white/5 rounded-xl hover:border-slate-800 transition-all">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-[10px] font-bold text-white uppercase tracking-tight block max-w-[170px] truncate">{rt.title}</span>
                            <span className="text-[9.5px] font-mono text-sky-450 font-bold shrink-0">{rt.impact}</span>
                          </div>
                          <p className="text-[8.5px] text-slate-505 leading-tight mb-1.5">{rt.desc}</p>
                          <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border ${rt.color}`}>{rt.risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-[10px] font-mono text-slate-655 uppercase">
                    <span>Terminal Risk Index</span> 
                    <span className="text-emerald-400 font-bold">No Active Anomalies</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Global report indicators exactly matching visual margins */}
        <div className="border-t border-white/5 pt-6 mt-12 flex justify-between text-[10px] font-mono text-slate-600 uppercase tracking-widest text-left relative z-10 select-none">
          <span>PRO AI Business Dashboard</span>
          <span>8 Stage Profit Enhancer — SYSTEM PIPELINE</span>
          <span>Data refreshes on tab toggle</span>
        </div>

      </div>
    </div>
  );
}
