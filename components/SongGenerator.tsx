/* 
    This is where the form is created. 
    This form will take in whatever input the client provides.
    The server will retrieve and fetch that info and respond back to the client.
    In which case, should redirect the user to a different page depending on the genre.
*/

// Steven Phung: I have formatted where this form wraps the button and input field. Rest is up to you.

import SubmitButton from "./SubmitButton";
import InputField from "@/components/InputField";
"use client"

export default function SongGenerator() {
    return(
        <form className="bg-green-200">
            This is where the SongGenerator is.
            <InputField />
            <SubmitButton />
        </form>
    )
}