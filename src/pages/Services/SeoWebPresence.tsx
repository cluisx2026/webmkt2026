import React from "react";
import { motion } from "motion/react";
import { Search, Globe, Key, BarChart, ServerCrash, Share2, Sparkles, CheckCircle2 } from "lucide-react";
import FAQAccordion from "../../components/FAQAccordion";
import CircuitMotif from "../../components/CircuitMotif";

interface SeoWebPresenceProps {
  onNavigate: (path: string) => void;
}

export default function SeoWebPresence({ onNavigate }: SeoWebPresenceProps) {
  const seoFaqs = [
    {
      question: "What is a semantic lookup network or entity structure?",
      answer: "Modern search engines do not just count keywords. They build entity maps. We structure your website's schema markup, article nodes, and contextual internal linking so search indices understand your exact geographic and operational authority instantly.",
    },
    {
      question: "How long does it take for AI SEO structures to rank in Miami?",
      answer: "While traditional SEO takes 6 to 12 months, our programmatic authority architectures can establish high indexing signals and custom search rankings within 45 to 90 days. We focus exclusively on high-conversion intent keywords rather than generic high-competition volume.",
    },
    {
      question: "Do you configure JSON-LD structured schemas for our services?",
      answer: "Yes, every page, post, and signature element we construct has customized JSON-LD micro-markup embedded directly. This facilitates smart Google rich snippet rendering, voice search accessibility, and premium visual placement.",
    },
    {
      question: "How is search engine optimization different for law practices vs. culinary brands?",
      answer: "Consumer behavior is fundamentally distinct. Plaintifs search with high urgency ('Brickell injury attorney car crash'), whereas restaurant patrons look for ambiance, location, and culinary specialties. We map your specific search architecture to target these specific behavioral paths.",
    },
  ];

  const valuePillars = [
    {
      title: "Semantic Content Architectures",
      desc: "Structure deep topical pillars that satisfy Google's BERT and MUM algorithms. We create extensive educational paths that lock down local search authority."
    },
    {
      title: "Dynamic Entity Link Clusters",
      desc: "Build highly authoritative links back into your platform from localized Florida networks, legal aggregates, and national journals."
    },
    {
      title: "Ultra-Fast Mobile Schema Setup",
      desc: "Speed is a core rank factor. We build standard-compliant, lightweight React code paths with sub-second page rendering times in Miami."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="relative py-20 bg-[#FAF9FC] overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 opacity-5 select-none pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path d="M5,40 L95,40 M5,60 L95,60" stroke="#6B21A8" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <CircuitMotif variant="badge" />
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-ink tracking-tight leading-tight">
              SEO & <span className="text-purple-primary">Web Presence</span> Engineered for Absolute Organic Domination.
            </h1>
            <p className="text-brand-muted text-lg font-sans max-w-xl">
              Command search engine directories in Miami. We deploy clean schema layouts, semantic authority architectures, and localized link frameworks to capture high-intent buyers exactly when they seek answers.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate("/contact")}
                className="px-6 py-3 bg-gradient-signature text-white font-sans font-semibold text-sm rounded-lg hover:brightness-110 active:brightness-105 cursor-pointer shadow-sm transition-all"
              >
                Request a Semantic SEO Audit
              </button>
              <button 
                onClick={() => onNavigate("/plans")}
                className="px-6 py-3 border border-brand-border text-brand-ink font-sans font-semibold text-sm rounded-lg hover:bg-white transition-all bg-white/40"
              >
                View SEO Plans
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-xl border border-brand-border shadow-sm space-y-6">
            <p className="font-mono text-xs text-purple-primary font-bold uppercase tracking-wider">
              Organic Authority Performance Map
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold font-sans mb-1">
                  <span>High-Intent Legal Directory Dominance</span>
                  <span>94%</span>
                </div>
                <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
                  <div className="h-full bg-purple-primary rounded-full" style={{ width: "94%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold font-sans mb-1">
                  <span>Local Miami Regional Pack Indexing</span>
                  <span>88%</span>
                </div>
                <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
                  <div className="h-full bg-accent-blue rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold font-sans mb-1">
                  <span>Mobile Rendering & LCP Speeds</span>
                  <span>99%</span>
                </div>
                <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
                  <div className="h-full bg-purple-light rounded-full" style={{ width: "99%" }}></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs font-mono text-brand-muted">
              <span>Updated: Real-time API</span>
              <span>Miami District</span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Motif Line */}
      <CircuitMotif className="my-10" />

      {/* Value Pillars Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono text-[#2563EB] uppercase font-bold tracking-widest bg-blue-50 px-2 py-0.5 rounded">
              Core Technical Features
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-ink">
              Programmatic Structures that Outlive paid Campaigns
            </h2>
            <p className="text-brand-muted font-sans">
              Paid clicks disappear the moment you stop feeding the budget. Organic presence, built upon rich entity relationships and compliant site code, expands month-over-month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePillars.map((p, idx) => (
              <div key={idx} className="p-8 border border-brand-border bg-white rounded-xl shadow-sm space-y-4 transition-colors hover:border-purple-primary">
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

      {/* Trust Quote Segment */}
      <section className="bg-[#FAF9FC] py-16 border-y border-brand-border">
        <div className="max-w-4xl mx-auto text-center px-6 space-y-4">
          <p className="text-brand-ink font-sans text-base md:text-lg italic leading-relaxed">
            "Prior to working with Millennial Media, we spent thousands monthly bidding on generic paid searches. Their semantic structure ranked our primary litigation service on page one of Google, leading to record inbound caseloads."
          </p>
          <div className="font-mono text-xs font-bold text-purple-primary uppercase tracking-wider">
            — Senior Litigation Counsel, Miami-Dade Law Partners
          </div>
        </div>
      </section>

      {/* FAQ Accordion Component */}
      <FAQAccordion items={seoFaqs} title="SEO & Web Presence FAQs" subtitle="Common questions about our organic search authority and entity optimization architectures." />

      {/* Call to Action Band */}
      <div className="bg-[#FFFFFF] py-12 text-center">
        <button 
          onClick={() => onNavigate("/contact")}
          className="px-8 py-4 bg-gradient-signature text-white font-sans font-semibold rounded-lg shadow hover:brightness-110 transition-all cursor-pointer inline-flex items-center gap-2"
        >
          Book Your Organic Audit Call
          <Globe className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
