// Footer.js
import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>
          © {new Date().getFullYear()} Matthew Tan. All Rights Reserved.
        </p>
        <ul className={styles.socialLinks}>
          <li>
            <a
              href="https://www.linkedin.com/in/matthew-tan-b53b63289/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Matthewtan9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
