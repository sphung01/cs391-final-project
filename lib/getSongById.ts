// Worked on by Steven Phung
"use server"

export async function getSongById(id: number){
    const res = await fetch(`https://api.discogs.com/releases/${id}`);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
    } 
    else {
        return data;
    }
}