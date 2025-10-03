import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';
import herobg from '../../assets/hero-bg.png';


const roles = [
    "WEB DEVELOPER",
    "FULL STACK DEVELOPER",
    "FREELANCER"
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex(prev => (prev + 1) % roles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-bg" />
            <motion.div
                className="hero-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}>
                <div className="hero-content">
                    <div className="hero-role-container">
                        <AnimatePresence mode="wait">
                            <motion.p key={roleIndex}
                                className="hero-role"
                                initial={{ opacity: 0, y: -18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 18 }}
                                transition={{ duration: 0.4 }}
                            >
                                {roles[roleIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                    <h1 className="hero-title">Hello, I’m <span className="highlight"> Amol Dike</span></h1>
                    <p className="hero-desc">I am a Front-End Developer specializing in building responsive and user-friendly web applications with React.js. Passionate about creating seamless digital experiences with clean, efficient code..!</p>
                    <div className="hero-buttons">
                        <a className="btn primary" href="#projects">Contact Me</a>
                        <a className="btn" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">Download CV</a>
                    </div>
                </div>
                <div className="hero-image-wrap">
                    <img
                        className="hero-image"
                        src={herobg}
                        alt="Profile"
                    />

                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
