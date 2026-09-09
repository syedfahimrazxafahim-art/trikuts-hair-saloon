import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'barbers', label: 'Barbers', href: '#barbers' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll for subtle visual transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 75;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? 'bg-[var(--glass-nav)] backdrop-blur-md border-b border-[var(--border-subtle)] shadow-xl py-3'
            : 'bg-[var(--bg-primary)]/85 backdrop-blur-sm border-b border-[var(--border-subtle)] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[var(--text-primary)] rounded"
            aria-label="Tri Kuts Barbershop - Home"
          >
            <Logo variant="compact" />
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-nav"
            className="hidden xl:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-[var(--text-primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  } focus-visible:outline-1 focus-visible:outline-[var(--accent-silver)]`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--text-primary)]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Theme Toggle & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Premium Theme Toggle Switch */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              className="p-2 sm:px-3 sm:py-2 border border-[var(--border-accent)]/50 rounded-full bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm group hover:scale-105"
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Moon className="w-4 h-4 text-[#CFCFCF]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Sun className="w-4 h-4 text-[#B8860B]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className="hidden sm:inline text-[10px] tracking-[0.2em] uppercase font-mono font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                {theme === 'dark' ? 'DARK' : 'LIGHT'}
              </span>
            </button>

            {/* Book Now Button */}
            <button
              id="nav-book-now-btn"
              type="button"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 text-xs font-semibold uppercase tracking-[0.2em] px-5 py-2.5 rounded-none border border-[var(--btn-primary-bg)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[var(--accent-silver)] cursor-pointer hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              BOOK NOW
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 text-[var(--text-primary)] hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[var(--text-primary)]"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-modal"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col justify-between p-6 sm:p-10 min-h-[100dvh]"
            style={{ height: '100dvh' }}
          >
            {/* Header in Overlay */}
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <Logo variant="compact" />
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-2 border border-[var(--border-accent)]/50 rounded-full bg-[var(--card-bg)] text-[var(--text-primary)]"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Moon className="w-4 h-4 text-[#CFCFCF]" /> : <Sun className="w-4 h-4 text-[#B8860B]" />}
                </button>
                <button
                  ref={closeButtonRef}
                  id="mobile-menu-close-btn"
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[var(--text-primary)] hover:opacity-70 focus-visible:outline-2 focus-visible:outline-[var(--text-primary)]"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-4 my-auto py-6" aria-label="Mobile Navigation Links">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-2xl font-serif tracking-[0.1em] py-2 transition-colors flex items-center justify-between border-b border-[var(--border-subtle)] ${
                      isActive
                        ? 'text-[var(--text-primary)] font-bold pl-2 border-l-2 border-l-[var(--text-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-sans">
                      {isActive ? 'CURRENT' : 'VIEW'}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-3 pt-4 border-t border-[var(--border-subtle)]">
              <button
                id="mobile-book-now-cta"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold text-center uppercase tracking-[0.2em] text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                BOOK APPOINTMENT
              </button>
              <a
                id="mobile-call-btn"
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-3 border border-[var(--border-accent)] text-[var(--text-primary)] text-center uppercase tracking-[0.2em] text-xs hover:border-[var(--text-primary)] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[var(--text-muted)]" />
                CALL {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
