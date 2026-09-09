import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause, Quote, Star } from 'lucide-react';
import { REVIEWS } from '../data';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - itemsPerPage);

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevReview = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay with tab visibility check and hover pause
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPlaying(false);
      return;
    }

    if (!isPlaying || isHovered || isFocused) return;

    const interval = setInterval(() => {
      if (!document.hidden) {
        nextReview();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, isFocused, nextReview]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextReview();
    } else if (diff < -50) {
      prevReview();
    }
    setTouchStart(null);
  };

  return (
    <section
      id="reviews"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-silver)] font-serif font-bold mb-2 block">
            CLIENT TESTIMONIALS
          </span>
          <h2
            id="reviews-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-[var(--text-primary)] uppercase mb-4"
          >
            WORDS FROM THE CHAIR
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)] font-mono">
              AUTHENTIC CLIENT EXPERIENCES
            </span>
            <div className="h-[1px] w-12 bg-[var(--border-accent)]" />
          </div>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed">
            Read what gentlemen have to say about our meticulous cuts, straight razor finishes, and timeless barbershop atmosphere.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage + (24 / itemsPerPage / 16))}%)`,
            }}
          >
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                id={`review-card-${review.id}`}
                className="flex-shrink-0 bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg"
                style={{
                  width: `calc(${100 / itemsPerPage}% - ${(24 * (itemsPerPage - 1)) / itemsPerPage}px)`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-7 h-7 text-[var(--border-accent)]" />
                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#B8860B] text-[#B8860B]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text-primary)] font-light leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-serif font-bold block">
                      {review.name}
                    </span>
                    <span className="text-[11px] text-[var(--accent-silver)]">
                      {review.service}
                    </span>
                  </div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] font-mono">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls Toolbar: Prev/Next, Pagination, and Autoplay Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-6 border-t border-[var(--border-subtle)] max-w-2xl mx-auto">
          {/* Pause / Play Button */}
          <button
            id="reviews-autoplay-toggle"
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 cursor-pointer"
            aria-label={isPlaying ? 'Pause review autoplay' : 'Play review autoplay'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>PAUSE</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>PLAY</span>
              </>
            )}
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                id={`review-dot-${i}`}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-300 cursor-pointer ${
                  currentIndex === i ? 'w-8 bg-[var(--text-primary)]' : 'w-2 bg-[var(--border-accent)]'
                }`}
                aria-label={`Go to review slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              id="review-prev-btn"
              type="button"
              onClick={prevReview}
              className="p-2 border border-[var(--border-accent)] hover:border-[var(--text-primary)] text-[var(--text-primary)] transition-all hover:scale-105 cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="review-next-btn"
              type="button"
              onClick={nextReview}
              className="p-2 border border-[var(--border-accent)] hover:border-[var(--text-primary)] text-[var(--text-primary)] transition-all hover:scale-105 cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
