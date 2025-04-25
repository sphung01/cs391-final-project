// Worked on by Steven Phung

"use client" // For useState and createContext to work

import { createContext, useState } from 'react'

interface ModeType { // An interface to organize state and function 
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

const ModeProvider = ({children}: {children: React.ReactNode}) => {
    const [mode, setMode] = useState("dark");

    const changeToDark = () => {
        setMode("dark");
    };

    const changeToLight = () => {
        setMode("light");
    };

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