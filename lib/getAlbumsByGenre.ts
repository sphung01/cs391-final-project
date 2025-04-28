//Written by Julian Lim Jun Ren
/* 
    Server is passed the genre and number of albums to display from the client, fetches the albums from the API, and returns the randomised albums to the client.
*/
"use server"
import { Album } from "./types";

if (!process.env.DISCOGS_API_KEY) { //check if the discogs api key is provided
    throw new Error('Missing api key environment variable');
}
const DISCOGS_API_KEY: string = process.env.DISCOGS_API_KEY;
const DISCOGS_API_URL: string = 'https://api.discogs.com';

/*constructing a randomised selection of songs from the full fetched array of songs produces better results than query randomising*/
function pickRandomAlbums(results: Album[], numResults: number) {
    const count: number = numResults;
    const selectedAlbums: Album[] = [];
    if (results.length < count) { //if the number of fetched songs is less than the number of results user requested, return all songs
        return results;
    }
    while (selectedAlbums.length < count) {
        const randomIndex = Math.floor(Math.random() * results.length); //random number between 0 and the length of the results array, just picks a random album pretty much
        if (!selectedAlbums.includes(results[randomIndex])) { //javascript array method to check if the album is already in the selectedAlbums array, we don't want duplicates
            selectedAlbums.push(results[randomIndex]); //javascript array method to add the song to the selectedALbums array
        }
    }
    return selectedAlbums;
}

export async function getAlbumsByGenre(genre: string, numResults: string) {
    const res = await fetch(`${DISCOGS_API_URL}/database/search?genre=${genre}&type=release&per_page=100&token=${DISCOGS_API_KEY}`);
    if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
    } else {
        const data = await res.json();
        if (data.results.length === 0) {
            throw new Error(`No albums found for genre: ${genre}. Album generation aborted.`);
        } else {
            data.results = pickRandomAlbums(data.results, parseInt(numResults));
            // console.log(data.results);
            return data;
        }
    }
}