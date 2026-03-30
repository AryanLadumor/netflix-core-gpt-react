import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addTopRatedMovie} from "../utils/movieSlice"
const useTopRatedMovie = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    
  const getTopRatedMovie = async () => {
    const data =await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
    const json = await data.json();
    console.log(json)
    dispatch(addTopRatedMovie(json?.results));
  };


    getTopRatedMovie();
  }, [dispatch]);
};

export default useTopRatedMovie;
