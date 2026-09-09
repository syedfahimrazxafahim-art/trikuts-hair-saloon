import React from 'react';
import { motion } from 'motion/react';
import { Scissors } from 'lucide-react';

interface BarberDividerProps {
  className?: string;
  withIcon?: boolean;
}

export const BarberDivider: React.FC<BarberDividerProps> = ({ className = '', withIcon = true }) => {
  return (
    <div className={`relative flex items-center justify-center my-8 ${className}`}>
      {/* Left Animated Line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-1 max-w-xs h-[1px] bg-gradient-to-r from-transparent via-[var(--border-accent)] to-[var(--text-primary)]/40 origin-right"
      />

      {/* Subtle Barber Barber-Stripe Pill */}
      <div className="mx-3 flex items-center gap-2">
        <div className="w-6 sm:w-10 h-[2px] barber-stripe-line rounded-full opacity-60" />
        {withIcon && (
          <div className="w-7 h-7 rounded-full border border-[var(--border-subtle)] bg-[var(--card-bg)] flex items-center justify-center shadow-sm">
            <Scissors className="w-3.5 h-3.5 text-[var(--accent-silver)]" />
          </div>
        )}
        <div className="w-6 sm:w-10 h-[2px] barber-stripe-line rounded-full opacity-60" />
      </div>

      {/* Right Animated Line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-1 max-w-xs h-[1px] bg-gradient-to-l from-transparent via-[var(--border-accent)] to-[var(--text-primary)]/40 origin-left"
      />
    </div>
  );
};
