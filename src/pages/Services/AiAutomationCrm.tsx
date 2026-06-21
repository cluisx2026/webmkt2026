import React from "react";
import { Bot, RefreshCw, Layers, Database, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import FAQAccordion from "../../components/FAQAccordion";
import CircuitMotif from "../../components/CircuitMotif";

interface AiAutomationCrmProps {
  onNavigate: (path: string) => void;
}

export default function AiAutomationCrm({ onNavigate }: AiAutomationCrmProps) {
  const crmFaqs = [
    {
      question: "What is an automated lead response layout?",
      answer: "When a potential client enters their details on your site, our automation triggers immediately. The system parses the context of the entry, classifies the priority, draft a highly specific email response, and opens a task within your CRM—all in less than 30 seconds, maintaining a 100% accurate data connection.",
    },
    {
      question: "Which CRMs do you support?",
      answer: "We develop customized API integrations for enterprise tools (Salesforce, HubSpot) as well as niche systems like Filevine or Clio (for lawyers) and reservation hubs like SevenRooms (for culinary venues).",
    },
    {
      question: "Does this require us to rewrite our current database structure?",
      answer: "No, we design non-destructive middleware layers. Our scripts fetch and push lead contacts and parsing updates directly into your current CRM data fields without altering your historical setups.",
    },
    {
      question: "Do you configure automatic text massage (SMS) follow-ups?",
      answer: "Yes. If the contact grants permissions, our systems deploy automatic SMS confirmation loops. This ensures high response conversion rates, with instant links to book direct calls with your account team.",
    },
  ];

  const pillars = [
    {
      title: "Immediate Lead Intake Parsing",
      desc: "Our software structures incoming lead fields instantly. Classifies case fields for lawyers, reservation files for hospitality, and asset values for real-estate."
    },
    {
      title: "Automated SMS/Email Handoffs",
      desc: "Instant follow-up schedules. Never let a qualified lead sit cold—reach out via custom-written SMS routes within 15 seconds."
    },
    {
      title: "Clean CRM Architecture Sync",
      desc: "Bespoke API mappings linking physical platform chats, Google organic records, and booking dashboards securely to your central HubSpot or Clio base."
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
              AI Automation & <span className="text-purple-primary">CRM Integration</span>. Speed-to-Lead Secured.
            </h1>
            <p className="text-brand-muted text-lg font-sans max-w-xl">
              Eliminate lead delays. We link your digital campaigns, organic websites, and platform chat channels directly to automated database responders, bringing lead delay times down to seconds.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate("/contact")}
                className="px-6 py-3 bg-gradient-signature text-white font-sans font-semibold text-sm rounded-lg hover:brightness-110 active:brightness-105 cursor-pointer shadow-sm transition-all"
              >
                Structure My AI Data Flow
              </button>
              <button 
                onClick={() => onNavigate("/plans")}
                className="px-6 py-3 border border-brand-border text-brand-ink font-sans font-semibold text-sm rounded-lg hover:bg-white transition-all bg-white/40"
              >
                Examine Automation Setup Plans
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-brand-border space-y-6 shadow-sm">
            <h3 className="font-display font-bold text-sm text-brand-ink uppercase tracking-wider flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-purple-primary animate-spin" style={{ animationDuration: "10s" }} />
              Active System Middleware Map
            </h3>

            <div className="space-y-3 font-sans text-xs">
              <div className="p-3 border border-brand-border bg-[#FAF9FC] rounded flex items-center justify-between">
                <div>
                  <p className="font-bold text-brand-ink">Instagram / Facebook Chat</p>
                  <p className="text-[10px] text-brand-muted font-mono">Inbound Lead</p>
                </div>
                <span className="text-[10px] uppercase font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">Captured</span>
              </div>

              <div className="p-3 border border-brand-border bg-[#FAF9FC] rounded flex items-center justify-between">
                <div>
                  <p className="font-bold text-brand-ink">Millennial AI Parser</p>
                  <p className="text-[10px] text-brand-muted font-mono">Entity Extraction</p>
                </div>
                <span className="text-[10px] uppercase font-mono text-purple-primary bg-purple-50 px-1.5 py-0.5 rounded font-bold">Parsed [OK]</span>
              </div>

              <div className="p-3 border border-brand-border bg-[#FAF9FC] rounded flex items-center justify-between">
                <div>
                  <p className="font-bold text-brand-ink">Clio / HubSpot Database</p>
                  <p className="text-[10px] text-brand-muted font-mono">Contact Synchronizer</p>
                </div>
                <span className="text-[10px] uppercase font-mono text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-bold">Synched</span>
              </div>
            </div>

            <div className="p-3 bg-brand-ink rounded text-white flex items-center justify-between text-[11px] font-mono">
              <span>⚡ Net Delay: 14.8 Seconds</span>
              <span className="text-purple-light">Active Node</span>
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
              Robust Data Pipelines
            </span>
            <h2 className="text-3xl font-display font-bold tracking-tight text-brand-ink">
              Seamless Connection Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <div key={idx} className="p-8 border border-brand-border bg-white rounded-xl shadow-sm space-y-4 hover:border-purple-primary transition-all">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-purple-primary">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-ink">{p.title}</h3>
                <p className="text-sm text-brand-muted font-sans leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ block */}
      <FAQAccordion items={crmFaqs} title="AI Automation & CRM FAQs" subtitle="Common inquiries about our database triggers and messaging handoff designs." />

      {/* CTA section line */}
      <section className="bg-white py-12 text-center">
        <button 
          onClick={() => onNavigate("/contact")}
          className="px-6 py-3 bg-gradient-signature text-white rounded-lg font-sans font-semibold text-sm cursor-pointer shadow hover:brightness-110 transition-all inline-flex items-center gap-2"
        >
          Book Your Agency Automation Audit
          <ArrowRight className="w-4 h-3 text-white" />
        </button>
      </section>
    </div>
  );
}
