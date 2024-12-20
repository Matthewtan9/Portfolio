import React from 'react';
import styles from './Extra.module.css';
// import {Book} from './Book'
import { ArrowLeft, Youtube, Gamepad, Book, Music, Camera, Coffee } from 'lucide-react';

export const Extra = () => {
  const hobbies = [
    {
      title: 'Gaming',
      icon: <Gamepad className="w-12 h-12 mb-4" style={{ color: 'var(--color-primary)' }} />,
      description: 'Favorite games and gaming experiences',
      link: 'https://your-gaming-profile.com',
    },
    {
      title: 'YouTube Channel',
      icon: <Youtube className="w-12 h-12 mb-4" style={{ color: 'var(--color-primary)' }} />,
      description: 'Hey this is my gaming youtube channel, feel free to visit and share your thoughts!',
      link: 'https://www.youtube.com/@4matt44',
    },
    {
      title: 'Reading',
      icon: <Book className="w-12 h-12 mb-4" style={{ color: 'var(--color-primary)' }} />,
      description: 'Book recommendations and reviews',
      link: '/Book',
    },
    {
      title: 'Music',
      icon: <Music className="w-12 h-12 mb-4" style={{ color: 'var(--color-primary)' }} />,
      description: 'Favorite artists and playlists',
      link: 'https://spotify.com/your-profile',
    },
    {
      title: 'Coffee',
      icon: <Coffee className="w-12 h-12 mb-4" style={{ color: 'var(--color-primary)' }} />,
      description: 'Favorite coffee spots and brewing techniques',
      link: 'https://your-coffee-blog.com',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <a href="/" className={styles.backLink}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-bold mb-4 ${styles.title}`}>
            Extra Interests & Hobbies
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${styles.description}`}>
            Beyond coding, here are some things I'm passionate about. Feel free to
            connect with me on these platforms!
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`${styles.card} rounded-lg shadow-md p-8 text-center`}
            >
              <div className="flex justify-center">{hobby.icon}</div>
              <h2 className={`text-2xl font-semibold mb-2 ${styles.title}`}>
                {hobby.title}
              </h2>
              <p className={`mb-6 ${styles.description}`}>{hobby.description}</p>
              <a
                href={hobby.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} inline-block px-6 py-2 rounded-full`}
              >
                View More
              </a>
            </div>
          ))}
        </div>

        {/* Featured Content Section */}
        <div className="mt-20">
          <h2 className={`text-3xl font-bold text-center mb-12 ${styles.title}`}>
            Featured Content
          </h2>
          <div className={`${styles.card} rounded-lg shadow-md p-8`}>
            <div className="mb-8">
              <img
                src="/api/placeholder/1200/675"
                alt="Featured content"
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
            <h3 className={`text-2xl font-semibold mb-4 ${styles.title}`}>
              Latest Project
            </h3>
            <p className={`mb-6 ${styles.description}`}>
              Description of your most recent or favorite hobby-related project,
              video, or creation. Share what makes this particular piece special.
            </p>
            <a
              href="#"
              className={`${styles.button} inline-block px-8 py-3 rounded-full`}
            >
              Check it out
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Extra;