import React from 'react';
import '../styles/About.css';

const About = () => (
    <section className="about-section">
        <div className="about-card">
            <h2 className="about-title">About Me</h2>
            <p className="about-summary">
                Front-end developer with 2 years of experience specializing in React.js development.<br />
                Persistent and quick learner, passionate about building scalable solutions and enhancing user experience through responsive, high-performance web applications.
            </p>
            <div className="about-experience">
                <h3>Professional Experience</h3>
                <ul>
                    <li>
                        <strong>Tech Mahindra</strong> — Associate Customer Support<br />
                        <span className="exp-date">Aug 2023 - Present</span><br />
                        - Monitored performance metrics to identify trends in support requests.<br />
                        - Participated in weekly meetings with product development.<br />
                        - Delivered high-quality customer service by maintaining deep product knowledge.
                    </li>
                    <li>
                        <strong>Addvic Technology</strong> — React Js Developer Intern<br />
                        <span className="exp-date">Jan 2023 - Jun 2023</span><br />
                        - Skilled in UI design and RESTful API development.<br />
                        - Proficient in React Hooks, Context API, Routing, Node.js, Express, MongoDB.<br />
                        - Used Git and GitHub for version control.
                    </li>
                </ul>
            </div>
            <div className="about-education">
                <h3>Education</h3>
                <ul>
                    <li>
                        <strong>Bachelor of Engineering in Computer Engineering</strong><br />
                        Rajiv Gandhi College of Engineering, Karjule Harya<br />
                        <span>Sep 2022 - Jun 2025 | CGPA 7.0</span>
                    </li>
                    <li>
                        <strong>Diploma in Information Technology</strong><br />
                        Ajit Dada Pawar Polytechnic College, Wadala Mahadev<br />
                        <span>Sep 2019 - Aug 2021 | 83.26%</span>
                    </li>
                </ul>
            </div>
            <div className="about-skills">
                <h3>Skills & Tools</h3>
                <p>
                    HTML, CSS, JavaScript, Python, ReactJS, ExpressJS, Git, GitHub, VSCode, Postman, MongoDB
                </p>
            </div>
            <div className="about-links">
                <a
                    className="profile-link"
                    href="https://www.linkedin.com/in/amol-dike-b99895223/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className="profile-link"
                    href="https://www.naukri.com/mnjuser/profile?id=&altresid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Naukri
                </a>
            </div>
        </div>
    </section>
);

export default About;
