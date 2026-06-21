import React from "react";
import { Sparkles, ArrowRight, Instagram, MessageCircle, BarChart3, Mail, Heart, Share2, Compass } from "lucide-react";
import FAQAccordion from "../../components/FAQAccordion";
import CircuitMotif from "../../components/CircuitMotif";

interface SocialMediaProps {
  onNavigate: (path: string) => void;
}

export default function SocialMedia({ onNavigate }: SocialMediaProps) {
  const socialFaqs = [
    {
      question: "How do you align AI content amplification with our brand's unique authentic voice?",
      answer: "We never use standard, flat, robotic templates. We parse your current visual assets, media archives, and executive recordings to construct a customized 'Voice Model Profile'. That model serves as a brand-specific editor, crafting stories that read authentically.",
    },
    {
      question: "Which social platforms do you prioritize for Miami businesess?",
      answer: "We support Instagram, TikTok, and LinkedIn primarily, as these generate the highest transactional density for Miami's local specialties (hospitality, legal, medical, luxury assets). We calibrate visual assets for Instagram/TikTok and business leadership materials for LinkedIn.",
    },
    {
      question: "Do you integrate with reservation systems or client booking calendars?",
      answer: "Yes. Our signature social setup links platform message boxes directly to automated booking desks (like OpenTable, SevenRooms, or CRM Calendars) so comments and direct queries turn into bookings within seconds.",
    },
    {
      question: "How do you source and curate localized lifestyle media assets in Florida?",
      answer: "We partner with premium, localized content creators and photographers across Miami-Dade. We mix high-production-value video cycles with dynamic real-time overlays that keep your brand relevant is fast-moving social feeds.",
    },
  ];

  const pillars = [
    {
      title: "Trend-Calibrated Video Cycles",
      desc: "Weekly creation of short-form vertical assets (Reels, TikToks) shaped around regional micro-narratives that grab local attention."
    },
    {
      title: "Interactive Lead Handoffs",
      desc: "Instant conversion structures. When users comment or message, automated lead desks parse queries to capture customer contacts immediately."
    },
    {
      title: "Authentic Multi-Channel Publishing",
      desc: "Simultaneous voice across B2B and consumer channels. Your executive thoughts publish on LinkedIn, while lifestyle narratives scale on Instagram."
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
              Social Media <span className="text-purple-primary">Amplify & Connect</span>. Automate Your Brand Authority.
            </h1>
            <p className="text-brand-muted text-lg font-sans max-w-xl">
              Don't just post content—scale a visual movement. We build localized campaign grids, deploy micro-video streams, and wire platform chats directly to active client lead desks.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate("/contact")}
                className="px-6 py-3 bg-gradient-signature text-white font-sans font-semibold text-sm rounded-lg hover:brightness-110 active:brightness-105 cursor-pointer shadow-sm transition-all animate-pulse"
              >
                Launch Brand Amplification
              </button>
              <button 
                onClick={() => onNavigate("/plans")}
                className="px-6 py-3 border border-brand-border text-brand-ink font-sans font-semibold text-sm rounded-lg hover:bg-white transition-all bg-white/40"
              >
                Examine Pricing Plans
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-brand-border space-y-6 shadow-sm">
            <p className="text-xs font-mono text-purple-primary font-bold uppercase tracking-wider">
              Feed Connection Operations [M_Live]
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-brand-border p-4 rounded-lg bg-[#FAF9FC] text-center">
                <Instagram className="w-6 h-6 mx-auto text-pink-600 mb-2" />
                <p className="font-display font-bold text-lg text-brand-ink">Instagram</p>
                <p className="text-[10px] text-brand-muted font-mono">Engagement Node</p>
              </div>

              <div className="border border-brand-border p-4 rounded-lg bg-[#FAF9FC] text-center">
                <Compass className="w-6 h-6 mx-auto text-accent-blue mb-2" />
                <p className="font-display font-bold text-lg text-brand-ink">TikTok</p>
                <p className="text-[10px] text-brand-muted font-mono">Algorithm Reach</p>
              </div>
            </div>

            <div className="bg-brand-ink text-white p-4 rounded-lg font-mono text-[11px] leading-relaxed">
              <span className="text-purple-light">[FEED_SYNC]:</span> Parsing Miami-Dade demographic trend matrix...<br />
              <span className="text-[#2563EB]">[NARRATIVE_LIFT]:</span> Generated 3 vertical reels cycles...<br />
              <span className="text-emerald-500">[SYNC_OK]:</span> Automated lead desk verified at Brickell Financial.
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
            <span className="text-xs font-mono text-[#621A8] uppercase font-bold tracking-widest bg-purple-50 px-3 py-1 rounded">
              Omnipresent Organic Growth
            </span>
            <h2 className="text-3xl font-display font-bold tracking-tight text-brand-ink">
              Turn Casual Views into Booked Revenue.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <div key={idx} className="p-8 border border-brand-border bg-white rounded-xl shadow-sm space-y-4 hover:border-purple-primary transition-all">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-purple-primary">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-ink">{p.title}</h3>
                <p className="text-sm text-brand-muted font-sans leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ block */}
      <FAQAccordion items={socialFaqs} title="Social Media Management FAQs" subtitle="Discover how automated platform feeds and content scaling work together." />

      {/* Booking CTA Line */}
      <section className="bg-white py-12 text-center">
        <button 
          onClick={() => onNavigate("/contact")}
          className="px-6 py-3 bg-gradient-signature text-white rounded-lg font-sans font-semibold text-sm cursor-pointer shadow hover:brightness-110 transition-all inline-flex items-center gap-2"
        >
          Book Your Social Feeds Consultation
          <ArrowRight className="w-4 h-3 text-white" />
        </button>
      </section>
    </div>
  );
}
