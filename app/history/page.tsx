//Worked on by Abdulrhman Alharbi
//Genre filtering done by Julian Lim Jun Ren
"use client"
//localstorage can only be used client side
import DropdownComponent from "@/components/DropdownComponent";
import AlbumList from "@/components/AlbumList";
import {useEffect, useState} from "react";

const mainStyling = "min-h-screen w-full flex flex-col items-center py-[4vh]";
const dropdownStyling = "text-center w-full p-[1vh] rounded-lg border-4 border-white focus:outline-none focus:ring-2 my-[0.5vh] mb-[4vh]"

const genres = [
    "Blues",
    "Brass & Military",
    "Classical",
    "Electronic",
    "Folk, World, & Country",
    "Funk / Soul",
    "Hip-Hop",
    "Jazz",
    "Latin",
    "Non-Music",
    "Pop",
    "Reggae",
    "Rock",
    "Stage & Screen"
];

export default function HistoryPage() {
    const [genre, setGenre] = useState<string>("All");
    const [history, setHistory] = useState([]);

    useEffect(() => {
            const stored = localStorage.getItem("history");
            const history = stored ? JSON.parse(stored) : [];//array is stored as string, so it needs to be converted back
            const filteredHistory = history.filter((album: { genre: string }) => genre !== "All" ? album.genre.includes(genre) : true); 
            setHistory(filteredHistory);
        }, [genre]
    );

    return (
        <main className={mainStyling}>
            <h1 className="text-[calc(3px+1.5vw)] mb-[2vh]">{!history.length ? "History empty" : history.length + " albums found in history"}</h1>
            <DropdownComponent optionName="Genre" styling={dropdownStyling} options={genres} choice={genre} setChoice={setGenre} />
            <AlbumList albums={history} />
        </main>
    )
}
