import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShoppingBag, Brain, Layout, PenTool, Cloud, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onOpenContact }) {
  const services = [
    {
      title: 'Website Development',
      description: 'Modern, responsive and high-performance websites tailored to your brand and business goals.',
      icon: Code2
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Custom online stores with seamless user experience, secure payments, and inventory management.',
      icon: ShoppingBag
    },
    {
      title: 'AI Integration',
      description: 'Intelligent automation and data-driven features to help you work smarter and scale faster.',
      icon: Brain
    },
    {
      title: 'Web Applications',
      description: 'Scalable web apps built with modern frameworks for performance and long-term growth.',
      icon: Layout
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered designs that blend aesthetics with functionality for real business impact.',
      icon: PenTool
    },
    {
      title: 'Cloud & DevOps',
      description: 'Streamlined deployments, automated infrastructure, and reliable hosting solutions.',
      icon: Cloud
    }
  ];

  const highlights = [
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Support', value: 'Dedicated' },
    { label: 'Focus', value: 'Quality First' },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-light-section text-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-extrabold tracking-widest text-[#2563EB] uppercase block">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Building Solutions for a{' '}
            <span className="font-serif-headline italic font-normal text-slate-800">Digital Future</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            End-to-end digital services tailored to your business needs
          </p>
        </div>

        {/* Service Cards Grid */}
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
                className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#2563EB]/30 transition-all duration-300 group flex flex-col justify-between cursor-pointer hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Blue Icon Rounded Box */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 shadow-sm">
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

        {/* Highlights Bar */}
        <div className="bg-[#090D12] text-white rounded-2xl p-8 shadow-2xl border border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {highlights.map((item, i) => (
            <div key={item.label} className={i !== 0 ? 'md:border-l md:border-white/10' : ''}>
              <div className="text-2xl md:text-3xl font-extrabold font-heading text-white">{item.value}</div>
              <div className="text-xs text-gray-400 font-mono mt-1">{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

