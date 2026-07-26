import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "CodeMint didn't just build our web app—they completely re-architected our data ingestion engine. The result was a 4x increase in user throughput without adding cloud overhead.",
      author: "Marcus Vance",
      title: "Co-Founder & CEO",
      company: "Aura Logistics (Series B)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The technical maturity of CodeMint's engineers is rare. They communicated proactively every day, hit every single milestone, and delivered a SOC2-compliant product.",
      author: "Elena Rostova",
      title: "VP of Product",
      company: "FinScale Global",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Working with CodeMint felt like having a world-class principal engineering team right inside our company. Their design system alone saved us months of work.",
      author: "David Chen",
      title: "Chief Technology Officer",
      company: "Nexus AI Commerce",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-[#0B0F14] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-[#4F8CFF] uppercase">Client Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Trusted by Ambitious Founders & Executives.
          </h2>
        </div>

        {/* 3 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#171F2B] border border-white/5 flex flex-col justify-between space-y-6 hover:border-[#4F8CFF]/30 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-[#18C29C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#18C29C]" />
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed font-normal italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    {item.author}
                  </h4>
                  <div className="text-xs text-gray-400 font-mono">
                    {item.title} • <span className="text-[#4F8CFF]">{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
