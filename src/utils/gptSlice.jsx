import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    suggestedMovies:null
  },
  reducers: {
    toggleGptSearchView(state) {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchMovie(state, action) {
      const { tmdbMovies, suggestedMoviesNames } = action.payload;
      state.suggestedMovies = tmdbMovies ;
      state.movieNames = suggestedMoviesNames
    },
    clearSuggestedMovies(state){
        state.suggestedMovies = null ;
      state.movieNames = null ;
    }
  },
});

export default gptSlice.reducer;
export const { toggleGptSearchView, addSearchMovie ,clearSuggestedMovies} = gptSlice.actions;
