import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './PageLayout.css';

const PageLayout = ({ title, subtitle, children }) => {
  const { i18n } = useTranslation();
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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.page-language-switcher')) {
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

  return (
    <div className="page-layout">
      {/* Animated Background */}
      <div className="page-bg">
        <div className="page-gradient-1"></div>
        <div className="page-gradient-2"></div>
        <div className="page-grid"></div>

        {/* Floating Sparkles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Gold Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="gold-particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              x: [0, (Math.random() - 0.5) * 200],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="page-header">
        <div className="container">
          <div className="page-header-top">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              <span>{
                currentLanguage === 'pt' ? 'Voltar ao Início' :
                currentLanguage === 'es' ? 'Volver al Inicio' :
                currentLanguage === 'fr' ? 'Retour à l\'Accueil' :
                currentLanguage === 'de' ? 'Zurück zur Startseite' :
                currentLanguage === 'it' ? 'Torna alla Home' :
                'Back to Home'
              }</span>
            </Link>

            {/* Language Switcher */}
            <div className="page-language-switcher">
              <button
                className="page-lang-toggle"
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
                    className="page-lang-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      className={`page-lang-option ${currentLanguage === 'en' ? 'active' : ''}`}
                      onClick={() => changeLanguage('en')}
                    >
                      <span>🇺🇸</span>
                      <span>English</span>
                    </button>
                    <button
                      className={`page-lang-option ${currentLanguage === 'pt' ? 'active' : ''}`}
                      onClick={() => changeLanguage('pt')}
                    >
                      <span>🇧🇷</span>
                      <span>Português</span>
                    </button>
                    <button
                      className={`page-lang-option ${currentLanguage === 'es' ? 'active' : ''}`}
                      onClick={() => changeLanguage('es')}
                    >
                      <span>🇪🇸</span>
                      <span>Español</span>
                    </button>
                    <button
                      className={`page-lang-option ${currentLanguage === 'fr' ? 'active' : ''}`}
                      onClick={() => changeLanguage('fr')}
                    >
                      <span>🇫🇷</span>
                      <span>Français</span>
                    </button>
                    <button
                      className={`page-lang-option ${currentLanguage === 'de' ? 'active' : ''}`}
                      onClick={() => changeLanguage('de')}
                    >
                      <span>🇩🇪</span>
                      <span>Deutsch</span>
                    </button>
                    <button
                      className={`page-lang-option ${currentLanguage === 'it' ? 'active' : ''}`}
                      onClick={() => changeLanguage('it')}
                    >
                      <span>🇮🇹</span>
                      <span>Italiano</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            className="page-title-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="page-badge">
              <Sparkles size={16} />
              <span>GreenGo Legal</span>
            </div>
            <h1 className="page-title">{title}</h1>
            {subtitle && <p className="page-subtitle">{subtitle}</p>}
            <div className="gold-line gold-line-center"></div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="page-content">
        <div className="container">
          <motion.div
            className="content-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
