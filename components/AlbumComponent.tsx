//Worked on by Abdulrhman Alharbi
//Styling done by Julian Lim Jun Ren and Abdulrhman Alharbi 
/* 
    This component each represents the display for an album in the list of albums generated. 
    The styling is done using Tailwind CSS classes. 
    Julian is responsible for the spacing, sizing, and organisational styling.
    Abdulrhman is responsible for the color choices, hover effects, and general interactivity.
    Abdulrhman is also responsible for the code logic.
*/
import {AlbumProps} from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

const altAlbumContainerStyling = "flex flex-col w-[40vw] sm:w-[20vw] p-4 rounded-2xl shadow-lg bg-[#e9ecef] hover:bg-[#dee2e6] hover:shadow-[0px_0px_15px_2px_#dee2e6] hover:scale-102 transition "
const altAlbumCoverStyling = "w-full aspect-square rounded drop-shadow-lg overflow-hidden object-cover"
const altAlbumNameStyling = "text-lg font-bold text-black truncate tracking-wide";
const altArtistNameStyling = "text-sm italic text-gray-600 truncate";
const altAlbumSubtitleStyling = "text-xs text-gray-400 text-center truncate tracking-tight";
const altAlbumImgTitleContainerStyling = "flex flex-col items-center w-full"
const altAlbumTitleContainerStyling = "flex flex-col w-full my-[1vh] text-center"


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
            className={altAlbumContainerStyling}
        >
            {/* img + title container */}
            <div
                className={altAlbumImgTitleContainerStyling}
            >
                <Image src={album.cover_image} alt={`cover of ${album.title}`} className={altAlbumCoverStyling} width={100} height={100}/>
                <div className={altAlbumTitleContainerStyling}>
                    <h2 className={altAlbumNameStyling}>{albumname}</h2>
                    <p className={altArtistNameStyling}>{artist}</p>
                </div>
            </div>
            <p className={altAlbumSubtitleStyling}>
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