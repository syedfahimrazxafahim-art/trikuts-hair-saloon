import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Award, Scissors, ArrowRight } from 'lucide-react';
import { BARBERS } from '../data';

interface BarbersProps {
  onSelectBarber: (barberName: string) => void;
}

export const Barbers: React.FC<BarbersProps> = ({ onSelectBarber }) => {
  return (
    <section id="barbers" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-silver)] font-serif font-bold mb-2 block">
            MASTER ARTISANS
          </span>
          <h2
            id="barbers-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-[var(--text-primary)] uppercase mb-4"
          >
            MEET OUR MASTER BARBERS
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)] font-mono">
              PRECISION & VINTAGE EXPERTISE
            </span>
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
          </div>
          <p className="text-[var(--text-secondary)] text-base font-light max-w-xl mx-auto leading-relaxed">
            Disciplined craftsmen specializing in classic scissor work, skin fades, hot towel straight-razor rituals, and signature modern styling.
          </p>
        </div>

        {/* Barbers Grid: 4 profiles in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {BARBERS.map((barber, index) => {
            return (
              <motion.div
                key={barber.id}
                id={`barber-card-${barber.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] flex flex-col justify-between transition-all duration-400 group overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* Portrait Area with SLOW ZOOM EFFECT as requested */}
                <div className="relative aspect-[4/5] w-full bg-[#0B0B0B] overflow-hidden border-b border-[var(--border-subtle)]">
                  <img
                    src={barber.photoUrl}
                    alt={`${barber.name} - ${barber.title}`}
                    className="w-full h-full object-cover object-top grayscale contrast-115 brightness-95 transition-transform duration-700 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Vignette gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent opacity-80" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 bg-[var(--card-bg)]/90 backdrop-blur-sm border border-[var(--border-accent)] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-[var(--text-primary)] shadow-md flex items-center gap-1">
                    <Award className="w-3 h-3 text-[var(--accent-silver)]" />
                    <span>{barber.experienceYears}+ YRS</span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Barber Name */}
                    <h3 className="font-serif text-xl font-bold tracking-[0.04em] text-[var(--text-primary)] uppercase mb-1 group-hover:text-[var(--accent-silver)] transition-colors">
                      {barber.name}
                    </h3>

                    {/* Title & Specialty */}
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent-silver)] font-medium mb-2 flex items-center gap-1.5">
                      <Scissors className="w-3 h-3" />
                      <span>{barber.title}</span>
                    </div>

                    <div className="text-xs tracking-wide text-[var(--text-secondary)] font-light italic mb-3 pb-3 border-b border-[var(--border-subtle)]">
                      {barber.specialty}
                    </div>

                    {/* Biography */}
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                      {barber.bio}
                    </p>
                  </div>

                  {/* Booking Action Button with smooth glow / scale hover transition */}
                  <button
                    id={`book-barber-btn-${barber.id}`}
                    type="button"
                    onClick={() => onSelectBarber(barber.name)}
                    className="w-full py-3 border border-[var(--border-accent)] text-xs uppercase tracking-[0.2em] font-semibold text-[var(--text-primary)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] hover:border-[var(--btn-primary-bg)] hover:scale-[1.02] hover:shadow-md active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-auto group/btn"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>BOOK CHAIR</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
