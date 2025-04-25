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
    const inputFormStyling = "flex flex-col justify-self-center items-center justify-center w-[50vw] min-h-[50vh] bg-green-500 rounded-3xl drop-shadow-lg";
    const titleStyling = "text-[calc(3px+1.5vw)] font-semibold";
    const subtitleStyling = "text-[calc(3px+1vw)] font-semibold"; 
    const titleDivStyling = "text-center my-[1vh]"

    const [genre, setGenre] = useState<string>("");
    const [numResults, setNumResults] = useState<string>("10");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null); // clear previous error
        if (!genre || !numResults) {
            setError("Please select a genre");
            return;
        }
        // redirect to page of albums with the selected genre
        router.push(`/albums/${genre}?numResults=${numResults}`);
    };
    
    return(
        <div>
            <form onSubmit={handleSubmit} className={inputFormStyling}>
                <div className={titleDivStyling}>
                    <h1 className={titleStyling}>Albums Generator</h1>
                    <h2 className={subtitleStyling}>Discover new albums to listen to</h2>
                </div>
                <div className="flex flex-col my-[1vh] w-[50%]">
                    <DropdownList genre={genre} setGenre={setGenre} numResults={numResults} setNumResults={setNumResults} />
                    <SubmitButton/>
                </div>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    )
}