import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShoppingBag, Brain, Layout, PenTool, Cloud, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onOpenContact }) {
  const services = [
    {
      title: 'Website Development',
      description: 'Modern, responsive and high-performance websites that convert.',
      icon: Code2
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Powerful online stores with seamless user experience and secure payments.',
      icon: ShoppingBag
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that automate, analyze and drive better decisions.',
      icon: Brain
    },
    {
      title: 'Web Applications',
      description: 'Scalable web apps built for performance and long-term growth.',
      icon: Layout
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, user-focused designs that deliver real business impact.',
      icon: PenTool
    },
    {
      title: 'Cloud & DevOps',
      description: 'Secure, scalable and automated deployments for modern businesses.',
      icon: Cloud
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '20+', label: 'Technologies Mastered' },
    { number: '24/7', label: 'Support' },
    { number: '100%', label: 'Goal Focused' },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-light-section text-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-extrabold tracking-widest text-[#2563EB] uppercase block">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Building Solutions for a <span className="font-serif-accent italic font-normal text-slate-800">Better Tomorrow</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            End-to-end digital services tailored to your business goals
          </p>
        </div>

        {/* 6 White Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={onOpenContact}
                className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between cursor-pointer hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Blue Icon Rounded Box */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 flex justify-end">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full-width Dark Metrics Bar */}
        <div className="bg-[#090D12] text-white rounded-2xl p-8 shadow-2xl border border-slate-800 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className={i !== 0 ? 'md:border-l md:border-white/10' : ''}>
              <div className="text-2xl md:text-3xl font-extrabold font-heading text-white">{stat.number}</div>
              <div className="text-xs text-gray-400 font-mono mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
