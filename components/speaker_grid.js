import Link from 'next/Link'

let speak = [
    {
        id: 1,
        name: 'Akansha'
    },
    {
        id: 2,
        name: 'Devansh'
    }
]

export default function SpeakerGrid(){
    return(
        <div>
            {speak.map(speaker => (
                <Link href={`/speakers/${speaker.name}`}>
                    <a>
                        <p>{speaker.name}</p>
                    </a>
                </Link>
            ))}
        </div>
    )
}