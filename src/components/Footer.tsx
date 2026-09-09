import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const cleanPhone = BUSINESS_INFO.phone.replace(/\s+/g, '');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] text-[var(--text-secondary)] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Location */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Logo variant="compact" />
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-[0.2em] mt-3 font-mono">
            {BUSINESS_INFO.location}
          </p>
        </div>

        {/* Minimal Navigation */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em]">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="hover:text-[var(--text-primary)] transition-colors py-1"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="hover:text-[var(--text-primary)] transition-colors py-1"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, '#services')}
            className="hover:text-[var(--text-primary)] transition-colors py-1"
          >
            Services
          </a>
          <a
            href="#barbers"
            onClick={(e) => scrollToSection(e, '#barbers')}
            className="hover:text-[var(--text-primary)] transition-colors py-1"
          >
            Barbers
          </a>
          <a
            href="#gallery"
            onClick={(e) => scrollToSection(e, '#gallery')}
            className="hover:text-[var(--text-primary)] transition-colors py-1"
          >
            Gallery
          </a>
          <a
            href="#reviews"
            onClick={(e) => scrollToSection(e, '#reviews')}
            className="hover:text-[var(--text-primary)] transition-colors py-1"
          >
            Reviews
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hover:text-[var(--text-primary)] transition-colors py-1"
          >
            Contact
          </a>
        </nav>

        {/* Direct Contact & Socials */}
        <div className="flex flex-col items-center md:items-end gap-2 text-xs">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${cleanPhone}`}
              className="text-[var(--text-primary)] hover:text-[var(--accent-silver)] transition-colors font-mono"
            >
              {BUSINESS_INFO.phoneFormatted}
            </a>
            <span className="text-[var(--border-accent)]">•</span>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-[var(--text-primary)] hover:text-[var(--accent-silver)] transition-colors font-mono"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-4 mt-1">
            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
            >
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
            </a>
            <span className="text-[var(--border-accent)]">/</span>
            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
            >
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Slogan */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--text-muted)] tracking-wider gap-4 font-mono">
        <div>
          © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
        </div>
        <div className="text-center sm:text-right font-sans uppercase tracking-[0.2em]">
          Classic Cuts. Modern Confidence.
        </div>
      </div>
    </footer>
  );
};
