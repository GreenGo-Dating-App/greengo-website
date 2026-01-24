import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Globe2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import phoneMockup from '../assets/images/phone-mockup.png';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  const floatingIcons = [
    { Icon: Heart, delay: 0, x: '10%', y: '20%' },
    { Icon: Globe2, delay: 0.5, x: '85%', y: '15%' },
    { Icon: Sparkles, delay: 1, x: '5%', y: '70%' },
    { Icon: Heart, delay: 1.5, x: '90%', y: '60%' },
  ];

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: 1,
            y: [0, -15, 0]
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Sparkles size={16} />
            <span>{t('hero.badge')}</span>
          </motion.div>

          {/* Headline */}
          <h1 className="hero-title">
            <span className="title-line">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {t('hero.title1')}
              </motion.span>
            </span>
            <span className="title-line">
              <motion.span
                className="shimmer-text"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {t('hero.title2')}
              </motion.span>
            </span>
            <span className="title-line">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {t('hero.title3')}
              </motion.span>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <a href="#early-access" className="btn btn-primary btn-large hero-btn">
              <span>{t('hero.cta')}</span>
              <ArrowRight size={20} />
            </a>
            <a href="#features" className="btn btn-outline btn-large">
              {t('hero.explore')}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <div className="stat">
              <span className="stat-number">65%</span>
              <span className="stat-label">{t('hero.discount')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">{t('hero.countries')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">{t('hero.translation')}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="phone-mockup-container">
            <div className="phone-glow"></div>
            <motion.img
              src={phoneMockup}
              alt="GreenGo Chat App"
              className="phone-mockup-img"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="phone-reflection"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span>{t('hero.scroll')}</span>
        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
