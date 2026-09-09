import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Barbers } from './components/Barbers';
import { WhyTriKuts } from './components/WhyTriKuts';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BarberDivider } from './components/BarberDivider';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [preselectedBarber, setPreselectedBarber] = useState<string | undefined>(undefined);

  // Scroll to section helper
  const scrollToBooking = () => {
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      const headerOffset = 70;
      const elementPosition = bookingElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      const headerOffset = 70;
      const elementPosition = servicesElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    scrollToBooking();
  };

  const handleSelectBarber = (barberName: string) => {
    setPreselectedBarber(barberName);
    scrollToBooking();
  };

  // IntersectionObserver to accurately track the active section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'barbers', 'gallery', 'reviews', 'booking', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] transition-colors duration-400">
      {/* Sticky Compact Header */}
      <Navbar onOpenBooking={scrollToBooking} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onBookClick={scrollToBooking} onServicesClick={scrollToServices} />

        {/* About Section */}
        <About />

        {/* Services & Craftsmanship */}
        <Services onSelectService={handleSelectService} />

        {/* Meet Our Barbers */}
        <Barbers onSelectBarber={handleSelectBarber} />

        {/* Why TriKuts (Pillars) */}
        <WhyTriKuts />

        {/* The Shop & Craft Gallery */}
        <Gallery />

        {/* Reviews Slider */}
        <Reviews />

        {/* Dedicated Booking Section */}
        <Booking
          preselectedService={preselectedService}
          preselectedBarber={preselectedBarber}
        />

        {/* Contact Section */}
        <Contact />

        {/* Final Booking Call to Action */}
        <FinalCTA onBookClick={scrollToBooking} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
