import React, { useState } from "react";
import { BookOpen, Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Sparkles } from "lucide-react";
import CircuitMotif from "../components/CircuitMotif";

interface BlogProps {
  onNavigate: (path: string) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  const [filter, setFilter] = useState<string>("All Insights");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const posts = [
    {
      id: "seo-bert-mum",
      title: "Decoding BERT and MUM: How Semantic Keyword Structures Redefine Local SEO.",
      excerpt: "Bidding indiscriminately on flat Google clicks is a high-waste exercise. Discover how structured entity relationship indexing establishes lasting, free search directory authority in Miami.",
      category: "AI & SEO",
      date: "June 18, 2026",
      readTime: "7 Min Read",
      author: "Julio C., Head of Semantic Systems",
      content: [
        "In the competitive metropolitan markets of Miami and South Florida, the era of keyword-stufing is completely dead. Search Engine result layouts are now governed by advanced entity vectors: specifically Google's BERT (Bidirectional Encoder Representations from Transformers) and MUM (Multitask Unified Model).",
        "These models are not looking for simple matches. They seek relational authority. If your site offers injury legal assistance, they parse the conversational structure of your educational content, internal indexing nodes, and custom schema markups to grade your actual entity depth.",
        "We solve this by designing Programmatic Authority Clusters. Instead of individual disjointed articles, we engineer vast schema-mapped directories describing case variables, local statute parameters, and injury resolution steps—fully connected with semantic micro-data.",
        "The result? Search directories grade your site as a primary contextual authority for South Florida litigation. This locks down page-one indexing nodes organically and bypasses high paid bidding campaigns permanently."
      ],
    },
    {
      id: "crm-speed-lead",
      title: "The Speed-to-Lead Equation: Connecting Messaging channels directly to HubSpot Database pipelines.",
      excerpt: "How a 15-second response window can multiply lead conversion ratios by 390%. An examination of CRM automation and middleware designs based in Brickell.",
      category: "Automation & CRMs",
      date: "May 24, 2026",
      readTime: "5 Min Read",
      author: "Eleni M., Director of Systems Integration",
      content: [
        "Every digital marketer knows the feeling of capturing leads only to watch them go cold. In modern business, prompt follow-ups are no longer an optional perk—they are a critical operational floor. The math of lead decay is brutal: contact values fall by 80% if response delay exceeds 5 minutes.",
        "Millennial Media structures direct Middleware Integration paths. When a prospect engages with an organic link or social post, the system immediately pulls context, parses contact parameters, and registers the lead in HubSpot or Clio CRM systems.",
        "Simultaneously, an automated conversational follow-up is triggered. This delivers personalized, custom-written SMS or email replies within 15 seconds of the visitor pressing submit, establishing connection immediately.",
        "This speed-to-lead automated funnel drives outbound consultation bookings without active workspace employee intervention, scaling team potential instantly."
      ],
    },
    {
      id: "visual-reels-pacing",
      title: "Short-Form Vertical Asset Pacing: Hooking Attention on Modern Platform Feeds.",
      excerpt: "Traditional advertising campaigns look like static flyers. Here is the visual pacing guide built by our Miami filmmaker team to command Instagram Reels & TikTok algorithm hubs.",
      category: "Social & Reels",
      date: "April 12, 2026",
      readTime: "6 Min Read",
      author: "Damian L., VP of Media & Vertical Video",
      content: [
        "Social media formats are moving exceptionally fast. Consumer focus spans are shorter than ever, with users scrolling past flat, generic posts. To survive inside modern platform feeds (Reels, Shorts, TikTok), visual narrative layouts must change.",
        "Our Miami-Dade vertical asset studio utilizes sensory pacing guidelines. We script visual content with immediate hook transitions in the first 1.8 seconds—utilizing custom dynamic overlays, conversational pacing, and aesthetic movement loops.",
        "We couple these video updates with explicit organic connection prompts. For example, triggering automated direct message reservation grids whenever patrons write specific comments on hospitality reels.",
        "This loop combines algorithm-recommended reach with transactional speed, transforming simple lifestyle views into actual booked seats directly on reservation dashboards."
      ],
    }
  ];

  const categories = ["All Insights", "AI & SEO", "Social & Reels", "Automation & CRMs"];

