import Link from 'next/link'
import styles from '../styles/speaker-page.module.css';
import {MDBIcon} from 'mdbreact'

export default function SpeakerAboutPage(speaker) {
    return (
        <div>
            <Link href="/speakers">
                <a className={styles.backlink}>
                    {'< '}Back to speakers
                </a>
            </Link>
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
                        <h2 className={styles['bio-header']}><strong>Bio</strong></h2>
                        <p className={styles.bio}>{speaker.bio}</p>
                    </div>
                </div>
            </div>
            <div className={styles['talk-details']}>
                <h3 className={styles['socials-header']}><strong>Talk on {speaker.talkTitle}</strong></h3>
                <p>{speaker.talkDescription}</p>
            </div>
            <div className={styles['talk-details']}>
                <h3 className={styles['socials-header']}><strong>Get in touch</strong></h3>
                <MDBIcon far icon='envelope' className={styles.icon}></MDBIcon><a href={`mailto:${speaker.email}`} className={styles.handle}>{speaker.email}</a>
                <br /><br />
                <MDBIcon fab icon='twitter' className={styles.icon}></MDBIcon><a href={`https://www.twitter.com/${speaker.twitter}`} className={styles.handle}>{speaker.twitter}</a>
            </div>
        </div>
    )
}