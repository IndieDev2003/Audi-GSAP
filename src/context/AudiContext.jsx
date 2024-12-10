import { createContext, useEffect, useState } from "react";
import gsap from "gsap";

// Create the context
export const AudiContext= createContext();

// Define the context provider component
 const AudiContextProvider = ({ children }) => {
   const [theme, setTheme] = useState("dark");
   function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
   
  const value = {
    theme,
    setTheme,
    topFunction
    
  };

  return <AudiContext.Provider value={value}>{children}</AudiContext.Provider>;
};

export default AudiContextProvider;