  const filteredPosts = filter === "All Insights" 
    ? posts 
    : posts.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 bg-[#FAF9FC] border-b border-brand-border overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-light/5 rounded-full blur-3xl select-none pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 text-center space-y-5 relative z-10">
          <CircuitMotif variant="badge" />
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-ink tracking-tight max-w-2xl mx-auto leading-tight">
            AI Marketing & <span className="text-purple-primary">Operations Insights</span>.
          </h1>
          <p className="text-brand-muted text-lg font-sans max-w-xl mx-auto">
            Practical, highly technical blueprints on organic search optimization, platform vertical media, and speed-to-lead database structures.
          </p>
        </div>
      </section>

      {/* Categories Filter Bar */}
      <section className="border-b border-brand-border bg-white sticky top-[80px] z-40 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setFilter(cat);
                setExpandedId(null);
              }}
              className={`px-4 py-2 rounded-full font-sans font-semibold text-xs whitespace-nowrap cursor-pointer transition-all ${
                filter === cat 
                  ? "bg-purple-primary text-white shadow-sm" 
                  : "bg-brand-alt border border-brand-border text-brand-ink hover:border-purple-light"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto py-16 px-6">
        {expandedId ? (
          /* FULL ARTICLE VIEW */
          <div className="space-y-8 animate-fade-in">
            <button
              onClick={() => setExpandedId(null)}
              className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-purple-primary uppercase tracking-widest cursor-pointer hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights Index
            </button>

            {posts.filter(p => p.id === expandedId).map(p => (
              <article key={p.id} className="space-y-6">
                <div className="flex items-center gap-4 text-xs font-mono text-brand-muted">
                  <span className="bg-purple-primary text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">{p.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {p.readTime}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-ink leading-tight tracking-tight">
                  {p.title}
                </h2>

                <div className="p-4 bg-brand-alt border border-brand-border rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-signature flex items-center justify-center text-white font-mono text-xs font-bold leading-none">
                    {p.author[0]}
                  </div>
                  <div className="text-xs font-sans">
                    <p className="font-bold text-brand-ink">{p.author}</p>
                    <p className="text-brand-muted">Brickell, Miami HQ Division</p>
                  </div>
                </div>

                <div className="space-y-5 font-sans text-sm md:text-base text-brand-ink leading-relaxed pt-4 border-t border-brand-border">
                  {p.content.map((paragraph, kIdx) => (
                    <p key={kIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-8 border-t border-brand-border flex items-center justify-between text-xs font-mono text-brand-muted">
                  <span>Category: {p.category}</span>
                  <span className="text-purple-primary font-bold">Millennial API connected</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* BLOG LIST VIEW */
          <div className="space-y-12">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div 
                  key={post.id}
                  className="p-8 border border-brand-border bg-white rounded-xl shadow-sm space-y-4 hover:border-purple-light hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-4 text-xs font-mono text-brand-muted">
                    <span className="text-purple-primary font-semibold uppercase">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-display font-bold text-brand-ink group-hover:text-purple-primary transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-sm md:text-base text-brand-muted font-sans leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                    <span className="text-xs font-sans font-bold text-brand-ink">
                      By {post.author.split(",")[0]}
                    </span>
                    
                    <button
                      onClick={() => setExpandedId(post.id)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-purple-primary hover:gap-2.5 transition-all cursor-pointer"
                    >
                      READ FULL BLUEPRINT
                      <ArrowRight className="w-4 h-3 text-purple-primary" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-brand-muted">
                No articles listed under this category yet.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Newsletter block */}
      <section className="bg-brand-alt border-y border-brand-border py-16 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-5">
          <span className="text-3xl">📨</span>
          <h3 className="font-display font-bold text-xl text-brand-ink">Get Our Specialized AI Bulletins</h3>
          <p className="font-sans text-sm text-brand-muted">
            Weekly structured data audits, visual trend maps, and speed-to-lead frameworks dispatched directly from our Brickell district HQ.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your professional email Address" 
              className="px-4 py-3 border border-brand-border rounded-lg bg-white font-sans text-xs focus:ring-2 focus:ring-purple-primary focus:outline-none w-full"
            />
            <button 
              onClick={() => alert("Thank you! You are connected to Millennial Media updates.")}
              className="px-6 py-3 bg-purple-primary text-white font-sans font-bold text-xs rounded-lg hover:bg-purple-light transition-all cursor-pointer whitespace-nowrap"
            >
              Connect Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
