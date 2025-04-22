import Link from "next/link"; 

export default function Footer(){
    return(
        <div className="bg-black">
            <p className="text-white">All Rights Reserved by PlaylistGeneratorDevs: <Link href="">Credits</Link> &#169;</p>
        </div>
    );
}