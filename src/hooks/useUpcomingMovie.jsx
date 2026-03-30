import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";
const useUpcomingMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTIONS,
      );
      const json = await data.json();

      dispatch(addUpcomingMovie(json?.results));
    };

    getUpcomingMovie();
  }, [dispatch]);
};

export default useUpcomingMovie;
