import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechTrust from './components/TechTrust';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ProcessSection from './components/ProcessSection';
import WhyCodeMint from './components/WhyCodeMint';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContact = () => setContactModalOpen(true);
  const handleCloseContact = () => setContactModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white selection:bg-[#4F8CFF]/30 selection:text-[#4F8CFF] font-sans antialiased">
      {/* Fixed Top Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Content */}
      <main>
        <HeroSection onOpenContact={handleOpenContact} />
        <TechTrust />
        <ServicesSection onOpenContact={handleOpenContact} />
        <PortfolioSection onOpenContact={handleOpenContact} />
        <ProcessSection />
        <WhyCodeMint />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection onOpenContact={handleOpenContact} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Project Inquiry Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={handleCloseContact} />
    </div>
  );
}
