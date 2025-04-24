import {NavLink} from "react-router";
import routes from "../routes.jsx";
// import {useTheme} from "../contexts/ThemeContext.tsx";
import { AiFillMoon } from "react-icons/ai";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {toggleTheme} from "../store/themeSlice.ts";
import {AppDispatch} from "../store/store.ts";



const HeaderMenu: FC = () =>{
    const dispatch: AppDispatch = useDispatch();
    const handleClickTheme = () =>{
        dispatch(toggleTheme())
    }

    return(
        <div className="header-menu">
            <button onClick={handleClickTheme}><AiFillMoon/></button>
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
