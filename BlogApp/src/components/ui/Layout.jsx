import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import { lightTheme } from "./Theme";
import Footer from "./Footer";
import { Container } from "@material-ui/core";
import { useStyles } from "../Style";


const Layout = ({ children }) => {
    const classes=useStyles();
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Container className={classes.blankPage}>     
                    {children}
            </Container>
            <Footer className={classes.footer}/>
        </ThemeProvider>
    );
}
export default Layout;

