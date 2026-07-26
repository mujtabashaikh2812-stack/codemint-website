import React from 'react';
import { motion } from 'framer-motion';

export default function InteractiveHeroMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none py-2 select-none">
      
      {/* Background Soft Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Main Clean 3D Hardware Composition (No Floating Badges Around It) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative group transition-all duration-700 hover:scale-[1.01]"
      >
        {/* Subtle Ambient Floor Shadow */}
        <div className="absolute -bottom-6 inset-x-8 h-12 bg-black/80 rounded-full blur-2xl pointer-events-none"></div>

        {/* Photorealistic 3D Laptop + Mobile Hardware Composition */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.95)] bg-[#070B10]">
          
          {/* Glass Reflection Highlight */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.04] to-transparent pointer-events-none z-10"></div>

          <img
            src="/clean_3d_hero.jpg"
            alt="CodeMint MacBook Pro & iPhone 3D Hardware Mockup"
            className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
          />

        </div>
      </motion.div>

    </div>
  );
}
