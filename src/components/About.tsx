import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_ASSETS } from '../data';
import { BarberDivider } from './BarberDivider';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Double Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Featured Photo */}
            <div className="relative p-2 bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-2xl group">
              <div className="relative overflow-hidden aspect-[4/5] bg-[#0B0B0B]">
                <img
                  src={ABOUT_ASSETS.primary}
                  alt="Authentic Tri Kuts haircut detailing and razor craft"
                  className="w-full h-full object-cover grayscale contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#CFCFCF] font-serif font-semibold">
                    TRADITION • PRECISION • MASTERY
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Tooling Photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-36 sm:w-48 aspect-square p-1.5 bg-[var(--card-bg)] border border-[var(--border-accent)]/50 shadow-2xl hidden sm:block group"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={ABOUT_ASSETS.secondary}
                  alt="Tri Kuts straight razors and blades"
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Editorial Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-silver)] font-serif font-bold mb-2">
              HERITAGE & CRAFT
            </span>

            {/* Heading */}
            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-[var(--text-primary)] uppercase mb-4"
            >
              ABOUT TRI KUTS
            </h2>

            {/* Thin Accent Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1.5px] w-16 bg-[var(--text-primary)]" />
              <div className="h-[1px] w-8 bg-[var(--border-accent)]" />
            </div>

            {/* Focused Company Copy */}
            <div className="space-y-5 text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                At Tri Kuts Barbershop in New York, we believe that genuine grooming is rooted in timeless barbering disciplines and elevated through modern refinement. Every visit is designed to deliver a confident, polished look that commands effortless distinction.
              </p>
              <p>
                Our philosophy balances traditional hot lather straight-razor rituals with exacting contemporary clipper and scissor work. Whether you are stepping in for a razor-sharp fade, bespoke beard contouring, or the signature hot towel treatment, you enter an authentic sanctuary where the art of the cut is revered.
              </p>
            </div>

            {/* Subtle Value Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[var(--border-subtle)]">
              <div className="p-3 bg-[var(--card-bg)] border border-[var(--border-subtle)]">
                <span className="block text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-serif font-bold mb-1">
                  TRADITION
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  Straight blades & hot lather
                </span>
              </div>

              <div className="p-3 bg-[var(--card-bg)] border border-[var(--border-subtle)]">
                <span className="block text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-serif font-bold mb-1">
                  PRECISION
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  Surgical lines & fades
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 bg-[var(--card-bg)] border border-[var(--border-subtle)]">
                <span className="block text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-serif font-bold mb-1">
                  CONFIDENCE
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  Tailored finished looks
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <BarberDivider className="mt-20 max-w-4xl mx-auto" />
    </section>
  );
};
