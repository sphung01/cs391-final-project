//Worked on by Abdulrhman Alharbi
"use client"
//localstorage can only be used client side

import AlbumList from "@/components/AlbumList";

const mainStyling = "min-h-screen w-full flex flex-col items-center py-[4vh]";

export default function HistoryPage() {
    const stored = localStorage.getItem("history");
    const history = stored ? JSON.parse(stored) : [];   //array is stored as string, so it needs to be converted back

    return (
        <main className={mainStyling}>
            <h1 className="text-[calc(3px+1.5vw)] mb-[2vh]">{!history.length ? "History empty" : history.length + " albums found in history"}</h1>
            <AlbumList albums={history} />
        </main>
    )
}
