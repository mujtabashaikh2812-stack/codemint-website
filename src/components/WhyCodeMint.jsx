import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';

export default function WhyCodeMint() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "CodeMint transformed our idea into a powerful platform that our users love. Their team is skilled, responsive and truly dedicated.",
      name: "Rahul Mehta",
      role: "CEO, EduLearn",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The architecture designed by CodeMint handled our massive 10x traffic spike seamlessly with zero downtime. Exceptional partner.",
      name: "Anjali Verma",
      role: "Founder, HealthTech",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const checkPoints = [
    'Experienced Team',
    'Scalable & Future-Ready Solutions',
    'Transparent Communication',
    'On-Time Delivery',
    'Long-Term Support'
  ];

  return (
    <section id="why-us" className="py-20 px-6 md:px-12 bg-[#090D12] text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Full-width Dark Container */}
        <div className="bg-[#080C10] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Why Us & Checkmarks */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-extrabold tracking-widest text-[#3B82F6] uppercase block">
              WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight leading-snug">
              More Than Developers, <br />
              <span className="font-serif-accent italic font-normal text-gray-200">We're Your Growth Partners</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center pt-2">
              <div className="space-y-3.5">
                {checkPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* 3D Metallic Cube Asset */}
              <div className="hidden sm:flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 rounded-2xl transform rotate-12 border border-white/20 shadow-2xl flex items-center justify-center">
                  <div className="w-20 h-20 border-2 border-slate-600/40 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Client Testimonials Slider */}
          <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-8 border border-white/10 space-y-6 flex flex-col justify-between min-h-[310px]">
            <div className="space-y-4">
              <span className="text-xs font-mono font-extrabold tracking-widest text-[#3B82F6] uppercase block">
                CLIENT TESTIMONIALS
              </span>

              <div className="text-5xl text-[#3B82F6] font-serif leading-none">“</div>

              <p className="text-gray-200 text-base md:text-lg leading-relaxed font-normal italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
            </div>

            {/* Author details & controls */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-11 h-11 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="font-heading font-bold text-white text-sm">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>

              {/* Arrow controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTestimonial(0)}
                  className={`p-2.5 rounded-full border transition-colors ${
                    currentTestimonial === 0 ? 'bg-[#3B82F6] text-white border-[#3B82F6]' : 'border-white/10 text-gray-400'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentTestimonial(1)}
                  className={`p-2.5 rounded-full border transition-colors ${
                    currentTestimonial === 1 ? 'bg-[#3B82F6] text-white border-[#3B82F6]' : 'border-white/10 text-gray-400'
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
