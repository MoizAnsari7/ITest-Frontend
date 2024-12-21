import React from 'react';
import './HeroSection.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    return (
        <motion.section
            className="hero container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ opacity, y: translateY }}
        >
            <div className="hero-content">
                <h1>
                    <motion.span
                        className="feature-rich"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Feature-rich
                    </motion.span>{' '}
                    online assessment platform
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Powerful and user-friendly features make candidate screening with Itest effective
                    and easy.
                </motion.p>
                <motion.button
                    className="btn-demo"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5, ease: 'backOut' }}
                >
                    Book a Demo
                </motion.button>
            </div>
            <motion.div
                className="hero-images"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                {/* <img src="../assets/images/banner-image.webp" alt="People" /> */}
            </motion.div>
        </motion.section>
    );
};

export default HeroSection;
   