
// Written by Julian
export type Song = {
    id: number;
    title: string;
    cover_image: string;
    year: string;
    country: string;
    genre: string[];
    style: string[];
} 

export interface SongProps {
    song: Song;
}

export type SongInfo = {
    title: string;
    thumb: string;
    year: string;
    country: string;
    genre: string[];
    style: string[];
}

export interface SongInfoProps {
    song: SongInfo;
}