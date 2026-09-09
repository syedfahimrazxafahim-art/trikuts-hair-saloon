import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { WHY_TRIKUTS } from '../data';

export const WhyTriKuts: React.FC = () => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'classic-craft':
        return <Scissors className="w-5 h-5 text-[var(--accent-silver)]" />;
      case 'clean-precise':
        return <Compass className="w-5 h-5 text-[var(--accent-silver)]" />;
      case 'modern-confidence':
        return <ShieldCheck className="w-5 h-5 text-[var(--accent-silver)]" />;
      case 'premium-grooming':
        return <Sparkles className="w-5 h-5 text-[var(--accent-silver)]" />;
      default:
        return <Scissors className="w-5 h-5 text-[var(--accent-silver)]" />;
    }
  };

  return (
    <section id="why-trikuts" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-silver)] font-serif font-bold mb-2 block">
            THE CODE OF CRAFT
          </span>
          <h2
            id="why-trikuts-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-[var(--text-primary)] uppercase mb-4"
          >
            THE TRI KUTS STANDARD
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)] font-mono">
              DISTINGUISHED GROOMING
            </span>
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
          </div>
          <p className="text-[var(--text-secondary)] text-base font-light max-w-xl mx-auto leading-relaxed">
            A vintage barbershop philosophy built around precision blade work, attentive service, and enduring masculine style.
          </p>
        </div>

        {/* 4 Concise Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_TRIKUTS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              id={`why-card-${pillar.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] p-8 flex flex-col justify-between transition-all duration-300 relative group shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 border border-[var(--border-accent)]/50 bg-[var(--bg-primary)] flex items-center justify-center mb-6 group-hover:border-[var(--text-primary)] transition-colors">
                  {getPillarIcon(pillar.id)}
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-[0.08em] text-[var(--text-primary)] uppercase mb-3">
                  {pillar.title}
                </h3>

                {/* Accent Divider */}
                <div className="h-[1px] w-10 bg-[var(--border-accent)] group-hover:w-16 group-hover:bg-[var(--text-primary)] transition-all duration-300 mb-4" />

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Number indicator */}
              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex justify-end">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
