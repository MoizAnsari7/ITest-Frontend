import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <section className="hero container">
            <div className="hero-content">
                <h1>
                    <span className="feature-rich">Feature-rich</span> online assessment platform
                </h1>
                <p>
                    Powerful and user-friendly features make candidate screening with Itest effective
                    and easy.
                </p>
                <button className="btn-demo">Book a Demo</button>
            </div>
            <div className="hero-images">
                {/* <img src="../assets/images/banner-image.webp" alt="People" /> */}
            </div>
        </section>
    );
};

export default HeroSection;
