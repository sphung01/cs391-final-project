import {SongProps} from "@/lib/types";
import Link from "next/link";

const SongStyling = "flex flex-col gap-2 max-w-3xl min-w-[30vw] w-full p-4 rounded-2xl shadow-lg bg-[#e9ecef] hover:bg-white hover:shadow-[0px_0px_15px_2px_rgba(255,255,255,0.3)] transition "

function ArtistTitle(title: string): {artist: string, songname: string} {
    const seperator = title.indexOf("-");   //split on first -
    if (seperator === -1) {
        return { artist: "Unknown", songname: title };
    }

    const artist = title.slice(0, seperator);
    const songname = title.slice(seperator + 2);

    return { artist, songname };
}

export default function SongComponent({ song }: SongProps) {
    const { artist, songname } = ArtistTitle(song.title);

    return (
        <Link
            href={`/song/${song.id}`}
            className={SongStyling}
        >
            {/* img + title container */}
            <div
                className="flex items-center gap-4"
            >
                <img src={song.cover_image} alt={`cover of ${song.title}`} className="w-20 h-20 rounded shadow-lg" />
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold text-black">{songname}</h2>
                    <p className="text-sm text-gray-500">{artist}</p>
                </div>
            </div>
            <p className="text-sm text-gray-500 ml-10">
                {
                    [song.year, song.country, ...song.genre]
                        .filter(e => e) //remove empty strings
                        .map((metadata, index, arr) => (
                            <span key={index}>
                            {metadata} {index < arr.length - 1 ? " - " : null}
                            </span>
                    ))
                }
            </p>
        </Link>
    )
}