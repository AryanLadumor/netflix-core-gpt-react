import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    upcomingMovie: null,
    topRatedMovie: null,
    popularMovie: null,
  },
  reducers: {
    addNowPlayingMovie(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    },
    addUpcomingMovie(state, action) {
      state.upcomingMovie = action.payload;
    },
    addTopRatedMovie(state, action) {
      state.topRatedMovie = action.payload;
    },
    addPopularMovie(state, action) {
      state.popularMovie = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovie,
  addTrailerVideo,
  addUpcomingMovie,
  addTopRatedMovie,
  addPopularMovie,
} = movieSlice.actions;
