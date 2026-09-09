import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, ArrowDown } from 'lucide-react';
import { HERO_ASSETS, RAW_IMAGES } from '../data';
import { Logo } from './Logo';

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onServicesClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax effect on hero imagery as requested
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] overflow-hidden transition-colors duration-400"
    >
      {/* Background Media with Parallax Movement and Vintage Barber Aesthetic */}
      <motion.div
        style={{ y: yParallax, scale: scaleParallax, opacity: opacityParallax }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src={HERO_ASSETS.heroBg}
          alt="Tri Kuts Barbershop authentic interior and craft"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-40 dark:brightness-35 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient & Vignette for Contrast in both Themes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/75 to-[var(--bg-primary)]/40 transition-colors duration-400" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.75)_100%)]" />
      </motion.div>

      {/* Floating Animated Barber Stripe Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] barber-stripe-line opacity-50 z-20" />

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Tri Kuts Official Crest / Logo Badge with Entry Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 relative"
        >
          <Logo variant="badge" imgClassName="w-20 h-20 sm:w-24 sm:h-24" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0.3 }}
            animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-2 rounded-full border border-[var(--border-accent)] pointer-events-none"
          />
        </motion.div>

        {/* Vintage Barber Emblem Accent Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-10 sm:w-16 h-[1px] bg-[var(--border-accent)]" />
          <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase font-serif text-[var(--accent-silver)] font-semibold">
            EST. NEW YORK, NY
          </span>
          <span className="w-10 sm:w-16 h-[1px] bg-[var(--border-accent)]" />
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          id="hero-main-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.08em] text-[var(--text-primary)] uppercase leading-[1.1] mb-6 drop-shadow-md"
        >
          CLASSIC CUTS. <br className="hidden sm:inline" />
          <span className="text-[var(--accent-silver)]">MODERN CONFIDENCE.</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          id="hero-subtext"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-wide"
        >
          Timeless barbering, clean craftsmanship, and a premium grooming experience in the heart of New York.
        </motion.p>

        {/* CTA Actions with smooth glow / scale transitions on hover */}
        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none"
        >
          <button
            id="hero-primary-cta"
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold text-xs sm:text-sm uppercase tracking-[0.22em] border border-[var(--btn-primary-bg)] hover:scale-105 hover:shadow-xl hover:shadow-[var(--accent-silver)]/20 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
            BOOK APPOINTMENT
          </button>

          <button
            id="hero-secondary-cta"
            type="button"
            onClick={onServicesClick}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-[var(--text-primary)] font-semibold text-xs sm:text-sm uppercase tracking-[0.22em] border border-[var(--border-accent)] hover:border-[var(--text-primary)] hover:scale-105 hover:bg-[var(--card-bg)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-sm"
          >
            OUR SERVICES
          </button>
        </motion.div>

        {/* Subtle Barber Badge Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 flex items-center gap-4 text-[10px] sm:text-xs tracking-[0.3em] text-[var(--text-muted)] uppercase font-mono"
        >
          <span>PRECISION SCISSORS</span>
          <span>•</span>
          <span>STRAIGHT RAZOR</span>
          <span>•</span>
          <span>HOT TOWEL RITUAL</span>
        </motion.div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          aria-label="Scroll to About Section"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
