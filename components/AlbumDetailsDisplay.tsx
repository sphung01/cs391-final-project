// Implemented by Steven Phung

import { AlbumInfo } from "@/lib/types"
export default function AlbumDetailsDisplay(props: {album: AlbumInfo | undefined}) {
    return(
        <>
            <h1>Testing: {props.album?.title}</h1>
            <h1>Testing: {props.album?.country}</h1>
        </>
    )
}