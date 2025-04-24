//Written by Julian Lim Jun Ren
/* 
    Server is passed the genre from the client, fetches the songs from the API, and returns the songs to the client.
*/
"use server"
import { Song } from "./types";

if (!process.env.DISCOGS_API_KEY) {
    throw new Error('Missing api key environment variable');
}
const DISCOGS_API_KEY: string = process.env.DISCOGS_API_KEY;
const DISCOGS_API_URL: string = 'https://api.discogs.com';

/*constructing a randomised selection of songs from the full fetched array of songs produces better results than query randomising*/
function pickRandomSongs(results: Song[]) {
    const count: number = 10;
    const selectedSongs: Song[] = [];
    if (results.length < count) {
        return results;
    }
    while (selectedSongs.length < count) {
        const randomIndex = Math.floor(Math.random() * results.length);
        if (!selectedSongs.includes(results[randomIndex])) { //javascript array method to check if the song is already in the selectedSongs array
            selectedSongs.push(results[randomIndex]); //javascript array method to add the song to the selectedSongs array
        }
    }
    return selectedSongs;
}

export async function getSongs(genre: string){
    const res = await fetch(`${DISCOGS_API_URL}/database/search?genre=${genre}&per_page=100&token=${DISCOGS_API_KEY}`);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
    } else {
        console.log(data.results);
        data.results = pickRandomSongs(data.results);
        return data;
    }
}