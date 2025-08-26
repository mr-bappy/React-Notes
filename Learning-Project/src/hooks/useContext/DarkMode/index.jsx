import { use } from "react";
import { useState } from "react";
import { createContext } from "react"


export const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {

    const [theme, setTheme] = useState("dark");
    
    function handleToggleTheme(){
        setTheme((prevTheme) => prevTheme==="dark"?"light":"dark");
    }

    return <DarkModeContext.Provider value={{theme, handleToggleTheme}}>
        {children}
    </DarkModeContext.Provider>
}


export const DarkMode = () => {

    const {theme, handleToggleTheme} = use(DarkModeContext);

    return (
        <div
        className={`h-screen w-screen flex flex-col justify-center items-center ${theme==='dark'?'!bg-white':'!bg-black'}`}
        >
            <h1
            className={`${theme==='dark'?'!text-black':'!text-white'}`}
            >Toggle Dark Mode Project in React + Tailwind</h1>
            <button 
            className="text-white text-[30px]"
            onClick={handleToggleTheme}
            >
                Switch to {theme} Mode
            </button>
        </div>
    )
}