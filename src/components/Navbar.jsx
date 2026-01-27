import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/greengo-logo.png';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const getCurrentLangCode = () => {
    const lang = i18n.language;
    if (lang?.startsWith('pt')) return 'pt';
    if (lang === 'es') return 'es';
    if (lang === 'fr') return 'fr';
    if (lang === 'de') return 'de';
    if (lang === 'it') return 'it';
    return 'en';
  };
  const currentLanguage = getCurrentLangCode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.language-switcher')) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.howItWorks'), href: '#how-it-works' },
    { name: t('nav.pricing'), href: '#pricing' },
  ];

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="GreenGo" className="navbar-logo-img" />
        </a>

        <div className="navbar-links">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="nav-link"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ color: '#d4af37' }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="navbar-actions">
          {/* Language Switcher */}
          <div className="language-switcher">
            <button
              className="lang-toggle"
              onClick={(e) => {
                e.stopPropagation();
                setIsLangMenuOpen(!isLangMenuOpen);
              }}
            >
              <Globe size={18} />
              <span>{currentLanguage.toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  className="lang-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    className={`lang-option ${currentLanguage === 'en' ? 'active' : ''}`}
                    onClick={() => changeLanguage('en')}
                  >
                    <span className="lang-flag">🇺🇸</span>
                    <span>{t('language.en')}</span>
                  </button>
                  <button
                    className={`lang-option ${currentLanguage === 'pt' ? 'active' : ''}`}
                    onClick={() => changeLanguage('pt')}
                  >
                    <span className="lang-flag">🇧🇷</span>
                    <span>{t('language.pt')}</span>
                  </button>
                  <button
                    className={`lang-option ${currentLanguage === 'es' ? 'active' : ''}`}
                    onClick={() => changeLanguage('es')}
                  >
                    <span className="lang-flag">🇪🇸</span>
                    <span>{t('language.es')}</span>
                  </button>
                  <button
                    className={`lang-option ${currentLanguage === 'fr' ? 'active' : ''}`}
                    onClick={() => changeLanguage('fr')}
                  >
                    <span className="lang-flag">🇫🇷</span>
                    <span>{t('language.fr')}</span>
                  </button>
                  <button
                    className={`lang-option ${currentLanguage === 'de' ? 'active' : ''}`}
                    onClick={() => changeLanguage('de')}
                  >
                    <span className="lang-flag">🇩🇪</span>
                    <span>{t('language.de')}</span>
                  </button>
                  <button
                    className={`lang-option ${currentLanguage === 'it' ? 'active' : ''}`}
                    onClick={() => changeLanguage('it')}
                  >
                    <span className="lang-flag">🇮🇹</span>
                    <span>{t('language.it')}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#early-access" className="btn btn-outline btn-nav">
            {t('nav.earlyAccess')}
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-lang-switcher">
              <button
                className={`mobile-lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                🇺🇸 EN
              </button>
              <button
                className={`mobile-lang-btn ${currentLanguage === 'pt' ? 'active' : ''}`}
                onClick={() => changeLanguage('pt')}
              >
                🇧🇷 PT
              </button>
              <button
                className={`mobile-lang-btn ${currentLanguage === 'es' ? 'active' : ''}`}
                onClick={() => changeLanguage('es')}
              >
                🇪🇸 ES
              </button>
              <button
                className={`mobile-lang-btn ${currentLanguage === 'fr' ? 'active' : ''}`}
                onClick={() => changeLanguage('fr')}
              >
                🇫🇷 FR
              </button>
              <button
                className={`mobile-lang-btn ${currentLanguage === 'de' ? 'active' : ''}`}
                onClick={() => changeLanguage('de')}
              >
                🇩🇪 DE
              </button>
              <button
                className={`mobile-lang-btn ${currentLanguage === 'it' ? 'active' : ''}`}
                onClick={() => changeLanguage('it')}
              >
                🇮🇹 IT
              </button>
            </div>
            <a href="#early-access" className="btn btn-primary mobile-cta">
              {t('nav.earlyAccess')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
