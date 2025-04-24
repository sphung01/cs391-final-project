//done by Julian Lim Jun Ren
"use client"
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
    "Stage & Screen"
];

export default function DropdownList(props: { genre: string, setGenre: (genre: string) => void }) {
    const dropdownStyling = "w-full p-[1vh] rounded-lg border-4 border-white focus:outline-none focus:ring-2"
    const optionStyling = "text-black"
    return (
        <>
            <select
                id="genre"
                value={props.genre}
                onChange={(e) => props.setGenre(e.target.value)}
                className={dropdownStyling}
                required
            >
                <option value="" className={optionStyling}>-- Select a genre --</option>
                {genres.map((genre) => (
                    <option key={genre} value={genre} className={optionStyling}>{genre}</option>
                ))}
            </select>
        </>
    )
}