import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SparkleBackground from './components/SparkleBackground';

// Pages
import { PrivacyPolicy, TermsOfService, CookiePolicy, About, DeleteAccount } from './pages';

// Home Page Component
const HomePage = () => (
  <>
    <SparkleBackground />
    <Navbar />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Roadmap />
            <Contact />
      <CTA />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/delete-profile" element={<DeleteAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
