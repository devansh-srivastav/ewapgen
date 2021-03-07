import { useRouter } from 'next/router'
import { Speakers } from '../../lib/speakers';

// function search(link) {
//     for (var i = 0; i < Speakers.length; i++) {
//         if (Speakers[i].link === link) {
//             return Speakers[i];
//         }
//     }
// }

const SpeakerPage = () => {
    const router = useRouter()
    const { slug } = router.query
    let speaker = Speakers.find(obj => obj.link === 'devansh-srivastav');
    console.log(slug)


    return (
        <div>
            {speaker.name} Page {' '} {slug}
        </div>
    )
}

export default SpeakerPage