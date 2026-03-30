import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

import { addPopularMovie } from "../utils/movieSlice";
const usePopularMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getPopularMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_OPTIONS,
      );
      const json = await data.json();

      dispatch(addPopularMovie(json?.results));
    };
    getPopularMovie();
  }, [dispatch]);
};

export default usePopularMovie;
