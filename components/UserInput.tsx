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
import DropdownList from "./DropdownList";
import { Song } from "@/lib/types";




export default function UserInput(props: {songs: Song[], setSongs: (songs: Song[]) => void}) {
    /*styling*/
    const inputFormStyling = "flex flex-col justify-self-center items-center justify-center w-[50vw] h-[30vh] bg-green-500 rounded-3xl drop-shadow-lg]";
    const titleStyling = "text-[calc(3px+1.5vw)] font-semibold text-white my-[1vh]";

    const [genre, setGenre] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        props.setSongs([]);
        getSongs(genre)
            .then((data)=>{
                    console.log("Data fetched Successfully");
                    console.log(data);
                    if (data) {
                        props.setSongs(data.results);
                        console.log("Songs", props.songs)
                    } else {
                        setError("No songs found");
                    }
                    setLoading(false);
                })
            .catch((e: Error)=> {
                console.log("There was an error fetching data", e)
                setError(e.message);
                setLoading(false); // Steven: Fixed loading error here
            });
    };
    
    return(
        <div>
            <form onSubmit={handleSubmit} className={inputFormStyling}>
                <h1 className={titleStyling}>Playlist Generator</h1>
                <div className="flex flex-col my-[1vh] w-[50%]">
                    <label htmlFor="genre" className="">Pick a genre:</label>
                    <DropdownList genre={genre} setGenre={setGenre} />
                    <SubmitButton loading={loading} />
                </div>
            </form>
            <div>
                <h1>Testing results:</h1>
                {error && <p className="text-red-500">{error}</p>}
                <div>
                    {props.songs.map((song) => (
                        <div key={song.id} className="my-2">
                            <img src={song.cover_image} alt={song.title} className="w-16 h-16" />
                            <p>{song.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}