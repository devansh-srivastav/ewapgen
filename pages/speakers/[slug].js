import { useRouter } from 'next/router'
import { Speakers } from '../../lib/speakers';
import SpeakerAboutPage from '../../components/speaker_page'


const SpeakerPage = () => {
    const router = useRouter()
    const { slug } = router.query
    let speaker = Speakers.find(obj => obj.link === slug)
    console.log([slug])

    return (
        <div>
            <SpeakerAboutPage
                key={speaker?.link}
                name={speaker?.name}
                imageUrl={speaker?.imageUrl}
                title={speaker?.title}
                company={speaker?.company}

            />
        </div>
    )
}

export default SpeakerPage
