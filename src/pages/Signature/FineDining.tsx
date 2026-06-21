import React from "react";
import { UtensilsCrossed, Calendar, Award, Star, ArrowRight, Compass, Heart } from "lucide-react";
import FAQAccordion from "../../components/FAQAccordion";
import CircuitMotif from "../../components/CircuitMotif";

interface FineDiningProps {
  onNavigate: (path: string) => void;
}

export default function FineDining({ onNavigate }: FineDiningProps) {
  const culinaryFaqs = [
    {
      question: "How does the Guest Growth Suite fill midweek tables (Tues-Thurs) in Miami?",
      answer: "We structure localized visual campaigns on Instagram and TikTok targeting food enthusiasts within a 5-mile radius of Brickell, Coral Gables, or Miami Beach. These campaigns link directly to custom Messenger/DM paths that reward patrons with dynamic booking vouchers if they schedule midweek tables, lifting off midweek occupancy rates.",
    },
    {
      question: "Does the suite integrate with OpenTable or SevenRooms?",
      answer: "Yes, our connection models sync perfectly with SevenRooms, OpenTable, and Resy. The system detects open table grids in real-time, displays slots inside conversational paths, and automatically registers patrons without manual host interaction.",
    },
    {
      question: "What are local culinary food-influencer viral networks?",
      answer: "We hold relationships with over 200 premium South Florida-based culinary video creators. We manage the outreach, scripting, and publishing schedules, having them create sensory-rich visual reels about your signature menu items, distributing them automatically inside the Miami district area.",
    },
    {
      question: "Are sensory vertical video assets provided as part of the system?",
      answer: "Yes, we script and produce high-resolution aesthetic vertical loops (9:16 vertical ratio). These vertical micro-campaigns capture culinary preparation, cocktail layouts, and interior dining room atmospheres, optimized perfectly to trigger algorithm recommendations.",
    },
  ];

  const valueSpecs = [
    {
      title: "Interactive DM Reservation Desk",
      desc: "Turn social media interactions into confirmed seats. Our automated paths answer patrons' messages and book tables directly into SevenRooms or OpenTable."
    },
    {
      title: "Influencer Content Multiplier",
      desc: "No flat clipart. Sourced local Miami culinary filmmakers create actual visual updates of your kitchen creations that drive food envy on social grids."
    },
    {
      title: "Midweek Booking Optimization",
      desc: "Boost your slow days. We configure localized algorithm ads that incentivize midweek dinner dates and group culinary bookings."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-[#FAF9FC] overflow-hidden border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <CircuitMotif variant="badge" />
            <span className="text-xs font-mono font-bold text-accent-blue uppercase tracking-widest block">
              Bespoke Culinary Tech Suite
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-ink tracking-tight leading-tight">
              Fill Tables. Build Loyalty. <span className="text-[#2563EB]">Omnipresent Digital Guest Acquisition</span>.
            </h1>
            <p className="text-brand-muted text-lg font-sans max-w-xl">
              Specially engineered for high-end Miami culinary groups. Turn digital scroll reach and reels comments into booked Resy reservation covers within seconds.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate("/contact")}
                className="px-6 py-3 bg-gradient-signature text-white font-sans font-semibold text-sm rounded-lg hover:brightness-110 active:brightness-105 cursor-pointer shadow-sm transition-all"
              >
                Deploy Dining Guest Suite
              </button>
              <button 
                onClick={() => onNavigate("/plans")}
                className="px-6 py-3 border border-brand-border text-brand-ink font-sans font-semibold text-sm rounded-lg hover:bg-white transition-all bg-white/40"
              >
                Research Service Model
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-brand-border space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-brand-border pb-3 text-brand-ink font-display font-bold text-sm">
              <UtensilsCrossed className="w-5 h-5 text-accent-blue" />
              <span>Dining Table Booking Syncher</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-[#FAF9FC] border border-brand-border rounded flex justify-between">
                <span>RESERVATION CAPABLE:</span>
                <span className="text-emerald-600 font-bold">YES [ACTIVE]</span>
              </div>
              <div className="p-3 bg-[#FAF9FC] border border-brand-border rounded flex justify-between">
                <span>CONNECTED PLATFORMS:</span>
                <span className="text-purple-primary font-bold">RESY / SEVENROOMS</span>
              </div>
              <div className="p-3 bg-[#FAF9FC] border border-brand-border rounded flex justify-between">
                <span>FOOD INFLUENCER REACH:</span>
                <span className="text-blue-600 font-bold">240K+ REGIONAL</span>
              </div>
            </div>

            <div className="p-3 bg-brand-ink rounded text-white text-center text-xs font-semibold">
              🍽️ Tailored for Upscale South Florida Culinary Concepts
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
              Culinary Client Scaling
            </span>
            <h2 className="text-3xl font-display font-bold tracking-tight text-brand-ink">
              Seamless Seating Acquisitions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueSpecs.map((f, idx) => (
              <div key={idx} className="p-8 border border-brand-border bg-white rounded-xl shadow-sm space-y-4 hover:border-purple-primary transition-all">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-purple-primary">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-ink">{f.title}</h3>
                <p className="text-sm text-brand-muted font-sans leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ block */}
      <FAQAccordion items={culinaryFaqs} title="Dining Guest Growth FAQs" subtitle="Common inquiries about our reservation system sync setups and influencer publishing networks." />

      {/* Call to Action Band */}
      <div className="bg-[#FFFFFF] py-12 text-center">
        <button 
          onClick={() => onNavigate("/contact")}
          className="px-8 py-4 bg-gradient-signature text-white font-sans font-semibold rounded-lg shadow hover:brightness-110 transition-all cursor-pointer inline-flex items-center gap-2"
        >
          Secure Dining growth suite package
          <UtensilsCrossed className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
