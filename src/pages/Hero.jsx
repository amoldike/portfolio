import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Hi, I'm <span className="highlight">Amol Dike</span></h1>
                    <h2>Full Stack Developer</h2>
                    <p>I craft responsive websites where technology meets creativity</p>
                    <div className="hero-buttons">
                        <button className="primary-btn">Contact Me</button>
                        <button className="secondary-btn">Download CV</button>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Add your profile image here */}
                    <img src="/assets/profile.jpg" alt="Amol Dike" />
                </div>
            </div>
        </section>
    );
};

export default Hero;