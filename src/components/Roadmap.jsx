import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Smartphone, Star, Rocket, Calendar } from 'lucide-react';
import './Roadmap.css';

const Roadmap = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const milestones = [
    {
      date: '14 FEB',
      icon: Smartphone,
      titleKey: 'roadmap.preRegistration.title',
      descriptionKey: 'roadmap.preRegistration.description',
      status: 'upcoming'
    },
    {
      date: '1 MAR',
      icon: Star,
      titleKey: 'roadmap.vipAccess.title',
      descriptionKey: 'roadmap.vipAccess.description',
      status: 'upcoming'
    },
    {
      date: '15 MAR',
      icon: Rocket,
      titleKey: 'roadmap.officialLaunch.title',
      descriptionKey: 'roadmap.officialLaunch.description',
      status: 'upcoming'
    }
  ];

  return (
    <section id="roadmap" className="roadmap section" ref={ref}>
      <div className="roadmap-bg">
        <div className="roadmap-glow"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label">
            <Calendar size={16} />
            {t('roadmap.label')}
          </span>
          <h2 className="heading-lg">
            {t('roadmap.title')}
            <span className="shimmer-text">{t('roadmap.titleHighlight')}</span>
          </h2>
          <p className="subtitle">
            {t('roadmap.subtitle')}
          </p>
          <div className="gold-line gold-line-center"></div>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line"></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${milestone.status}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-date">
                <span className="date-text">{milestone.date}</span>
                <span className="date-year">2026</span>
              </div>

              <div className="timeline-marker">
                <div className="marker-dot">
                  <milestone.icon size={20} />
                </div>
              </div>

              <div className="timeline-content">
                <div className="timeline-card">
                  <h3>{t(milestone.titleKey)}</h3>
                  <p>{t(milestone.descriptionKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="roadmap-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>{t('roadmap.cta')}</p>
          <a href="#pricing" className="btn btn-primary">
            {t('roadmap.ctaButton')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
