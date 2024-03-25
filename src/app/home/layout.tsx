"use client"
import { useRouter } from "next/navigation";
import * as RemixIcon from "@remixicon/react"
import NaveItem from "@/components/naveItem";
import { useRef, useState } from "react";






export default function ({ children }: Readonly<{ children: React.ReactNode; }>) {
    const router = useRouter()
    const token = window.localStorage.getItem('token')
    if (!token)
        return router.replace('/login')


    const Home = useRef<HTMLButtonElement>(null)
    const Search = useRef<HTMLButtonElement>(null)
    const Library = useRef<HTMLButtonElement>(null)

    function setUnActive() {
        Home.current?.classList.remove('active')
        Search.current?.classList.remove('active')
        Library.current?.classList.remove('active')
    }


    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        const progressBar = document.querySelector('.progressBar') as HTMLElement;
        const thumb = document.querySelector('.thumb') as HTMLElement;
        const progress = (value / 100) * progressBar.offsetWidth;
        thumb.style.left = `${progress}px`;
    };

    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const playPauseButton = isPlaying ? (
        <div className="pause" onClick={handlePlayPause}>
            <RemixIcon.RiPauseFill className="icon" />
        </div>
    ) : (
        <div className="play" onClick={handlePlayPause}>
            <RemixIcon.RiPlayFill className="icon" />
        </div>
    );
    return (
        <main className="w-full h-full overflow-y-auto pb-20">
            {children}
            <section className="bottom w-full fixed bottom-0 flex flex-col items-center gap-1">
                <div className="top flex justify-center w-full p-3 pb-0">
                    <div className="player flex flex-col gap-1 max-w-xl w-full p-3 pb-0 bg-bg-primary-default rounded-lg">
                        <div className="details flex justify-between">
                            <div className="left flex gap-3">
                                <div className="poster h-12 w-12">
                                    <img
                                        className="h-full w-full rounded-sm object-cover"
                                        src="https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt=""
                                    />
                                </div>
                                <div className="text">
                                    <h1 className="truncate max-w-60" >sun lo zara</h1>
                                    <p className="opacity-60 truncate max-w-60" >Adarsh gupta,Harsh sharma,Akarsh vyash</p>
                                </div>
                            </div>
                            <div className="controls h-full flex items-center gap-3">
                                <div className="like">
                                    <RemixIcon.RiHeartFill className="icon" />
                                </div>
                                {playPauseButton}
                            </div>
                        </div>
                        <div className="progress w-full  relative">
                            <input
                                className="w-full opacity-0"
                                type="range"
                                min={0}
                                max={100}
                                value={0}
                                onChange={handleRangeChange}
                            />
                            <div className="dummy flex justify-center items-center pointer-events-none absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="progressBar w-full h-1 bg-gray-300 rounded-sm"></div>
                                <div className="thumb h-4 w-4 rounded-full bg-gray-300 absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-bg-primary w-full p-5 px-10 flex justify-between">
                    <NaveItem
                        Icon={RemixIcon.RiHome2Fill}
                        forwardOnClick={(event) => {
                            setUnActive();
                            Home.current?.classList.add('active');
                            router.replace('/home');
                        }}
                        label="Home"
                        forwardRef={Home}
                    />
                    <NaveItem
                        Icon={RemixIcon.RiSearch2Line}
                        forwardOnClick={(event) => {
                            setUnActive();
                            Search.current?.classList.add('active');
                            router.replace('/home/search');
                        }}
                        label="Search"
                        forwardRef={Search}
                    />
                    <NaveItem
                        Icon={RemixIcon.RiVoiceprintLine}
                        forwardOnClick={(event) => {
                            setUnActive();
                            Library.current?.classList.add('active');
                            router.replace('/home/library');
                        }}
                        label="Your Library"
                        forwardRef={Library}
                    />
                </nav>
            </section>
        </main>
    );
}
