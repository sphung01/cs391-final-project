// Worked on by Abdulrhman Alharbi and Julian Lim Jun Ren
"use client";
import AlbumList from "@/components/AlbumList";
import {getAlbumsByGenre} from "@/lib/getAlbumsByGenre"
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {Album} from "@/lib/types";

function addtoHistory(albums: Album[]) {
    const stored = localStorage.getItem("history");
    const storedhistory = stored ? JSON.parse(stored) : [];

    const newhistory = [...albums, ...storedhistory];

    //create a set that contains unique ids only - used to check if an id has been seen before
    const idset = new Set<number>();

    //if the id of the album has been seen before, do not add it to the array
    const unique = newhistory.filter(album => {
        if (idset.has(album.id)) {
            return false;
        }
        idset.add(album.id);
        return true;
    });

    localStorage.setItem("history", JSON.stringify(unique));
}

export default function PlaylistPage() {
    const mainStyling = "min-h-screen w-full flex flex-col items-center py-[4vh]";
    const params = useParams();
    const searchParams = useSearchParams();
    
    const [albums, setAlbums] = useState<Album[]>([]);
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
                        setAlbums(data.results);
                        addtoHistory(data.results);
                    } else {
                        setError("No songs found");
                    }
                    setLoading(false);
                })
            .catch((e: Error)=> {
                setError(e.message);
                setLoading(false); 
            });
    }, [numResults, genre]);

    

    return (
        <main className={mainStyling}>
            <h1 className="text-[calc(3px+1.5vw)] mb-[2vh]">{loading ? "Generating albums..." : error ? error : `Albums generated for: ${genre}`}</h1>
            <AlbumList albums={albums} />
        </main>
    )

}