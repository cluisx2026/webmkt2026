import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Zap, Target, Star, TrendingUp, ShieldCheck, Mail, ShieldAlert } from "lucide-react";
import CircuitMotif from "../components/CircuitMotif";

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const highlights = [
    {
      title: "SEO & Web Presence",
      desc: "Command high-intent search fields. We deploy semantic keywords architecture to lock down critical Google results without paid dependence.",
      path: "/services/seo-web-presence",
      accent: "from-purple-primary to-purple-light",
    },
    {
      title: "Social Media Management",
      desc: "Scale your voice across platform feeds. Real-time trend parsing mapped into structured social campaigns for authentic audience expansion.",
      path: "/services/social-media",
      accent: "from-purple-primary to-accent-blue",
    },
    {
      title: "Paid Ads Scaling",
      desc: "Maximized conversion efficiencies. Algorithmic bid systems paired with premium content generation structures on Google and Meta.",
      path: "/services/paid-ads",
      accent: "from-accent-blue to-purple-light",
    },
  ];

  const signatures = [
    {
      name: "Lexora",
      sub: "Law Firm AI Growth Platform",
      desc: "An enterprise-grade case-acquisition model engineered specifically for high-growth plaintiff law firms. Features include semantic document intakes, live platform lead routing, and dynamic qualification engines.",
      path: "/signature/lexora",
      icon: "⚖️",
    },
    {
      name: "Fine Dining Guest Growth Suite",
      sub: "Local Culinary Viral Scaling",
      desc: "Tailored specifically for fine dining venues in Miami and South Florida. Maximizes mid-week occupancy and drives upscale local influencer-led booking cycles.",
      path: "/signature/fine-dining",
      icon: "🍽️",
    },
  ];

  return (
    <div className="bg-white scroll-smooth relative overflow-hidden">
      {/* CIRCUIT MOTIF SIGNATURE BACKGROUND */}
      <svg className="absolute top-1/2 right-[-120px] w-[600px] h-[600px] opacity-[0.09] pointer-events-none -translate-y-1/2 z-0 hidden lg:block" viewBox="0 0 100 100">
        <path d="M0,50 L20,50 L30,30 L50,30 L60,10 L100,10" fill="none" stroke="#6B21A8" strokeWidth="0.6" />
        <path d="M0,70 L40,70 L50,90 L80,90 L100,60" fill="none" stroke="#2563EB" strokeWidth="0.6" />
        <circle cx="30" cy="30" r="1.5" fill="#6B21A8" />
        <circle cx="60" cy="10" r="1.5" fill="#2563EB" />
        <circle cx="50" cy="90" r="1.5" fill="#6B21A8" />
      </svg>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-24 lg:py-32 px-6 bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF9FC] rounded-full blur-3xl -translate-y-12 translate-x-12 select-none pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-light/5 rounded-full blur-2xl -translate-x-12 translate-y-12 select-none pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 reveal-on-scroll">
            <CircuitMotif variant="badge" />
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-ink leading-tight tracking-tight">
              AI-Powered <span className="text-gradient-signature">Digital Marketing</span> Engineered for Miami’s Boldest Brands.
            </h1>
            
            <p className="text-brand-muted text-lg font-sans max-w-xl leading-relaxed">
              Based in Brickell, Miami, we configure deep language networks and omnipresent social structures to multiply your high-intent traffic, automate lead desks, and amplify content streams. 
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("/contact")}
                className="w-full sm:w-auto px-8 py-4 btn-gradient-sleek text-white rounded-lg font-sans font-semibold text-base cursor-pointer flex items-center justify-center gap-2"
              >
                Book a Free AI Audit
                <ArrowRight className="w-5 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "#FAF9FC" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("/plans")}
                className="w-full sm:w-auto px-8 py-4 border border-brand-border text-purple-primary rounded-lg font-sans font-semibold text-base cursor-pointer hover:border-purple-primary hover:shadow-md transition-all bg-white"
              >
                Our Plans & Services
              </motion.button>
            </div>

            <div className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-brand-border/60">
              <div>
                <p className="text-2xl font-display font-bold text-brand-ink">10x</p>
                <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">Average Intake Scale</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-purple-primary">100%</p>
                <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">Lead Automation Rate</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-accent-blue">Miami, FL</p>
                <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">Local Native Intelligence</p>
              </div>
            </div>
          </div>

          {/* Graphical Logo/Icon Concept Side */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square border border-brand-border rounded-2xl bg-[#FAF9FC] p-8 flex flex-col justify-between shadow-sm overflow-hidden group">
              {/* Circuit lines decorative background */}
              <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path d="M10,50 L90,50 M30,10 L30,90 M70,10 L70,90" stroke="#6B21A8" strokeWidth="0.5" />
                  <circle cx="30" cy="50" r="3" fill="#2563EB" />
                  <circle cx="70" cy="50" r="3" fill="#6B21A8" />
                </svg>
              </div>

              <div className="flex justify-between items-start z-10">
                <span className="text-xs font-mono text-accent-blue font-bold tracking-widest uppercase">
                  Connected Node [MM_01]
                </span>
                <span className="text-xs font-mono text-brand-muted">
                  Miami-Brickell
                </span>
              </div>

              {/* Central Glowing "M" logo badge */}
              <div className="flex flex-col items-center justify-center my-6 z-10">
                <motion.div 
                  className="w-24 h-24 rounded-2xl bg-gradient-signature flex items-center justify-center text-white font-display font-bold text-5xl shadow-2xl relative"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  M
                  {/* Small decorative nodes */}
                  <span className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 rounded-full border border-white bg-purple-light"></span>
                  <span className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 rounded-full border border-white bg-accent-blue animate-pulse"></span>
                </motion.div>
                <h3 className="font-display font-semibold text-lg text-brand-ink mt-6">Millennial Amplification Model</h3>
                <p className="text-xs font-mono text-brand-muted mt-1 leading-none">Connecting Feeds & Lang Intelligence</p>
              </div>

              <div className="flex justify-around items-center pt-4 border-t border-brand-border z-10 bg-white/60 p-2 rounded-lg">
                <span className="text-xs font-mono text-brand-ink font-semibold border border-brand-border px-2 py-0.5 rounded bg-white">Instagram Node</span>
                <span className="text-[#9333EA] text-sm">•</span>
                <span className="text-xs font-mono text-brand-ink font-semibold border border-brand-border px-2 py-0.5 rounded bg-white">LinkedIn Node</span>
                <span className="text-accent-blue text-sm">•</span>
                <span className="text-xs font-mono text-brand-ink font-semibold border border-brand-border px-2 py-0.5 rounded bg-white">TikTok Node</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature circuit decoration */}
      <CircuitMotif className="my-6" />

      {/* 2. THE PROBLEM WE SOLVE & VALUE PROPOSITION */}
      <section className="bg-[#FAF9FC] py-20 px-6 border-y border-[#EDE9F4] reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono tracking-widest text-[#6B21A8] uppercase font-bold">
              The Realities of Modern Scale
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-ink">
              Traditional Ad Playbooks Are Failing. We Deploy Algorithmic Amplification.
            </h2>
            <p className="text-brand-muted text-lg font-sans">
              Modern digital presence is no longer just about bidding higher on click-rates. It is about deploying automated, high-relevance semantic stacks that capture and lock down customer interest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-brand-border card-hover-sleek space-y-5">
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-rose-600">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-ink">Rising Clipart Budgets</h3>
              <p className="text-brand-muted font-sans text-sm leading-relaxed">
                Paying indefinitely for generic social ads without backend amplification is a high-waste visual exercise. We integrate physical lead automation systems directly into platform feeds.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-brand-border card-hover-sleek space-y-5">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-primary">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-ink">Advanced Intake Delay</h3>
              <p className="text-brand-muted font-sans text-sm leading-relaxed">
                Leads sitting on sheets lose 80% valuation in under 5 minutes. Our CRM setups and AI employees qualify intakes within 30 seconds of content submission.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-brand-border card-hover-sleek space-y-5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-accent-blue">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-ink">Search Authority Command</h3>
              <p className="text-brand-muted font-sans text-sm leading-relaxed">
                Search queries are high-intent. Our bespoke authority structures rank law firms, medical groups, and premium venues for actual business-generating terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES HIGHLIGHT GENERATOR */}
      <section className="bg-white py-24 px-6 reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono tracking-widest text-[#2563EB] uppercase font-bold">
                Strategic Digital Pillars
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-ink tracking-tight">
                Six Pillars of Algorithmic Mastery.
              </h2>
            </div>
            <p className="text-brand-muted font-sans max-w-md">
              From semantic lookup configurations to conversational employee layers, we engineer full-funnel systems that convert modern feeds into bottom-line scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <div 
                key={i}
                className="bg-white p-8 rounded-2xl border border-brand-border card-hover-sleek flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-10 h-1 bg-gradient-to-r ${h.accent} rounded-full mb-6`}></div>
                  <h3 className="text-xl font-display font-bold text-brand-ink mb-4 group-hover:text-purple-primary transition-colors">
                    {h.title}
                  </h3>
                  <p className="text-brand-muted font-sans text-sm leading-relaxed mb-8">
                    {h.desc}
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate(h.path)}
                  className="inline-flex items-center gap-2 font-mono text-xs text-purple-primary font-bold tracking-wider group-hover:gap-3 transition-all cursor-pointer text-left"
                >
                  EXPLORE ENGINE DETAILS
                  <ArrowRight className="w-4 h-3 text-purple-primary" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate("/plans")}
              className="px-6 py-3 border border-purple-primary text-purple-primary rounded-lg font-sans font-semibold hover:bg-brand-alt transition-all hover:shadow-sm inline-flex items-center gap-2 cursor-pointer bg-white"
            >
              See All 6 AI Marketing Divisions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. RECURRING SIGNATURE PRODUCTS SHOWCASE */}
      <section className="bg-[#FAF9FC] py-24 px-6 border-y border-brand-border relative overflow-hidden reveal-on-scroll">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-light/5 rounded-full blur-3xl -translate-y-1/2 select-none pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono tracking-widest text-[#6B21A8] uppercase font-bold">
              Proprietary Enterprise Tech
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-ink">
              Signature Marketing Suites built for Specific Niches
            </h2>
            <p className="text-brand-muted font-sans text-base">
              We recognized that law practices and local culinary venues require more than generic marketing formulas. Our dedicated engineer teams constructed targeted visual & local scaling software.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {signatures.map((s, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 md:p-10 rounded-2xl border border-brand-border card-hover-sleek flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-6">{s.icon}</div>
                  <p className="text-xs font-mono text-purple-primary font-bold uppercase tracking-widest mb-2">
                    {s.sub}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-ink mb-4">
                    {s.name}
                  </h3>
                  <p className="text-brand-muted font-sans text-sm md:text-base leading-relaxed mb-8">
                    {s.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-brand-border">
                  <button
                    onClick={() => onNavigate(s.path)}
                    className="px-5 py-2.5 btn-gradient-sleek text-white rounded-lg font-sans font-semibold text-xs cursor-pointer flex items-center gap-1.5"
                  >
                    Examine Product Architecture
                    <ArrowRight className="w-4 h-3" />
                  </button>
                  <button
                    onClick={() => onNavigate("/contact")}
                    className="px-5 py-2.5 border border-brand-border text-brand-ink hover:text-purple-primary rounded-lg font-sans font-semibold text-xs cursor-pointer transition-all bg-white hover:shadow-sm"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. METROPOLITAN MIAMI NATIVE BRAND VALUE */}
      <section className="bg-white py-24 px-6 reveal-on-scroll">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#2563EB] uppercase font-bold bg-blue-50 px-3 py-1 rounded">
              Brickell Financial District Base
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink tracking-tight">
              Proudly Anchored in South Florida's Emerging AI Tech Hub.
            </h2>
            <p className="text-brand-muted font-sans leading-relaxed">
              We don't serve from remote servers in isolation. Our core operations and technical strategy team run from Brickell, Miami. We map digital strategies directly to South Florida's unique real-estate, legal services, luxury culinary scene, and international finance markets.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-sans font-semibold text-xs">
                  ✓
                </div>
                <span className="font-sans text-sm font-semibold text-brand-ink">In-person monthly strategy alignment options</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-sans font-semibold text-xs">
                  ✓
                </div>
                <span className="font-sans text-sm font-semibold text-brand-ink">Deep localized market demographics analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-sans font-semibold text-xs">
                  ✓
                </div>
                <span className="font-sans text-sm font-semibold text-brand-ink">Direct physical platform connection audits</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* Social icons, circuit mark graphics showcase */}
          <div className="lg:col-span-6 bg-[#FAF9FC] border border-brand-border rounded-2xl p-8 space-y-6">
            <p className="text-xs font-mono text-purple-primary font-bold uppercase tracking-wider">
              Connected Platform API Feeds Matrix
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-brand-border card-hover-sleek">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans font-semibold text-xs text-brand-ink">Instagram Feed Node</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-600 bg-emerald-50">Active API</span>
                </div>
                <p className="text-xs text-brand-muted font-sans leading-relaxed">
                  Real-time visual content distribution channels connected to regional Miami trend matrices.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-brand-border card-hover-sleek">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans font-semibold text-xs text-brand-ink">Google BERT/MUM Node</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-600 bg-emerald-50">Active API</span>
                </div>
                <p className="text-xs text-brand-muted font-sans leading-relaxed">
                  Targeted entity relationship mapping so law firms rank for high-value transactional legal keywords.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-brand-border card-hover-sleek">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans font-semibold text-xs text-brand-ink">TikTok Viral Matrix</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-600 bg-emerald-50">Active API</span>
                </div>
                <p className="text-xs text-brand-muted font-sans leading-relaxed">
                  Short-form narrative assets compiled with algorithmic pacing styles designed to maximize regional reach.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-brand-border card-hover-sleek">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans font-semibold text-xs text-brand-ink">Lexora Core Parsing Engine</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-purple-primary bg-purple-50">Proprietary</span>
                </div>
                <p className="text-xs text-brand-muted font-sans leading-relaxed">
                  Advanced intake parser trained specifically on personal injury and litigation intake records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST & BRAND ADVOCACY */}
      <section className="bg-[#FAF9FC] py-20 px-6 border-t border-brand-border reveal-on-scroll">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <p className="font-mono text-xs text-brand-muted uppercase tracking-widest font-bold">
            Trusted by Leaders of Legal & Culinary Brands
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl border border-brand-border card-hover-sleek">
              <div className="flex items-center gap-1 text-purple-primary mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-brand-muted font-sans text-sm italic mb-4 leading-relaxed">
                "Millennial Media transformed our local Miami presence. Leveraging their SEO authority structures, our plaintiff intake leads scaled exceptionally in under four months."
              </p>
              <div className="border-t border-brand-border pt-3">
                <p className="font-sans text-xs font-bold text-brand-ink">Marcus R., Esq.</p>
                <p className="text-[10px] font-mono text-brand-muted">Managing Partner, South Florida Litigation Group</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border card-hover-sleek">
              <div className="flex items-center gap-1 text-purple-primary mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-brand-muted font-sans text-sm italic mb-4 leading-relaxed">
                "We were skeptical about 'AI' marketing. Millennial Media built custom, beautiful visual campaigns on social sites and connected them directly to our reservation system. Brilliant work."
              </p>
              <div className="border-t border-brand-border pt-3">
                <p className="font-sans text-xs font-bold text-brand-ink">Alessandra D.</p>
                <p className="text-[10px] font-mono text-brand-muted">Operator, Fine Dining Culinary Suite - Coral Gables</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EDE9F4] card-hover-sleek md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-1 text-purple-primary mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-brand-muted font-sans text-sm italic mb-4 leading-relaxed">
                "Their email omni-channel setups and CRM desks reduced our lead processing delay down to 15 seconds. Incredible attention to detail by the Miami team."
              </p>
              <div className="border-t border-[#EDE9F4] pt-3">
                <p className="font-sans text-xs font-bold text-brand-ink">Julian V.</p>
                <p className="text-[10px] font-mono text-brand-muted">Director of Marketing, Wynwood Luxury Assets</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
