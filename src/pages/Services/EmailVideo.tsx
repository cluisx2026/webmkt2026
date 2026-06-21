import React from "react";
import { Mail, Film, Radio, Send, PlayCircle, Star, Sparkles, CheckCircle2 } from "lucide-react";
import FAQAccordion from "../../components/FAQAccordion";
import CircuitMotif from "../../components/CircuitMotif";

interface EmailVideoProps {
  onNavigate: (path: string) => void;
}

export default function EmailVideo({ onNavigate }: EmailVideoProps) {
  const emailVideoFaqs = [
    {
      question: "How do short-form video assets drive brand growth?",
      answer: "Short-form video is highly favored by platform algorithms today. We script, edit, and package vertical format narratives (9:16 aspect ratio) designed to capture viewer focus in the first 2 seconds, which we then distribute automatically across Instagram, YouTube, and TikTok channels.",
    },
    {
      question: "What is personalized lifecycle email sequencing?",
      answer: "Instead of sending generic weekly blast updates, we build smart pathways based on user actions. If a prospect downloads a legal brief on your site, they enter a targeted, education-focused series. If an upscale dinner patron books via social, they receive sensory updates about menu highlights, maximizing reservation frequency.",
    },
    {
      question: "Do you handle the actual production and scriptwriting of video assets?",
      answer: "Yes. Our team structures high-converting narrative storyboards, designs visual overlay templates, and generates clean scripting guidelines based on behavioral psychology.",
    },
    {
      question: "How do you ensure our email updates land cleanly in customer main inboxes?",
      answer: "We establish advanced sender authentication protocols (DKIM, SPF, DMARC alignment) on your hosting domain. We cleanse delivery lists continuously and use conversational layouts that prevent promotions folder placement.",
    },
  ];

  const pillars = [
    {
      title: "Vertical Narrative Assets",
      desc: "Scripted, formatted, and optimized video deliverables generated specifically to hook scroll attention on modern platform feeds."
    },
    {
      title: "Behavioral Email Sequences",
      desc: "Drip schedules designed around client actions. Delivers highly educational content to leads exactly when they are ready to convert."
    },
    {
      title: "DMARC & SPF Deliverability Guard",
      desc: "Robust backend system configurations verifying your target credentials so your messaging arrives straight in customer main inboxes."
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
              Email & <span className="text-purple-primary">Video Marketing</span>. Interactive Visual Narratives at Scale.
            </h1>
            <p className="text-brand-muted text-lg font-sans max-w-xl">
              Tell an omnipresent story. We compose highly personalized conversational email paths and script premium vertical video loops that keep South Florida buyers engaged.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate("/contact")}
                className="px-6 py-3 bg-gradient-signature text-white font-sans font-semibold text-sm rounded-lg hover:brightness-110 active:brightness-105 cursor-pointer shadow-sm transition-all"
              >
                Structure My Narrative Map
              </button>
              <button 
                onClick={() => onNavigate("/plans")}
                className="px-6 py-3 border border-brand-border text-brand-ink font-sans font-semibold text-sm rounded-lg hover:bg-white transition-all bg-white/40"
              >
                View Service Support Plans
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-brand-border space-y-6 shadow-sm">
            <h3 className="font-display font-bold text-sm text-brand-ink uppercase tracking-wider flex items-center gap-2">
              <Film className="w-4 h-4 text-purple-primary animate-pulse" />
              Vertical Asset Studio
            </h3>

            <div className="aspect-video bg-[#FAF9FC] rounded-lg border border-brand-border p-4 flex flex-col justify-between relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent pointer-events-none"></div>
              
              <div className="flex justify-between items-start z-10">
                <span className="text-[10px] font-mono bg-purple-primary text-white px-2 py-0.5 rounded uppercase font-bold">
                  Miami Hub Media
                </span>
                <span className="text-[10px] font-mono text-brand-muted">
                  00:59 Length limit
                </span>
              </div>

              <div className="flex flex-col items-center justify-center my-4 z-10">
                <PlayCircle className="w-12 h-12 text-purple-primary filter drop-shadow hover:scale-110 transition-transform cursor-pointer" />
                <p className="text-xs font-mono text-brand-ink font-bold mt-2">Scale Video Content Cycle</p>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-brand-muted z-10">
                <span>9:16 Aspect ratio</span>
                <span>Active output</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-xs text-brand-muted bg-[#FAF9FC] p-3 rounded border border-brand-border">
              <Mail className="w-4 h-4 text-accent-blue" />
              <span>DMARC / SPF Verified • Delivery rate: 98.9%</span>
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
              High-Deliverability Campaigns
            </span>
            <h2 className="text-3xl font-display font-bold tracking-tight text-brand-ink">
              Structured Engagement Channels
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
      <FAQAccordion items={emailVideoFaqs} title="Email & Video Marketing FAQs" subtitle="Common inquiries about our horizontal sequencing strategies and horizontal vertical script structures." />

      {/* CTA section line */}
      <section className="bg-white py-12 text-center">
        <button 
          onClick={() => onNavigate("/contact")}
          className="px-6 py-3 bg-gradient-signature text-white rounded-lg font-sans font-semibold text-sm cursor-pointer shadow hover:brightness-110 transition-all inline-flex items-center gap-2"
        >
          Book Your Digital Brand Alignment Call
          <Send className="w-4 h-4 text-white" />
        </button>
      </section>
    </div>
  );
}
