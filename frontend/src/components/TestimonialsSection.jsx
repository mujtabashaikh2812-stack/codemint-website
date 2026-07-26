import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "CodeMint delivered a clean, well-architected web application that exceeded our expectations. Their communication throughout the project was excellent.",
      author: "Client Name",
      title: "CEO",
      company: "Company Name",
      initials: "CN"
    },
    {
      quote: "Professional, responsive, and technically skilled. They took the time to understand our requirements and delivered a product that perfectly matched our vision.",
      author: "Client Name",
      title: "Founder",
      company: "Company Name",
      initials: "CN"
    },
    {
      quote: "Working with CodeMint was a great experience. They provided valuable insights during the planning phase and executed flawlessly. Highly recommend.",
      author: "Client Name",
      title: "Product Manager",
      company: "Company Name",
      initials: "CN"
    }
  ];

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-[#0B0F14] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-[#3B82F6] uppercase font-extrabold">
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-base">
            Real feedback from real collaborations. We let our work speak for itself.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#171F2B] border border-white/5 flex flex-col justify-between space-y-6 hover:border-[#3B82F6]/30 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-[#18C29C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#18C29C]" />
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed font-normal italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#6366F1] flex items-center justify-center text-white text-sm font-bold">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    {item.author}
                  </h4>
                  <div className="text-xs text-gray-400 font-mono">
                    {item.title} &bull; <span className="text-[#3B82F6]">{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Note */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 font-mono">
            Testimonials shown as placeholders — actual client feedback available upon request.
          </p>
        </div>

      </div>
    </section>
  );
}

