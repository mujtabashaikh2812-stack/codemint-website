import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ArrowRight, Code2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$50k - $100k',
    services: [],
    message: ''
  });

  const availableServices = [
    'Web Development',
    'SaaS Platform',
    'Mobile Application',
    'UI/UX Design',
    'AI Integration',
    'Cloud Architecture'
  ];

  const toggleService = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#0B0F14]/90 backdrop-blur-xl"
          ></motion.div>

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#111827] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="px-6 py-5 bg-[#0D121A] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-heading font-bold text-lg">
                <Code2 className="w-5 h-5 text-[#4F8CFF]" />
                <span>Start an Engagement with CodeMint</span>
              </div>
              <button
                onClick={resetAndClose}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#18C29C]/10 border border-[#18C29C]/30 text-[#18C29C] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Project Request Received
                  </h3>
                  <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A Principal Engineering Partner at CodeMint will review your requirements and respond within 4 business hours.
                  </p>
                  <button
                    onClick={resetAndClose}
                    className="px-6 py-2.5 rounded-full bg-[#4F8CFF] text-white font-medium text-sm mt-4 hover:bg-[#3B7BEB]"
                  >
                    Return to Website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Inputs Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#4F8CFF] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#4F8CFF] text-sm"
                      />
                    </div>
                  </div>

                  {/* Company & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#4F8CFF] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white focus:outline-none focus:border-[#4F8CFF] text-sm"
                      >
                        <option value="$25k - $50k">$25,000 - $50,000</option>
                        <option value="$50k - $100k">$50,000 - $100,000</option>
                        <option value="$100k+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Service Interest Checkboxes */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2">Services Needed</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableServices.map((service) => {
                        const active = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-3 py-2 rounded-lg text-xs font-medium border text-left transition-colors ${
                              active
                                ? 'bg-[#4F8CFF]/20 text-[#4F8CFF] border-[#4F8CFF]'
                                : 'bg-[#0B0F14] text-gray-400 border-white/10 hover:text-gray-200'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">Project Overview & Timeline</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the product you want to build or scale..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#4F8CFF] text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#4F8CFF] hover:bg-[#3B7BEB] text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#4F8CFF]/20 transition-all"
                  >
                    <span>Submit Project Scope</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
