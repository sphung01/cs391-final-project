//By Abdulrhman Alharbi

import SongComponent from "./SongComponent";
import { Song } from "@/lib/types";

export default function Playlist({songs}: {songs: Song[]}) {
    console.log(songs);

    return (
        <div className="flex flex-col gap-9">
            {
                songs.map((song, index) => (
                    <SongComponent key={index} song={song} />
                ))
            }
        </div>
    );
}