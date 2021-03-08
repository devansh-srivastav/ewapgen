// import { Name, Tagline } from '../lib/constants'
import Home from '../components/home'

export default function Index() {
  return (
    <div className='home-content'>
      {/* <main >
        <h1 className='event-title'>
          {Name}
        </h1>

        <p>
          {Tagline}
        </p>
        <img src='/speakers/akansha.png' width={300} height={300} /> 
      </main> */}
      <Home />
    </div>
  )
}
