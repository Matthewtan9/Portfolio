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
          I'm a software developer with 5 years of experience.
        </p>
        <div className={styles.resumeSection}>
          <p className={styles.resumeText}>
            Looking to know more about my experience?
          </p>
          <a 
            href="https://drive.google.com/file/d/1sRdWYdzG43keUum_0vFJMjUMaNeW0Qdm/view?usp=sharing" 
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className={styles.resumeIcon} />
            View Resume
          </a>
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