//Worked on by Abdulrhman Alharbi
//Styling done by Julian Lim Jun Ren and Abdulrhman Alharbi
/* 
    This component displays the list of albums.
    The styling is done using Tailwind CSS classes. 
    Julian is responsible for the the horizontal alignment styling that makes the albums look like a grid.
    Abdulrhman is responsible for the code logic.
*/
import AlbumComponent from "./AlbumComponent";
import { Album } from "@/lib/types";

const altAlbumListStyling = "flex flex-row flex-wrap justify-center gap-[2vw]";

export default function AlbumList({albums}: {albums: Album[]}) {
    console.log(albums);

    return (
        <div className={altAlbumListStyling}>
            {
                albums.map((album, index) => (
                    <AlbumComponent key={index} album={album} />
                ))
            }
        </div>
    );
}