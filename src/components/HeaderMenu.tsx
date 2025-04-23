import {NavLink} from "react-router";
import routes from "../routes.jsx";
import {useTheme} from "../contexts/ThemeContext.tsx";
import { AiFillMoon } from "react-icons/ai";
import {FC} from "react";


const HeaderMenu: FC = () =>{
    const { toggleTheme }= useTheme('dark');
    return(
        <div className="header-menu">
            <button onClick={toggleTheme}><AiFillMoon /></button>
            <ul className="header-menu-list">
                {routes.map((route) =>
                    <li key={route.path}>
                        <NavLink to={`${route.path}`}>{route.label}</NavLink>
                    </li>)}

            </ul>

        </div>

    )
}

export default HeaderMenu;
