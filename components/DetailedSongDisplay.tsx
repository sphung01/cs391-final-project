import { SongInfoProps } from "@/lib/types"
export default function DetailedSongDisplay({ song }: SongInfoProps) {
    return(
        <>
            <h1>Testing: {song.title}</h1>
            <h1>Testing: {song.country}</h1>
            <img src={song.thumb} alt={`cover of ${song.title}`} className="w-20 h-20 rounded shadow-lg" />
        </>
    )
}