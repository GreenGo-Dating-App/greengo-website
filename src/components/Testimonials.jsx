import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      id: 1,
      name: 'Sofia Martinez',
      location: 'Spain → Brazil',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      rating: 5,
      text: 'GreenGo changed my life. I never thought I\'d find someone who truly understands me across an ocean. The AI translation made it possible to connect deeply despite speaking different languages.',
      connection: 'Met her partner in São Paulo'
    },
    {
      id: 2,
      name: 'James Chen',
      location: 'USA → Japan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 5,
      text: 'The quality of matches is incredible. Unlike other apps, GreenGo\'s algorithm actually understands what you\'re looking for. Found my soulmate within three months of joining.',
      connection: 'Now engaged to his match'
    },
    {
      id: 3,
      name: 'Amara Okonkwo',
      location: 'Nigeria → UK',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150',
      rating: 5,
      text: 'The Diamond membership is worth every penny. The personal concierge helped me navigate international dating with grace. The exclusive events led me to meet my now-husband.',
      connection: 'Married after 8 months'
    },
    {
      id: 4,
      name: 'Marcus Weber',
      location: 'Germany → Australia',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      rating: 5,
      text: 'As a busy professional, I needed something that worked efficiently. GreenGo\'s smart matching saved me time and introduced me to amazing people I\'d never have met otherwise.',
      connection: 'Found love in Sydney'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials section" ref={ref}>
      <div className="testimonials-bg">
        <div className="testimonials-glow"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label">{t('testimonials.label')}</span>
          <h2 className="heading-lg">
            {t('testimonials.title')}
            <span className="shimmer-text">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="subtitle">
            {t('testimonials.subtitle')}
          </p>
          <div className="gold-line gold-line-center"></div>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          className="testimonials-slider"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="slider-btn prev" onClick={prevTestimonial}>
            <ChevronLeft size={24} />
          </button>

          <div className="testimonial-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="quote-icon" size={48} />

                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="rating">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#d4af37" stroke="#d4af37" />
                    ))}
                  </div>
                </div>

                <div className="testimonial-author">
                  <div className="author-image">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                    />
                    <div className="image-ring"></div>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                    <p className="author-location">{testimonials[currentIndex].location}</p>
                    <p className="author-connection">{testimonials[currentIndex].connection}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="slider-btn next" onClick={nextTestimonial}>
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="testimonials-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat-item">
            <span className="stat-value">50K+</span>
            <span className="stat-label">{t('testimonials.stats.couples')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">98%</span>
            <span className="stat-label">{t('testimonials.stats.satisfaction')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">4.9</span>
            <span className="stat-label">{t('testimonials.stats.rating')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100+</span>
            <span className="stat-label">{t('testimonials.stats.countries')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
