import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import {JSX} from "react";


interface RoutesType {
    path: string;
    element: JSX.Element;
    label: string;
}

const routes: RoutesType[] = [
    {
        path: "/",
        element: <Home/>,
        label: "Home",
    },
    {
        path: "/about",
        element: <About/>,
        label: "About",
    },
    {
        path: "/contact",
        element: <Contact/>,
        label: "Contact",
    },
];

export default routes;