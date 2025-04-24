import { SongInfoProps } from "@/lib/types"
export default function DetailedSongDisplay({song}: SongInfoProps) {
    return(
        <>
            <h1>Testing: {song.title}</h1>
            <h1>Testing: {song.country}</h1>
        </>
    )
}