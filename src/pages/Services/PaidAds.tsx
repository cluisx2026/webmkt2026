import React from "react";
import { BarChart3, TrendingUp, DollarSign, Target, Settings, BrainCircuit, PlayCircle, ShieldCheck } from "lucide-react";
import FAQAccordion from "../../components/FAQAccordion";
import CircuitMotif from "../../components/CircuitMotif";

interface PaidAdsProps {
  onNavigate: (path: string) => void;
}

export default function PaidAds({ onNavigate }: PaidAdsProps) {
  const adsFaqs = [
    {
      question: "How does algorithmic bid optimization maximize our Meta & Google ad spend?",
      answer: "Instead of rely on flat schedules, our connection models parse conversion signals and click values continuously. If lead densities spike in Brickell at lunch on Tuesdays, our setups auto-adjust and focus capital directly on that peak convertible window.",
    },
    {
      question: "Will you implement a custom tracking setup (CAPI and Google Tags)?",
      answer: "Yes, standard pixel-based tracking is highly restricted now. We structure server-side Conversions API (CAPI) pathways to track performance directly at the hosting cloud server level. This bypasses ad-blockers and ensures 100% attribute accuracy.",
    },
    {
      question: "Do you supply the media and copy creative designs?",
      answer: "Our specialized in-house group designs high-scroll-stopping video layouts, custom graphics, and behavioral copy variations based on your target demographic, resulting in 3× average outbound click rates.",
    },
    {
      question: "What is your target client cost-per-lead metric?",
      answer: "Because we refuse to buy generic robotic trash clicks, our focus is entirely on transactional high-intent leads. While CPL figures vary based on industries (PI law has distinct scales relative to culinary tables), our setups constantly refine bid loops to lower your net customer acquisition cost.",
    },
  ];

  const pillars = [
    {
      title: "Google Ad Search Capture",
      desc: "Lock down high-urgency buyer keywords ('Pike injury lawyer Miami'). We build custom automated bidding scripts ensuring top-of-page prominence."
    },
    {
      title: "Meta Retargeting Funnels",
      desc: "Stay omnipresent. We trace users who interest with your web page or signature assets and guide them back through customized local content."
    },
    {
      title: "Conversions API (CAPI) Structuring",
      desc: "Deploy edge-side pixel tracking to map real outcomes directly to advertising dashboard portals, completely unaffected by browser blockers."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-[#FAF9FC] overflow-hidden border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <CircuitMotif variant="badge" />
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-ink tracking-tight leading-tight">
              Paid Ads Scaling <span className="text-purple-primary">Precision Bidding</span>. Predictable Revenue growth.
            </h1>
            <p className="text-brand-muted text-lg font-sans max-w-xl">
              Unleash hyper-targeted advertising across Google search networks and Meta social feeds. We bypass traditional guess-work with advanced CAPI setups and real-time bid adjustments.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate("/contact")}
                className="px-6 py-3 bg-gradient-signature text-white font-sans font-semibold text-sm rounded-lg hover:brightness-110 active:brightness-105 cursor-pointer shadow-sm transition-all"
              >
                Analyze My Ad Spending
              </button>
              <button 
                onClick={() => onNavigate("/plans")}
                className="px-6 py-3 border border-brand-border text-brand-ink font-sans font-semibold text-sm rounded-lg hover:bg-white transition-all bg-white/40"
              >
                Explore Support Plans
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-brand-border space-y-6 shadow-sm">
            <h3 className="font-display font-bold text-sm text-brand-ink uppercase tracking-wider">
              Bidding Optimizer Matrix
            </h3>
            
            <div className="space-y-4 font-mono text-xs text-brand-muted">
              <div className="flex justify-between items-center p-3 bg-[#FAF9FC] rounded border border-brand-border">
                <span>[API_BIDDING_HUB]:</span>
                <span className="text-emerald-600 font-bold">OPTIMIZED</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-[#FAF9FC] rounded border border-brand-border">
                <span>CAPI SERVER ATTRIBUTE:</span>
                <span className="text-purple-primary font-bold">100% RELIABLE</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-[#FAF9FC] rounded border border-brand-border">
                <span>MID-WEEK AD LIFT RATIO:</span>
                <span className="text-blue-600 font-bold">+240% AVG</span>
              </div>
            </div>

            <div className="p-3 bg-brand-ink rounded text-white flex items-center justify-between text-xs font-sans">
              <span className="flex items-center gap-1.5 leading-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Meta CAPI Linked
              </span>
              <span className="text-gray-400">Hub-305 FL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Motif Line */}
      <CircuitMotif className="my-10" />

      {/* Value Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono text-[#2563EB] uppercase font-bold tracking-widest bg-blue-50 px-3 py-1 rounded">
              Engineered ROI
            </span>
            <h2 className="text-3xl font-display font-bold tracking-tight text-brand-ink">
              Data-Validated Ad Scaling Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <div key={idx} className="p-8 border border-brand-border bg-white rounded-xl shadow-sm space-y-4 hover:border-purple-primary transition-all">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-rose-500">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-ink">{p.title}</h3>
                <p className="text-sm text-brand-muted font-sans leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ block */}
      <FAQAccordion items={adsFaqs} title="Paid Ads — Meta + Google FAQs" subtitle="Common questions about our server-side conversions API operations and local search bidding structures." />

      {/* CTA section line */}
      <section className="bg-white py-12 text-center">
        <button 
          onClick={() => onNavigate("/contact")}
          className="px-6 py-3 bg-gradient-signature text-white rounded-lg font-sans font-semibold text-sm cursor-pointer shadow hover:brightness-110 transition-all inline-flex items-center gap-2"
        >
          Book Your Advertising Growth Assessment
          <BarChart3 className="w-4 h-4 text-white" />
        </button>
      </section>
    </div>
  );
}
