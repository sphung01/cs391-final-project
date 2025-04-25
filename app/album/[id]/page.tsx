// Worked on by Steven Phung
"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import AlbumDetailsDisplay from "@/components/AlbumDetailsDisplay";
import { AlbumInfo } from "@/lib/types";
import { getAlbumById } from "@/lib/getAlbumById";

export default function SongPage() {
    const mainStyling = "min-h-screen w-full flex flex-col items-center py-[4vh]";
    const [album, setAlbum] = useState<AlbumInfo>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const params = useParams();
    const id = Number(params.id);

    useEffect(() => {
        console.log("Fetching songs for id: ", id);
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
    }, []);




    return(
        <main className={mainStyling}>
            <h1 className="text-[calc(3px+1.5vw)] mb-[2vh]">{loading ? "Obtaining info on the song..." : error ? error : `Fetching data completed!`}</h1>
            <AlbumDetailsDisplay album={album}/>
        </main>
    )
}
