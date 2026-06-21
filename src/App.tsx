import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SeoWebPresence from "./pages/Services/SeoWebPresence";
import SocialMedia from "./pages/Services/SocialMedia";
import PaidAds from "./pages/Services/PaidAds";
import EmailVideo from "./pages/Services/EmailVideo";
import AiAutomationCrm from "./pages/Services/AiAutomationCrm";
import AiAgents from "./pages/Services/AiAgents";
import Plans from "./pages/Plans";
import Lexora from "./pages/Signature/Lexora";
import FineDining from "./pages/Signature/FineDining";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CTASection from "./components/CTASection";

// Corporate JSON-LD Schema lookups for each of the 13 paths
const SCHEMAS: Record<string, any> = {
  "/": {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Millennial Media - AI Digital Marketing Agency",
    "image": "https://millennialmedia.com/logo.png",
    "description": "Next-generation AI marketing, SEO networks, and CRM automation agency located in Brickell, Miami, FL.",
    "@id": "https://millennialmedia.com/#organization",
    "url": "https://millennialmedia.com",
    "telephone": "+1-305-845-1837",
    "email": "info@millennialmedia.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Brickell Financial District",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33131",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.7617,
      "longitude": -80.1918
    },
    "sameAs": [
      "https://instagram.com",
      "https://linkedin.com"
    ]
  },
  "/services/seo-web-presence": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Organic SEO & Web Presence",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Millennial Media LLC"
    },
    "description": "Command search result listings with high-intent semantic lookup structures and customized entity mappings."
  },
  "/services/social-media": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Management",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Millennial Media LLC"
    },
    "description": "Automate narrative publishing across Instagram, TikTok, and LinkedIn with native conversation systems."
  },
  "/services/paid-ads": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Paid Ads - Meta + Google",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Millennial Media LLC"
    },
    "description": "Predictive audience bidding schemas with Conversions API tracking setup."
  },
  "/services/email-video": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Email & Video Marketing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Millennial Media LLC"
    },
    "description": "Vertical aesthetic storytelling coupled with dynamic email automation."
  },
  "/services/ai-automation-crm": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Automation & CRM Sync",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Millennial Media LLC"
    },
    "description": "Automate lead followup gates to reduce lead response limits to 15 seconds."
  },
  "/services/ai-agents": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Agents & Employees",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Millennial Media LLC"
    },
    "description": "Deploy customized digital employees trained on internal procedures and company files."
  },
  "/plans": {
    "@context": "https://schema.org",
    "@type": "ProductModel",
    "name": "Millennial Media Agency Plans",
    "description": "Bespoke operational scaling solutions capped by metric outcomes without fixed numbers."
  },
  "/signature/lexora": {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Lexora AI Suite",
    "brand": "Millennial Media LLC",
    "description": "Automated legal case-acquisition and document parsing suite restricted to trial law practices."
  },
  "/signature/fine-dining": {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fine Dining Guest Growth Suite",
    "brand": "Millennial Media LLC",
    "description": "Local food influencer networks and direct DM reservation booking pipeline sync."
  },
  "/about": {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Millennial Media",
    "description": "Leading AI Digital scaling agency located in Brickell Financial district, Miami."
  },
  "/blog": {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Millennial AI Analytics Blog",
    "description": "Technical insights on semantic lookup structures and speed to lead equations."
  },
  "/contact": {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Millennial Media Team",
    "description": "Book a free growth assessment call in Brickell, Miami, FL."
  }
};

export default function App() {
  const [currentPath, setCurrentPath] = useState("/");

  // Synchronize on initial render and handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const path = hash.replace(/^#/, "") || "/";
      if (SCHEMAS[path]) {
        setCurrentPath(path);
      } else {
        setCurrentPath("/");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    
    // Initialize
    if (window.location.hash) {
      handleHashChange();
    } else {
      window.location.hash = "/";
    }

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Sync schema changes inside document head
  useEffect(() => {
    // Scroll window to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Inject matching dynamic JSON-LD block
    const existingScript = document.getElementById("jsonld-schema-script");
    if (existingScript) {
      existingScript.remove();
    }

    const currentSchema = SCHEMAS[currentPath] || SCHEMAS["/"];
    const script = document.createElement("script");
    script.id = "jsonld-schema-script";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(currentSchema);
    document.head.appendChild(script);
  }, [currentPath]);

  // Intersection Observer for sleek scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    // Timeout allows DOM content to completely re-render on page transition
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
  };

  // Basic Page router selector matching all 13 states
  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <Home onNavigate={handleNavigate} />;
      case "/services/seo-web-presence":
        return <SeoWebPresence onNavigate={handleNavigate} />;
      case "/services/social-media":
        return <SocialMedia onNavigate={handleNavigate} />;
      case "/services/paid-ads":
        return <PaidAds onNavigate={handleNavigate} />;
      case "/services/email-video":
        return <EmailVideo onNavigate={handleNavigate} />;
      case "/services/ai-automation-crm":
        return <AiAutomationCrm onNavigate={handleNavigate} />;
      case "/services/ai-agents":
        return <AiAgents onNavigate={handleNavigate} />;
      case "/plans":
        return <Plans onNavigate={handleNavigate} />;
      case "/signature/lexora":
        return <Lexora onNavigate={handleNavigate} />;
      case "/signature/fine-dining":
        return <FineDining onNavigate={handleNavigate} />;
      case "/about":
        return <About onNavigate={handleNavigate} />;
      case "/blog":
        return <Blog onNavigate={handleNavigate} />;
      case "/contact":
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-purple-light selection:text-white">
      {/* Shared sticky Header */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Primary routed content */}
      <main className="grow">
        {renderPage()}
      </main>

      {/* Shared Reusable Call-to-action block (Rendered unless on Contact page itself) */}
      {currentPath !== "/contact" && (
        <CTASection onNavigate={handleNavigate} />
      )}

      {/* Shared Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
