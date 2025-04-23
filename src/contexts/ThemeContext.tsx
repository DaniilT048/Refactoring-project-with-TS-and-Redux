import {createContext, ReactElement, ReactNode, useContext, useEffect, useState} from "react";

type Theme = "light" | "dark";
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const ThemeProvider = ({ children }: {children:ReactNode}):ReactElement => {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(():void => {
        const root = document.getElementById("root");
        if (root) {
            root.classList.remove("light-theme", "dark-theme");
            root.classList.add(`${theme}-theme`);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => prev === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}




