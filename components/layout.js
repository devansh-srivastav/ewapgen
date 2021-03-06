import NavBar from "./navbar"
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/react";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
    ...theme,
    breakpoints
};

const Layout=({children})=>{
    return(
        <>
            <ThemeProvider theme={newTheme}>
                <CSSReset />
                <NavBar />
            </ThemeProvider>
            {children}
        </>
    )
}

export default Layout