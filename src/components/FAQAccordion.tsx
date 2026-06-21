import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({ items, title, subtitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-24 border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-6">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-ink mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-brand-muted text-lg max-w-2xl mx-auto font-sans">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-brand-border rounded-lg bg-brand-alt overflow-hidden transition-colors hover:border-purple-light"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans font-semibold text-brand-ink hover:text-purple-primary focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-primary shrink-0" />
                    <span>{item.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-purple-primary" : ""}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 text-brand-muted font-sans text-sm md:text-base leading-relaxed border-t border-brand-border pt-4 bg-white/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
