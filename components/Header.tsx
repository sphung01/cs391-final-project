// Worked on by Steven Phung
// Drop-down window, change active page color by Abdulrhman Alharbi
/* 
    In the Header.tsx component, it's basically a full-width bar that
    has the title and the tabs (Like the "about" page) that leads to a different page
*/

"use client"
import Link from "next/link";
import { useContext, useState } from "react";
import { ModeContext } from "@/components/ThemeProvider";
import MenuIcon from '@mui/icons-material/Menu';
import {usePathname} from "next/navigation";


/* 
    This function returns a Header component for layout.tsx.
    The header will allow you to navigate to:
        - About page if the About tab was clicked
        - Home screen if the Home tab was clicked
    By using the Link component, we can easily render pages.
*/
export default function Header() {
    // Styling Attributes to help keep the code clean and good for resuability
    const linkStyling           = "hidden md:block md:p-1 md:m-2 md:text-xl md:hover:text-green-500";
    const linkStyling_mobile    = "p-1 text-xl md:hover:text-green-500";
    const headerStyling = "flex flex-row justify-between items-center h-20 border-b-4 border-green-500";
    const titleStyling = "text-4xl font-semibold p-4 ";

    /* 
        Based off from quiz-6, we implemented a feature where if one of the tabs
        were clicked and active, the color changes conditionally. By using usePathname(),
        we are able to change the color depending on which tab is active or not.
    */
    const pathname = usePathname();

    // Used "useContext" to get the mode state, dark function, and light function.
    const myContext = useContext(ModeContext);

    /* 
        When the button is pressed, the mode switches depending 
        if the user was on dark or light mode.
    */ 
    const modeHandling = () => {
        if(myContext?.state.mode === "dark") {
            myContext?.function.changeToLight();
        } else {
            myContext?.function.changeToDark();
        }
    }

    /* 
        This checks if the hamburger menu is clicked, the
        navigation menu pops up to the user. This only works if user
        is on mobile.
    */
    const [menuOpen, setMenuOpen] = useState(false);
    const burgerHandler = () => {
        setMenuOpen(!menuOpen);
    }

    // Return the header with title, home link, and about link
    return (
        <header className={(myContext?.state.mode === "dark" ? "bg-black " : "bg-[#f0f0f0] ") + headerStyling}>
            <Link href="/" className={titleStyling}>
                AlbumDiscovery
            </Link>
            {/* Created a button here to change the mode */}

            {/* 
                In tailwind, we used sm and md. It helps keep the website be more responsive
                to both mobile and web users. 

                Let's say for this case, we are using md:flex. Any screen that is 768px or above will
                have flex in the header and appear on display for the user. But when the screen goes to 
                mobile size, we hide the navigations to create room for the hamburger menu. 
            */}

            {/* right */}
            <div className="hidden md:flex items-center gap-6">
                <nav className="flex gap-6">
                    <Link href="/" className={(pathname === "/" ? "text-green-500 " : "") + linkStyling}>Home</Link>
                    <Link href="/history" className={(pathname === "/history" ? "text-green-500 " : "") + linkStyling}>History</Link>
                    <Link href="/about" className={(pathname === "/about" ? "text-green-500 " : "") + linkStyling}>About</Link>
                </nav>
                {/* Handles light and dark mode */}
                <button onClick={modeHandling}
                        className={(myContext?.state.mode === "dark" ? "bg-[#1e1e1e] " : "bg-[#ffffff] ") + "px-2 py-1 text-lg ml-2 shadow-lg rounded-lg cursor-pointer mr-4"}>
                    {myContext?.state.mode === "dark" ? "☀️" : "🌙"}
                </button>
            </div>

            {/* Handles opening or closing navigation tab */}
            <button
                onClick={burgerHandler}
                className={(menuOpen ? "bg-green-500 " : "bg-black") + "block md:hidden px-2 py-1 h-full w-20 cursor-pointer"}
            >
                <MenuIcon className={
                    "text-xl"
                }/>
            </button>

            {/* 
                Opens the navigation tabs. This only works or becomes visible if
                user is on mobile.
            */}
            {menuOpen && (
                <nav
                    className={(myContext?.state.mode === "dark" ? "bg-black " : "bg-[#e1e1e1] ") + "md:hidden absolute top-20 p-4 shadow-lg flex flex-col space-y-2 z-50 w-full"}>
                    <Link href="/" className={(pathname === "/" ? "text-green-500 " : "") + linkStyling_mobile}>Home</Link>
                    <Link href="/history" className={(pathname === "/history" ? "text-green-500 " : "") + linkStyling_mobile}>History</Link>
                    <Link href="/about" className={(pathname === "/about" ? "text-green-500 " : "") + linkStyling_mobile}>About</Link>
                    <button onClick={modeHandling}
                            className={(myContext?.state.mode === "dark" ? "bg-[#1e1e1e]" : "bg-[#ffffff] ") + "mt-2 px-3 py-1 bg-[#1e1e1e] rounded-lg text-lg cursor-pointer"}>
                        {myContext?.state.mode === "dark" ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙"}
                    </button>
                </nav>
            )}
        </header>
    );
}
