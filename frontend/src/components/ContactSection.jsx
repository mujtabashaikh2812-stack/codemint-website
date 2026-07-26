import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection({ onOpenContact }) {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-[#0B0F14] text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Full-width Rounded Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#090D12] via-[#0F172A] to-[#090D12] rounded-3xl p-10 md:p-16 border border-white/10 text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight relative z-10">
            Let's Build Something{' '}
            <span className="font-serif-headline italic font-normal text-gray-200">Great Together</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto relative z-10">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>

          <div className="pt-2 relative z-10">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full transition-all duration-300 shadow-xl shadow-[#2563EB]/30 hover:scale-105 hover:shadow-[#2563EB]/40"
            >
              Start a Conversation
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

