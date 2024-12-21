import React, { useState, useRef } from 'react';
import { ArrowLeft, Youtube, Gamepad, Book, Music } from 'lucide-react';
import styles from './Extra.module.css';

export const Extra = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hobbyRefs = useRef({});

  const hobbies = [
    {
      title: 'YouTube Channel',
      icon: <Youtube size={24} />,
      description: 'Hey this is my gaming youtube channel, feel free to visit and share your thoughts!',
      link: 'https://www.youtube.com/@4matt44',
    },
    {
      title: 'Tiktok Channel',
      icon: <Youtube size={24} />,
      description: 'Hey this is my gaming youtube channel, feel free to visit and share your thoughts!',
      link: 'https://www.tiktok.com/@gaminggolem',
    },
    {
      title: 'Reading',
      icon: <Book size={24} />,
      description: 'Book that i have read with recommendation and review',
      link: '/extra/books',
    },
    {
      title: 'Gaming',
      icon: <Gamepad size={24} />,
      description: 'Favorite games and gaming experiences',
      link: '/extra/gaming',
    },
    {
      title: 'Music',
      icon: <Music size={24} />,
      description: 'Favorite artists and playlists',
      link: 'https://spotify.com/your-profile',
    },
    {
      title: 'Youtube videos',
      icon: <Youtube size={24} />,
      description: 'Favorite artists and playlists',
      link: 'https://spotify.com/your-profile',
    },
    {
      title: 'Side projects',
      icon: <Book size={24} />,
      description: 'Favorite artists and playlists',
      link: 'https://spotify.com/your-profile',
    },
    
  ];

  const filteredHobbies = hobbies.filter(hobby =>
    hobby.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToHobby = (title) => {
    hobbyRefs.current[title]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setIsDropdownOpen(false);
    setSearchTerm('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <a href="/" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            Back to Portfolio
          </a>
          <h1 className={styles.title}>Extra Interests & Hobbies</h1>
          <p className={styles.subtitle}>
            Beyond coding, here are some things I'm passionate about. Feel free to
            connect with me on these platforms!
          </p>
          
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search hobbies..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsDropdownOpen(true);
              }}
              className={styles.searchInput}
            />
            {isDropdownOpen && searchTerm && (
              <div className={styles.dropdownMenu}>
                {filteredHobbies.map((hobby) => (
                  <button
                    key={hobby.title}
                    onClick={() => scrollToHobby(hobby.title)}
                    className={styles.dropdownItem}
                  >
                    {hobby.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className={styles.hobbiesGrid}>
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              ref={(el) => (hobbyRefs.current[hobby.title] = el)}
              className={styles.hobbyCard}
            >
              <div className={styles.iconWrapper}>{hobby.icon}</div>
              <h2 className={styles.hobbyTitle}>{hobby.title}</h2>
              <p className={styles.hobbyDescription}>{hobby.description}</p>
              <a
                href={hobby.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewMoreButton}
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extra;