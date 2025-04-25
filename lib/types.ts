
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

export type AlbumInfo = {
    title: string;
    thumb: string;
    country: string;
}

export interface AlbumInfoProps {
    album: AlbumInfo;
}