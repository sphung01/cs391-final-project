// Worked on by Steven Phung

/*
    Added a footer at the bottom of the page
*/

import Link from "next/link"; 

export default function Footer(){
    return(
        <div className="">
            {/* The credits link leads you to the about page to show developers */}
            <p className="">All Rights Reserved by AlbumDiscoveryDevs: <Link href="/about">Credits</Link> &#169;</p>
        </div>
    );
}