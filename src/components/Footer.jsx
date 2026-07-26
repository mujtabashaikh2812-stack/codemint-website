import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowUpRight, Check, Send, ShieldCheck, Globe, Zap } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-[#070A0E] text-gray-300 border-t border-white/10 pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Ambient Radial Lighting Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* 1. TOP HIGH-IMPACT BRAND CALLOUT BANNER INSIDE FOOTER */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#0F172A]/90 via-[#111827]/90 to-[#0F172A]/90 border border-white/15 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 backdrop-blur-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-xs font-mono font-bold text-[#3B82F6] uppercase">
              <Zap className="w-3.5 h-3.5" /> Start Building Your Vision
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
              Ready to Build Software That <span className="font-serif-accent italic font-normal text-gray-200">Outperforms The Market?</span>
            </h3>
            <p className="text-sm text-gray-400 font-normal">
              Schedule a technical discovery call with a Principal Architect today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onOpenContact}
              className="px-7 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-[#2563EB]/30 hover:scale-105 flex items-center gap-2 group"
            >
              <span>Book 15-Min Discovery Call</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 2. MULTI-COLUMN MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand & Status Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold shadow-lg shadow-[#2563EB]/40 group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-extrabold tracking-tight text-white">
                  CodeMint<span className="text-[#3B82F6]">.</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 -mt-1 font-semibold">
                  Digital Product Studio
                </span>
              </div>
            </a>

            <p className="text-sm text-gray-400 leading-relaxed font-normal max-w-sm">
              CodeMint is a premium digital product studio engineering world-class software, SaaS platforms, and enterprise solutions for ambitious market leaders.
            </p>

            {/* Live Operational Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#111827] border border-white/10 text-xs font-mono text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>All Node Systems Operational (99.99%)</span>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 pt-1">
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3B82F6] hover:bg-[#2563EB]/20 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="#" aria-label="X Twitter" className="w-9 h-9 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3B82F6] hover:bg-[#2563EB]/20 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3B82F6] hover:bg-[#2563EB]/20 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
            </div>
          </div>

          {/* Capabilities Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-widest uppercase text-white font-extrabold">Capabilities</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SaaS Platforms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Applications</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud & DevOps</a></li>
            </ul>
          </div>

          {/* Featured Case Studies Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-widest uppercase text-white font-extrabold">Featured Case Studies</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#portfolio" className="hover:text-white transition-colors">InterviewIQ AI</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Apex HealthCare</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Nexus Commerce Core</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Crown Estate SaaS</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono tracking-widest uppercase text-white font-extrabold">Engineering Briefs</h4>
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              Join over 4,000+ CTOs and product leaders receiving quarterly insights on high-scale software architecture.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4" /> Subscribed to CodeMint Technical Briefs.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="cto@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs transition-all shrink-0 flex items-center gap-1 shadow-lg shadow-[#2563EB]/25"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 3. BOTTOM LEGAL & COPYRIGHT BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400 pt-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} CodeMint Digital Studio Inc.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security & SOC2</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
