
// Written by Julian Lim Jun Ren
//Album type is used for retrieval of album data by genre
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

//AlbumInfo type is used for retrieval of album data by id, the response format is different from Album
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