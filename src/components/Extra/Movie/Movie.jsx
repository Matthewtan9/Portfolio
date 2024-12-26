import React from 'react';
import styles from './Movie.module.css';
import { ArrowLeft } from 'lucide-react';

export const Movie = () => {
  const movies = [
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: '2010',
      highlights: 'A mind-bending thriller exploring the world of dreams and heists.',
      cover: '/assets/extra/movie/inception.png',
    },
  
    {
      title: 'Interstellar',
      director: 'Christopher Nolan',
      year: '2014',
      highlights: 'An epic journey through space and time to save humanity.',
      cover: '/assets/extra/movie/interstellar.jpg',
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
          <h1 className={styles.title1}>Favorite Movies</h1>
          <p className={styles.description}>
            A collection of movies that have inspired and entertained me over the years.
          </p>
        </header>

        <div className={styles.eduGrid}>
          {movies.map((movie, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={movie.cover}
                  alt={movie.title}
                  className={styles.coverImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.title}>{movie.title}</h2>
                <h3 className={styles.institution}>Directed by {movie.director}</h3>
                <p className={styles.period}>{movie.year}</p>
                <p className={styles.highlights}>{movie.highlights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;