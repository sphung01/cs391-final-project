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
    return(
        <div className="flex flex-col items-center justify-center border-1 w-[50vh] bg-green-200 rounded-lg shadow-lg">
            <h1>Playlist Generator</h1>
            <form className="bg-white text-black">
                
                <button>Generate</button>
            </form>
        </div>
    )
}