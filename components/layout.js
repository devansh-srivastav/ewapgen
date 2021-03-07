import NavBar from "./navbar"
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/react";
import Footer from "./footer";
import Head from 'next/head'
import { Name } from '../lib/constants'

// const breakpoints = ["360px", "768px", "1024px", "1440px"];
// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];

// const newTheme = {
//     ...theme,
//     breakpoints
// };

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