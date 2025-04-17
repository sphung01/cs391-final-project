/* 
    In the Header.tsx component, it's basically a full-width bar that
    has the title and the tabs (Like the "about" page) that leads to a different page
*/

import Link from "next/link"; 

/* 
    This function returns a Header component for layout.tsx.
    The header will allow you to navigate to:
        - About page
        - Home screen if the title was clicked on
    By using the Link component, we can easily render pages.
*/
export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 bg-black">
        <Link href={`/`}>
            <h2 className="text-4xl text-white font-semibold p-4">URL Shortener Website</h2>
        </Link>
    </header>
  );
}