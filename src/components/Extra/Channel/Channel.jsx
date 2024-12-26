import React from 'react';
import styles from './Channel.module.css';
import { ArrowLeft } from 'lucide-react';
import youtube from '/assets/extra/channel/youtube.png'
import tiktok from '/assets/extra/channel/tiktok.png'


export const Channel = () => {
  const channel = [
    {
      name: 'Gaming YouTube Channel',
      handle: '@mychannel',
      description: 'My main platform for sharing educational videos and creative projects.',
      link: 'https://www.youtube.com/@4matt44',
      icon: youtube,
    },
    {
      name: 'TikTok',
      handle: '@mytiktok',
      description: 'Short and engaging content around daily life, hobbies, and trends.',
      link: 'https://www.tiktok.com/@gaminggolem',
      icon: tiktok,
    },
    {
      name: 'Instagram',
      handle: '@myinsta',
      description: 'Capturing moments and sharing stories through photos and reels.',
      link: 'https://www.instagram.com/myinsta',
      icon: '/assets/extra/channel/instagram.svg',
    },
    // {
    //     name: 'Twitter',
    //     handle: '@myinsta',
    //     description: 'Capturing moments and sharing stories through photos and reels.',
    //     link: '',
    //     icon: '/assets/icons/instagram.svg',
    //   },
   
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
            My Channels
          </h1>
          <p className={styles.description}>
            Here are my social media channels where I share my content and interact with my audience. Let's connect!
          </p>
        </header>

        <div className={styles.channelGrid}>
          {channel.map((channel, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                <img
                  src={channel.icon}
                  alt={channel.name}
                  className={styles.iconImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.title}>
                  {channel.name}
                </h2>
                <h3 className={styles.handle}>
                  {channel.handle}
                </h3>
                <p className={styles.description}>{channel.description}</p>
                <a
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Visit {channel.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Channel;
