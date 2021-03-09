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
                        <p className={styles.bio}>{organizer.message}</p>
                    </div>
                </div>
            </div>
            <div className='form'>
                <form>
                    <h3 className="text-center"><strong>Get in Touch</strong></h3>
                    <div className="grey-text">
                        <MDBInput label="Your name" className='form-control' icon="user" group type="text" validate error="wrong"
                            success="right" />
                        <MDBInput label="Your email" className='form-control' icon="envelope" group type="email" validate error="wrong"
                            success="right" />
                        <MDBInput label="Subject" className='form-control' icon="tag" group type="text" validate error="wrong" success="right" />
                        <MDBInput type="textarea" className='form-control' rows="2" label="Your message" icon="pencil-alt" />
                    </div>
                    <div className="text-center">
                        <MDBBtn outline color="white">
                            Send
                            <MDBIcon far icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                    </div>
                </form>
            </div>
        </div>
    )
}