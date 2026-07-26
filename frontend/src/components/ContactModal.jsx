import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Code2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', company: '', message: '' });
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
                <Code2 className="w-5 h-5 text-[#3B82F6]" />
                <span>Let's Work Together</span>
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
                    Message Sent Successfully
                  </h3>
                  <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={resetAndClose}
                    className="px-6 py-2.5 rounded-full bg-[#3B82F6] text-white font-medium text-sm mt-4 hover:bg-[#1D4ED8] transition-colors"
                  >
                    Return to Website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company (optional)"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] text-sm transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">Project Details *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] text-sm resize-none transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1D4ED8] text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/20 transition-all"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-gray-500 text-center font-mono">
                    We'll respond within 24 hours. No spam, ever.
                  </p>

                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

