/* done by Julian Lim Jun Ren
    This is where the form is created. 
    This form will take in whatever input the client provides.
    The server will retrieve and fetch that info and respond back to the client.
    In which case, should redirect the user to a different page depending on the genre.
*/

// Steven Phung: I have formatted where this form wraps the button and input field. Rest is up to you.
"use client"
import getSongs from "@/lib/getSongs"
export default function UserInput() {
    const inputFormStyling = "flex flex-col items-center justify-center w-[50vw] h-[30vh] bg-green-500 rounded-3xl drop-shadow-lg]";
    const generateButtonStyling = "w-full my-[1vh] bg-green-600 text-white font-bold py-[1vh] px-[2vw] rounded-lg hover:bg-green-800 shadow-lg transition";
    const titleStyling = "text-[calc(3px+1.5vw)] font-semibold text-white my-[1vh]";
    const inputStyling = "w-full p-[1vh] rounded-lg border-4 border-white focus:outline-none focus:ring-2"
    return(
        <div>
            <form className={inputFormStyling}>
                <h1 className={titleStyling}>Playlist Generator</h1>
                <div className="flex flex-col my-[1vh] w-[50%]">
                    <label htmlFor="genre" className="">Enter a genre:</label>
                    <input
                        id="genre"
                        type="text"
                        placeholder="e.g. Pop, Rock, Jazz"
                        className={inputStyling}
                    />
                    <button className={generateButtonStyling}>Generate</button>
                </div>
            </form>
        </div>
    )
}