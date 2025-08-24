import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const getInitialTheme = () =>{
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("theme"); // if user set theme previously
            if (stored) {
                return stored;
            }
            // this is for taking from system settings 
            window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }

        return "light";
    }

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(()=>{
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    },[theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
} 