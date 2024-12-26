import React from 'react';
import styles from './Gaming.module.css';
import { ArrowLeft } from 'lucide-react';

export const Gaming = () => {
  const games = [
    {
      title: 'League of Legends',
      developer: 'Riot Games',
      genre: ['MOBA', 'Strategy'],
      description: 'My favorite MOBA game where I mainly play Botlane role as known as ADC. Been playing since Season 10 and still enjoying every match!',
      link: 'https://www.leagueoflegends.com',
      cover: '/assets/extra/gaming/lol.png',      
      skill:['teamwork, patience, self-learning'],
    },
    {
      title: 'Elden Ring',
      developer: 'FromSoftware',
      genre: ['Action RPG', 'Dark Fantasy'],
      description: 'A challenging open-world action RPG set in the Lands Between. Exploring the vast world as a Tarnished while mastering different builds and combat styles.',
      link: 'https://www.bandainamcoent.com/games/elden-ring',
      cover: '/assets/extra/gaming/Elden.png',   
      skill: ['patience'],
      },
    {
      title: 'Minecraft',
      developer: 'Mojang Studios',
      genre: ['Sandbox', 'Adventure'],
      description: 'A creative playground where I love building complex redstone mechanisms and exploring new worlds.',
      link: 'https://www.minecraft.net',
      cover: '/assets/extra/gaming/Minecraft.png',
      skill:['Creativity'],
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
          <h1 className={styles.title1}>
            Gaming Experience
          </h1>
          <p className={styles.description}>
            Here are some of my favorite games and gaming experiences. Feel free to connect and play together!
          </p>
        </header>

        <div className={styles.gameGrid}>
          {games.map((game, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={game.cover}
                  alt={game.title}
                  className={styles.coverImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.title}>
                  {game.title}
                </h2>
                <h3 className={styles.developer}>
                  by {game.developer}
                </h3>
                <div className={styles.genres}>
                  {game.genre.map((g, i) => (
                    <span key={i} className={styles.genre}>{g}</span>
                  ))}
                </div>
                <div className={styles.skills}>
                  {game.skill.map((g, i) => (
                    <span key={i} className={styles.skill}>{g}</span>
                  ))}
                </div>
                <p className={styles.description}>{game.description}</p>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Play Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gaming;