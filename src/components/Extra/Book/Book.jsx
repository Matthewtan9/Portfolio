import React from 'react';
import styles from './Book.module.css';
import { ArrowLeft } from 'lucide-react';

export const Book = () => {
  const books = [
    {
      title: 'The Bond: Connecting Through the Space Between Us',
      author: 'Lynne McTaggart',
      genre: 'Science fiction, Philosophy', // Fixed genre string
      description: 'What matters is not the isolated entity, but the space between things, the relationship of things. The Bond.',
      link: 'https://www.amazon.ca/Bond-Connecting-Through-Space-Between/dp/1439157944',
      cover: '/assets/extra/book/TheBond.jpg',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <a href="/extra" className={styles.backLink}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Main Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-bold mb-4 ${styles.title1}`}>
            Book Recommendations
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${styles.description}`}>
            Here are some of my favorite books. Feel free to check them out!
          </p>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className={`${styles.card} rounded-lg shadow-md p-6 text-center`}
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className={`text-2xl font-semibold mb-2 ${styles.title}`}>
                {book.title}
              </h2>
              <h3 className={`text-lg font-medium mb-2 ${styles.author}`}>
                by {book.author}
              </h3>
              <p className={`mb-6 ${styles.description}`}>{book.description}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} inline-block px-6 py-2 rounded-full`}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Book;
