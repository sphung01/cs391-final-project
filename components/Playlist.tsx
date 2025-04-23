//By Abdulrhman Alharbi

import Song from "./Song";
import { SongProps } from "@/lib/types";

export default function Playlist({songs}: {songs: SongProps[]}) {
    return (
        <div>
            {
                songs.map((song, index) => (
                    <Song  key={index} {...song} />
                ))
            }
        </div>
    );
}