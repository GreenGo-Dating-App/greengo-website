import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './SparkleBackground.css';

const SparkleBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  // Generate random sparkles
  const sparkles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2
  }));

  // Generate floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 8,
    duration: Math.random() * 10 + 8
  }));

  // Generate shooting stars
  const shootingStars = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: Math.random() * 70,
    y: Math.random() * 50,
    delay: Math.random() * 15 + i * 3,
    duration: 2
  }));

  // Generate glitter clusters
  const glitterClusters = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4
  }));

  return (
    <div className="sparkle-background">
      {/* Ambient Glow Orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>

      {/* Grid Pattern */}
      <div className="sparkle-grid"></div>

      {/* Static Sparkles (Twinkling) */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="sparkle-dot"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
            boxShadow: [
              '0 0 4px rgba(212, 175, 55, 0.5)',
              '0 0 12px rgba(212, 175, 55, 1)',
              '0 0 4px rgba(212, 175, 55, 0.5)'
            ]
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Rising Particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="rising-particle"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [dimensions.height + 50, -50],
            opacity: [0, 1, 1, 0],
            x: [0, Math.sin(particle.id) * 50]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            x: [0, 300],
            y: [0, 300],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 10,
            ease: 'easeOut'
          }}
        />
      ))}

      {/* Glitter Clusters */}
      {glitterClusters.map((cluster) => (
        <div
          key={`cluster-${cluster.id}`}
          className="glitter-cluster"
          style={{
            left: `${cluster.x}%`,
            top: `${cluster.y}%`,
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="glitter-piece"
              style={{
                transform: `rotate(${i * 72}deg) translateX(15px)`
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: cluster.delay + i * 0.2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          ))}
        </div>
      ))}

      {/* Starburst Effects */}
      <motion.div
        className="starburst starburst-1"
        animate={{
          scale: [0, 1.5, 0],
          opacity: [0, 0.6, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 6,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="starburst starburst-2"
        animate={{
          scale: [0, 1.5, 0],
          opacity: [0, 0.6, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 4,
          delay: 5,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeInOut'
        }}
      />

      {/* Light Rays */}
      <div className="light-rays">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="light-ray"
            style={{
              transform: `rotate(${i * 60}deg)`
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Floating Diamond Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`diamond-${i}`}
          className="floating-diamond"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 45, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5 + i,
            delay: i * 0.8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

export default SparkleBackground;
