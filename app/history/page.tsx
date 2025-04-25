// Worked on by Abdulrhman Alharbi
// Genre filtering done by Julian Lim Jun Ren
// Delete button done by Steven Phung
"use client"
//localstorage can only be used client side
import DropdownComponent from "@/components/DropdownComponent";
import AlbumList from "@/components/AlbumList";
import {useEffect, useState} from "react";

const mainStyling = "min-h-screen w-full flex flex-col items-center py-[4vh]";
const dropdownStyling = "min-h-[7vh] text-sm sm:text-[calc(3px+1vw)] mb-[2vh] text-center w-full py-[1vh] rounded-lg border-4 focus:outline-none focus:ring-2"
const deleteButtonStyling = "min-h-[7vh] text-sm sm:text-[calc(3px+1vw)] mb-[2vh] bg-red-600 font-bold py-[1vh] px-[2vw] rounded-lg drop-shadow-lg active:bg-red-900 hover:bg-red-800 transition"
const filterOptionsDivStyling = "flex flex-col sm:flex-row justify-center mb-[2vh] sm:mb-[4vh] sm:gap-[1vw]"

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

    const deleteHistory = () => {
        localStorage.clear();
        setHistory([]);
    }


    return (
        <main className={mainStyling}>
            <h1 className="text-xl sm:text-[calc(3px+1.5vw)] mb-[2vh]">{!history.length ? "History empty" : history.length + " albums found in history"}</h1>
            <div className={filterOptionsDivStyling}>
                <button className={deleteButtonStyling} onClick={deleteHistory}>
                    Delete History
                </button>
                <DropdownComponent optionName="Genre" styling={dropdownStyling} options={genres} choice={genre} setChoice={setGenre} />
            </div>
            <AlbumList albums={history} />
        </main>
    )
}
