//Written by Julian Lim Jun Ren
/* 
    This component is a wrapper for the dropdown component made specifically for the home page.
    I separated it from the user input component for code readability regarding the arrays of options.
*/
"use client"
import DropdownComponent from "./DropdownComponent";
const genres = [
    "Blues",
    "Brass & Military",
    "Classical",
    "Electronic",
    "Folk, World, & Country",
    "Funk / Soul",
    "Hip-Hop",
    "Jazz",
    "Latin",
    "Non-Music",
    "Pop",
    "Reggae",
    "Rock",
    "Stage & Screen",
    "TESTNOSONGSAKLSDJASJKD"
];

const results = [
    "10",
    "20",
    "30",
    "40",
    "50",
];

export default function DropdownList(props: { genre: string, setGenre: (genre: string) => void , numResults: string, setNumResults: (numResults: string) => void}) {
    const dropdownStyling = "w-full p-[1vh] text-lg sm:text-[calc(3px+1vw)] rounded-lg border-4 border-white focus:outline-none focus:ring-2 my-[0.5vh] cursor-pointer"
    const labelStyling = "text-lg sm:text-[calc(3px+1vw)] my-[0.5vh]"
    return (
        <>
            <label htmlFor="Genre" className={labelStyling}>Pick a genre:</label>
            <DropdownComponent optionName="Genre" styling={dropdownStyling} options={genres} choice={props.genre} setChoice={props.setGenre} />
            <label htmlFor="Number of Results" className={labelStyling}>Number of Results:</label>
            <DropdownComponent optionName="Number of Results" styling={dropdownStyling} options={results} choice={props.numResults} setChoice={props.setNumResults} />
        </>
    )
}