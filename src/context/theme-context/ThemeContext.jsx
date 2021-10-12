import React, { createContext, useState } from "react";




export const ThemeContext = createContext({});


export const ThemeContextProvider = (prosp) => {

  const [activeTheme, setActiveTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{activeTheme, setActiveTheme}}>
      {prosp.children}
    </ThemeContext.Provider>
  )
}