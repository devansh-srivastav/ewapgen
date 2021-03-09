import Timeline from '../components/timeline'
import { Time } from '../lib/constants'
import Link from 'next/link'

export default function schedule() {
  return (
    <div>
      <h2 className='page-title'><strong>Schedule</strong></h2>
      <p className='page-sub-title'>The following events would be conducted at {Time}</p>
      <br /><br />
      <Timeline />
      <br /><br />
      <p className='page-sub-title'>For details regarding talks, please visit <Link href='/speakers'><a className='link'><em>Speakers</em></a></Link> page.</p>
    </div>
  )
}
