import React from 'react';
import { motion } from 'framer-motion';
import { Check, Code2 } from 'lucide-react';

export default function WhyCodeMint() {
  const checkPoints = [
    'Experienced & Reliable Team',
    'Scalable & Future-Ready Solutions',
    'Transparent Communication',
    'On-Time Delivery',
    'Long-Term Support & Maintenance'
  ];

  return (
    <section id="why-us" className="py-20 px-6 md:px-12 bg-[#090D12] text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Full-width Dark Container */}
        <div className="bg-[#080C10] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Why Us & Checkmarks */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-extrabold tracking-widest text-[#3B82F6] uppercase block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight leading-snug">
              More Than Developers,{' '}
              <br />
              <span className="font-serif-headline italic font-normal text-gray-200">We're Your Growth Partners</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-xl">
              We combine technical excellence with clear communication to deliver digital products that make a real difference for your business.
            </p>

            <div className="space-y-3.5 pt-2">
              {checkPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Brand Statement */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#111827] to-[#0F172A] rounded-2xl p-8 md:p-10 border border-white/10 space-y-5">
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Our Commitment
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every project we take on is built with clean code, thoughtful architecture, and a focus on delivering real value. We don't just write code — we build solutions that help your business grow.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-[#171F2B] border border-white/10 text-xs font-mono text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

