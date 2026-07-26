import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, LineChart, Target } from 'lucide-react';
import InteractiveHeroMockup from './InteractiveHeroMockup';

export default function HeroSection({ onOpenContact }) {
  const featurePills = [
    { icon: Target, label: 'Strategic Thinking' },
    { icon: Code2, label: 'Clean Code' },
    { icon: Cpu, label: 'Scalable Solutions' },
    { icon: LineChart, label: 'Real Results' },
  ];

  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 bg-wave-lines overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Hero Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold font-mono tracking-widest text-[#3B82F6] uppercase"
            >
              BUILDING DIGITAL SOLUTIONS
            </motion.div>

            {/* Main Editorial Headline matching image */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold font-heading leading-[1.05] tracking-tight text-white"
            >
              We Build Digital <br />
              Solutions That <br />
              <span className="font-serif-headline italic font-normal bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#1D4ED8] bg-clip-text text-transparent">
                Drive Real Growth
              </span>
            </motion.h1>

            {/* Paragraph Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl font-normal"
            >
              We help startups and businesses build powerful websites, applications and AI solutions that solve problems and create impact.
            </motion.p>

            {/* Two Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full transition-all duration-300 shadow-xl shadow-[#2563EB]/30 hover:scale-105 group"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-gray-300 hover:text-white bg-[#0F172A] border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 group"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 ml-2 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>

            {/* Feature Pills Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center gap-4 border-t border-white/10"
            >
              {featurePills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.label}
                    className="inline-flex items-center gap-2 text-xs text-gray-400 font-medium hover:text-gray-200 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>{pill.label}</span>
                  </div>
                );
              })}
            </motion.div>

          </div>

          {/* Right Clean 3D Hardware Graphic */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <InteractiveHeroMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
