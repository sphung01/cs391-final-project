// Worked on by Steven Phung
"use server"

export async function getAlbumById(id: number){
    /* 
        This function will fetch data on whatever album was clicked.
        We get the info by ID and return the data back to the dynamic routing
        page album/[id].
    */
    const res = await fetch(`https://api.discogs.com/releases/${id}`);
    if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
    } else {
        const data = await res.json();
        return data;
    }
}