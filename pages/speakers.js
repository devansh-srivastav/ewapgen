import Link from 'next/link'
import SpeakerGrid from '../components/speaker_grid'

export default function Speakers(){
    return(
        <div>
            <h2 className='page-title'><strong>Speakers</strong></h2>
            <p className='page-sub-title'>Keynote and Distinguished Speakers jo bakwaas karke sabko bore karenge</p>
            <SpeakerGrid />
        </div>
    )
}