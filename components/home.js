import styles from '../styles/speaker-page.module.css';
import Link from 'next/link'
import Image from 'next/Image'
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
                        <Link href='/speakers'>
                            <a className='linkButton'>
                                <button type="button" className="btn btn-outline-light btn-lg">
                                    Register Now
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
                    </MDBCol>
                <MDBCol lg="4">
                        <img src='/logo.png' className={styles.logo}
                     />
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
    )
}
