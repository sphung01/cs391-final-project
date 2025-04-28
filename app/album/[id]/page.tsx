// Worked on by Steven Phung
"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import AlbumDetailsDisplay from "@/components/AlbumDetailsDisplay";
import { AlbumInfo } from "@/lib/types";
import { getAlbumById } from "@/lib/getAlbumById";


/* 
    This page will display the info about the album.
    You will see:
    - Name of the album
    - Artist
    - Tracklist with the Total length and average of how long the songs are
*/
export default function AlbumPage() {
    const mainStyling = "min-h-screen w-full flex flex-col items-center py-[4vh]";
    const [album, setAlbum] = useState<AlbumInfo>(); // This will store the data of the album with that ID
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const params = useParams(); // This will extract the ID in the url path "album/[id]"
    const id = Number(params.id);

    useEffect(() => {
        console.log("Fetching songs for id: ", id);
        /* 
            We will get the info of the album by ID. Then, if the fetching was
            successful and the data exists, set the data to the album variable.
            Otherwise, display and error that the album might not exist or
            fetching failed.
        */
        getAlbumById(id)
            .then((data)=>{
                    if (data) {
                        setAlbum(data);
                    } else {
                        setError("No song found");
                    }
                    setLoading(false);
                })
            .catch((e: Error)=> {
                setError(e.message);
                setLoading(false); 
            });
    }, [id]);




    return(
        <main className={mainStyling}>
            <h1 className="text-[calc(3px+1.5vw)] mb-[2vh]">{loading ? "Obtaining info on the song..." : error ? error : `Fetching data completed!`}</h1>
            <AlbumDetailsDisplay album={album}/> {/* Pass the album info to this component */}
        </main>
    )
}
