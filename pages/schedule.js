import Timeline from '../components/timeline'
import { Time } from '../lib/constants'

export default function schedule() {
  return (
    <div>
      <h2 className='page-title'><strong>Schedule</strong></h2>
      <p className='page-sub-title'>The following events would be conducted at {Time}</p>
      <br /><br />
      <Timeline />
    </div>
  )
}
