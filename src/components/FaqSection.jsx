import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is CodeMint's typical engagement model?",
      answer: "We offer dedicated product squad engagements (fixed monthly retainer for a full cross-functional senior team) as well as scoped milestone-based project engineering for greenfield apps."
    },
    {
      question: "How long does it take to ship a custom product MVP?",
      answer: "Most MVP builds (SaaS platform, web portal, or custom mobile application) are shipped within 6 to 12 weeks from strategy kickoff to production deployment."
    },
    {
      question: "Who owns the code and intellectual property?",
      answer: "You do. 100% of code, design artifacts, infrastructure scripts, and IP generated during our engagement belong entirely to your company from day one."
    },
    {
      question: "How do you ensure post-launch stability and maintenance?",
      answer: "We provide comprehensive 24/7 post-launch telemetry, automated uptime monitoring, security patching, and ongoing feature sprints tailored to your SLA requirements."
    },
    {
      question: "Can CodeMint integrate with our internal engineering team?",
      answer: "Yes. We frequently act as an elite force multiplier—co-engineering core modules alongside your in-house CTO or VP of Engineering while enforcing strict code quality standards."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-36 px-6 md:px-12 bg-[#0B0F14] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-[#4F8CFF] uppercase">Clear Answers</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Minimal Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-xl bg-[#111827]/70 border border-white/5 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-lg md:text-xl font-heading font-semibold text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#171F2B] border border-white/10 flex items-center justify-center text-gray-300 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-45 text-[#4F8CFF]' : ''
                  }`}>
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 border-t border-white/5 pt-4 text-gray-300 text-base leading-relaxed"
                    >
                      {faq.answer}
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
