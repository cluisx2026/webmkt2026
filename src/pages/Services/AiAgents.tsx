import React from "react";
import { Bot, UserCheck, Cpu, Award, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import FAQAccordion from "../../components/FAQAccordion";
import CircuitMotif from "../../components/CircuitMotif";

interface AiAgentsProps {
  onNavigate: (path: string) => void;
}

export default function AiAgents({ onNavigate }: AiAgentsProps) {
  const agentsFaqs = [
    {
      question: "What exactly is an AI Agent or Digital Employee?",
      answer: "Unlike standard chatbots which can only output hardcoded script responses, our AI Agents are fully trained language models integrated with your database APIs. They can analyze files, read emails, query client history, schedule appointments, and perform contextual operations autonomously.",
    },
    {
      question: "Are these agents safe to deploy to our high-value klientèle?",
      answer: "Yes, 100%. We configure strict guardrails and prompt filters. The agent operates within a defined scope of knowledge (your database files and SOPs) and defaults to transferring the conversation to your physical office team whenever complex, critical, or sensitive thresholds are reached.",
    },
    {
      question: "Can an agent schedule direct appointments in our company calendars?",
      answer: "Yes. We configure direct calendar synchronization modules. The agent lists available slots in real-time, books chosen times, requests necessary contact inputs, and logs confirmation notes straight into your system.",
    },
    {
      question: "How long does a digital agent deployment cycle take?",
      answer: "We structure base agents in 2 to 4 weeks. Advanced setups integrated with large databases or proprietary systems require 6 to 10 weeks of training, safety testing, and performance mapping at our Miami district.",
    },
  ];

  const pillars = [
    {
      title: "SOP-Trained Voice & Text Agents",
      desc: "Digital employees meticulously trained on your internal operating documents, answering questions with brand-perfect clarity."
    },
    {
      title: "API Action Scheduling Platforms",
      desc: "Empower agents to perform tasks. They can draft proposals, look up database client files, and synchronize calendar schedule blocks automatically."
    },
    {
      title: "Guardrailed Handoff Triggers",
      desc: "Robust safety filters. Whenever a customer asks abstract questions, expresses frustration, or requires specialized support, the system alerts active human teams."
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
              AI Agents & <span className="text-purple-primary">Digital Employees</span>. Human Scale, Algorithmic Execution.
            </h1>
            <p className="text-brand-muted text-lg font-sans max-w-xl">
              Deploy dedicated virtual employees trained on your company procedures. Scale client support, automate complex intakes, and schedule appointment slots around the clock with zero delay.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate("/contact")}
                className="px-6 py-3 bg-gradient-signature text-white font-sans font-semibold text-sm rounded-lg hover:brightness-110 active:brightness-105 cursor-pointer shadow-sm transition-all"
              >
                Assemble My Virtual Team
              </button>
              <button 
                onClick={() => onNavigate("/plans")}
                className="px-6 py-3 border border-brand-border text-brand-ink font-sans font-semibold text-sm rounded-lg hover:bg-white transition-all bg-white/40"
              >
                Browse Standard Plans
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-brand-border space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <span className="font-display font-bold text-sm text-brand-ink flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-primary animate-pulse" />
                Live Agent Console [V_04]
              </span>
              <span className="h-2.5 w-2.5 bg-emerald-500 rounded-full animate-ping"></span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="bg-[#FAF9FC] border border-brand-border p-3.5 rounded">
                <span className="text-purple-primary">[BOT_INTAKE]:</span> "Hello, I am Lexi, your Law Assistant. Can you tell me the date of your traffic incident in Miami?"
              </div>

              <div className="bg-[#FAF9FC] border border-brand-border p-3.5 rounded">
                <span className="text-accent-blue">[PROSPECT]:</span> "Hi! It happened last Tuesday, on Biscayne Blvd."
              </div>

              <div className="bg-[#FAF9FC] border border-brand-border p-3.5 rounded">
                <span className="text-emerald-600">[INTEGRATOR_ACT]:</span> Verified client record. Scheduled calendar slot for consultation with Case Specialist.
              </div>
            </div>

            <div className="p-3 bg-brand-alt border border-brand-border rounded flex justify-between items-center text-xs text-brand-muted">
              <span>SOP Knowledge Map: 100% Loaded</span>
              <span>Miami HQ Node</span>
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
            <span className="text-xs font-mono text-[#6B21A8] uppercase font-bold tracking-widest bg-purple-50 px-3 py-1 rounded">
              Digital Operations
            </span>
            <h2 className="text-3xl font-display font-bold tracking-tight text-brand-ink">
              Accelerate Team Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <div key={idx} className="p-8 border border-brand-border bg-white rounded-xl shadow-sm space-y-4 hover:border-purple-primary transition-all">
                <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-purple-primary">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-ink">{p.title}</h3>
                <p className="text-sm text-brand-muted font-sans leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ block */}
      <FAQAccordion items={agentsFaqs} title="AI Agents & Employees FAQs" subtitle="Common inquiries about our prompt safety filters and API scheduling connections." />

      {/* CTA section line */}
      <section className="bg-white py-12 text-center">
        <button 
          onClick={() => onNavigate("/contact")}
          className="px-6 py-3 bg-gradient-signature text-white rounded-lg font-sans font-semibold text-sm cursor-pointer shadow hover:brightness-110 transition-all inline-flex items-center gap-2"
        >
          Book Your Team AI Strategy Consult
          <ArrowRight className="w-4 h-3 text-white" />
        </button>
      </section>
    </div>
  );
}
