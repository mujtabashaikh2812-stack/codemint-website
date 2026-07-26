import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Lock, Layers, Code2 } from 'lucide-react';

export default function ProjectDemoModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#080C10]/95 backdrop-blur-xl"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl bg-[#0F172A] border border-white/15 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-6 text-white"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#090D12] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#3B82F6] animate-pulse"></div>
                <span className="font-heading font-bold text-lg text-white">
                  {project.title} — Project Overview
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-[#171F2B] border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              
              {/* Project Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#080C10] border border-white/10">
                <div>
                  <div className="text-xs font-mono text-[#3B82F6] font-semibold">{project.category}</div>
                  <div className="text-sm text-gray-300 font-medium mt-0.5">{project.headline}</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-[#1E293B] border border-white/10 text-xs font-mono text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'overview'
                        ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Overview
                  </button>

                  <button
                    onClick={() => setActiveTab('highlights')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'highlights'
                        ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Highlights
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Project Details</span>
                </div>
              </div>

              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="p-6 rounded-2xl bg-[#080C10] border border-white/10 space-y-6 shadow-inner">
                  
                  {/* Top bar */}
                  <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3">
                    <span className="text-gray-400">
                      Project: <strong className="text-white">{project.title}</strong>
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> {project.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-5">
                    <div>
                      <div className="text-xs font-mono text-gray-400 mb-2">Description</div>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Breakdown */}
                    <div>
                      <div className="text-xs font-mono text-gray-400 mb-2">Technology Stack</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {project.stack.map((tech) => (
                          <div key={tech} className="p-3 rounded-xl bg-[#171F2B] border border-white/5 text-sm text-gray-200 font-mono">
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* Highlights Tab */}
              {activeTab === 'highlights' && (
                <div className="p-6 rounded-2xl bg-[#080C10] border border-white/10 space-y-4">
                  <h4 className="text-base font-bold text-white">Key Highlights</h4>
                  <div className="space-y-3">
                    {project.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-200 p-3 rounded-xl bg-[#171F2B] border border-white/5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span className="font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#090D12] border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#3B82F6]" /> CodeMint Project Portfolio
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-[#2563EB] text-white font-sans font-semibold text-xs hover:bg-[#1D4ED8] transition-colors"
              >
                Close
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

