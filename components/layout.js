import NavBar from "./navbar"
import Footer from "./footer";
import Head from 'next/head'
import { Name } from '../lib/constants'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>{Name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout