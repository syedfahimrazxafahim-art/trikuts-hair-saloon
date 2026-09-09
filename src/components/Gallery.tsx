import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Scissors, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

type CategoryFilter = 'all' | 'fades' | 'beards' | 'cuts' | 'ambiance';

const CATEGORIES: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Works' },
  { id: 'fades', label: 'Fades & Tapers' },
  { id: 'beards', label: 'Beards & Shaves' },
  { id: 'cuts', label: 'Cuts & Styling' },
  { id: 'ambiance', label: 'Shop & Craft' },
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (indexInFiltered: number) => {
    setActiveImageIndex(indexInFiltered);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const prevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const nextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  // Keyboard navigation & body scroll lock for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImageIndex, filteredItems.length]);

  const currentItem: GalleryItem | undefined =
    activeImageIndex !== null ? filteredItems[activeImageIndex] : undefined;

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-silver)] font-serif font-bold mb-2 block">
            PORTFOLIO SHOWCASE
          </span>
          <h2
            id="gallery-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-[var(--text-primary)] uppercase mb-4"
          >
            OUR CUTS & ATMOSPHERE
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)] font-mono">
              AUTHENTIC CLIENT WORK & SHOP CRAFT
            </span>
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
          </div>
          <p className="text-[var(--text-secondary)] text-base font-light max-w-xl mx-auto leading-relaxed">
            Explore our signature haircuts, sharp beard tapers, straight-edge precision, and the authentic Tri Kuts barbershop environment.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'all'
              ? GALLERY_ITEMS.length
              : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] font-semibold border transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-[var(--btn-primary-bg)] shadow-md scale-105'
                    : 'bg-[var(--card-bg)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-75 font-mono">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Photo Grid (All 17 Photos with slow zoom effects) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                id={`gallery-item-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--card-hover-border)] transition-all duration-300 aspect-[4/5] flex flex-col justify-end shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image with SLOW ZOOM EFFECT */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-115 brightness-95 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/35 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Category Pill Tag on Card */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2 py-0.5 bg-[#0B0B0B]/85 backdrop-blur-sm border border-[#777777]/50 text-[9px] uppercase tracking-widest text-[#F5F5F5] font-mono">
                    {item.category}
                  </span>
                </div>

                {/* Hover Eye Icon */}
                <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-[#0B0B0B]/80 border border-[#777777]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-3.5 h-3.5 text-[#F5F5F5]" />
                </div>

                {/* Text & Action on Card */}
                <div className="relative z-10 p-5 transform transition-transform duration-300">
                  <div className="flex items-center justify-between text-[#CFCFCF] mb-1">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-mono">
                      0{index + 1}
                    </span>
                    <Maximize2 className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#F5F5F5]" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#F5F5F5] uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#AFAFAF] line-clamp-1 mt-1 font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && currentItem && (
          <motion.div
            id="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Enlarged view: ${currentItem.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8"
          >
            {/* Top Controls */}
            <div className="w-full max-w-5xl flex items-center justify-between py-2 border-b border-[#777777]/30">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-[#151515] border border-[#777777]/50 text-[10px] uppercase tracking-widest text-[#F5F5F5] font-mono">
                  {currentItem.category}
                </span>
                <span className="font-serif text-sm tracking-[0.2em] text-[#CFCFCF] uppercase">
                  {currentItem.title}
                </span>
                <span className="text-xs text-[#777777] font-mono">
                  ({activeImageIndex + 1} / {filteredItems.length})
                </span>
              </div>
              <button
                ref={closeBtnRef}
                id="lightbox-close-btn"
                type="button"
                onClick={closeLightbox}
                className="p-2 text-[#F5F5F5] hover:text-[#AFAFAF] focus-visible:outline-2 focus-visible:outline-[#F5F5F5] transition-colors cursor-pointer"
                aria-label="Close Lightbox (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image Stage */}
            <div className="relative w-full max-w-5xl flex-grow flex items-center justify-center my-4 overflow-hidden">
              <motion.img
                key={currentItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-[75vh] max-w-full object-contain grayscale contrast-115 border border-[#777777]/40 shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Prev Button */}
              <button
                id="lightbox-prev-btn"
                type="button"
                onClick={prevImage}
                className="absolute left-2 sm:left-4 p-3 bg-[#151515]/90 hover:bg-[#151515] border border-[#777777]/40 text-[#F5F5F5] transition-all hover:scale-110 focus-visible:outline-2 focus-visible:outline-[#F5F5F5] cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                id="lightbox-next-btn"
                type="button"
                onClick={nextImage}
                className="absolute right-2 sm:right-4 p-3 bg-[#151515]/90 hover:bg-[#151515] border border-[#777777]/40 text-[#F5F5F5] transition-all hover:scale-110 focus-visible:outline-2 focus-visible:outline-[#F5F5F5] cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="w-full max-w-5xl text-center py-2 text-xs sm:text-sm text-[#AFAFAF] font-light">
              {currentItem.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
