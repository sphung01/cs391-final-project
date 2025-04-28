/* Written by Julian Lim Jun Ren
    This form takes in a genre and number of results that the client provides.
    The server will retrieve and fetch that info and respond back to the client.
    In which case, should redirect the user to a different page depending on the genre.
*/
"use client"
import {useState} from "react"
import SubmitButton from "./SubmitButton";
import DropdownList from "./DropdownList";
import { useRouter } from "next/navigation";

export default function UserInput() {
    const inputFormStyling = "flex flex-col items-center justify-center w-[80vw] min-h-[60vh] sm:w-[50vw] sm:p-[4vw] sm:min-h-[30vw] my-[20vw] sm:my-0 bg-green-500 rounded-3xl drop-shadow-lg";
    const titleStyling = "text-xl sm:text-[calc(3px+1.8vw)] font-semibold";
    const subtitleStyling = "text-lg sm:text-[calc(3px+1.2vw)] font-semibold"; 
    const titleDivStyling = "text-center my-[1vh]"

    const [genre, setGenre] = useState<string>("");
    const [numResults, setNumResults] = useState<string>("10"); // default to 10 results
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setError(null); // clear previous error
        e.preventDefault();
        if (!genre || !numResults) { // check if genre and numResults are selected (even though the fields are required its just in case)
            setError("Please select fields.");
            return;
        }
        setLoading(true); 
        const encodedGenre = encodeURIComponent(genre); // encode the genre to be URL safe because of fields like "Funk / Soul"
        // redirect to page of albums with the selected genre
        router.push(`/albums/${encodedGenre}?numResults=${numResults}`); //using ?numResults so searchParams can be used for numResults along with the genre params
    };
    
    return(
        <div className="text-white"> 
            <form onSubmit={handleSubmit} className={inputFormStyling}>
                <div className={titleDivStyling}>
                    <h1 className={titleStyling}>Albums Generator</h1>
                    <h2 className={subtitleStyling}>Discover new albums to listen to</h2>
                </div>
                <div className="flex flex-col my-[1vh] w-[80%] sm:w-[90%]">
                    <DropdownList genre={genre} setGenre={setGenre} numResults={numResults} setNumResults={setNumResults} />
                    <SubmitButton loading={loading}/>
                </div>
                {error ? <p className="text-red-500">{error}</p> : null}
            </form>
        </div>
    )
}