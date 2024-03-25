import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store'


// Define a type for the slice state
export interface Track {
    _id: string;
    title: string;
    artists: Array<any>;
    album: string;
    year: number;
    tags: Array<any>;
    explicit: boolean;
    poster: string;
    url: string;
    plays: number;
    likes: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface MusicState {
    value: {
        tracks: Track[];
        currentTrack: Track | null;
    }
}

const initialState: MusicState = {
    value: {
        tracks: [],
        currentTrack: null
    }
};

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        setTracks: (state, action) => {
            state.value.tracks = action.payload;
        },
        setCurrentTrack: (state, action) => {
            state.value.currentTrack = action.payload;
        },
    },
});

export const { setTracks, setCurrentTrack } = musicSlice.actions;
export const music = (state: RootState) => state.music.value
export default musicSlice.reducer;
