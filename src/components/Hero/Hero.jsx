import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const heroRef = useRef(null);
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const buttonRef = useRef(null);
    const socialRef = useRef([]);
    const dotsContainerRef = useRef(null);

    // Hero animations
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
        tl.from(heroRef.current, { opacity: 0 });
        tl.from(headingRef.current, { y: -50, opacity: 0 }, "-=0.5");
        tl.from(subheadingRef.current, { y: 50, opacity: 0 }, "-=0.5");
        tl.from(buttonRef.current, { scale: 0, opacity: 0 }, "-=0.5");
        tl.from(
            socialRef.current,
            { y: 20, opacity: 0, stagger: 0.2 },
            "-=0.5"
        );
    }, []);

    // Floating dots animation
    useEffect(() => {
        const dots = Array.from(dotsContainerRef.current.children);
        dots.forEach((dot) => {
            const speed = 0.1 + Math.random() * 0.8;
            gsap.to(dot, {
                y: () => window.innerHeight * speed,
                x: () => (Math.random() - 0.5) * 200,
                scrollTrigger: {
                    trigger: dot,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                repeat: -1,
                yoyo: true,
            });
        });
    }, []);

    return (
        <section ref={heroRef} id="hero" className="hero-section">
            <div className="dots-container" ref={dotsContainerRef}>
                {Array(30)
                    .fill(0)
                    .map((_, i) => (
                        <div key={i} className="dot"></div>
                    ))}
            </div>

            <h1 ref={headingRef} className="hero-heading">
                Hi, I'm Amol Dike
            </h1>
            <p ref={subheadingRef} className="hero-subheading">
                Front-End Developer | React & Vite Enthusiast
            </p>

            <div className="hero-buttons">
                <button ref={buttonRef}>View Projects</button>
                <button ref={buttonRef}>Download Resume</button>
            </div>

            <div className="hero-social">
                {["GitHub", "LinkedIn", "Email"].map((icon, index) => (
                    <span
                        key={index}
                        ref={(el) => (socialRef.current[index] = el)}
                        className="social-icon"
                    >
                        {icon}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Hero;
