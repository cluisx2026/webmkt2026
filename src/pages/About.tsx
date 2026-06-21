import React from "react";
import { Award, Target, Landmark, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import CircuitMotif from "../components/CircuitMotif";

interface AboutProps {
  onNavigate: (path: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const leadershipValues = [
    {
      title: "Algorithmic Precision over Hype",
      desc: "We refuse to peddle flat buzzwords. Our marketing strategies are formulated upon measurable database endpoints, Conversions APIs tracking structures, and robust schema code layouts."
    },
    {
      title: "Metropolitan Brickell Core",
      desc: "We live and work in Miami’s Brickell Financial District. We are physically aligned with South Florida's growth patterns, legal directories, hospitality scenes, and real-estate markets."
    },
    {
      title: "Seamless Connected Technology",
      desc: "Our systems connect. We link platform message boxes directly to reservation calendars, CRM profiles, and search index repositories to create frictionless client scale."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#FAF9FC] border-b border-brand-border overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-light/5 rounded-full blur-3xl select-none pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 text-center space-y-6 relative z-10">
          <CircuitMotif variant="badge" />
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-ink tracking-tight max-w-3xl mx-auto leading-tight">
            We Build the <span className="text-purple-primary">Connected Marketing Systems</span> that power Miami’s Leaders.
          </h1>
          <p className="text-brand-muted text-lg font-sans max-w-2xl mx-auto">
            Based in the financial core of Brickell, Miami, Millennial Media operates at the intersection of deep linguistic networks and omnipresent social structures.
          </p>
        </div>
      </section>

      {/* Signature Motif Line */}
      <CircuitMotif className="my-10" />

      {/* Philosophy Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <p className="text-xs font-mono text-purple-primary font-bold uppercase tracking-widest bg-purple-50 px-3 py-1 rounded inline-block">
            Our Core Culture
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink leading-tight">
            Designed for Speed, Configured for Scale.
          </h2>
          
          <p className="text-brand-muted font-sans text-sm md:text-base leading-relaxed">
            Millennial Media was constructed from a singular realization: traditional digital marketing methods are disjointed. Brand copywriting is disconnected from technical SEO schemas; social media postings are detached from CRM databases.
          </p>
          <p className="text-brand-muted font-sans text-sm md:text-base leading-relaxed">
            We solved this. Our engineers design coherent, unified digital amplification frameworks that take inbound prospect interests and process them through automated, qualified routes within 30 seconds.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-brand-border/60">
            <div>
              <p className="text-3xl font-display font-bold text-brand-ink">Brickell FL</p>
              <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">Agency Headquarter location</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-purple-primary">30 Secs</p>
              <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">Average Speed-to-lead Trigger</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-brand-border space-y-6 shadow-sm">
          <h3 className="font-display font-bold text-base text-brand-ink">Our Operational Pillars</h3>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-purple-50 rounded text-purple-primary shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="font-sans font-semibold text-sm text-brand-ink">Physical Miami Native Teams</p>
                <p className="text-xs text-brand-muted mt-1 font-sans">No remote outsourcing delays. We run on-location, high-touch alignment cycles from Brickell.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-blue-50 rounded text-accent-blue shrink-0">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <p className="font-sans font-semibold text-sm text-brand-ink">Enterprise-Grade Legal & Hospitality Focus</p>
                <p className="text-xs text-brand-muted mt-1 font-sans">Our signature software packages (Lexora and Fine Dining Growth Suite) solve highly complex niche directories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="bg-brand-alt py-20 px-6 border-y border-brand-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono text-purple-primary uppercase font-bold tracking-widest bg-pink-50 px-3 py-1 rounded">
              How We Govern scale
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-ink">Our Core Agency Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipValues.map((v, idx) => (
              <div key={idx} className="bg-white p-8 border border-brand-border rounded-xl shadow-sm space-y-4 hover:border-purple-primary transition-all">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-purple-primary">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-ink">{v.title}</h3>
                <p className="text-sm text-brand-muted font-sans leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 px-6 text-center bg-white">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-display font-bold text-brand-ink">
            Partner with Brickell’s Dedicated AI Marketing Specialists.
          </h2>
          <p className="text-brand-muted font-sans">
            Ready to transition from disjointed, flat social postings to full programmatic brand scale? Connect with our Miami headquarters direct team today.
          </p>
          <button
            onClick={() => onNavigate("/contact")}
            className="px-6 py-3 bg-gradient-signature text-white rounded-lg font-sans font-semibold text-sm cursor-pointer hover:brightness-110 transition-all inline-flex items-center gap-2"
          >
            Meet Our Strategy Team In Brickell
            <ArrowRight className="w-4 h-3 text-white" />
          </button>
        </div>
      </section>
    </div>
  );
}
