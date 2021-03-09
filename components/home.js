import styles from '../styles/speaker-page.module.css';
import Link from 'next/link'
import { Name, Tagline, Description, Time, Venue } from '../lib/constants'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


export default function Home() {
    return (
        <div>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol lg="8">
                        <div className={styles['speaker-details']}>
                            <div>
                                <h2 className={styles.eventname}>{Name}</h2>
                                <p className={styles.eventtitle}>
                                    {Tagline}
                                </p>

                                <p className={styles.description}>{Description}</p>
                                <h2 className={styles['description-header']}><strong>{Time} | {Venue}</strong></h2>
                                <div className='register-btn'>
                                    <Link href='/register'>
                                        <a className='linkButton'>
                                            <button type="button" className="btn btn-outline-light btn-lg">
                                                Register Now
                                </button>
                                        </a>
                                    </Link>
                                </div>
                                <p className={styles.description}>Developed & Designed by: Devansh Srivastav and Akansha Bajpai</p>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol lg="4">
                        <img src='/logo.png' height={300} className={styles.logo}
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
