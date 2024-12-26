import React from 'react';
import styles from './Sport.module.css';
import { ArrowLeft } from 'lucide-react';
import basket from '/assets/extra/sport/basketball.png';
import soccer from '/assets/extra/sport/soccer.png';

export const Sport = () => {
  const sports = [
    {
      title: 'Basketball',
      league: 'NBA',
      team: 'Golden State Warriors',
      highlights: 'Fast-paced sport combining athleticism with strategic team play.',
      cover: basket
    },
    {
      title: 'Soccer',
      league: 'Premier League',
      team: 'Manchester United',
      highlights: 'The beautiful game known for its global appeal and technical skill.',
      cover: soccer
    },
 
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <a href="/extra" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            Back to Extra
          </a>
          <h1 className={styles.title1}>Favorite Sports</h1>
          <p className={styles.description}>
            A collection of sports that have captivated and inspired me throughout the years.
          </p>
        </header>

        <div className={styles.eduGrid}>
          {sports.map((sport, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={sport.cover}
                  alt={sport.title}
                  className={styles.coverImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.title}>{sport.title}</h2>
                <h3 className={styles.institution}>{sport.league}</h3>
                <p className={styles.period}>{sport.team}</p>
                <p className={styles.highlights}>{sport.highlights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sport;