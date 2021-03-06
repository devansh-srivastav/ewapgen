import Link from 'next/Link'

let sponsor = [
    {
        id: 1,
        name: 'Coke'
    },
    {
        id: 2,
        name: 'Real'
    }
]

export default function SponsorGrid(){
    return(
        <div>
            {sponsor.map(sponsors => (
                <Link href={`/sponsors/${sponsors.name}`}>
                    <a>
                        <p>{sponsors.name}</p>
                    </a>
                </Link>
            ))}
        </div>
    )
}
