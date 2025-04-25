//Worked on by Abdulrhman Alharbi

import AlbumComponent from "./AlbumComponent";
import { Album } from "@/lib/types";

const albumListStyling = "flex flex-col gap9";
const altAlbumListStyling = "flex flex-row flex-wrap justify-center gap-[2vw]";

export default function AlbumList({albums}: {albums: Album[]}) {
    console.log(albums);

    return (
        <div className={altAlbumListStyling}>
            {
                albums.map((album, index) => (
                    <AlbumComponent key={index} album={album} />
                ))
            }
        </div>
    );
}