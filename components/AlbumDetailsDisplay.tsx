//made by Welli
import { AlbumInfo } from "@/lib/types"
import Image from "next/image";

export default function AlbumDetailsDisplay(props: { album: AlbumInfo | undefined }) {
    if (!props.album) {
        return (
            <div className="w-full p-4 flex justify-center items-center text-center">
                Loading album details...
            </div>
        )
    }

    //styling to eliminate redundancy
    const trackList = "w-full border-t border-[#e9ecef]"; // changed to match color scheme
    const trackItem = "w-full py-2 flex justify-between border-b border-[#e9ecef]";
    const trackLeft = "flex items-center";
    const trackPosition = "mr-2 text-gray-600";
    const trackTitle = "font-medium text-white";
    const trackDuration = "text-gray-600";


    //for calculating the average lenght of tracks and total length of tracks in an album
    const calculateTrackLengths = () => {
        if (!props.album?.tracklist || props.album.tracklist.length === 0) {
            return { average: "N/A", total: "N/A" }
        }

        let TotS = 0
        let TrkCt = 0

        for (let i = 0; i < props.album.tracklist.length; i++) {
            const Trk = props.album.tracklist[i]
            if (Trk.duration) {
                const Parts = Trk.duration.split(':')
                if (Parts.length === 2) {
                    const Min = Number(Parts[0])
                    const Sec = Number(Parts[1])
                    if (!isNaN(Min) && !isNaN(Sec)) {
                        TotS = TotS + (Min * 60) + Sec
                        TrkCt = TrkCt + 1
                    }
                }
            }
        }

        if (TrkCt === 0) {
            return { average: "N/A", total: "N/A" }
        }

        const AvgS = Math.round(TotS / TrkCt)
        const AvgM = Math.floor(AvgS / 60)
        const AvgLeftS = AvgS - (AvgM * 60)

        let AvgStr = AvgM.toString() + ":"
        if (AvgLeftS < 10) {
            AvgStr = AvgStr + "0" + AvgLeftS.toString()
        } else {
            AvgStr = AvgStr + AvgLeftS.toString()
        }

        const TotM = Math.floor(TotS / 60)
        const TotLeftS = TotS - (TotM * 60)

        let TotStr = ""

        if (TotM >= 60) {
            const Hrs = Math.floor(TotM / 60)
            const LeftM = TotM - (Hrs * 60)

            TotStr = Hrs.toString() + ":"

            if (LeftM < 10) {
                TotStr = TotStr + "0" + LeftM.toString()
            } else {
                TotStr = TotStr + LeftM.toString()
            }

            TotStr = TotStr + ":"

            if (TotLeftS < 10) {
                TotStr = TotStr + "0" + TotLeftS.toString()
            } else {
                TotStr = TotStr + TotLeftS.toString()
            }
        } else {
            TotStr = TotM.toString() + ":"

            if (TotLeftS < 10) {
                TotStr = TotStr + "0" + TotLeftS.toString()
            } else {
                TotStr = TotStr + TotLeftS.toString()
            }
        }

        return { average: AvgStr, total: TotStr }
    }

    const { average: AvgLen, total: TotLen } = calculateTrackLengths()
    ;
    return (
        <div className="w-full max-w-3xl p-4 flex flex-col items-center mx-auto">
            <h1 className="text-2xl font-bold text-center text-white mb-4">
                {props.album.title}
            </h1>

            <div className="text-center mb-6">
                {/* using images primary, and falling back to thumb */}
                <Image
                    src={props.album.images.length > 0 ? props.album.images[0].uri : props.album.thumb}
                    alt={`${props.album.title} album cover`}
                    className="w-64 h-64 object-cover shadow-md rounded-md mx-auto block"
                    width={256} height={256}
                />
            </div>

            <div className="w-full flex flex-col items-center mb-6">
                <h2 className="text-xl font-semibold text-center text-white mb-2">Artists</h2>
                <ul className="w-full flex flex-col items-center gap-1">
                    {props.album.artists.map((artist, index) => (
                        <li key={index} className="flex justify-center items-center text-center">
                            <span className="font-medium text-white">{artist.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full flex flex-col items-center">
                <h2 className="text-xl font-semibold text-center text-white mb-2">Tracklist</h2>

                <div className="flex justify-center gap-5 text-gray-600 text-center italic mb-4">
                    <span>
                        Average Track: <span className="font-medium">{AvgLen}</span>
                    </span>
                    <span>
                        Total Length: <span className="font-medium">{TotLen}</span>
                    </span>
                </div>

                <ul className={trackList}>
                    {props.album.tracklist.map((track, index) => (
                        <li key={index} className={trackItem}>
                            <div className={trackLeft}>
                                <span className={trackPosition}>{track.position}</span>
                                <span className={trackTitle}>{track.title}</span>
                            </div>
                            <span className={trackDuration}>{track.duration}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}