import {NavLink} from "react-router";
import routes from "../routes.jsx";
// import {useTheme} from "../contexts/ThemeContext.tsx";
import { AiFillMoon } from "react-icons/ai";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {toggleTheme} from "../store/themeSlice.tsx";



const HeaderMenu: FC = () =>{
    const dispatch = useDispatch();
    return(
        <div className="header-menu">
            <button onClick={() => dispatch(toggleTheme())}><AiFillMoon/></button>
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
