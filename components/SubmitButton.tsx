//done by Julian Lim Jun Ren
"use client"
export default function SubmitButton(props: { loading: boolean }) {
    const generateButtonStyling = "w-full my-[1vh] bg-green-600 text-white text-lg sm:text-[calc(3px+1vw)] font-bold py-[2vh] px-[3vw] sm:py-[2vh] sm:px-[2vw] rounded-lg shadow-lg active:scale-95 active:bg-green-900 hover:bg-green-800 transition";
    return (
        <button type="submit" 
                className={generateButtonStyling}
        >
            {props.loading ? "Generating..." : "Generate"}
        </button>
    )
}