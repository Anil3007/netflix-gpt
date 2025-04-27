import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleShowGptSearch: (state,action) =>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResults: (state,action) => {
            const {movieNames, movieResults} = 
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})

export const {toggleShowGptSearch, addGptMovieResults} = gptSlice.actions

export default gptSlice.reducer;