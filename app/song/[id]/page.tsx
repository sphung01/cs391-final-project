// Worked on by Steven Phung
"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import DetailedSongDisplay from "@/components/DetailedSongDisplay";
import { Song } from "@/lib/types";
import { getSongById } from "@/lib/getSongById";

export default function SongPage() {
    const mainStyling = "min-h-screen w-full flex flex-col items-center py-[4vh]";
    const [song, setSong] = useState<Song[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const params = useParams();
    const id = Number(params);

    useEffect(() => {
        console.log("Fetching songs for id: ", id);
        getSongById(id)
            .then((data)=>{
                    if (data) {
                        setSong(data);
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
            <DetailedSongDisplay song={song}/>
        </main>
    )
}
