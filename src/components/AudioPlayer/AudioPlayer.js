import react from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import listen from "../../assets/ListeningTest.m4a"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { IconContext } from "react-icons/lib";


const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(listen);
    const [currentTime, setCurrentTime] = useState({
        min: "",
        sec: "",
    })
    const[time, setTime] = useState({
        min: "",
        sec:""
    })
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        const setTime = {
            min: min,
            sec: secRemain
        };
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([]));
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrentTime({
                    min,
                    sec,
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound])

    const handlePlay = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    }
    return (
        <div class = "flex flex-row w-full bg-slate-200">
            {
                !isPlaying ? (
                    <button class="justify-center border-collapse bg-transparent" onClick={handlePlay}>
                        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                            <AiFillPlayCircle />
                        </IconContext.Provider>
                    </button>
                ) :
                    (
                        <button class="justify-center border-collapse bg-transparent" onClick={handlePlay}>
                            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                <AiFillPauseCircle />
                            </IconContext.Provider>
                        </button>
                    )
            }
            <div>
                <p>{currentTime.min}:{currentTime.sec}</p>
                <p>{time.min}:{time.sec}</p>
            </div>
            <input
                type="range"
                min="0"
                max={duration / 1000}
                default="0"
                value={seconds}
                class="bg-slate-500 w-full"
                onChange={(e) => {
                    sound.seek([e.target.value])
                }}
            />
        </div>
    )
}

export default AudioPlayer;