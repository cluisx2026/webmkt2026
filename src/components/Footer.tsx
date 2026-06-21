import React from "react";
import { Instagram, Linkedin, MessageSquare, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  const services = [
    { name: "SEO & Web Presence", path: "/services/seo-web-presence" },
    { name: "Social Media Management", path: "/services/social-media" },
    { name: "Paid Ads - Meta + Google", path: "/services/paid-ads" },
    { name: "Email & Video Marketing", path: "/services/email-video" },
    { name: "AI Automation & CRM", path: "/services/ai-automation-crm" },
    { name: "AI Agents & Employees", path: "/services/ai-agents" },
  ];

  const products = [
    { name: "Lexora Law Firm Suite", path: "/signature/lexora" },
    { name: "Fine Dining Growth Suite", path: "/signature/fine-dining" },
  ];

  const quickLinks = [
    { name: "Agency Plans", path: "/plans" },
    { name: "About Millennial", path: "/about" },
    { name: "AI Marketing Blog", path: "/blog" },
    { name: "Contact & Booking", path: "/contact" },
  ];

  return (
    <footer className="bg-brand-ink text-white pt-16 pb-12 px-6 border-t border-brand-border/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Summary */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onNavigate("/")}>
            <div className="relative w-8 h-8 rounded-lg bg-gradient-signature flex items-center justify-center text-white font-display font-semibold text-lg overflow-hidden shadow-sm">
              M
            </div>
            <div>
              <p className="font-display font-bold text-base leading-none text-white select-none">
                Millennial Media
              </p>
              <p className="text-[9px] font-mono tracking-widest text-[#9333EA] uppercase font-bold mt-0.5 select-none">
                AI Digital Amplification
              </p>
            </div>
          </div>
          
          <p className="text-gray-400 font-sans text-sm max-w-sm leading-relaxed">
            Millennial Media is a next-generation AI marketing and automation agency based in Miami, Florida. We combine advanced natural language processing pipelines and real-time social feeds parsing to 10× client lead flow, automate multi-channel messaging structures, and command high-intent search queries.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-purple-light flex items-center justify-center text-gray-300 hover:text-white transition-all cursor-pointer"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-purple-light flex items-center justify-center text-gray-300 hover:text-white transition-all cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-purple-light flex items-center justify-center text-gray-300 hover:text-white transition-all cursor-pointer"
              aria-label="TikTok Profile"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Core Services */}
        <div className="space-y-4">
          <p className="font-display font-semibold text-sm tracking-wider uppercase text-[#E9D5FF]">
            AI Services
          </p>
          <ul className="space-y-2.5">
            {services.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onNavigate(item.path)}
                  className="font-sans text-sm text-gray-400 hover:text-white transition-all text-left truncate max-w-full cursor-pointer focus:outline-none"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Signature Suites */}
        <div className="space-y-4">
          <p className="font-display font-semibold text-sm tracking-wider uppercase text-[#C084FC]">
            Specialized Products
          </p>
          <ul className="space-y-2.5">
            {products.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onNavigate(item.path)}
                  className="font-sans text-sm text-gray-400 hover:text-[#9333EA] transition-all text-left cursor-pointer focus:outline-none"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="pt-4 space-y-4">
            <p className="font-display font-semibold text-sm tracking-wider uppercase text-[#F3E8FF]">
              Company Links
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="font-sans text-sm text-gray-400 hover:text-white transition-all text-left cursor-pointer focus:outline-none"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 4: Contact & Operations */}
        <div className="space-y-4">
          <p className="font-display font-semibold text-sm tracking-wider uppercase text-white">
            Miami HQ Office
          </p>
          <ul className="space-y-4 text-sm text-gray-300 font-sans">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-purple-light shrink-0 mt-0.5" />
              <span>
                Millennial Media LLC<br />
                Brickell Financial District<br />
                Miami, FL 33131
              </span>
            </li>
            <li className="flex items-center gap-2.5 select-all hover:text-white">
              <Phone className="w-4 h-4 text-purple-light shrink-0" />
              <a href="tel:3058451837" className="hover:underline">305-845-1837</a>
            </li>
            <li className="flex items-center gap-2.5 select-all hover:text-white">
              <Mail className="w-4 h-4 text-purple-light shrink-0" />
              <a href="mailto:info@millennialmedia.com" className="hover:underline">info@millennialmedia.com</a>
            </li>
          </ul>

          <div className="pt-4 border-t border-white/5 space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#2563EB] font-bold">
              Service Region
            </span>
            <p className="text-xs text-gray-400">
              Proudly Serving Miami & South Florida (Brickell, Coral Gables, Wynwood, Miami Beach, Fort Lauderdale, Palm Beach).
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
        <div>
          &copy; {year} Millennial Media LLC. All rights reserved. 
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white/30">⚡ AI Engineered & Connected</span>
          <span>Proudly Florida Native</span>
        </div>
      </div>
    </footer>
  );
}
