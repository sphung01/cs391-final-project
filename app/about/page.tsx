/* 
    The About page is here to just talk about the what the website is.
*/

export default function AboutPage() {
    const mainStyling = "min-h-screen w-full flex justify-center items-center"
    const divContainer = "flex flex-col justify-self-center items-center justify-center w-[50vw] bg-green-500 rounded-3xl drop-shadow-lg] p-6";
    const titleStyling = "font-bold"
    return(
        <main className={mainStyling}>
            <div className={divContainer}>
                <h2 className={titleStyling}>Welcome to our PlaylistGenerator!</h2>
                <h2 className={titleStyling}>Created 4/22/2025</h2>
                <p className="p-10">
                    Here on this website, you can pick any genre to your liking by using the dropdown box! 
                    After picking your genre, the songs in your playlist will be randomly generated for you.
                    If you do not like the playlist, you can try generating again.
                </p>
                <p className="p-6">
                    This website was developed using Next.js
                </p>
                <p className="p-6">
                    Dev Team: Steven, Julian, Welli, and Abdulrhman
                </p>
            </div>
        </main>
    )
}