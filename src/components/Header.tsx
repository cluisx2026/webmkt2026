import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Sparkles, MessageCircle, BarChart3, Mail, Bot, Award, UtensilsCrossed, Scale } from "lucide-react";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "signature" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "SEO & Web Presence", path: "/services/seo-web-presence", desc: "Command search results with high-intent AI authority structures.", icon: Sparkles },
    { name: "Social Media Management", path: "/services/social-media", desc: "Automate, amplify, and scale your authentic social narrative.", icon: MessageCircle },
    { name: "Paid Ads — Meta + Google", path: "/services/paid-ads", desc: "Predictive ROI modeling paired with creative scale.", icon: BarChart3 },
    { name: "Email & Video Marketing", path: "/services/email-video", desc: "Omnipresent narrative distribution across media platforms.", icon: Mail },
    { name: "AI Automation & CRM", path: "/services/ai-automation-crm", desc: "Connect messaging channels to automated agent desks.", icon: Bot },
    { name: "AI Agents & Employees", path: "/services/ai-agents", desc: "Deploy digital employees trained specifically for your systems.", icon: Award },
  ];

  const signatures = [
    { name: "Lexora — Law Firm AI Suite", path: "/signature/lexora", desc: "Automated high-value plaintiff acquisition & document parsing.", icon: Scale },
    { name: "Fine Dining Guest Growth", path: "/signature/fine-dining", desc: "Dynamic tables booking and influencer-led local viral scaling.", icon: UtensilsCrossed },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-brand-border py-3.5 shadow-sm" 
        : "bg-white/70 backdrop-blur-sm border-b border-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <button 
          onClick={() => handleLinkClick("/")}
          className="flex items-center gap-2.5 focus:outline-none cursor-pointer group text-left"
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-signature flex items-center justify-center text-white font-display font-semibold text-xl shadow-md overflow-hidden">
            <span className="relative z-10">M</span>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white/20 blur-sm rounded-full"></div>
          </div>
          <div>
            <div className="font-display font-bold text-lg text-brand-ink leading-none group-hover:text-purple-primary transition-colors">
              Millennial Media
            </div>
            <div className="text-[10px] font-mono tracking-widest text-accent-blue uppercase font-bold mt-0.5">
              AI Marketing Agency
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <button 
            onClick={() => handleLinkClick("/")}
            className={`font-sans font-semibold text-sm transition-colors cursor-pointer hover:text-purple-primary ${
              currentPath === "/" ? "text-purple-primary" : "text-brand-ink"
            }`}
          >
            Home
          </button>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className={`flex items-center gap-1 font-sans font-semibold text-sm transition-colors cursor-pointer hover:text-purple-primary py-2 ${
                currentPath.startsWith("/services") ? "text-purple-primary" : "text-brand-ink"
              }`}
            >
              Services
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full w-[420px] bg-white border border-brand-border rounded-xl shadow-xl p-5 mt-1 grid grid-cols-1 gap-1"
                >
                  <div className="text-[10px] font-mono tracking-wider text-purple-primary uppercase font-bold mb-2 pb-1 border-b border-brand-border">
                    Strategic AI Growth Engines
                  </div>
                  {services.map((s, idx) => {
                    const IconComp = s.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleLinkClick(s.path)}
                        className={`w-full flex items-start gap-3.5 p-2.5 rounded-lg text-left hover:bg-brand-alt transition-all group cursor-pointer ${
                          currentPath === s.path ? "bg-brand-alt" : ""
                        }`}
                      >
                        <div className="mt-0.5 p-1.5 rounded-md bg-brand-border text-purple-primary group-hover:bg-purple-primary group-hover:text-white transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-sans font-bold text-sm text-brand-ink group-hover:text-purple-primary transition-colors">
                            {s.name}
                          </p>
                          <p className="font-sans text-xs text-brand-muted mt-0.5 line-clamp-1">
                            {s.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Signature Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("signature")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className={`flex items-center gap-1 font-sans font-semibold text-sm transition-colors cursor-pointer hover:text-purple-primary py-2 ${
                currentPath.startsWith("/signature") ? "text-purple-primary" : "text-brand-ink"
              }`}
            >
              Products
              <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {activeDropdown === "signature" && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full w-[380px] bg-white border border-brand-border rounded-xl shadow-xl p-5 mt-1 grid grid-cols-1 gap-1"
                >
                  <div className="text-[10px] font-mono tracking-wider text-accent-blue uppercase font-bold mb-2 pb-1 border-b border-brand-border">
                    Niche Operational Suites
                  </div>
                  {signatures.map((s, idx) => {
                    const IconComp = s.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleLinkClick(s.path)}
                        className={`w-full flex items-start gap-3.5 p-2.5 rounded-lg text-left hover:bg-brand-alt transition-all group cursor-pointer ${
                          currentPath === s.path ? "bg-brand-alt" : ""
                        }`}
                      >
                        <div className="mt-0.5 p-1.5 rounded-md bg-brand-border text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-sans font-bold text-sm text-brand-ink group-hover:text-accent-blue transition-colors">
                            {s.name}
                          </p>
                          <p className="font-sans text-xs text-brand-muted mt-0.5 line-clamp-1">
                            {s.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => handleLinkClick("/plans")}
            className={`font-sans font-semibold text-sm transition-colors cursor-pointer hover:text-purple-primary ${
              currentPath === "/plans" ? "text-purple-primary" : "text-brand-ink"
            }`}
          >
            Plans
          </button>
          
          <button 
            onClick={() => handleLinkClick("/about")}
            className={`font-sans font-semibold text-sm transition-colors cursor-pointer hover:text-purple-primary ${
              currentPath === "/about" ? "text-purple-primary" : "text-brand-ink"
            }`}
          >
            About
          </button>

          <button 
            onClick={() => handleLinkClick("/blog")}
            className={`font-sans font-semibold text-sm transition-colors cursor-pointer hover:text-purple-primary ${
              currentPath === "/blog" ? "text-purple-primary" : "text-brand-ink"
            }`}
          >
            Blog
          </button>
        </nav>

        {/* Brand Booking call CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => handleLinkClick("/contact")}
            className={`font-sans font-semibold text-sm transition-colors hover:text-purple-primary cursor-pointer ${
              currentPath === "/contact" ? "text-purple-primary" : "text-brand-ink"
            }`}
          >
            Contact
          </button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleLinkClick("/contact")}
            className="px-5 py-2.5 btn-gradient-sleek text-white rounded-lg font-sans font-semibold text-sm cursor-pointer"
          >
            Book a Free Call
          </motion.button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLinkClick("/contact")}
            className="px-3 py-1.5 btn-gradient-sleek text-white rounded-md font-sans font-semibold text-xs cursor-pointer"
          >
            Audit Call
          </motion.button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-md text-brand-ink hover:text-purple-primary focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-brand-border bg-white overflow-hidden"
          >
            <div className="p-6 space-y-6 max-h-[85vh] overflow-y-auto">
              <div className="grid grid-cols-1 gap-3">
                <button 
                  onClick={() => handleLinkClick("/")}
                  className={`text-left font-sans font-bold text-base py-1 border-b border-brand-border text-brand-ink`}
                >
                  Home
                </button>

                {/* Mobile Services section */}
                <div className="space-y-2 py-1">
                  <div className="font-sans font-bold text-sm text-purple-primary">Our Services</div>
                  <div className="grid grid-cols-1 gap-2 pl-3">
                    {services.map((s, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(s.path)}
                        className="text-left font-sans text-sm text-brand-muted hover:text-purple-primary py-1"
                      >
                        • {s.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Signatures section */}
                <div className="space-y-2 py-1">
                  <div className="font-sans font-bold text-sm text-accent-blue">Signature Products</div>
                  <div className="grid grid-cols-1 gap-2 pl-3">
                    {signatures.map((s, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(s.path)}
                        className="text-left font-sans text-sm text-brand-muted hover:text-accent-blue py-1"
                      >
                        • {s.name}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleLinkClick("/plans")}
                  className="text-left font-sans font-bold text-base py-2 border-b border-brand-border text-brand-ink"
                >
                  Plans & Options
                </button>

                <button 
                  onClick={() => handleLinkClick("/about")}
                  className="text-left font-sans font-bold text-base py-2 border-b border-brand-border text-brand-ink"
                >
                  About Our Team
                </button>

                <button 
                  onClick={() => handleLinkClick("/blog")}
                  className="text-left font-sans font-bold text-base py-2 border-b border-brand-border text-brand-ink"
                >
                  AI Marketing Insights (Blog)
                </button>

                <button 
                  onClick={() => handleLinkClick("/contact")}
                  className="text-left font-sans font-bold text-base py-2 border-b border-brand-border text-brand-ink"
                >
                  Contact Agency
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleLinkClick("/contact")}
                  className="w-full py-3 btn-gradient-sleek text-white rounded-lg font-sans font-semibold text-center text-sm shadow cursor-pointer block"
                >
                  Book 15-Min Free Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
