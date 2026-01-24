import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import {
  Send,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  User,
  AtSign,
  FileText,
  Check,
  Building2
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
    }
  };

  const contactInfo = [
    {
      icon: Building2,
      titleKey: 'contact.company',
      content: 'Universo Kardasha',
      subContent: 'CNPJ: 40.486.663/0001-82',
      link: null
    },
    {
      icon: Mail,
      titleKey: 'contact.email',
      content: 'support@greengochat.com',
      link: 'mailto:support@greengochat.com'
    },
    {
      icon: MapPin,
      titleKey: 'contact.address',
      content: 'Av. Dina Helena Pereira de Moraes, 290',
      subContent: 'São Paulo - CEP 05707-400, Brasil',
      link: null
    },
    {
      icon: Clock,
      titleKey: 'contact.hours',
      contentKey: 'contact.hoursValue',
      link: null
    }
  ];

  const subjects = [
    { key: 'contact.form.subjects.general', value: 'general' },
    { key: 'contact.form.subjects.support', value: 'support' },
    { key: 'contact.form.subjects.billing', value: 'billing' },
    { key: 'contact.form.subjects.partnership', value: 'partnership' },
    { key: 'contact.form.subjects.press', value: 'press' },
    { key: 'contact.form.subjects.other', value: 'other' }
  ];

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="contact-bg">
        <div className="contact-glow-1"></div>
        <div className="contact-glow-2"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label">{t('contact.label')}</span>
          <h2 className="heading-lg">
            {t('contact.title')}
            <span className="shimmer-text">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="subtitle">
            {t('contact.subtitle')}
          </p>
          <div className="gold-line gold-line-center"></div>
        </motion.div>

        <div className="contact-wrapper">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-info-title">{t('contact.infoTitle')}</h3>
            <p className="contact-info-subtitle">
              {t('contact.infoSubtitle')}
            </p>

            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="info-icon">
                    <info.icon size={22} />
                  </div>
                  <div className="info-content">
                    <h4>{t(info.titleKey)}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.content}</a>
                    ) : (
                      <>
                        <span>{info.contentKey ? t(info.contentKey) : info.content}</span>
                        {info.subContent && <span className="info-subcontent">{info.subContent}</span>}
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="contact-map">
              <div className="map-overlay">
                <MapPin size={32} />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!isSubmitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={16} />
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t('contact.form.namePlaceholder')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <AtSign size={16} />
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t('contact.form.emailPlaceholder')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FileText size={16} />
                    {t('contact.form.subject')}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t('contact.form.subjectPlaceholder')}</option>
                    {subjects.map((subject) => (
                      <option key={subject.value} value={subject.value}>
                        {t(subject.key)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <MessageSquare size={16} />
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <span>{t('contact.form.submit')}</span>
                  <Send size={18} />
                </button>
              </form>
            ) : (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon">
                  <Check size={40} />
                </div>
                <h3>{t('contact.success.title')}</h3>
                <p>{t('contact.success.description')}</p>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  {t('contact.success.another')}
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
