/* done by Julian Lim Jun Ren
    This is where the form is created. 
    This form will take in whatever input the client provides.
    The server will retrieve and fetch that info and respond back to the client.
    In which case, should redirect the user to a different page depending on the genre.
*/

// Steven Phung: I have formatted where this form wraps the button and input field. Rest is up to you.
"use client"
import {getSongs} from "@/lib/getSongs"
import {useState} from "react"
import SubmitButton from "./SubmitButton";
import { Song } from "@/lib/types";




export default function UserInput() {
    /*styling*/
    const inputFormStyling = "flex flex-col items-center justify-center w-[50vw] h-[30vh] bg-green-500 rounded-3xl drop-shadow-lg]";
    const titleStyling = "text-[calc(3px+1.5vw)] font-semibold text-white my-[1vh]";
    const inputStyling = "w-full p-[1vh] rounded-lg border-4 border-white focus:outline-none focus:ring-2"

    const [genre, setGenre] = useState<string>("");
    const [songs, setSongs] = useState<Song[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(false);
        getSongs(genre)
            .then((data)=>{
                    console.log("Data fetched Successfully");
                    console.log(data);
                    if (data) {
                        setSongs(data.results);
                        console.log("Songs", songs)
                    } else {
                        setError("No songs found for this genre");
                    }
                    setLoading(false);
                })
            .catch((e: Error)=> {
                console.log("There was an error fetching data", e)
                setError(e.message);
            });
    };
    
    return(
        <div>
            <form onSubmit={handleSubmit} className={inputFormStyling}>
                <h1 className={titleStyling}>Playlist Generator</h1>
                <div className="flex flex-col my-[1vh] w-[50%]">
                    <label htmlFor="genre" className="">Enter a genre:</label>
                    <input
                        id="genre"
                        type="text"
                        placeholder="e.g. Pop, Rock, Jazz"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className={inputStyling}
                        required
                    />
                    <SubmitButton loading={loading} />
                </div>
            </form>
            <div>
                {error && <p className="text-red-500">{error}</p>}
                {songs.length > 0 && (
                    <div>
                        <ul>
                            {songs.map((song) => (
                                <li key={song.id} className="my-2">
                                    <img src={song.cover_image} alt={song.title} className="w-16 h-16" />
                                    <p>{song.title} - {song.year}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}