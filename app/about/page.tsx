// Worked by Steven Phung

/* 
    The About page is here to just talk about the what the website is.
*/

export default function AboutPage() {
    const mainStyling = "min-h-screen w-full flex justify-center items-center text-white" /* remove text-white if you don't want this behavior */
    const divContainer = "flex flex-col justify-self-center items-center justify-center w-[50vw] bg-green-500 rounded-3xl drop-shadow-lg] p-6";
    const titleStyling = "font-bold"
    /* 
        This part will display the description of the page, how it was created,
        and the name of the people who contributed to this project
    */
    return(
        <main className={mainStyling}>
            <div className={divContainer}>
                <h2 className={titleStyling}>Welcome to AlbumDiscovery!</h2>
                <h2 className={titleStyling}>Created 4/22/2025</h2>
                <p className="p-10">
                    Here on this website, you can pick any genre to your liking by using the dropdown box! 
                    You can also change the number of albums that you want to discover.
                    After picking your genre and number of albums, a list will be generated for you. If there
                    is nothing that you like, you can re-generate again! Thank you for using this website!
                </p>
                <p className="p-6">
                    This website was developed using Next.js
                </p>
                <p className="p-6 font-bold">
                    Dev Team: Steven, Julian, Welli, and Abdulrhman
                </p>
            </div>
        </main>
    )
}