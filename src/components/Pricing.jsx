import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Check, Crown, Sparkles, Star } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const plans = [
    {
      nameKey: 'pricing.silver.name',
      icon: Star,
      price: 37,
      periodKey: 'pricing.silver.period',
      descriptionKey: 'pricing.silver.description',
      popular: true,
      paymentLink: 'https://greengochat.com/pagamento-silver/',
      features: [
        'pricing.silver.feature1',
        'pricing.silver.feature2',
        'pricing.silver.feature3',
        'pricing.silver.feature4',
        'pricing.silver.feature5'
      ],
      color: '#C0C0C0'
    },
    {
      nameKey: 'pricing.gold.name',
      icon: Crown,
      price: 127,
      periodKey: 'pricing.gold.period',
      descriptionKey: 'pricing.gold.description',
      paymentLink: 'https://greengochat.com/pagamento-gold/',
      features: [
        'pricing.gold.feature1',
        'pricing.gold.feature2',
        'pricing.gold.feature3',
        'pricing.gold.feature4',
        'pricing.gold.feature5',
        'pricing.gold.feature6',
        'pricing.gold.feature7'
      ],
      color: '#d4af37'
    },
    {
      nameKey: 'pricing.platinum.name',
      icon: Sparkles,
      price: 197,
      periodKey: 'pricing.platinum.period',
      descriptionKey: 'pricing.platinum.description',
      paymentLink: 'https://greengochat.com/pagamento-platinum/',
      features: [
        'pricing.platinum.feature1',
        'pricing.platinum.feature2',
        'pricing.platinum.feature3',
        'pricing.platinum.feature4',
        'pricing.platinum.feature5',
        'pricing.platinum.feature6',
        'pricing.platinum.feature7',
        'pricing.platinum.feature8'
      ],
      color: '#E5E4E2'
    }
  ];

  return (
    <section id="pricing" className="pricing section section-darker" ref={ref}>
      {/* Background */}
      <div className="pricing-bg">
        <div className="pricing-glow"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label">{t('pricing.label')}</span>
          <h2 className="heading-lg">
            {t('pricing.title')}
            <span className="shimmer-text">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="subtitle">
            {t('pricing.subtitle')}
          </p>
          <div className="gold-line gold-line-center"></div>
        </motion.div>


        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={t(plan.nameKey)}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {plan.popular && (
                <div className="popular-badge">{t('pricing.mostPopular')}</div>
              )}

              <div className="pricing-card-header">
                <div
                  className="plan-icon-wrapper"
                  style={{ '--plan-color': plan.color }}
                >
                  <plan.icon className="plan-icon" size={28} />
                </div>
                <h3 className="plan-name">{t(plan.nameKey)}</h3>
                <p className="plan-description">{t(plan.descriptionKey)}</p>
              </div>

              <div className="pricing-card-price">
                <span className="currency">R$</span>
                <span className="amount">{plan.price}</span>
              </div>

              <div className="period-note">
                {t(plan.periodKey)}
              </div>

              <ul className="features-list">
                {plan.features.map((featureKey, i) => (
                  <li key={i} className="feature-item">
                    <Check size={18} className="check-icon" />
                    <span>{t(featureKey)}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} pricing-btn`}
              >
                {t('pricing.getStarted')}
              </a>

              <div className="card-shine"></div>
            </motion.div>
          ))}
        </div>

        {/* Early Bird Banner */}
        <motion.div
          className="early-bird-banner"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="banner-content">
            <Sparkles className="banner-icon" size={32} />
            <div className="banner-text">
              <h4>{t('pricing.earlyBird.title')}</h4>
              <p>{t('pricing.earlyBird.description')} <strong>{t('pricing.earlyBird.discount')}</strong> {t('pricing.earlyBird.period')}</p>
            </div>
          </div>
          <a href="#early-access" className="btn btn-primary">
            {t('pricing.earlyBird.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
