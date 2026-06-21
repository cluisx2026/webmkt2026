import React from "react";
import { Scale, ShieldAlert, Sparkles, CheckCircle, Database, PhoneCall, ArrowRight, Gavel } from "lucide-react";
import FAQAccordion from "../../components/FAQAccordion";
import CircuitMotif from "../../components/CircuitMotif";

interface LexoraProps {
  onNavigate: (path: string) => void;
}

export default function Lexora({ onNavigate }: LexoraProps) {
  const lexoraFaqs = [
    {
      question: "What makes Lexora different from standard lawyer SEO services?",
      answer: "Standard SEO agencies focus on broad, vanity metrics like 'Attorney definition'. Lexora targets high-intent, immediate-necessity query structures (e.g., 'Brickell truck accident lawyer case fees'). We map these search terms directly to optimized landing designs which convert visitors into active case intakes.",
    },
    {
      question: "Does the dynamic case qualification engine integrate with Clio or Filevine?",
      answer: "Yes. Lexora features native API sync triggers. When a plaintiff passes the conversational intake gates, the case record, transcripts, and contact fields sync instantly into Clio, Filevine, or custom legal data structures.",
    },
    {
      question: "Are case client summaries qualified with NLP before office notification?",
      answer: "Absolutely. Our custom parsing algorithm structures incoming narratives into a formatted intake report. This highlights core variables (such as incident date, injury severity, liability inputs, and insurance indicators) so your legal team sees qualified records immediately.",
    },
    {
      question: "How does server-side CAPI prevent data leaks in legal structures?",
      answer: "Compliance is critical. Lexora uses server-to-server Conversions API (CAPI) routines hosted in isolated virtual machines. Case info and contact parameters are processed securely, protecting client privacy entirely and bypassing local browser vulnerabilities.",
    },
  ];

  const features = [
    {
      title: "Semantic Legal Authority Mapping",
      desc: "Command your civil litigation market. We structure extensive local legal resource hubs that satisfying BERT search indexing metrics."
    },
    {
      title: "Conversational Intake Engines",
      desc: "Turn web visitors into qualified intakes. Custom interactive chat prompts capture detailed legal parameters in under 60 seconds."
    },
    {
      title: "Direct Attorney Desk Alerts",
      desc: "No delays. When a high-value personal injury case passes qualification, automated text and email alerts notify your on-call intake team."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-[#FAF9FC] overflow-hidden border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <CircuitMotif variant="badge" />
            <span className="text-xs font-mono font-bold text-purple-primary uppercase tracking-widest block">
              Lexora Core [Legal AI Suite v2]
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-ink tracking-tight leading-tight">
              Case Acquisition <span className="text-purple-primary">Engineered for High-Value</span> Litigators.
            </h1>
            <p className="text-brand-muted text-lg font-sans max-w-xl">
              Constructed specifically for competitive plaintiff law practices. Lexora bridges legal organic search queries, instant visual lead maps, and direct Clio/Filevine CRM API links.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate("/contact")}
                className="px-6 py-3 bg-gradient-signature text-white font-sans font-semibold text-sm rounded-lg hover:brightness-110 active:brightness-105 cursor-pointer shadow-sm transition-all"
              >
                Secure Lexora for My firm
              </button>
              <button 
                onClick={() => onNavigate("/plans")}
                className="px-6 py-3 border border-brand-border text-brand-ink font-sans font-semibold text-sm rounded-lg hover:bg-white transition-all bg-white/40"
              >
                Research Support Plans
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-brand-border space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-brand-border pb-3 text-brand-ink font-display font-bold text-sm">
              <Gavel className="w-5 h-5 text-purple-primary" />
              <span>Lexora Case Intake qualifies</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-[#FAF9FC] border border-brand-border rounded">
                <span className="text-purple-primary">INJURY_TYPE:</span> Automobile vs commercial tractor
              </div>
              <div className="p-3 bg-[#FAF9FC] border border-brand-border rounded">
                <span className="text-[#2563EB]">REGIONAL_VENUE:</span> Miami-Dade Circuit Court
              </div>
              <div className="p-3 bg-[#FAF9FC] border border-brand-border rounded">
                <span className="text-emerald-600">ACTION_STATUS:</span> Document Synched to Filevine API
              </div>
            </div>

            <div className="p-3 bg-brand-ink rounded text-white text-center text-xs font-semibold leading-none">
              🎓 Exclusively Restricted to One Firm Per Florida Region
            </div>
          </div>
        </div>
      </section>

      {/* Signature Motif Line */}
      <CircuitMotif className="my-10" />

      {/* Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono text-[#2563EB] uppercase font-bold tracking-widest bg-blue-50 px-3 py-1 rounded">
              Engineered Intake
            </span>
            <h2 className="text-3xl font-display font-bold tracking-tight text-brand-ink">
              Command Your Legal Local Market
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <div key={idx} className="p-8 border border-brand-border bg-white rounded-xl shadow-sm space-y-4 hover:border-purple-primary transition-all">
                <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-purple-primary">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-ink">{f.title}</h3>
                <p className="text-sm text-brand-muted font-sans leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes block */}
      <section className="bg-brand-alt py-16 border-y border-brand-border">
        <div className="max-w-4xl mx-auto text-center px-6 space-y-4">
          <p className="text-brand-ink font-sans text-base md:text-lg italic leading-relaxed">
            "Sourcing qualified personal injury clients in South Florida is exceptionally competitive. Lexora has allowed us to command search keywords and automate qualifying intakes within Clio seamlessly."
          </p>
          <div className="font-mono text-xs font-bold text-purple-primary uppercase tracking-wider">
            — Founding Partner, Brickell Trial Litigators
          </div>
        </div>
      </section>

      {/* FAQ block */}
      <FAQAccordion items={lexoraFaqs} title="Lexora AI Suite FAQs" subtitle="Common technical questions about our legal API links and conversion optimizations." />

      {/* Call to Action Band */}
      <div className="bg-[#FFFFFF] py-12 text-center">
        <button 
          onClick={() => onNavigate("/contact")}
          className="px-8 py-4 bg-gradient-signature text-white font-sans font-semibold rounded-lg shadow hover:brightness-110 transition-all cursor-pointer inline-flex items-center gap-2"
        >
          Acquire Regional Lexora Exclusivity
          <Scale className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
