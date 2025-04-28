// Worked on by Steven Phung

"use client" // For useState and createContext to work

import { createContext, useState } from 'react'

interface ModeType { // An interface to organize state and function 
    /* 
        In this interface, we create two keys to store values in their category.
        "state" will store variables that uses mainly "useState()".
        "function" will store functions that triggers events when called.
    */
    state: {
        mode: string;
    };
    function: {
        changeToDark: () => void;
        changeToLight: () => void;
    };
}

// Needed to be ModeType or undefined. This is important to do when using multiple types
export const ModeContext = createContext<ModeType | undefined>(undefined);

/* 
    The ModeProvider takes a parameter of the "children". The "children" are components
    that will be nested inside the ThemeProvider component in layout.tsx.
*/
const ModeProvider = ({children}: {children: React.ReactNode}) => {
    // This is in charge of setting light or dark mode.
    const [mode, setMode] = useState("dark");

    // When the button is pressed, this function will change to dark mode.
    const changeToDark = () => {
        setMode("dark");
    };

    // When the button is pressed, this function will change to light mode.
    const changeToLight = () => {
        setMode("light");
    };

    // After creating the three above, we store it inside myModeContext and provide it to other nested components
    const myModeContext: ModeType = {
        state: {
            mode
        },
        function: {
            changeToDark,
            changeToLight,
        },
    };

    return(
        // This will provide everything that was initialized here.
       <ModeContext.Provider value={myModeContext}>
            {/* 
                Nested children in div tag because we want to change the background color in every page
                to avoid hardcoding.
            */}
            <div className={`${mode} anim`}>{children}</div>
       </ModeContext.Provider>
    )
}

export default ModeProvider