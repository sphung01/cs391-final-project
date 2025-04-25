//By Abdulrhman Alharbi

import AlbumComponent from "./AlbumComponent";
import { Album } from "@/lib/types";

export default function AlbumList({albums}: {albums: Album[]}) {
    console.log(albums);

    return (
        <div className="flex flex-col gap-9">
            {
                albums.map((album, index) => (
                    <AlbumComponent key={index} album={album} />
                ))
            }
        </div>
    );
}