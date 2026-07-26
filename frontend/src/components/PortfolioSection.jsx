import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ExternalLink, Activity, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';
import ProjectDemoModal from './ProjectDemoModal';

export default function PortfolioSection({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeDemoModal, setActiveDemoModal] = useState(null);

  const categories = ['All', 'AI & Machine Learning', 'Enterprise SaaS', 'E-Commerce & Retail'];

  const projects = [
    {
      id: 'interview-iq',
      title: 'InterviewIQ AI',
      category: 'AI & Machine Learning',
      headline: 'Real-Time Candidate Technical Assessment Engine',
      description: 'An AI-powered technical hiring system engineered with speech-to-text vector indexing, automated concurrency evaluation, and zero-bias candidate scorecards.',
      outcomes: [
        '85% Reduction in Time-to-Hire for Series B SaaS Client',
        'Evaluated 12,000+ Technical Engineers with Zero Downtime',
        'Sub-10ms Real-Time AI Speech-to-Text Pipeline'
      ],
      stack: ['OpenAI API', 'Next.js', 'Python Core', 'MongoDB', 'Tailwind'],
      gradient: 'from-indigo-950 via-purple-950 to-slate-950',
      badge: 'AI Solution',
      metrics: { primary: '98% AI Match Score', secondary: 'Sub-10ms Audio Latency' },
      mockupData: {
        score: '9.8 / 10',
        candidate: 'Senior Distributed Systems Engineer',
        assessment: 'Zero-copy I/O memory buffer management verified without leaks.'
      }
    },
    {
      id: 'healthcare',
      title: 'Apex HealthCare',
      category: 'Enterprise SaaS',
      headline: 'Telehealth Platform & Real-Time Patient Telemetry',
      description: 'A SOC2 Type II and HIPAA-compliant telehealth architecture engineered with real-time patient vitals monitoring, automated EHR record sync, and AI risk detection.',
      outcomes: [
        '100% HIPAA & SOC2 Type II Audit Compliance Guaranteed',
        'Processed 4.2M Patient Telemetry Packets Daily',
        'Zero Data Leaks or Security Incidents Across 3 Years'
      ],
      stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      gradient: 'from-emerald-950 via-teal-950 to-slate-950',
      badge: 'Enterprise SaaS',
      metrics: { primary: 'HIPAA & SOC2 Certified', secondary: '0% Security Anomaly' },
      mockupData: {
        vitals: '72 BPM • 99% SpO2',
        status: 'Optimal Patient Health',
        audit: 'AES-256-GCM Encrypted'
      }
    },
    {
      id: 'commerce',
      title: 'Nexus Commerce Engine',
      category: 'E-Commerce & Retail',
      headline: 'High-Throughput Global Multi-Tenant E-Commerce Core',
      description: 'An ultra-resilient headless e-commerce backend built to sustain Black Friday peak flash sales exceeding 14,000 checkout requests per second.',
      outcomes: [
        '$45.2M Handled in Peak Black Friday Checkout Volume',
        '0ms Downtime Across 14 Geographic AWS Regions',
        '420ms Global Page Load Speed Worldwide'
      ],
      stack: ['Next.js', 'Stripe API', 'GraphQL', 'Redis', 'Tailwind'],
      gradient: 'from-blue-950 via-slate-900 to-black',
      badge: 'E-Commerce Core',
      metrics: { primary: '14,280 Checkout Req/Sec', secondary: '$45.2M Volume Sustained' },
      mockupData: {
        throughput: '14,280 Req/Sec',
        gateway: 'Cloudflare Enterprise Edge',
        failover: 'Zero Lost Orders'
      }
    },
    {
      id: 'real-estate',
      title: 'Crown Estate Engine',
      category: 'Enterprise SaaS',
      headline: 'Institutional Real Estate Wealth & Property Engine',
      description: 'An asset management platform providing institutional investors with automated portfolio rebalancing, risk variance telemetry, and real-time yield forecasting.',
      outcomes: [
        '$850M+ Portfolio Valuation Onboarded in 6 Months',
        '98.4% Average Commercial Tenant Occupancy Rate',
        'FINRA Compliant Real-Time Rebalancing Pipeline'
      ],
      stack: ['React', 'Firebase', 'Stripe', 'Go Engine', 'TypeScript'],
      gradient: 'from-slate-950 via-cyan-950 to-slate-900',
      badge: 'Wealth SaaS',
      metrics: { primary: '$850M+ Portfolio AUM', secondary: '98.4% Occupancy Rate' },
      mockupData: {
        portfolio: '$850,000,000 AUM',
        yield: '+14.2% YTD Yield',
        variance: 'Zero Risk Variance'
      }
    }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-[#090D12] text-white relative">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-extrabold tracking-widest text-[#3B82F6] uppercase block">
              OUR WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Projects That <span className="font-serif-accent italic font-normal text-gray-200">Make an Impact</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Explore interactive live case studies engineered for market leaders.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-[#111827] p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Interactive Demo Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-[#111827] border border-white/10 overflow-hidden shadow-2xl hover:border-[#3B82F6]/60 transition-all duration-500 group flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                
                {/* 1. Realistic Interactive Console Graphic */}
                <div className={`p-6 bg-gradient-to-br ${project.gradient} border-b border-white/10 space-y-4 relative overflow-hidden`}>
                  
                  {/* Subtle Screen Reflection */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[11px] font-mono font-medium text-gray-200">
                        {project.badge}
                      </span>
                      <span className="text-emerald-400 text-xs font-mono flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Production
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveDemoModal(project)}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-md transition-all group-hover:scale-105"
                    >
                      <Play className="w-3 h-3 fill-current text-[#3B82F6]" />
                      <span>Interactive Demo</span>
                    </button>
                  </div>

                  {/* UI Console Box inside Project Card */}
                  <div className="bg-[#080C10]/95 rounded-2xl p-4 border border-white/15 shadow-2xl space-y-3 backdrop-blur-xl">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <span className="text-xs font-mono font-bold text-white">{project.title} Dashboard</span>
                      <span className="text-[10px] font-mono text-[#3B82F6] bg-[#2563EB]/10 px-2 py-0.5 rounded border border-[#2563EB]/20">
                        {project.metrics.primary}
                      </span>
                    </div>

                    {/* Dynamic Graphic UI Lines */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-[#171F2B] rounded-xl border border-white/5 space-y-1">
                        <div className="text-[10px] text-gray-400 font-mono">Performance SLA</div>
                        <div className="font-bold text-emerald-400">{project.metrics.secondary}</div>
                      </div>
                      <div className="p-2.5 bg-[#171F2B] rounded-xl border border-white/5 space-y-1">
                        <div className="text-[10px] text-gray-400 font-mono">Status</div>
                        <div className="font-bold text-white flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Operational
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* 2. Project Card Content Body */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-bold font-heading text-white group-hover:text-[#3B82F6] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-300">
                      {project.headline}
                    </p>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Business Outcomes Bullet Checklist */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block font-bold">
                      Verified Business Impact
                    </span>
                    {project.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-[#171F2B] border border-white/5 text-[11px] font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Action Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setActiveDemoModal(project)}
                  className="w-full py-3 rounded-xl bg-[#171F2B] hover:bg-[#2563EB] text-white font-semibold text-xs flex items-center justify-center gap-2 border border-white/10 hover:border-[#2563EB] transition-all duration-300 shadow-md group-hover:shadow-[#2563EB]/25"
                >
                  <span>Launch Live System Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Interactive Demo Modal Trigger */}
      <ProjectDemoModal
        project={activeDemoModal}
        isOpen={!!activeDemoModal}
        onClose={() => setActiveDemoModal(null)}
      />

    </section>
  );
}
