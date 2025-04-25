//done by Julian Lim Jun Ren
"use client"
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
    const optionStyling = "text-black"
    return (
        <>
            <label htmlFor="genre" className="my-[0.5vh]">Pick a genre:</label>
            <select
                id="genre"
                value={props.genre}
                onChange={(e) => props.setGenre(e.target.value)}
                className={dropdownStyling}
                required
            >
                <option value="" className={optionStyling}>-- select a genre --</option>
                {genres.map((genre) => (
                    <option key={genre} value={genre} className={optionStyling}>{genre}</option>
                ))}
            </select>

            <label htmlFor="numResults" className="my-[0.5vh]">Number of Results:</label>
            <select
                id="numResults"
                value={props.numResults}
                onChange={(e) => props.setNumResults(e.target.value)}
                className={dropdownStyling}
                required
            >
                <option value="" className={optionStyling}>-- number of results --</option>
                {results.map((result) => (
                    <option key={result} value={result} className={optionStyling}>{result}</option>
                ))}
            </select>
        </>
    )
}