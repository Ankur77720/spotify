"use client"

import React, { useEffect, useState, useMemo } from 'react'
import './home.css'
import axios from '../../../extends/axios';
import { useAppSelector, useAppDispatch } from '../../redux/hook'
import { setTracks, setCurrentTrack } from '../../redux/reducers/music'


interface Track {
    title: string;
    artists: string[];
    album: string;
    year: number;
    tags: string[];
    explicit: boolean;
    poster: string;
    url: string;
    plays: number;
    likes: number;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const Home = () => {

    const tracks = useAppSelector(state => state.music.value.tracks);
    const dispatch = useAppDispatch();
    const currentTrack = useAppSelector(state => state.music.value.currentTrack);
    console.log(currentTrack)

    useEffect(() => {
        const getTracks = async () => {
            console.log(tracks)
            try {
                console.log(tracks)
                if (tracks.length > 0) return;
                const response = await axios.post('/getTracks');
                dispatch(setTracks(response.data.tracks));
            } catch (error) {
                console.error('Error fetching tracks:', error);
            }
        }

        getTracks();
    }, []);
    return (
        <section className="w-full flex flex-col ">
            <nav className='p-4 py-6 flex' >
                <h1 className='font-semibold text-xl' >Hello, Ankur</h1>
            </nav>

            <div className="artists h-fit flex gap-2 scroll-smooth w-full pl-4 overflow-x-auto">
                <div className="artist shrink-0 flex flex-col items-center w-fit h-fit">
                    <img className='rounded-full aspect-square h-20 w-20 object-cover' src="https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <p className='max-w-20 truncate' >artist name artist name</p>
                </div>
            </div>
            <div className="audios p-4 flex flex-col gap-3">
                <div className="recent">
                    <div className="audio-card bg-bg-primary-default rounded-lg shadow-md flex gap-3 p-2">
                        <div className="audio-card-image overflow-hidden w-fit h-16 aspect-square bg-black rounded-lg">
                            <img className='h-full w-full aspect-square' src="https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                        </div>
                        <div className="audio-card-info flex flex-col">
                            <h3 className='font-semibold text-md' >Title</h3>
                            <p className='font-light text-sm' >Artist</p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='px-4'>Explore</h1>
            <div className="audios-explore p-4 w-full items-center justify-center place-items-center">
                {tracks.map((track: Track, index: number) => (
                    <div
                        key={index}
                        className="audio-card h-full bg-bg-primary-default rounded-lg shadow-md flex w-full flex-col gap-3 p-2"
                        onClick={() => dispatch(setCurrentTrack(track))}
                    >
                        <div className="audio-card-image overflow-hidden w-fit aspect-square bg-black rounded-lg">
                            <img className='h-full w-full aspect-square' src={track.poster} alt="" />
                        </div>
                        <div className="audio-card-info flex flex-col w-full truncate">
                            <h3 className='font-semibold text-md truncate w-full'>{track.title}</h3>
                            <p className='font-light text-sm truncate w-full'>{track.artists.map((artist: any) => artist.name).join('/')}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Home