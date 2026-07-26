import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Layout, Code2, ShieldCheck, Headphones, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'Discovery',
      subtitle: 'Understand your goals',
      icon: Search
    },
    {
      number: '2',
      title: 'Planning',
      subtitle: 'Strategy & Roadmap',
      icon: Map
    },
    {
      number: '3',
      title: 'Design',
      subtitle: 'User-focused Experience',
      icon: Layout
    },
    {
      number: '4',
      title: 'Development',
      subtitle: 'Clean Code Built Right',
      icon: Code2
    },
    {
      number: '5',
      title: 'Testing',
      subtitle: 'Ensure Quality Every Time',
      icon: ShieldCheck
    },
    {
      number: '6',
      title: 'Support',
      subtitle: 'Ongoing Care & Growth',
      icon: Headphones
    }
  ];

  return (
    <section id="process" className="py-20 px-6 md:px-12 bg-light-container text-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-extrabold tracking-widest text-[#2563EB] uppercase block">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            A Proven Process. <span className="font-serif-accent italic font-normal text-slate-800">Better Results.</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            We follow a structured approach to ensure quality, transparency and success.
          </p>
        </div>

        {/* 6 Step Process Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative text-center space-y-3 flex flex-col items-center group"
              >
                {/* Circular Number Icon Badge */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-300 shadow-md flex items-center justify-center text-[#2563EB] font-bold group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#2563EB] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {step.subtitle}
                  </p>
                </div>

                {/* Connecting Arrow */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-7 -right-4 text-slate-400">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
