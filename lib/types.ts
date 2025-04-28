
// Written by Julian
export type Album = {
    id: number;
    title: string;
    cover_image: string;
    year: string;
    country: string;
    genre: string[];
    style: string[];
} 
export interface AlbumProps {
    album: Album;
}


type Track = {
    duration: string;
    position: string;
    title: string;
    type_: string;
}
type Artist = {
    id: number;
    name: string;
    role: string;
}
export type AlbumInfo = {
    title: string;
    thumb: string;
    tracklist: Track[];
    artists: Artist[];
}
export interface AlbumInfoProps {
    album: AlbumInfo;
}