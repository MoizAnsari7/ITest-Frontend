import React from 'react';
import './CardSection.css';
import { motion } from 'framer-motion';

const CardSection: React.FC = () => {
  const features = [
    {
      title: 'Remote Proctoring',
      description: 'Keep a check on candidates using automatic face capture and AI-based face monitoring.',
      icon: 'fas fa-video', // Font Awesome icon class
    },
    {
      title: 'No Copy-Paste',
      description: 'Disable copy-pasting to dissuade candidates from copying answers from the internet.',
      icon: 'fas fa-ban', // Font Awesome icon class
    },
    {
      title: 'Question Randomization',
      description: 'Randomly select questions from a question pool and shuffle the order in which they appear.',
      icon: 'fas fa-random', // Font Awesome icon class
    },
    {
      title: 'Option Shuffling',
      description: 'Jumble the options for multiple choice questions across candidates.',
      icon: 'fas fa-sync-alt', // Font Awesome icon class
    },
  ];

  return (
    <motion.section className="container card-section">
      <motion.h1
    initial={{ opacity: 3 }}
    animate={{ opacity: 2 }}
    transition={{ duration: 0.5, delay: 0.2 }}><span className='text-dark'>Built-in</span> Cheat Resistance</motion.h1>
      <p>Deter and detect rule violations using a host of anti-cheating measures.</p>
      <motion.div className="card-list"        >
        {features.map((feature, index) => (
          <motion.div className="card" key={index}   initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 * index }}
  >
            <div className="icon-container">
              <i className={feature.icon}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CardSection;
