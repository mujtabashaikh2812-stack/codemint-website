import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Play } from 'lucide-react';
import ProjectDemoModal from './ProjectDemoModal';

export default function PortfolioSection({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeDemoModal, setActiveDemoModal] = useState(null);

  const categories = ['All', 'Web Development', 'Web Applications', 'UI/UX Design'];

  const projects = [
    {
      id: 'project-1',
      title: 'Enterprise SaaS Dashboard',
      category: 'Web Applications',
      headline: 'Custom Analytics & Management Platform',
      description: 'A full-featured SaaS dashboard built for a logistics company, featuring real-time data visualization, user role management, and automated reporting.',
      outcomes: [
        'Built with modern React architecture for performance',
        'Real-time data updates with sub-second latency',
        'Responsive design accessible across all devices'
      ],
      stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'AWS'],
      gradient: 'from-indigo-950 via-purple-950 to-slate-950',
      badge: 'Web Application',
      metrics: { primary: 'React + Node.js Stack', secondary: 'Real-time Analytics' }
    },
    {
      id: 'project-2',
      title: 'E-Commerce Storefront',
      category: 'Web Development',
      headline: 'Modern Online Retail Experience',
      description: 'A custom e-commerce platform with secure payment processing, product management, inventory tracking, and a seamless shopping experience.',
      outcomes: [
        'Custom product catalog with advanced filtering',
        'Secure payment integration with Stripe',
        'Optimized for fast page loads and SEO'
      ],
      stack: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind', 'Vercel'],
      gradient: 'from-emerald-950 via-teal-950 to-slate-950',
      badge: 'E-Commerce',
      metrics: { primary: 'Next.js + Stripe', secondary: 'SEO Optimized' }
    },
    {
      id: 'project-3',
      title: 'Portfolio & Brand Website',
      category: 'Web Development',
      headline: 'Professional Brand Showcase',
      description: 'A beautifully designed portfolio website for a creative agency, featuring smooth animations, project galleries, and integrated contact functionality.',
      outcomes: [
        'Custom design with smooth scroll animations',
        'Built with modern framer-motion animations',
        'Fully responsive across all screen sizes'
      ],
      stack: ['React', 'Framer Motion', 'CSS', 'Vite'],
      gradient: 'from-blue-950 via-slate-900 to-black',
      badge: 'Website',
      metrics: { primary: 'Modern Frontend Stack', secondary: 'Responsive Design' }
    },
    {
      id: 'project-4',
      title: 'Admin Dashboard UI',
      category: 'UI/UX Design',
      headline: 'Clean & Functional Admin Interface',
      description: 'A thoughtfully designed admin dashboard interface focused on usability, data clarity, and efficient workflow management for internal teams.',
      outcomes: [
        'User-centric design with intuitive navigation',
        'Data visualization for key business metrics',
        'Component-based design system for scalability'
      ],
      stack: ['React', 'Tailwind', 'Recharts', 'TypeScript'],
      gradient: 'from-slate-950 via-cyan-950 to-slate-900',
      badge: 'UI/UX Design',
      metrics: { primary: 'Design System Built', secondary: 'Component Library' }
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
              Recent{' '}
              <span className="font-serif-headline italic font-normal text-gray-200">Projects</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              A selection of websites and applications we've built.
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

        {/* Project Cards Grid */}
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
                
                {/* Card Top Graphic Area */}
                <div className={`p-6 bg-gradient-to-br ${project.gradient} border-b border-white/10 space-y-4 relative overflow-hidden`}>
                  
                  {/* Subtle Screen Reflection */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[11px] font-mono font-medium text-gray-200">
                        {project.badge}
                      </span>
                      <span className="text-emerald-400 text-xs font-mono flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live Demo
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveDemoModal(project)}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-md transition-all group-hover:scale-105"
                    >
                      <Play className="w-3 h-3 fill-current text-[#3B82F6]" />
                      <span>Details</span>
                    </button>
                  </div>

                  {/* Project Preview Box */}
                  <div className="bg-[#080C10]/95 rounded-2xl p-4 border border-white/15 shadow-2xl space-y-3 backdrop-blur-xl">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <span className="text-xs font-mono font-bold text-white">{project.title}</span>
                      <span className="text-[10px] font-mono text-[#3B82F6] bg-[#2563EB]/10 px-2 py-0.5 rounded border border-[#2563EB]/20">
                        {project.metrics.primary}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-[#171F2B] rounded-xl border border-white/5 space-y-1">
                        <div className="text-[10px] text-gray-400 font-mono">Stack</div>
                        <div className="font-bold text-emerald-400">{project.metrics.secondary}</div>
                      </div>
                      <div className="p-2.5 bg-[#171F2B] rounded-xl border border-white/5 space-y-1">
                        <div className="text-[10px] text-gray-400 font-mono">Status</div>
                        <div className="font-bold text-white flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Delivered
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Card Content Body */}
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

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block font-bold">
                      Key Highlights
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

              {/* Card Action Footer */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setActiveDemoModal(project)}
                  className="w-full py-3 rounded-xl bg-[#171F2B] hover:bg-[#2563EB] text-white font-semibold text-xs flex items-center justify-center gap-2 border border-white/10 hover:border-[#2563EB] transition-all duration-300 shadow-md"
                >
                  <span>View Project Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectDemoModal
        project={activeDemoModal}
        isOpen={!!activeDemoModal}
        onClose={() => setActiveDemoModal(null)}
      />

    </section>
  );
}

