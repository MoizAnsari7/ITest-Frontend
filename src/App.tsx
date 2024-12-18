import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';

const HomePage: React.FC = () => {
    return (
        <>
            <Navbar />
        
            <HeroSection />
           
           <FeaturesSection />
        </>
    );
};

export default HomePage;
