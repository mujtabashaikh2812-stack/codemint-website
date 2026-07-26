import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Activity, ShieldCheck, Zap, Layers, Play, CheckCircle2, Server, Terminal, Lock } from 'lucide-react';

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
                  {project.title} — Interactive System Demo
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
                  ● Production Environment
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

              {/* Demo Interactive Controls Header */}
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
                    Live Console View
                  </button>

                  <button
                    onClick={() => setActiveTab('outcomes')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'outcomes'
                        ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Business Impact Metrics
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Architecture</span>
                </div>
              </div>

              {/* Live Application Console Interface */}
              {activeTab === 'overview' && (
                <div className="p-6 rounded-2xl bg-[#080C10] border border-white/10 space-y-6 shadow-inner">
                  
                  {/* Console Top Bar */}
                  <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3">
                    <span className="text-gray-400">Instance ID: <strong className="text-white">codemint-prod-node-04</strong></span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" /> Response: 12.4ms P99
                    </span>
                  </div>

                  {/* Render Custom UI per project */}
                  {project.id === 'interview-iq' && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-mono text-gray-400">Live AI Evaluation Stream</div>
                          <div className="text-xl font-bold text-white">Principal Distributed Systems Engineer</div>
                        </div>
                        <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs">
                          AI Match Score: 98%
                        </div>
                      </div>

                      {/* Technical Skill Breakdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-4 rounded-xl bg-[#171F2B] border border-white/5 space-y-1">
                          <div className="text-xs text-gray-400 font-mono">System Architecture</div>
                          <div className="text-xl font-bold text-white">9.9 / 10</div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#2563EB] h-full w-[99%]"></div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[#171F2B] border border-white/5 space-y-1">
                          <div className="text-xs text-gray-400 font-mono">Concurrency & Raft</div>
                          <div className="text-xl font-bold text-white">9.6 / 10</div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[96%]"></div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[#171F2B] border border-white/5 space-y-1">
                          <div className="text-xs text-gray-400 font-mono">Algorithmic Speed</div>
                          <div className="text-xl font-bold text-white">9.8 / 10</div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-purple-400 h-full w-[98%]"></div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#171F2B]/60 border border-white/5 text-xs font-mono text-gray-300 space-y-2">
                        <div className="text-gray-400 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" /> Real-Time Audio Transcript Analysis
                        </div>
                        <p className="text-gray-200 font-sans leading-relaxed">
                          "Candidate demonstrated zero-copy I/O memory buffer management under simulated 10Gbps packet bursts with 0% memory leakage."
                        </p>
                      </div>
                    </div>
                  )}

                  {project.id === 'healthcare' && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-mono text-gray-400">Telehealth AI Diagnostics Stream</div>
                          <div className="text-xl font-bold text-white">Patient Telemetry Console #8402</div>
                        </div>
                        <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs">
                          HIPAA & SOC2 Verified
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-4 rounded-xl bg-[#171F2B] border border-white/5">
                          <div className="text-xs text-gray-400 font-mono">Heart Rate Monitor</div>
                          <div className="text-2xl font-extrabold text-white mt-1">72 <span className="text-xs text-gray-400">BPM</span></div>
                          <div className="text-[10px] text-emerald-400 font-mono mt-1">Normal Rhythm</div>
                        </div>

                        <div className="p-4 rounded-xl bg-[#171F2B] border border-white/5">
                          <div className="text-xs text-gray-400 font-mono">Oxygen Saturation</div>
                          <div className="text-2xl font-extrabold text-[#3B82F6] mt-1">99% <span className="text-xs text-gray-400">SpO2</span></div>
                          <div className="text-[10px] text-emerald-400 font-mono mt-1">Optimal Range</div>
                        </div>

                        <div className="p-4 rounded-xl bg-[#171F2B] border border-white/5">
                          <div className="text-xs text-gray-400 font-mono">AI Risk Assessment</div>
                          <div className="text-2xl font-extrabold text-emerald-400 mt-1">Low Risk</div>
                          <div className="text-[10px] text-gray-400 font-mono mt-1">0 Anomalies Detected</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === 'commerce' && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-mono text-gray-400">Global E-Commerce Engine</div>
                          <div className="text-xl font-bold text-white">14,280 Active Checkouts / Sec</div>
                        </div>
                        <div className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[#3B82F6] font-mono font-bold text-xs">
                          $45.2M Black Friday Volume
                        </div>
                      </div>

                      <div className="h-28 bg-[#171F2B] rounded-xl p-3 flex items-end justify-between gap-1.5 border border-white/5">
                        {[40, 55, 70, 65, 85, 95, 90, 100, 92, 88, 96, 94, 98, 100].map((h, i) => (
                          <div key={i} className="w-full bg-[#080C10] rounded-t h-full flex items-end">
                            <div 
                              style={{ height: `${h}%` }}
                              className="w-full bg-gradient-to-t from-[#2563EB] to-emerald-400 rounded-t"
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.id === 'real-estate' && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-mono text-gray-400">Institutional Asset Engine</div>
                          <div className="text-xl font-bold text-white">$850M Portfolio Valuation</div>
                        </div>
                        <div className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono font-bold text-xs">
                          98.4% Occupancy Rate
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-xl bg-[#171F2B] border border-white/5 space-y-1">
                          <div className="text-xs text-gray-400 font-mono">Commercial Assets</div>
                          <div className="text-lg font-bold text-white">42 Properties</div>
                          <div className="text-xs text-emerald-400 font-mono">+14.2% YTD ROI</div>
                        </div>
                        <div className="p-4 rounded-xl bg-[#171F2B] border border-white/5 space-y-1">
                          <div className="text-xs text-gray-400 font-mono">Automated Rebalancer</div>
                          <div className="text-lg font-bold text-[#3B82F6]">Zero Risk Variance</div>
                          <div className="text-xs text-gray-400 font-mono">FINRA Compliant</div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {activeTab === 'outcomes' && (
                <div className="p-6 rounded-2xl bg-[#080C10] border border-white/10 space-y-4">
                  <h4 className="text-base font-bold text-white">Verified Business Outcomes</h4>
                  <div className="space-y-3">
                    {project.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-200 p-3 rounded-xl bg-[#171F2B] border border-white/5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span className="font-semibold">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#090D12] border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>CodeMint Architectural Verification</span>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-[#2563EB] text-white font-sans font-semibold text-xs hover:bg-[#1D4ED8] transition-colors"
              >
                Close Preview
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
