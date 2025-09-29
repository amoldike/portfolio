import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import ContactModal from '../components/ContactModal/ContactModal';

const Hero = () => {
    const [currentSkill, setCurrentSkill] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const skills = [
        "Full Stack Developer",
        "Freelancer",
        "React JS Developer"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkill((prevSkill) => (prevSkill + 1) % skills.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleContactClick = () => {
        setIsModalOpen(true);
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Hi, I'm <span className="highlight">Amol Dike</span></h1>
                    <h2 className="animated-text">{skills[currentSkill]}</h2>
                    <p>I craft responsive websites where technology meets creativity</p>
                    <div className="hero-buttons">
                        <button className="primary-btn" onClick={handleContactClick}>Contact Me</button>
                        <button className="secondary-btn">Download CV</button>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Add your profile image here */}
                    <img src="/assets/profile.jpg" alt="Amol Dike" />
                </div>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default Hero;