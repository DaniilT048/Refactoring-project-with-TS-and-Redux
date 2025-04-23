import HeaderMenu from "./HeaderMenu.tsx";
import {Outlet} from "react-router";
import FooterText from "./FooterText.tsx";
import {ThemeProvider} from "../contexts/ThemeContext.tsx";

const Layout = () =>{

    return (
        <ThemeProvider>
            <div className="layout-wrapper">
                <HeaderMenu/>
                <div className="content">
                    <Outlet/>
                </div>
                <FooterText/>
            </div>
        </ThemeProvider>
    )


}

export default Layout;