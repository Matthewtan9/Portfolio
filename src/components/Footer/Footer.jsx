// Footer.js
import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>
          © 2024 Matthew. All Rights Reserved.
        </p>
        <ul className={styles.socialLinks}>
          <li>
            <a
              href="https://www.linkedin.com/in/matthew-profile"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/matthew-profile"
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
