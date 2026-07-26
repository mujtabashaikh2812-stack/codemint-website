import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection({ onOpenContact }) {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-[#0B0F14] text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Full-width Rounded Banner */}
        <div className="bg-gradient-to-r from-[#090D12] via-[#0F172A] to-[#090D12] rounded-3xl p-10 md:p-16 border border-white/10 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight relative z-10">
            Let's Build Something <span className="font-serif-accent italic font-normal text-gray-200">Great Together</span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto relative z-10">
            Have a project in mind? Let's turn your ideas into reality.
          </p>

          <div className="pt-2 relative z-10">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full transition-all duration-300 shadow-xl shadow-[#2563EB]/30 hover:scale-105"
            >
              Get a Free Consultation
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
