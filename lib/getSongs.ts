//Written by Julian Lim Jun Ren
/* 
    Server is passed the genre from the client, fetches the songs from the API, and returns the songs to the client.
*/
"use server"

if (!process.env.GENIUS_API_KEY || !process.env.DISCOGS_API_KEY) {
    throw new Error('Missing api key environment variable');
}
const DISCOGS_API_KEY: string = process.env.DISCOGS_API_KEY;
const DISCOGS_API_URL: string = 'https://api.discogs.com';

function generateRandomQuery() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const length = Math.floor(Math.random() * 3) + 1; //Math.floor rounds the random number down to the nearest integer, Math.random * 6 generates a random number between 0 and 5. +1 to make it between 1 and 6
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export async function getSongs(genre: string){
    const randomiser = generateRandomQuery();
    try {
        const res = await fetch(`${DISCOGS_API_URL}/database/search?q=${randomiser}&genre=${genre}&token=${DISCOGS_API_KEY}`);
        const data = await res.json();
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        } else if (data.results.length === 0) {
            throw new Error('No songs found for this genre');
        } else {
            data.results = data.results.map((song: any) => ({
                id: song.id,
                title: song.title,
                cover_image: song.cover_image,
                year: song.year,
                country: song.country,
                genre: song.genre[0] || 'Unknown',
            }));
        }

        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}