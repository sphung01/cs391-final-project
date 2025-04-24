//done by Julian Lim Jun Ren
"use client"
export default function SubmitButton() {
    const generateButtonStyling = "w-full my-[1vh] bg-green-600 text-white font-bold py-[1vh] px-[2vw] rounded-lg shadow-lg active:bg-green-900 hover:bg-green-800 transition";
    return (
        <button type="submit" 
                className={generateButtonStyling}
        >
            Generate
        </button>
    )
}