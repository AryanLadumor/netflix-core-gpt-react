import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addTopRatedMovie} from "../utils/movieSlice"
import { useSelector } from "react-redux";


const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const topRatedMovie = useSelector((store) => store.movie.topRatedMovie);
  useEffect(() => {
    
  const getTopRatedMovie = async () => {
    const data =await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
    const json = await data.json();
    // console.log(json)
    dispatch(addTopRatedMovie(json?.results));
  };


   !topRatedMovie && getTopRatedMovie();
  }, [dispatch]);
};

export default useTopRatedMovie;
