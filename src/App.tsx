import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CardSection from './components/CardSection';

const HomePage: React.FC = () => {
    return (
        <>
            <Navbar />
        
            <HeroSection />
           
           <FeaturesSection />


           <CardSection />
        </>
    );
};

export default HomePage;
