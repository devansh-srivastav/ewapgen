import Link from 'next/link'
import Image from 'next/image';
import { Speakers } from '../lib/speakers';
import styles from '../styles/speakers-grid.module.css';

export default function SpeakersGrid() {
    return (
        <div className={styles.grid}>
            {Speakers.map(speaker => (
                <Link key={speaker.link} href={`/speakers/${speaker.link}`}>
                    <a role="button" tabIndex={0} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                alt={speaker.name}
                                src={speaker.imageUrl}
                                className={styles.image}
                                loading="lazy"
                                quality="50"
                                title={speaker.name}
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <div>
                                <h2 className={styles.name}>{speaker.name}</h2>
                                <p className={styles.title}>
                                    {`${speaker.title} @ `}
                                    <span className={styles.company}>{speaker.company}</span>
                                </p>
                            </div>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    );
}