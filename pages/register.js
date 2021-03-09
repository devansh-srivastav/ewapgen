import Register from '../components/register'

export default function registerPage(){
    return(
        <div>
            <h2 className='page-title'><strong>Register</strong></h2>
            <p className='page-sub-title'>Register now to reserve your spot. We will get back to you shortly!</p>
            <Register />
        </div>
    )
}