// Worked on by Abdulrhman Alharbi and Julian Lim Jun Ren
"use client";
import Playlist from "@/components/Playlist";
import {getAlbumsByGenre} from "@/lib/getAlbumsByGenre"
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Song } from "@/lib/types";

export default function PlaylistPage() {
    const mainStyling = "min-h-screen w-full flex flex-col items-center py-[4vh]";
    const params = useParams();
    const searchParams = useSearchParams();
    
    const [songs, setSongs] = useState<Song[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // get genre and requested number of albums from params
    const genre = decodeURIComponent(params.genre as string);
    const numResults = searchParams.get("numResults");

    useEffect(() => {
        console.log("Fetching songs for genre: ", genre);
        getAlbumsByGenre(decodeURIComponent(genre), numResults as string)
            .then((data)=>{
                    if (data) {
                        setSongs(data.results);
                    } else {
                        setError("No songs found");
                    }
                    setLoading(false);
                })
            .catch((e: Error)=> {
                setError(e.message);
                setLoading(false); 
            });
    }, [genre]);

    

    return (
        <main className={mainStyling}>
            <h1 className="text-[calc(3px+1.5vw)] mb-[2vh]">{loading ? "Generating playlist..." : error ? error : `Playlist generated for: ${genre}`}</h1>
            <Playlist songs={songs} />
        </main>
    )

}