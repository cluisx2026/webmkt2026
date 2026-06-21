import React, { useState } from "react";
import { Check, X, ShieldCheck, Mail, ArrowRight, Server, Star, CreditCard } from "lucide-react";
import CircuitMotif from "../components/CircuitMotif";

interface PlansProps {
  onNavigate: (path: string) => void;
}

export default function Plans({ onNavigate }: PlansProps) {
  const [activeTab, setActiveTab] = useState<"marketing" | "signature">("marketing");

  const marketingPlans = [
    {
      name: "Growth Starter Model",
      subtitle: "Essential Amplification",
      isPopular: false,
      desc: "Ideal for growing Miami medical practices, individual legal practitioners, and high-potential local hospitality venues looking to lock down search presence.",
      icon: "⚡",
      features: [
        { name: "Organic SEO & Web Presence", included: "Basic Setup" },
        { name: "Social Media Platform Publishing", included: "2 Platforms" },
        { name: "Ad Campaign Optimization", included: "Basic Setup" },
        { name: "Email Lifecycle Sequences", included: false },
        { name: "CRM Integration Middleware", included: false },
        { name: "AI Agent & Custom Employees", included: false },
        { name: "Monthly Performance Alignment Review", included: "Digital Report" },
      ],
    },
    {
      name: "Accelerated Scale Suite",
      subtitle: "Omnipresent Market Leverage",
      isPopular: true,
      desc: "Our highly aligned strategic setup. Combines comprehensive multi-channel publishing with instant lead processing databases to maximize organic conversions.",
      icon: "🔥",
      features: [
        { name: "Organic SEO & Web Presence", included: "Advanced Clustering" },
        { name: "Social Media Platform Publishing", included: "3 Platforms + Video" },
        { name: "Ad Campaign Optimization", included: "CAPI + Server Sync" },
        { name: "Email Lifecycle Sequences", included: "Custom Cascades" },
        { name: "CRM Integration Middleware", included: "HubSpot / Clio / Custom" },
        { name: "AI Agent & Custom Employees", included: false },
        { name: "Monthly Performance Alignment Review", included: "Monthly Video Alignment" },
      ],
    },
    {
      name: "Enterprise Amplification Model",
      subtitle: "Complete Digital Mastery",
      isPopular: false,
      desc: "The ultimate operation. Generates full conversational agency employees trained on your business procedures and locks down regional search sectors.",
      icon: "👑",
      features: [
        { name: "Organic SEO & Web Presence", included: "Enterprise Authority" },
        { name: "Social Media Platform Publishing", included: "Omnipresent + Creators" },
        { name: "Ad Campaign Optimization", included: "Full Server CAPI + Dynamic" },
        { name: "Email Lifecycle Sequences", included: "Full Multi-Tiered Paths" },
        { name: "CRM Integration Middleware", included: "Custom Deep Mappings" },
        { name: "AI Agent & Custom Employees", included: "SOP-Trained Voice/Chat" },
        { name: "Monthly Performance Alignment Review", included: "In-Person Brickell Boardroom" },
      ],
    },
  ];

  const compareFeatures = [
    "Organic SEO & Web Presence",
    "Social Media Platform Publishing",
    "Ad Campaign Optimization",
    "Email Lifecycle Sequences",
    "CRM Integration Middleware",
    "AI Agent & Custom Employees",
    "CAPI Server Tracking Setup",
    "Miami HQ In-Person Strategy Sessions",
    "Monthly Deliverable Audits"
  ];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#FAF9FC] border-b border-brand-border overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-light/5 rounded-full blur-3xl select-none pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6 relative z-10">
          <CircuitMotif variant="badge" />
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-ink tracking-tight max-w-3xl mx-auto leading-tight">
            Tailored <span className="text-purple-primary">Support & Scaling</span> Plans Built for Miami’s Leaders.
          </h1>
          <p className="text-brand-muted text-lg font-sans max-w-2xl mx-auto">
            Review our highly programmatic operational partnerships. Absolutely no pricing numbers or hidden fees—simply pristine, value-first strategies designed around your growth goals.
          </p>
        </div>
      </section>

      {/* Signature Motif Line */}
      <CircuitMotif className="my-10" />

      {/* Pricing Cards Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {marketingPlans.map((plan, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-2xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular 
                  ? "border-purple-primary ring-2 ring-purple-primary/10 shadow-lg scale-102 lg:scale-105" 
                  : "border-brand-border hover:border-purple-light hover:shadow-md"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-signature text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                  MOST ALIGNED FOR SCALING
                </span>
              )}

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-3xl mb-2 block">{plan.icon}</span>
                    <h2 className="text-2xl font-display font-bold text-brand-ink">{plan.name}</h2>
                    <p className="text-xs font-mono text-purple-primary font-bold uppercase tracking-widest mt-1">
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-brand-muted text-sm font-sans mb-8 leading-relaxed h-20">
                  {plan.desc}
                </p>

                {/* Pricing Number Replacement per Client instruction */}
                <div className="mb-8 p-5 bg-[#FAF9FC] border border-brand-border rounded-xl text-center">
                  <p className="text-xs font-mono text-brand-muted uppercase tracking-wider mb-1">PROMPT ALIGNMENT PRICING</p>
                  <p className="font-display font-bold text-xl text-brand-ink">Get a Custom Quote</p>
                  <p className="text-[10px] text-brand-muted mt-1 leading-none">Capped by scale & service targets</p>
                </div>

                <div className="border-t border-brand-border pt-6 space-y-4">
                  <p className="text-xs font-mono text-brand-ink font-bold uppercase tracking-wider">Features included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs font-sans text-brand-ink">
                        {feature.included ? (
                          <Check className="w-4.5 h-4.5 text-emerald-600 mt-0.5 shrink-0" />
                        ) : (
                          <X className="w-4.5 h-4.5 text-brand-muted mt-0.5 opacity-40 shrink-0" />
                        )}
                        <div>
                          <span className={`${!feature.included ? "text-brand-muted line-through opacity-60" : ""}`}>
                            {feature.name}
                          </span>
                          {feature.included && typeof feature.included === "string" && (
                            <span className="block text-[10px] font-mono text-purple-primary mt-0.5">
                              • {feature.included}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate(`/contact?plan=${encodeURIComponent(plan.name)}`)}
                  className={`w-full py-3.5 rounded-lg font-sans font-bold text-sm cursor-pointer transition-all uppercase tracking-wider ${
                    plan.isPopular 
                      ? "bg-gradient-signature text-white hover:brightness-110 shadow" 
                      : "border border-brand-border text-brand-ink hover:text-purple-primary hover:border-purple-primary"
                  }`}
                >
                  Request a Custom Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Responsive Comparison Table Section */}
      <section className="bg-brand-alt py-20 px-6 border-t border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono text-purple-primary uppercase font-bold tracking-widest bg-pink-50 px-3 py-1 rounded">
              Feature-by-Feature Blueprint
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-ink">
              Compare Our AI Divisions
            </h2>
          </div>

          {/* Desktop Table View (lg screens Only) */}
          <div className="hidden lg:block overflow-x-auto bg-white border border-brand-border rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-brand-border bg-[#FAF9FC]">
                  <th className="p-5 font-display font-bold text-sm text-brand-ink w-1/4">Divisional Functions</th>
                  <th className="p-5 font-display font-bold text-sm text-brand-ink">Growth Starter Model</th>
                  <th className="p-5 font-display font-bold text-sm text-brand-ink">Accelerated Scale Suite</th>
                  <th className="p-5 font-display font-bold text-sm text-[#6B21A8]">Enterprise Amplification</th>
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((f, i) => (
                  <tr key={i} className="border-b border-brand-border hover:bg-[#FAF9FC]/40 font-sans text-xs">
                    <td className="p-5 font-semibold text-brand-ink">{f}</td>
                    {/* Growth Started column */}
                    <td className="p-5 text-brand-muted">
                      {i === 0 ? "Basic Setup" : i === 1 ? "2 Platforms" : i === 2 ? "Basic Scripting" : i === 8 ? "Quarterly Analysis" : i < 4 ? "Included" : "—"}
                    </td>
                    {/* Accelerated column */}
                    <td className="p-5 text-brand-ink">
                      {i === 0 ? "Top-Level Cluster" : i === 1 ? "3 Platforms + Vertical" : i === 2 ? "CAPI Synched" : i === 4 ? "Yes" : i === 5 ? "—" : i < 8 ? "Fully Configured" : "—"}
                    </td>
                    {/* Enterprise column */}
                    <td className="p-5 text-brand-ink font-semibold">
                      {i === 4 ? "Full Setup" : i === 5 ? "Custom SOP Training" : i === 7 ? "Yes (Miami Boardroom)" : "Custom Premium Stack"}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="p-5 font-display font-bold text-sm text-brand-ink">Investment Plan</td>
                  <td className="p-5">
                    <button onClick={() => onNavigate("/contact")} className="text-xs font-mono text-purple-primary font-bold hover:underline">Get a Custom Quote</button>
                  </td>
                  <td className="p-5">
                    <button onClick={() => onNavigate("/contact")} className="text-xs font-mono text-purple-primary font-bold hover:underline">Get a Custom Quote</button>
                  </td>
                  <td className="p-5">
                    <button onClick={() => onNavigate("/contact")} className="text-xs font-mono text-purple-primary font-bold hover:underline">Get a Custom Quote</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Collapsed Cards View (sm/md screens) */}
          <div className="lg:hidden space-y-6">
            {compareFeatures.slice(0, 6).map((f, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg border border-brand-border space-y-3 shadow-sm">
                <p className="font-display font-bold text-sm text-brand-ink border-b border-brand-border pb-2">{f}</p>
                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                  <div>
                    <span className="block text-brand-muted">Growth:</span>
                    <span className="font-semibold text-brand-ink">{idx < 3 ? "✓ Included" : "—"}</span>
                  </div>
                  <div>
                    <span className="block text-brand-muted">Accelerated:</span>
                    <span className="font-semibold text-purple-primary">{idx < 5 ? "✓ Advanced" : "—"}</span>
                  </div>
                  <div>
                    <span className="block text-brand-muted">Enterprise:</span>
                    <span className="font-semibold text-accent-blue">✓ Omnipresent</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans FAQ CTA */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-xl font-display font-bold text-brand-ink">
            Questions About Custom Platform Connections?
          </p>
          <p className="text-sm text-brand-muted font-sans">
            We structure our arrangements based on your unique channels and specific lead goals. Get back to us to setup a customized brief with an AI marketing specialist in Brickell.
          </p>
          <button
            onClick={() => onNavigate("/contact")}
            className="px-6 py-3 bg-gradient-signature text-white rounded-lg font-sans font-semibold text-sm cursor-pointer hover:brightness-110 transition-all inline-flex items-center gap-2"
          >
            Schedule Briefing Call
            <ArrowRight className="w-4 h-3 text-white" />
          </button>
        </div>
      </section>
    </div>
  );
}
