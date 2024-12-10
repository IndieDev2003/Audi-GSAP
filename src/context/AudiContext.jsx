import { createContext, useEffect, useState } from "react";
import gsap from "gsap";

// Create the context
export const AudiContext= createContext();

// Define the context provider component
 const AudiContextProvider = ({ children }) => {
   const [theme, setTheme] = useState("dark");
   
  const value = {
    theme,
    setTheme,
    
  };

  return <AudiContext.Provider value={value}>{children}</AudiContext.Provider>;
};

export default AudiContextProvider;
