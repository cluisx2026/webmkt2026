import React from "react";
import { motion } from "motion/react";

interface CircuitMotifProps {
  className?: string;
  variant?: "horizontal" | "vertical" | "badge";
}

export default function CircuitMotif({ className = "", variant = "horizontal" }: CircuitMotifProps) {
  if (variant === "badge") {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-brand-alt border border-brand-border rounded-full text-xs font-mono text-purple-primary ${className}`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-primary"></span>
        </span>
        <span className="tracking-widest uppercase">Millennial AI Connected</span>
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className={`absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center select-none pointer-events-none ${className}`} style={{ height: "120px" }}>
        <div className="w-[1px] h-full bg-gradient-to-b from-purple-primary via-accent-blue to-transparent opacity-30"></div>
        <motion.div 
          className="w-3 h-3 rounded-full border border-purple-primary bg-white flex items-center justify-center -mt-16"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent-blue"></div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`relative h-6 w-full select-none pointer-events-none flex items-center justify-center ${className}`}>
      <svg className="w-full max-w-lg h-6 overflow-visible" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M 10 12 L 180 12 L 192 4 L 208 20 L 220 12 L 390 12" 
          stroke="url(#circuit-grad)" 
          strokeWidth="1.5" 
          strokeDasharray="4 4"
        />
        <circle cx="10" cy="12" r="3" fill="#6B21A8" />
        <circle cx="390" cy="12" r="3" fill="#2563EB" />
        <motion.circle 
          cx="200" 
          cy="12" 
          r="4" 
          fill="#9333EA" 
          animate={{ r: [4, 6, 4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6B21A8" />
            <stop offset="50%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
