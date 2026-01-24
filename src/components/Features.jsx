import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import {
  Globe,
  MessageCircle,
  Shield,
  Sparkles,
  Users,
  Heart,
  Zap,
  Crown
} from 'lucide-react';
import './Features.css';

const Features = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: Globe,
      titleKey: 'features.global.title',
      descriptionKey: 'features.global.description'
    },
    {
      icon: MessageCircle,
      titleKey: 'features.translation.title',
      descriptionKey: 'features.translation.description'
    },
    {
      icon: Shield,
      titleKey: 'features.verified.title',
      descriptionKey: 'features.verified.description'
    },
    {
      icon: Sparkles,
      titleKey: 'features.matching.title',
      descriptionKey: 'features.matching.description'
    },
    {
      icon: Users,
      titleKey: 'features.events.title',
      descriptionKey: 'features.events.description'
    },
    {
      icon: Heart,
      titleKey: 'features.coaching.title',
      descriptionKey: 'features.coaching.description'
    },
    {
      icon: Zap,
      titleKey: 'features.instant.title',
      descriptionKey: 'features.instant.description'
    },
    {
      icon: Crown,
      titleKey: 'features.vip.title',
      descriptionKey: 'features.vip.description'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="features" className="features section section-darker" ref={ref}>
      {/* Background Elements */}
      <div className="features-bg">
        <div className="features-glow-1"></div>
        <div className="features-glow-2"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label">{t('features.label')}</span>
          <h2 className="heading-lg">
            {t('features.title')}
            <span className="shimmer-text">{t('features.titleHighlight')}</span>
          </h2>
          <p className="subtitle">
            {t('features.subtitle')}
          </p>
          <div className="gold-line gold-line-center"></div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon-bg"></div>
                <feature.icon className="feature-icon" size={28} />
              </div>
              <h3 className="feature-title">{t(feature.titleKey)}</h3>
              <p className="feature-description">{t(feature.descriptionKey)}</p>
              <div className="feature-shine"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
