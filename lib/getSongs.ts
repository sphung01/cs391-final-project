//Written by Julian Lim Jun Ren
/* 
    Server is passed the genre from the client, fetches the songs from the API, and returns the songs to the client.
*/
"use server"
import { Song } from "./types";

if (!process.env.GENIUS_API_KEY || !process.env.DISCOGS_API_KEY) {
    throw new Error('Missing api key environment variable');
}
const DISCOGS_API_KEY: string = process.env.DISCOGS_API_KEY;
const DISCOGS_API_URL: string = 'https://api.discogs.com';

/*tried to randomise query but the results are inconsistent*/
function generateRandomQuery() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const length = Math.floor(Math.random() * 3) + 1; //Math.floor rounds the random number down to the nearest integer, Math.random * 6 generates a random number between 0 and 5. +1 to make it between 1 and 6
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

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
    const res = await fetch(`${DISCOGS_API_URL}/database/search?q=&genre=${genre}&token=${DISCOGS_API_KEY}`);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
    } else if (data.results.length === 0) {
        throw new Error('No songs found for this genre');
    } else {
        data.results = pickRandomSongs(data.results);
        console.log(data);
        return data;
    }
}