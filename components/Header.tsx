// Worked on by Steven Phung

/* 
    In the Header.tsx component, it's basically a full-width bar that
    has the title and the tabs (Like the "about" page) that leads to a different page
*/

"use client"
import Link from "next/link";
import { useContext } from "react";
import { ModeContext } from "@/components/ThemeProvider";

/* 
    This function returns a Header component for layout.tsx.
    The header will allow you to navigate to:
        - About page if the About tab was clicked
        - Home screen if the Home tab was clicked
    By using the Link component, we can easily render pages.
*/
export default function Header() {
    // Styling Attributes to help keep the code clean and good for resuability
    const linkStyling = "p-1 m-2 text-xl hover:underline text-white";
    const headerStyling = "flex justify-between items-center h-20 bg-black";
    const titleStyling = "text-4xl font-semibold p-4 text-white";
    const navStyling = "p-2 m-4";


    // Used "useContext" to get the mode, dark function, and light function.
    const myContext = useContext(ModeContext);

    const modeHandling = () => {
        if(myContext?.state.mode === "dark") {
            myContext?.function.changeToLight();
        } else {
            myContext?.function.changeToDark();
        }
    }


    // Return the header with title, home link, and about link
    return (
        <header className={headerStyling}>
            <h2 className={titleStyling}>AlbumDiscovery</h2>
            {/* Created a button here to change the mode */}
            <button onClick={modeHandling} className="border-groove border-white border-4 rounded-2xl w-20 cursor-pointer">
                {myContext?.state.mode === "dark" ? "🌙" : "☀️"}
            </button>
            <nav className={navStyling}>
                <Link href="/" className={linkStyling}>
                Home
                </Link>
                <Link href="/about" className={linkStyling}>
                About
                </Link>
            </nav>
        </header>
        );
}