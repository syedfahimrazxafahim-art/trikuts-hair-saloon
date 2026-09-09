import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Flame, Shield, Award, Calendar, Clock, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'scissors':
        return <Scissors className="w-5 h-5 text-[var(--accent-silver)] transition-transform duration-500 group-hover:rotate-12" />;
      case 'brush':
        return <Sparkles className="w-5 h-5 text-[var(--accent-silver)] transition-transform duration-500 group-hover:scale-110" />;
      case 'razor':
        return <Flame className="w-5 h-5 text-[var(--accent-silver)] transition-transform duration-500 group-hover:rotate-12" />;
      case 'combo':
        return <Shield className="w-5 h-5 text-[var(--accent-silver)] transition-transform duration-500 group-hover:scale-110" />;
      case 'crown':
        return <Award className="w-5 h-5 text-[var(--accent-silver)] transition-transform duration-500 group-hover:rotate-6" />;
      default:
        return <Scissors className="w-5 h-5 text-[var(--accent-silver)]" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-silver)] font-serif font-bold mb-2 block">
            BESPOKE GROOMING MENU
          </span>
          <h2
            id="services-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-[var(--text-primary)] uppercase mb-4"
          >
            SERVICES & CRAFTSMANSHIP
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)] font-mono">
              TRADITIONAL & MODERN TECHNIQUES
            </span>
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
          </div>
          <p className="text-[var(--text-secondary)] text-base font-light max-w-xl mx-auto leading-relaxed">
            Disciplined haircuts, beard detailing, and hot towel rituals executed by dedicated professional barbers in New York.
          </p>
        </div>

        {/* Services Grid (5 services) with Premium Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isFullWidthOnLarge = index === 4;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] p-8 flex flex-col justify-between transition-all duration-300 group relative hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--accent-silver)]/5 ${
                  isFullWidthOnLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top Bar with Number, Duration & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-subtle)]">
                    <span className="font-serif text-sm tracking-[0.2em] text-[var(--text-muted)] font-bold group-hover:text-[var(--text-primary)] transition-colors">
                      0{index + 1}
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono tracking-wider text-[var(--text-muted)] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[var(--accent-silver)]" />
                        {service.duration}
                      </span>
                      <div className="w-10 h-10 border border-[var(--border-accent)]/50 bg-[var(--bg-primary)] flex items-center justify-center group-hover:border-[var(--text-primary)] transition-colors shadow-sm">
                        {getIcon(service.iconName)}
                      </div>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-[0.04em] text-[var(--text-primary)] uppercase mb-2 group-hover:text-[var(--accent-silver)] transition-colors">
                    {service.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--accent-silver)] font-medium mb-3">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action CTA with glow/scale hover transition */}
                <button
                  id={`book-service-${service.id}`}
                  type="button"
                  onClick={() => onSelectService(service.name)}
                  className="w-full py-3.5 border border-[var(--border-accent)] text-xs uppercase tracking-[0.2em] font-semibold text-[var(--text-primary)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] hover:border-[var(--btn-primary-bg)] hover:scale-[1.02] hover:shadow-md active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-auto group/btn"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>BOOK THIS SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
