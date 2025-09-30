import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: "Home", href: "#home" },
        { title: "About", href: "#about" },
        { title: "Projects", href: "#projects" },
        { title: "Skills", href: "#skills" },
        { title: "Contact", href: "#contact" }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <a href="#home">Amol Dike</a>
            </div>

            {/* Mobile menu button */}
            <button className={`mobile-menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Navigation links */}
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} onClick={() => setIsOpen(false)}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;