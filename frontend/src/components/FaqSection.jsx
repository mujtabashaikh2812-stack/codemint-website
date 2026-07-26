import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services does CodeMint offer?",
      answer: "We offer a range of digital services including custom website development, web applications, e-commerce solutions, UI/UX design, AI integration, and cloud infrastructure setup. Each project is tailored to the client's specific needs and goals."
    },
    {
      question: "How long does it take to build a website or web app?",
      answer: "Timeline depends on the scope and complexity of the project. A standard business website typically takes 2-4 weeks, while more complex web applications or SaaS platforms can range from 6-12 weeks. We'll provide a clear timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes. We offer ongoing maintenance packages to keep your website or application secure, up-to-date, and running smoothly. This includes security updates, performance monitoring, content updates, and technical support as needed."
    },
    {
      question: "What is your development process like?",
      answer: "We follow a structured process: Discovery (understanding your goals), Planning (strategy and roadmap), Design (user-focused wireframes and mockups), Development (clean, scalable code), Testing (quality assurance), and Launch & Support. We keep you involved at every stage."
    },
    {
      question: "How do I get started with CodeMint?",
      answer: "Simply reach out through the contact form or click 'Get a Quote'. We'll schedule a free consultation to discuss your project, goals, and budget. From there, we'll create a tailored proposal and timeline for you."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-36 px-6 md:px-12 bg-[#0B0F14] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-[#3B82F6] uppercase font-extrabold">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for, feel free to reach out.
          </p>
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
                    isOpen ? 'rotate-45 text-[#3B82F6] border-[#3B82F6]' : ''
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

