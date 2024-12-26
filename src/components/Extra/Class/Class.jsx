import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import styles from './Class.module.css';
import high from '/assets/extra/class/ab.jpg';
import cegep from '/assets/extra/class/champlain.png';
import university from '/assets/extra/class/concordia.jpg';
export const Class = () => {
  const education = [
    {
      level: 'High School',
      institution: 'Antoine-Brossard',
      period: '2015 - 2019',
      highlights: 'Graduated ',
      cover: high,
    },
    {
      level: 'CEGEP',
      institution: 'Champlain College',
      period: '2020 - 2023',
      highlights: 'Completed the computer science program.',
      cover: cegep,
      link: '/extra/class/cegep',
    },
    {
      level: 'University',
      institution: 'Concordia University',
      period: '2024 - Present',
      highlights: 'Currently pursuing a Bachelor of Science in Computer Science.',
      cover: university,
      // link: '/class/university',
    }
  ];

  const showCourseLink = (level) => {
    return level === 'CEGEP'
    //  || level === 'University';
  };

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
                {showCourseLink(edu.level) && (
                  <a href={edu.link} className={styles.courseLink}>
                    <BookOpen className={styles.courseIcon} />
                    View Courses
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Class;