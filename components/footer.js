import { Name } from '../lib/constants'
import { Link } from 'next/link'

export default function Footer() {
    return (
        <footer>
            <p className='footer'>
                &copy; {new Date().getFullYear()} Copyright: {Name}
            </p>
        </footer>
    )
}