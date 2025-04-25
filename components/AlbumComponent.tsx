//Worked on by Abdulrhman Alharbi

import {AlbumProps} from "@/lib/types";
import Link from "next/link";

const AlbumStyling = "flex flex-col gap-2 max-w-3xl min-w-[30vw] w-full p-4 rounded-2xl shadow-lg bg-[#dee2e6] hover:bg-[#e9ecef] hover:shadow-[0px_0px_15px_2px_#e9ecef4d] transition "

function ArtistTitle(title: string): {artist: string, albumname: string} {
    const seperator = title.indexOf("-");   //split on first -
    if (seperator === -1) {
        return { artist: "Unknown", albumname: title };
    }

    const artist = title.slice(0, seperator);
    const albumname = title.slice(seperator + 2);

    return { artist, albumname };
}

export default function AlbumComponent({ album }: AlbumProps) {
    const { artist, albumname } = ArtistTitle(album.title);

    return (
        <Link
            href={`/album/${album.id}`}
            className={AlbumStyling}
        >
            {/* img + title container */}
            <div
                className="flex items-center gap-4"
            >
                <img src={album.cover_image} alt={`cover of ${album.title}`} className="w-20 h-20 rounded shadow-lg" />
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold text-black">{albumname}</h2>
                    <p className="text-sm text-gray-500">{artist}</p>
                </div>
            </div>
            <p className="text-sm text-gray-500 ml-10">
                {
                    [album.year, album.country, ...album.genre]
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