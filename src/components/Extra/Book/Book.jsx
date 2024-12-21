import React from 'react';
import styles from './Book.module.css';
import { ArrowLeft } from 'lucide-react';

export const Book = () => {
  const books = [
    {
      title: 'The Bond: Connecting Through the Space Between Us',
      author: 'Lynne McTaggart',
      genre: ['Science fiction', 'Philosophy'],
      description: 'What matters is not the isolated entity, but the space between things, the relationship of things. The Bond.',
      link: 'https://www.amazon.ca/Bond-Connecting-Through-Space-Between/dp/1439157944',
      cover: '/assets/extra/book/TheBond.jpg',
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
          <h1 className={styles.title1}>
            Book Recommendations
          </h1>
          <p className={styles.description}>
            Here are some of my favorite books. Feel free to check them out!
          </p>
        </header>

        <div className={styles.bookGrid}>
          {books.map((book, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={book.cover}
                  alt={book.title}
                  className={styles.coverImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.title}>
                  {book.title}
                </h2>
                <h3 className={styles.author}>
                  by {book.author}
                </h3>
                <div className={styles.genres}>
                  {book.genre.map((g, i) => (
                    <span key={i} className={styles.genre}>{g}</span>
                  ))}
                </div>
                <p className={styles.description}>{book.description}</p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;