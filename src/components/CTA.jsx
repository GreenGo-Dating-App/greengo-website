import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight, Check, Shield } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      try {
        // Send to Formspree - replace YOUR_FORM_ID with your actual Formspree form ID
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            _subject: 'New Early Access Request - GreenGo',
            message: `New early access signup from: ${email}`
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
      setIsLoading(false);
    }
  };

  const benefits = [
    'cta.benefits.discount',
    'cta.benefits.priority',
    'cta.benefits.badge',
    'cta.benefits.matching'
  ];

  return (
    <section id="early-access" className="cta section section-darker" ref={ref}>
      {/* Animated Background */}
      <div className="cta-bg">
        <div className="cta-glow-1"></div>
        <div className="cta-glow-2"></div>
        <div className="cta-particles">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="cta-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          className="cta-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            {/* Badge */}
            <motion.div
              className="cta-badge"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Sparkles size={16} />
              <span>{t('cta.badge')}</span>
            </motion.div>

            {/* Headline */}
            <h2 className="cta-title">
              {t('cta.title')}
              <span className="shimmer-text">{t('cta.titleHighlight')}</span>
            </h2>

            <p className="cta-subtitle">
              {t('cta.subtitle')}
            </p>

            {/* Benefits */}
            <div className="cta-benefits">
              {benefits.map((benefitKey, index) => (
                <motion.div
                  key={index}
                  className="benefit-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="benefit-icon">
                    <Check size={16} />
                  </div>
                  <span>{t(benefitKey)}</span>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            {!isSubmitted ? (
              <motion.form
                className="cta-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="form-group">
                  <input
                    type="email"
                    placeholder={t('cta.placeholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                  />
                  <button type="submit" className="btn btn-primary submit-btn" disabled={isLoading}>
                    <span>{isLoading ? 'Sending...' : t('cta.submit')}</span>
                    {!isLoading && <ArrowRight size={20} />}
                  </button>
                </div>
                <div className="form-note">
                  <Shield size={14} />
                  <span>{t('cta.secure')}</span>
                </div>
              </motion.form>
            ) : (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon">
                  <Check size={32} />
                </div>
                <h3>{t('cta.success.title')}</h3>
                <p>{t('cta.success.description')}</p>
              </motion.div>
            )}
          </div>

          {/* Visual Element */}
          <motion.div
            className="cta-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="visual-card">
              <div className="visual-card-header">
                <span className="founding-badge">{t('cta.card.badge')}</span>
              </div>
              <div className="visual-card-content">
                <div className="discount-display">
                  <span className="discount-amount">{t('cta.card.discount')}</span>
                  <span className="discount-text">{t('cta.card.off')}</span>
                </div>
                <p>{t('cta.card.period')}</p>
              </div>
              <div className="visual-card-footer">
                <span>{t('cta.card.expires')}</span>
              </div>
              <div className="card-glow"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
