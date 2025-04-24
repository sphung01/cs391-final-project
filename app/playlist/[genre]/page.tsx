import Playlist from "@/components/Playlist";
import {getSongs} from "@/lib/getSongs"
import {redirect} from "next/navigation";


const mainStyling = "min-h-screen w-full flex justify-center items-center pt-40";

export default async function PlaylistPage
({
    params,
 }:
 {
     params: Promise<{genre: string}>
 }) {

    const { genre } = await params;
    console.log(genre);


    const result = await getSongs(genre);
    if (!result || result.length === 0) {
        redirect("/");
    }

    return (
        <main className={mainStyling}>
            <Playlist songs={result.results} />
        </main>
    )

}