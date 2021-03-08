import styles from '../styles/speaker-page.module.css';
import { Name, Tagline, Description, Time, Venue } from '../lib/constants'

export default function Home(){
    return(
        <div>
            <div className={styles['speaker-details']}>
                <div>
                    <h2 className={styles.eventname}>{Name}</h2>
                    <p className={styles.eventtitle}>
                        {Tagline}
                    </p>

                    <p className={styles.description}>{Description}</p>
                    <h2 className={styles['description-header']}><strong>{Time} | {Venue}</strong></h2>
                </div>
            </div>
        </div>
    )
}
