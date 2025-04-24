/* done by Julian Lim Jun Ren
    This is where the form is created. 
    This form will take in whatever input the client provides.
    The server will retrieve and fetch that info and respond back to the client.
    In which case, should redirect the user to a different page depending on the genre.
*/
"use client"
import {useState} from "react"
import SubmitButton from "./SubmitButton";
import DropdownList from "./DropdownList";
import { useRouter } from "next/navigation";

export default function UserInput() {
    /*styling*/
    const inputFormStyling = "flex flex-col justify-self-center items-center justify-center w-[50vw] h-[30vh] bg-green-500 rounded-3xl drop-shadow-lg]";
    const titleStyling = "text-[calc(3px+1.5vw)] font-semibold text-white my-[1vh]";

    const [genre, setGenre] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null); // clear previous error
        if (!genre) {
            setError("Please select a genre");
            return;
        }
        // redirect to playlist page with the selected genre
        router.push(`/playlist/${genre}`);
    };
    
    return(
        <div>
            <form onSubmit={handleSubmit} className={inputFormStyling}>
                <h1 className={titleStyling}>Playlist Generator</h1>
                <div className="flex flex-col my-[1vh] w-[50%]">
                    <label htmlFor="genre" className="">Pick a genre:</label>
                    <DropdownList genre={genre} setGenre={setGenre} />
                    <SubmitButton/>
                </div>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    )
}