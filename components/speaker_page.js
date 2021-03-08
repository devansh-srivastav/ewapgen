import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/speaker-page.module.css';

export default function SpeakerAboutPage(speaker) {
    return (
        <div key={speaker.name} className={styles.container}>
            <div style={{ minWidth: '300px' }}>
                <img
                    alt={speaker.name}
                    title={speaker.name}
                    src={speaker.imageUrl}
                    className={styles.image}
                    loading="lazy"
                    height={300}
                    width={300}
                />
            </div>
            <div className={styles['speaker-details']}>
                <div>
                    <h2 className={styles.name}>{speaker.name}</h2>
                    <p className={styles.title}>
                        {`${speaker.title} @ `}
                        <span className={styles.company}>{speaker.company}</span>
                    </p>
                    <h2 className={styles['bio-header']}>Bio</h2>
                    <p className={styles.bio}>{speaker.bio}</p>
                    <h3 className={styles['socials-header']}>Social Media</h3>
                    {/* {speaker.twitter ? (
              <a
                aria-label="Twitter"
                href={speaker.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            ) : (
              <span className={styles.disabled}>
                <TwitterIcon />
              </span>
            )} */}
                    {/* {speaker.github ? (
              <a
                aria-label="GitHub"
                className={styles.githubIcon}
                href={speaker.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon color="#D8D8D8" size={24} />
              </a>
            ) : (
              <span className={cn(styles.githubIcon, styles.disabled)}>
                <GithubIcon color="#D8D8D8" size={24} />
              </span>
            )} */}
                </div>
            </div>
        </div>
        //   {
        //     speaker.talk && (
        //         <div className={styles['talk-details']}>
        //             <h3 className={styles['socials-header']}>{speaker.talk.title}</h3>
        //             <p>{speaker.talk.description}</p>
        //         </div>
        //     )
        // }
    )
}