// Worked on by Steven Phung
"use client";
import { useParams } from "next/navigation";
import DetailedSongDisplay from "@/components/DetailedSongDisplay";

export default function SongPage() {
    const params = useParams();
    const { song } = params

    return(
        <DetailedSongDisplay />
    )
}
