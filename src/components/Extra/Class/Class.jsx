import React from 'react';
import styles from './Class.module.css';
import { ArrowLeft } from 'lucide-react';

export const Class = () => {
  const education = [
    {
      level: 'High School',
      institution: 'Antoine-Brossard',
      period: '2015 - 2019',
      highlights: 'Graduated ',
      cover: '/assets/extra/class/highschool.jpg',
    },
    {
      level: 'CEGEP',
      institution: 'Champlain College',
      period: '2020 - 2023',
      highlights: 'Completed the computer science program.',
      cover: '/assets/extra/class/cegep.jpg',
    },
    {
      level: 'University',
      institution: 'Concordia University',
      period: '2024 - Present',
      highlights: 'Currently pursuing a Bachelor of Science in Computer Science.',
      cover: '/assets/extra/class/university.jpg',
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <a href="/extra" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            Back to Extra
          </a>
          <h1 className={styles.title1}>Education Journey</h1>
          <p className={styles.description}>
            Here's a brief overview of my academic path from high school to university.
          </p>
        </header>

        <div className={styles.eduGrid}>
          {education.map((edu, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={edu.cover}
                  alt={edu.level}
                  className={styles.coverImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.title}>{edu.level}</h2>
                <h3 className={styles.institution}>at {edu.institution}</h3>
                <p className={styles.period}>{edu.period}</p>
                <p className={styles.highlights}>{edu.highlights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Class;
