import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  Heart,
  Globe,
  Users,
  Award,
  Target,
  Sparkles,
  ArrowLeft,
  Linkedin,
  Twitter
} from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      icon: Heart,
      title: 'Love Without Limits',
      description: 'We believe love knows no borders. Our mission is to connect hearts across the globe.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Building bridges between cultures and fostering understanding through connection.'
    },
    {
      icon: Users,
      title: 'User First',
      description: 'Every decision we make prioritizes the safety, privacy, and happiness of our users.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality experience in online dating.'
    }
  ];

  const team = [
    {
      name: 'Alexandra Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Google exec with a passion for connecting people.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300'
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO & Co-Founder',
      bio: 'AI expert previously at Meta, building smarter matching.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300'
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Head of Product',
      bio: 'Designing love experiences that matter.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300'
    },
    {
      name: 'David Kim',
      role: 'Head of Safety',
      bio: 'Ensuring every connection is safe and authentic.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Couples Matched' },
    { value: '100+', label: 'Countries' },
    { value: '4.9', label: 'App Rating' },
    { value: '98%', label: 'Satisfaction' }
  ];

  return (
    <div className="about-page">
      {/* Background */}
      <div className="about-bg">
        <div className="about-gradient-1"></div>
        <div className="about-gradient-2"></div>
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="about-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="about-hero" ref={ref}>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="page-badge">
              <Sparkles size={16} />
              <span>Our Story</span>
            </div>
            <h1 className="about-title">
              Connecting Hearts
              <span className="shimmer-text"> Across the World</span>
            </h1>
            <p className="about-subtitle">
              GreenGo Chat was born from a simple belief: love should never be limited by
              language or location. We're on a mission to help people find meaningful
              connections that transcend borders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission section">
        <div className="container">
          <div className="mission-grid">
            <motion.div
              className="mission-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="label">Our Mission</span>
              <h2 className="heading-lg">
                Breaking Barriers,
                <span className="text-gold"> Building Love</span>
              </h2>
              <p>
                Founded in 2024, GreenGo Chat emerged from our founders' firsthand experience
                with the challenges of international dating. They saw how language barriers
                and cultural differences could prevent beautiful connections from forming.
              </p>
              <p>
                Today, we're building the most advanced platform for international dating,
                powered by AI translation, smart matching, and a commitment to safety that
                gives our users the confidence to connect authentically.
              </p>
              <div className="mission-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="mission-stat">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="mission-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="visual-globe">
                <div className="globe-ring ring-1"></div>
                <div className="globe-ring ring-2"></div>
                <div className="globe-ring ring-3"></div>
                <div className="globe-center">
                  <Globe size={60} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section section-darker">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="label">What We Stand For</span>
            <h2 className="heading-lg">
              Our Core
              <span className="shimmer-text"> Values</span>
            </h2>
            <div className="gold-line gold-line-center"></div>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">
                  <value.icon size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="label">Leadership</span>
            <h2 className="heading-lg">
              Meet Our
              <span className="shimmer-text"> Team</span>
            </h2>
            <div className="gold-line gold-line-center"></div>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={18} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link"><Twitter size={18} /></a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section section-darker">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Target size={48} className="cta-icon" />
            <h2 className="heading-lg">Ready to Find Your Match?</h2>
            <p>Join thousands of people who found love through GreenGo Chat.</p>
            <Link to="/#early-access" className="btn btn-primary btn-large">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
