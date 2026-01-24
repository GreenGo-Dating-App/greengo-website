import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Heart
} from 'lucide-react';
import logo from '../assets/images/greengo-logo.png';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    legal: {
      titleKey: 'footer.legal',
      links: [
        { nameKey: 'footer.links.termsOfService', href: '/terms-of-service', internal: true },
        { nameKey: 'footer.links.privacyPolicy', href: '/privacy-policy', internal: true },
        { nameKey: 'footer.links.gdpr', href: '/gdpr', internal: true }
      ]
    }
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img src={logo} alt="GreenGo" className="footer-logo-img" />
              </Link>
              <p className="footer-tagline">
                {t('footer.tagline')}
              </p>

              <div className="footer-contact">
                <div className="contact-item">
                  <Mail size={18} />
                  <a href="mailto:support@greengochat.com">support@greengochat.com</a>
                </div>
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>

              <div className="footer-social">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="social-link"
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.titleKey} className="footer-links-column">
                <h4 className="footer-title">{t(section.titleKey)}</h4>
                <ul className="footer-links">
                  {section.links.map((link) => (
                    <li key={link.nameKey}>
                      {link.internal ? (
                        <Link to={link.href} className="footer-link">
                          {t(link.nameKey)}
                        </Link>
                      ) : (
                        <a href={link.href} className="footer-link">
                          {t(link.nameKey)}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <p className="made-with">
              {t('footer.madeWith')} <Heart size={14} className="heart-icon" /> {t('footer.forLovers')}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;
