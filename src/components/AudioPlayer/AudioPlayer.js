import react from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import listen from "../../assets/ListeningTest.m4a"

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(listen);
    const [currentTime, setCurrentTime] = useState({
        min: "",
        sec: "",
    })
    const [time, setTime] = useState({
        min: "",
        sec: ""
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
        <div class="flex flex-row w-full bg-slate-200 p-2">
            {
                !isPlaying ? (
                    <button class="justify-center border-collapse bg-transparent" onClick={handlePlay}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>
                    </button>
                ) :
                    (
                        <button class="justify-center border-collapse bg-transparent" onClick={handlePlay}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    )
            }
            <div class="flex flex-row p-3">
                <p>{currentTime.min}:{currentTime.sec}</p>
                <p class="mx-2">/</p>
                <p class="ml-4">{time.min}:{time.sec}</p>
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