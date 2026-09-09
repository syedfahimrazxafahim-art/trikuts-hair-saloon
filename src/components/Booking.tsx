import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Mail, CheckCircle2, X, Clock, Scissors } from 'lucide-react';
import { SERVICES, BARBERS, BUSINESS_INFO } from '../data';
import { BookingFormData } from '../types';

interface BookingProps {
  preselectedService?: string;
  preselectedBarber?: string;
}

export const Booking: React.FC<BookingProps> = ({ preselectedService, preselectedBarber }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || SERVICES[0].name,
    date: '',
    time: '11:00 AM',
    barber: preselectedBarber || BARBERS[0].name,
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  // Update form if preselection props change
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedBarber) {
      setFormData((prev) => ({ ...prev, barber: preselectedBarber }));
    }
  }, [preselectedBarber]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleCloseModal = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: SERVICES[0].name,
      date: '',
      time: '11:00 AM',
      barber: BARBERS[0].name,
      notes: '',
    });
  };

  // Lock scroll when modal is active
  useEffect(() => {
    if (submittedData) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => modalCloseRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [submittedData]);

  const today = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
  ];

  return (
    <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative transition-colors duration-400">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-silver)] font-serif font-bold mb-2 block">
            RESERVATIONS
          </span>
          <h2
            id="booking-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-[var(--text-primary)] uppercase mb-4"
          >
            BOOK YOUR NEXT CHAIR
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)] font-mono">
              APPOINTMENT RESERVATION
            </span>
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
          </div>
          <p className="text-[var(--text-secondary)] text-base font-light max-w-xl mx-auto leading-relaxed">
            Ready for a distinguished look? Select your tailored service and preferred master barber.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 sm:p-10 shadow-2xl relative">
          <form id="appointment-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-semibold mb-2"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="booking-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alexander Scott"
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-accent)]/50 pl-10 pr-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="booking-phone"
                  className="block text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-semibold mb-2"
                >
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="booking-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your contact number"
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-accent)]/50 pl-10 pr-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="booking-email"
                  className="block text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-semibold mb-2"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="booking-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alexander@example.com"
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-accent)]/50 pl-10 pr-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                  />
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label
                  htmlFor="booking-service"
                  className="block text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-semibold mb-2"
                >
                  Select Service *
                </label>
                <div className="relative">
                  <select
                    id="booking-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-accent)]/50 px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name} className="bg-[var(--card-bg)] text-[var(--text-primary)]">
                        {s.name} ({s.duration})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="booking-date"
                  className="block text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-semibold mb-2"
                >
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="booking-date"
                  name="date"
                  required
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-accent)]/50 px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors cursor-pointer"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label
                  htmlFor="booking-time"
                  className="block text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-semibold mb-2"
                >
                  Preferred Time *
                </label>
                <select
                  id="booking-time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-accent)]/50 px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors cursor-pointer"
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t} className="bg-[var(--card-bg)] text-[var(--text-primary)]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Choose Barber */}
              <div>
                <label
                  htmlFor="booking-barber"
                  className="block text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-semibold mb-2"
                >
                  Choose Barber *
                </label>
                <select
                  id="booking-barber"
                  name="barber"
                  value={formData.barber}
                  onChange={handleChange}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-accent)]/50 px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors cursor-pointer"
                >
                  {BARBERS.map((b) => (
                    <option key={b.id} value={b.name} className="bg-[var(--card-bg)] text-[var(--text-primary)]">
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label
                htmlFor="booking-notes"
                className="block text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-semibold mb-2"
              >
                Additional Notes (Optional)
              </label>
              <textarea
                id="booking-notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Specific haircut preferences, beard instructions, or requests..."
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-accent)]/50 px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] transition-colors resize-none"
              />
            </div>

            {/* Submission Transparency Note */}
            <div className="p-3.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] leading-relaxed">
              <span className="font-semibold text-[var(--text-primary)] uppercase tracking-wider block mb-0.5">
                Appointment Policy:
              </span>
              This submits a direct appointment request to Tri Kuts Barbershop. Our team will verify chair availability and confirm your reservation promptly via phone or email.
            </div>

            {/* Submit Button with smooth glow / scale hover transition */}
            <button
              id="booking-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-bold text-xs sm:text-sm uppercase tracking-[0.25em] hover:scale-[1.01] hover:shadow-xl hover:shadow-[var(--accent-silver)]/20 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
            >
              <Calendar className="w-4 h-4" />
              {isSubmitting ? 'PROCESSING RESERVATION...' : 'CONFIRM APPOINTMENT'}
            </button>
          </form>
        </div>
      </div>

      {/* Appointment Request Confirmation Modal */}
      <AnimatePresence>
        {submittedData && (
          <motion.div
            id="booking-confirmation-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Appointment Request Received"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0B0B]/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[var(--card-bg)] border border-[var(--border-accent)] max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-left"
            >
              {/* Close Button */}
              <button
                ref={modalCloseRef}
                id="modal-close-btn"
                type="button"
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                aria-label="Close Confirmation Modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Status Header */}
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-7 h-7 text-[var(--text-primary)]" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[var(--text-primary)] uppercase">
                  RESERVATION RECEIVED
                </h3>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-light">
                Thank you for choosing <strong className="text-[var(--text-primary)]">Tri Kuts Barbershop</strong>. Your booking request has been registered in our schedule. Our team will review availability and contact you directly to confirm your chair time.
              </p>

              {/* Request Summary Card */}
              <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] p-4 space-y-2.5 text-xs sm:text-sm text-[var(--text-primary)] mb-6 font-mono">
                <div className="flex justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-[var(--text-muted)] uppercase font-sans">Client:</span>
                  <span className="font-bold">{submittedData.name}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-[var(--text-muted)] uppercase font-sans">Service:</span>
                  <span className="font-bold">{submittedData.service}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-[var(--text-muted)] uppercase font-sans">Barber:</span>
                  <span>{submittedData.barber}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span className="text-[var(--text-muted)] uppercase font-sans">Requested Time:</span>
                  <span>
                    {submittedData.date || 'Preferred Date'} at {submittedData.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)] uppercase font-sans">Contact:</span>
                  <span>{submittedData.phone}</span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 py-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-bold text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-all text-center cursor-pointer"
                >
                  DONE
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex-1 py-3 border border-[var(--border-accent)] text-[var(--text-primary)] font-semibold text-xs uppercase tracking-[0.2em] hover:border-[var(--text-primary)] transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--accent-silver)]" />
                  CALL SHOP
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
