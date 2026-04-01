import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";
import { useSelector } from "react-redux";


const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  const upcomingMovie = useSelector((store) => store.movie.upcomingMovie);

  useEffect(() => {
    const getUpcomingMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTIONS,
      );
      const json = await data.json();

      dispatch(addUpcomingMovie(json?.results));
    };

    !upcomingMovie && getUpcomingMovie();
  }, [dispatch]);
};

export default useUpcomingMovie;
