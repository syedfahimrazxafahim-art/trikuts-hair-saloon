import React from 'react';
import { TRIKUTS_LOGO } from '../data';

interface LogoProps {
  variant?: 'compact' | 'full' | 'badge';
  className?: string;
  imgClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'compact', className = '', imgClassName = '' }) => {
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center select-none text-center ${className}`}>
        {/* Real Circular Tri Kuts Vintage Emblem */}
        <div className="relative p-1 rounded-full border border-[var(--border-accent)] bg-[#0B0B0B] shadow-2xl mb-3 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[var(--text-primary)]/20 transition-transform duration-500 group-hover:scale-105">
            <img
              src={TRIKUTS_LOGO}
              alt="Tri Kuts Barbershop Official Emblem"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Subtle outer ring */}
          <div className="absolute -inset-1 rounded-full border border-[var(--border-subtle)] pointer-events-none" />
        </div>

        <div className="flex flex-col items-center">
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-bold text-[var(--text-primary)] uppercase">
            TRI KUTS
          </span>
          <div className="flex items-center gap-3 my-1 w-full justify-center">
            <span className="h-[1px] w-8 bg-[var(--border-accent)]"></span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--text-secondary)] font-medium">
              BARBERSHOP
            </span>
            <span className="h-[1px] w-8 bg-[var(--border-accent)]"></span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
            NEW YORK, NY
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`relative inline-flex items-center justify-center p-1.5 rounded-full border border-[var(--border-accent)] bg-[#0B0B0B] shadow-lg ${className}`}>
        <img
          src={TRIKUTS_LOGO}
          alt="Tri Kuts Barbershop Logo"
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ${imgClassName}`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute -inset-1 rounded-full border border-[var(--border-subtle)] pointer-events-none" />
      </div>
    );
  }

  // Compact Header & Footer Version
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Circular Brand Mark */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[var(--border-accent)] bg-[#0B0B0B] shadow-sm flex-shrink-0 transition-transform duration-300 hover:scale-105">
        <img
          src={TRIKUTS_LOGO}
          alt="Tri Kuts Barbershop Logo"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="font-serif text-base sm:text-lg tracking-[0.2em] font-bold text-[var(--text-primary)] leading-none uppercase">
          TRI KUTS
        </span>
        <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[var(--text-secondary)] font-medium leading-tight uppercase mt-1">
          BARBERSHOP • NYC
        </span>
      </div>
    </div>
  );
};
