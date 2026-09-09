import React from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { BarberDivider } from './BarberDivider';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-400">
      {/* Subtle Animated Barber Stripe Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] barber-stripe-line opacity-40" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Animated Barber Divider */}
        <BarberDivider className="max-w-xs mb-4" />

        {/* Headline */}
        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.06em] text-[var(--text-primary)] uppercase leading-tight mb-6"
        >
          READY FOR YOUR NEXT CUT?
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Step into Tri Kuts Barbershop and leave with a sharp, disciplined style that commands timeless confidence.
        </motion.p>

        {/* Primary CTA with smooth hover glow / scale transition */}
        <motion.button
          id="final-cta-book-btn"
          type="button"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={onBookClick}
          className="px-10 py-4 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-bold text-xs sm:text-sm uppercase tracking-[0.25em] border border-[var(--btn-primary-bg)] hover:scale-105 hover:shadow-2xl hover:shadow-[var(--accent-silver)]/20 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
        >
          <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
          BOOK APPOINTMENT
        </motion.button>

        <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--text-muted)] mt-10 font-mono">
          TRI KUTS BARBERSHOP • NEW YORK, NY
        </span>
      </div>
    </section>
  );
};
