import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
//Funtion to fetch APi(Now Playing Moives)  and update the store(movie slice)
const useNowPlayMovie = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);




  useEffect(() => {
    const getNowPlayingMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        API_OPTIONS,
      );
      const json = await data.json();
      // console.log(json)
      dispatch(addNowPlayingMovie(json?.results));
    };
    !nowPlayingMovies && getNowPlayingMovie();
  }, [dispatch, nowPlayingMovies]);
};

export default useNowPlayMovie;
