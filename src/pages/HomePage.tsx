import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CardSection from '../components/CardSection';
import FooterSection from '../components/FooterSection' ;
import SignUpCard from './SignUpCard';

import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
    return (
        <motion.div>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <CardSection />
             <SignUpCard />
            <FooterSection />
        </motion.div>
    );
};
   
export default HomePage;
