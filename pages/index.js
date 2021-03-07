import { Name, Tagline } from '../lib/constants'

export default function Home() {
  return (
    <div>
      <main >
        <h1>
          {Name}
        </h1>

        <p>
          {Tagline}
        </p>
      </main>
    </div>
  )
}
