import {Context, createContext, useContext, useEffect, useState} from "react";

// @ts-ignore
const ThemeContext: Context<any> = createContext()

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }:any) => {
    const [theme, setTheme] = useState('dark');

    useEffect(():void => {
        const root: HTMLElement | null = document.getElementById("root");
        // @ts-ignore
        root.classList.remove("light-theme", "dark-theme");
        // @ts-ignore
        root.classList.add(`${theme}-theme`);
    },[theme]);

    const toggleTheme = () => {
        setTheme((prev) => prev === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}




