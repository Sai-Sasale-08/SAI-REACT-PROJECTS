import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProviderContext({children})   
{
    const[theme,settheme]=useState("light")
    const Toggletheme=()=>
    {
        settheme(theme=="light"?"dark":"light")
        
    }


    return(<ThemeContext.Provider value={{theme,Toggletheme}}>
        {children}
    </ThemeContext.Provider>)
} 