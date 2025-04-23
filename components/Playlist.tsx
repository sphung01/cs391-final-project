//By Abdulrhman Alharbi

import SongComponent from "./SongComponent";
import { Song } from "@/lib/types";

export default function Playlist({songs}: {songs: Song[]}) {
    return (
        <div>
            {
                songs.map((song, index) => (
                    <SongComponent key={index} {...song} />
                ))
            }
        </div>
    );
}