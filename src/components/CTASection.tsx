import React from "react";
import { motion } from "motion/react";
import { ArrowRight, PhoneCall } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  secondaryText?: string;
  onNavigate: (path: string) => void;
}

export default function CTASection({
  title = "Accelerate Your Growth with AI-Powered Brand Excellence",
  subtitle = "Ready to transition from standard social strategies to full AI-driven amplification? Connect with our Miami digital agency experts today for a free visual analysis of your platforms.",
  primaryText = "Book a Free AI Audit Call",
  secondaryText = "Explore Premium Support Plans",
  onNavigate,
}: CTASectionProps) {
  return (
    <section className="relative bg-purple-primary py-20 px-6 overflow-hidden rounded-2xl mx-4 my-12 md:mx-12 md:my-20">
      {/* Decorative gradient glowing path */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-accent-blue/40 to-purple-light/20 rounded-full blur-3xl translate-x-12 translate-y-24 select-none pointer-events-none"></div>
      <div className="absolute left-0 top-0 w-80 h-80 bg-gradient-to-br from-purple-light/30 to-transparent rounded-full blur-2xl -translate-x-16 -translate-y-20 select-none pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <span className="inline-block text-xs font-mono tracking-widest text-[#E9D5FF] uppercase border border-[#9333EA] px-3 py-1 rounded-full mb-6">
          Ready for Lift-Off
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="text-[#F3E8FF] text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate("/contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-signature text-white font-sans font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:brightness-110 transition-all text-base"
          >
            <PhoneCall className="w-5 h-5" />
            <span>{primaryText}</span>
            <ArrowRight className="w-5 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate("/plans")}
            className="w-full sm:w-auto px-8 py-4 rounded-lg border border-purple-light text-white font-sans font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all bg-white/5 backdrop-blur-sm text-base"
          >
            <span>{secondaryText}</span>
          </motion.button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-purple-light font-mono">
          <span className="flex items-center gap-1.5 text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            ⚡ Fast 15-Min Briefing Session
          </span>
          <span className="text-white/40">|</span>
          <span className="text-white/80">📊 Fully Customized Visual PDF Provided</span>
        </div>
      </div>
    </section>
  );
}
