import Link from 'next/link'
import SpeakerGrid from '../components/speaker_grid'

export default function Speakers(){
    return(
        <div>
            <h2 className='page-title'><strong>Speakers</strong></h2>
            <p className='page-sub-title'>Our keynote and distinguished speakers for exciting and inpiring talks.</p>
            <SpeakerGrid />
        </div>
    )
}