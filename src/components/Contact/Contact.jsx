import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", // Added subject field
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,          // {{name}} - From the contact form
      senderEmail: formData.email,  // {{senderEmail}} - From the contact form
      subject: formData.subject,    // {{subject}} - From the contact form (new field)
      message: formData.message,    // {{message}} - From the contact form
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_uff245j",  // Your service ID
        "template_d5550rl",  // Replace with your template ID
        templateParams,
        "_Z6vGFs1xmHGnG6yn"  // Replace with your user ID
      );
      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>If you have any questions or just want to connect, feel free to reach out!</p>
      </div>

      {/* Contact Form */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Enter the subject"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message"
            rows="4"
          />
        </div>

        <button type="submit" className={styles.submitBtn}>Send Message</button>
      </form>

      {formStatus && <p className={styles.status}>{formStatus}</p>}

      {/* External Links */}
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" className={styles.icon} />
          <a href="mailto:matthew999099@email.com">matthew999099@email.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" className={styles.icon} />
          <a href="https://www.linkedin.com/in/matthew-tan-b53b63289/" target="_blank" rel="noopener noreferrer">linkedin.com/in/matthew-tan</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" className={styles.icon} />
          <a href="https://github.com/Matthewtan9" target="_blank" rel="noopener noreferrer">github.com/Matthewtan9</a>
        </li>
      </ul>
    </footer>
  );
};
