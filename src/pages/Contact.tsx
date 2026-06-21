import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ShieldCheck, Landmark } from "lucide-react";
import CircuitMotif from "../components/CircuitMotif";

interface ContactProps {
  onNavigate: (path: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    serviceInterest: "SEO & Web Presence",
    message: "",
  });

  const services = [
    "SEO & Web Presence",
    "Social Media Management",
    "Paid Ads — Meta + Google",
    "Email & Video Marketing",
    "AI Automation & CRM",
    "AI Agents & Employees",
    "Lexora — Law Firm Suite",
    "Fine Dining Guest Growth Suite",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please complete all required fields (Name, Email, and Phone number).");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative py-16 bg-[#FAF9FC] border-b border-brand-border overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-light/5 rounded-full blur-3xl select-none pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 text-center space-y-5 relative z-10">
          <CircuitMotif variant="badge" />
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-ink tracking-tight max-w-2xl mx-auto leading-tight">
            Initiate Your <span className="text-purple-primary">AI Growth Blueprint</span>.
          </h1>
          <p className="text-brand-muted text-lg font-sans max-w-xl mx-auto">
            Book a free 15-minute alignment check with our Brickell marketing experts. Simply complete the brief below.
          </p>
        </div>
      </section>

      {/* Signature Motif Line */}
      <CircuitMotif className="my-10" />

      {/* Contact Grid Options */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Info Nodes */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-brand-ink">Miami HQ Operations Desk</h2>
            <p className="text-sm font-sans text-brand-muted leading-relaxed">
              We manage all digital connected systems, vertical video editing studios, and API mapping tests from South Florida's tech corridor.
            </p>
          </div>

          <div className="p-6 bg-[#FAF9FC] border border-brand-border rounded-xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-white border border-brand-border text-purple-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-sm font-sans space-y-1">
                <p className="font-bold text-brand-ink">Street Address</p>
                <p className="text-brand-muted">
                  Millennial Media LLC<br />
                  Brickell Financial District<br />
                  Miami, FL 3313
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-white border border-brand-border text-purple-primary shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-sm font-sans space-y-1">
                <p className="font-bold text-brand-ink">Hotline Channel</p>
                <a href="tel:3058451837" className="text-purple-primary font-semibold hover:underline select-all">
                  305-845-1837
                </a>
                <p className="text-[10px] text-brand-muted">Mon–Fri, 9:00 AM–6:00 PM EST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-white border border-brand-border text-purple-primary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-sm font-sans space-y-1">
                <p className="font-bold text-brand-ink">Email Gateway</p>
                <a href="mailto:info@millennialmedia.com" className="text-purple-primary font-semibold hover:underline select-all">
                  info@millennialmedia.com
                </a>
              </div>
            </div>
          </div>

          {/* Graphic represent of local map coordinates */}
          <div className="border border-brand-border rounded-xl p-5 bg-[#FAF9FC] space-y-4">
            <p className="font-mono text-xs text-purple-primary font-bold uppercase tracking-wider">
              Brickell Financial Coordinate Matrix
            </p>
            <div className="aspect-video bg-white border border-brand-border rounded flex flex-col justify-between p-4 relative overflow-hidden">
              {/* Fake abstract circuit map sketch */}
              <div className="absolute inset-0 opacity-15 select-none pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path d="M10,10 L30,40 L90,10 M20,90 L80,50 L90,90" stroke="#6B21A8" strokeWidth="1" />
                  <path d="M50,0 L50,100 M0,50 L100,50" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
              </div>

              <div className="flex justify-between items-start text-[10px] font-mono text-brand-muted z-10">
                <span>LAT: 25.7617° N</span>
                <span>LON: 80.1918° W</span>
              </div>

              <div className="flex flex-col items-center justify-center text-center my-3 z-10">
                <Landmark className="w-8 h-8 text-purple-primary mb-1 animate-bounce" />
                <p className="font-sans font-bold text-xs text-brand-ink">Millennial HQ Cabin</p>
                <p className="text-[9px] font-mono text-brand-muted">Brickell Tower Hub III</p>
              </div>

              <div className="text-right text-[10px] font-mono text-brand-muted z-10">
                <span>Active Link [OK]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Node */}
        <div className="lg:col-span-7 bg-white border border-brand-border p-8 rounded-2xl shadow-sm">
          {formSubmitted ? (
            /* Thank You message */
            <div className="text-center py-16 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-ink">Intake Submitted Successfully</h3>
              <p className="text-brand-muted font-sans text-sm max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-brand-ink">{formData.name}</span>. An AI marketing and automation systems expert from our Miami district will check your files and reach out within 15 minutes.
              </p>
              <div className="bg-[#FAF9FC] border border-brand-border p-4 rounded-xl text-xs font-mono text-brand-muted max-w-sm mx-auto text-left space-y-1">
                <p className="text-purple-primary font-bold uppercase tracking-wider mb-2">[INTAKE DATA CONFIGURED]</p>
                <p>• Client: {formData.name}</p>
                <p>• Company: {formData.businessName || "Sole proprietor"}</p>
                <p>• Primary Interest: {formData.serviceInterest}</p>
                <p>• Gateway ID: [MM_CONNECTED_305]</p>
              </div>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-2.5 bg-gradient-signature text-white font-sans font-semibold rounded-lg text-xs hover:brightness-110 cursor-pointer"
              >
                Submit New Request
              </button>
            </div>
          ) : (
            /* CONTACT FORM MARKUP */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-brand-border pb-4 mb-4">
                <h3 className="font-display font-bold text-lg text-brand-ink">Schedule Free Growth Briefing</h3>
                <p className="text-xs text-brand-muted font-sans mt-0.5">Please populate the contact variables below to begin.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono font-bold text-brand-ink uppercase">
                    Your Name <span className="text-purple-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Alexander R."
                    className="w-full px-4 py-3 rounded-lg border border-brand-border font-sans text-sm text-brand-ink focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/10 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="businessName" className="block text-xs font-mono font-bold text-brand-ink uppercase">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="E.g. Brickell Trial Lawyers"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border font-sans text-sm text-brand-ink focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/10 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono font-bold text-brand-ink uppercase">
                    Email Address <span className="text-purple-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g. contact@business.com"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border font-sans text-sm text-brand-ink focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/10 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-mono font-bold text-brand-ink uppercase">
                    Phone Number <span className="text-purple-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="E.g. 305-555-0199"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border font-sans text-sm text-brand-ink focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/10 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="serviceInterest" className="block text-xs font-mono font-bold text-brand-ink uppercase">
                  Service/Product Interest
                </label>
                <select
                  id="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-brand-border bg-white font-sans text-sm text-brand-ink focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/10 focus:outline-none transition-all cursor-pointer"
                >
                  {services.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono font-bold text-brand-ink uppercase">
                  Detail Your Channels & Goals
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="Tell us about your current channels (Instagram, TikTok, LinkedIn, website link, current monthly spends, goal covers/cases)..."
                  className="w-full px-4 py-3 rounded-lg border border-brand-border font-sans text-sm text-brand-ink focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/10 focus:outline-none transition-all"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-signature text-white font-sans font-bold text-base rounded-lg shadow-md hover:brightness-110 active:brightness-105 cursor-pointer transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Submit Growth Brief Intake</span>
                  <ArrowRight className="w-5 h-4" />
                </button>
              </div>

              {/* Security audit reassurance */}
              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-brand-muted pt-2 border-t border-brand-border">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>SSL Encrypted Intake Gateway • No Data Sharing</span>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
