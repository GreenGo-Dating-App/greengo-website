import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { UserPlus, Search, MessageSquare, Heart } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      icon: UserPlus,
      number: '01',
      titleKey: 'howItWorks.step1.title',
      descriptionKey: 'howItWorks.step1.description'
    },
    {
      icon: Search,
      number: '02',
      titleKey: 'howItWorks.step2.title',
      descriptionKey: 'howItWorks.step2.description'
    },
    {
      icon: MessageSquare,
      number: '03',
      titleKey: 'howItWorks.step3.title',
      descriptionKey: 'howItWorks.step3.description'
    },
    {
      icon: Heart,
      number: '04',
      titleKey: 'howItWorks.step4.title',
      descriptionKey: 'howItWorks.step4.description'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label">{t('howItWorks.label')}</span>
          <h2 className="heading-lg">
            {t('howItWorks.title')}
            <span className="shimmer-text">{t('howItWorks.titleHighlight')}</span>
          </h2>
          <p className="subtitle">
            {t('howItWorks.subtitle')}
          </p>
          <div className="gold-line gold-line-center"></div>
        </motion.div>

        {/* Steps */}
        <div className="steps-container">
          <div className="steps-line">
            <motion.div
              className="steps-line-progress"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="step-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="step-content">
                  <div className="step-number-wrapper">
                    <span className="step-number">{step.number}</span>
                    <div className="step-dot"></div>
                  </div>
                  <div className="step-info">
                    <div className="step-icon-wrapper">
                      <step.icon className="step-icon" size={24} />
                    </div>
                    <h3 className="step-title">{t(step.titleKey)}</h3>
                    <p className="step-description">{t(step.descriptionKey)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
