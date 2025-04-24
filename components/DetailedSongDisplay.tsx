import { SongProps } from "@/lib/types"
export default function DetailedSongDisplay({song}: SongProps) {
    return(
        <>
            <h1>Testing: {song.title}</h1>
        </>
    )
}