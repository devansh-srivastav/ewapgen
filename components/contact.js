import styles from '../styles/speaker-page.module.css';
import { MDBIcon, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact'
import { Organizer as organizer } from '../lib/organizer'

export default function ContactPage() {
    return (
        <div>
            <div className={styles.container}>
                <div style={{ minWidth: '300px' }}>
                    <img
                        alt={organizer.name}
                        title={organizer.name}
                        src={organizer.imageUrl}
                        className={styles.image}
                        loading="lazy"
                        height={300}
                        width={300}
                    />
                </div>
                <div className={styles['speaker-details']}>
                    <div>
                        <h2 className={styles.name}>{organizer.name}</h2>
                        <p className={styles.title}>
                            {`${organizer.title} @ `}
                            <span className={styles.company}>{organizer.company}</span>
                        </p>
                        <h2 className={styles['bio-header']}><strong><em>Message from Organizer</em></strong></h2>
                        <p className={styles.bio}>{organizer.bio}</p>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <MDBContainer className='form'>
                    <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <p className="h5 text-center mb-4">Write to us</p>
                                <div className="grey-text">
                                    <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                        success="right" />
                                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                        success="right" />
                                    <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                    <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                                </div>
                                <div className="text-center">
                                    <MDBBtn outline color="white">
                                        Send
                                    <MDBIcon far icon="paper-plane" className="ml-1" />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className={styles['talk-details']}>
                    <h3 className={styles['socials-header']}><strong>Get in touch</strong></h3>
                    <MDBIcon far icon='envelope' className={styles.icon}></MDBIcon><a href={`mailto:${organizer.email}`} className={styles.handle}>{organizer.email}</a>
                    <br /><br />
                    <MDBIcon fab icon='twitter' className={styles.icon}></MDBIcon><a href={`https://www.twitter.com/${organizer.twitter}`} className={styles.handle}>{organizer.twitter}</a>
                </div>
            </div>
        </div>
    )
}