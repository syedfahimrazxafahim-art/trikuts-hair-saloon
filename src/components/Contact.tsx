import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Contact: React.FC = () => {
  const cleanPhone = BUSINESS_INFO.phone.replace(/\s+/g, '');

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-400">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-silver)] font-serif font-bold mb-2 block">
            LOCATION & CONTACT
          </span>
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-[var(--text-primary)] uppercase mb-4"
          >
            CONNECT WITH TRI KUTS
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)] font-mono">
              DIRECT INQUIRIES & APPOINTMENTS
            </span>
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
          </div>
          <p className="text-[var(--text-secondary)] text-base font-light max-w-xl mx-auto leading-relaxed">
            Reach out directly for chair inquiries, special styling requests, or call us for immediate booking availability.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Shop Location & Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-subtle)]">
                <div className="w-10 h-10 border border-[var(--border-accent)]/50 bg-[var(--bg-primary)] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--accent-silver)]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    {BUSINESS_INFO.name}
                  </h3>
                  <span className="text-xs text-[var(--text-secondary)] tracking-widest uppercase">
                    {BUSINESS_INFO.location}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] block mb-1 font-mono">
                    Direct Phone Line
                  </span>
                  <a
                    id="contact-phone-link"
                    href={`tel:${cleanPhone}`}
                    className="text-lg sm:text-xl font-mono text-[var(--text-primary)] hover:text-[var(--accent-silver)] transition-colors"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] block mb-1 font-mono">
                    Shop City
                  </span>
                  <p className="text-base text-[var(--text-primary)] font-serif">
                    {BUSINESS_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* CALL NOW Button */}
            <a
              id="contact-call-now-btn"
              href={`tel:${cleanPhone}`}
              className="w-full py-3.5 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-bold text-xs uppercase tracking-[0.2em] hover:opacity-90 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <Phone className="w-4 h-4" />
              CALL NOW
            </a>
          </motion.div>

          {/* Card 2: Email & Social Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-subtle)]">
                <div className="w-10 h-10 border border-[var(--border-accent)]/50 bg-[var(--bg-primary)] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[var(--accent-silver)]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    ONLINE INQUIRIES
                  </h3>
                  <span className="text-xs text-[var(--text-secondary)] tracking-widest uppercase">
                    EMAIL & SOCIALS
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] block mb-1 font-mono">
                    Email Address
                  </span>
                  <a
                    id="contact-email-link"
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-base sm:text-lg font-mono text-[var(--text-primary)] hover:text-[var(--accent-silver)] transition-colors break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] block mb-2 font-mono">
                    Follow Our Work
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      id="contact-facebook-link"
                      href={BUSINESS_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[var(--border-accent)]/70 hover:border-[var(--text-primary)] text-xs text-[var(--text-primary)] uppercase tracking-wider transition-colors flex items-center gap-1.5"
                    >
                      <span>Facebook</span>
                      <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                    </a>
                    <a
                      id="contact-instagram-link"
                      href={BUSINESS_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[var(--border-accent)]/70 hover:border-[var(--text-primary)] text-xs text-[var(--text-primary)] uppercase tracking-wider transition-colors flex items-center gap-1.5"
                    >
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* EMAIL US Button */}
            <a
              id="contact-email-us-btn"
              href={`mailto:${BUSINESS_INFO.email}`}
              className="w-full py-3.5 border border-[var(--border-accent)] text-[var(--text-primary)] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] hover:border-[var(--btn-primary-bg)] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <Mail className="w-4 h-4" />
              EMAIL US
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
