import React from "react";
import { FileText } from 'lucide-react'; // Import the document icon
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Matthew</h1>
        <p className={styles.description}>
          Software developer with 5 years of experience building full-stack
          web applications, from responsive front-ends to optimized back-end
          systems and APIs.
        </p>
        <div className={styles.resumeSection}>
          <p className={styles.resumeText}>
            Looking to know more about my experience?
          </p>
          <div className={styles.resumeBtnGroup}>
            <a
              href="/resume/Matthew-Tan-CV-EN.pdf"
              className={styles.resumeBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className={styles.resumeIcon} />
              Resume (EN)
            </a>
            <a
              href="/resume/Matthew-Tan-CV-FR.pdf"
              className={styles.resumeBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className={styles.resumeIcon} />
              CV (FR)
            </a>
          </div>
        </div>
      </div>
      <img
        src={getImageUrl("hero/sticker.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;