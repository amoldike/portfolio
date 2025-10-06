import React from "react";
import "../styles/Contact.css";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p>
                    I’d love to hear from you! Whether you have a project in mind,
                    a question, or just want to say hello — feel free to reach out.
                </p>

                <form
                    className="contact-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Message sent successfully!");
                    }}
                >
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
