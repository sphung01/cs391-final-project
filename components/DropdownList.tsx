//done by Julian Lim Jun Ren
"use client"
import DropdownComponent from "./DropdownComponent";
const genres = [
    "Blues",
    "Brass & Military",
    "Classical",
    "Electronic",
    "Folk, World, & Country",
    "Funk",
    "Soul",
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
    const dropdownStyling = "w-full p-[1vh] rounded-lg border-4 border-white focus:outline-none focus:ring-2 my-[0.5vh]"
    return (
        <>
            <label htmlFor="Genre" className="my-[0.5vh]">Pick a genre:</label>
            <DropdownComponent optionName="Genre" styling={dropdownStyling} options={genres} choice={props.genre} setChoice={props.setGenre} />
            <label htmlFor="Number of Results" className="my-[0.5vh]">Number of Results:</label>
            <DropdownComponent optionName="Number of Results" styling={dropdownStyling} options={results} choice={props.numResults} setChoice={props.setNumResults} />
        </>
    )
}