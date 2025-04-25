// Worked on by Steven Phung

/* 
    In the Header.tsx component, it's basically a full-width bar that
    has the title and the tabs (Like the "about" page) that leads to a different page
*/

import Link from "next/link"; 

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

    // Return the header with title, home link, and about link
    return (
        <header className={headerStyling}>
            <h2 className={titleStyling}>AlbumsGenerator</h2>
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