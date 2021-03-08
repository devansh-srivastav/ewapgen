import styles from '../styles/speaker-page.module.css';
import { Name, Tagline, Description, Time, Venue } from '../lib/constants'

export default function Home(){
    return(
        <div className={styles.container}>
            <div style={{ minWidth: '300px' }}>
                <img
                    // alt={speaker.name}
                    // title={speaker.name}
                    src='/speakers/akansha.png'
                    className={styles.image}
                    loading="lazy"
                    height={300}
                    width={300}
                />
            </div>
            <div className={styles['speaker-details']}>
                <div>
                    <h2 className={styles.name}>{Name}</h2>
                    <p className={styles.title}>
                        {Tagline}
                    </p>
                    <h2 className={styles['bio-header']}><strong>Description</strong></h2>
                    <p className={styles.bio}>{Description}</p>
                    <h2 className={styles['bio-header']}><strong>{Time} | {Venue}</strong></h2>
                </div>
            </div>
        </div>
    )
}