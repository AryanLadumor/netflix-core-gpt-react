import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movie.trailerVideo);

  //fetch video background
  useEffect(() => {
    const getMovieVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS,
      );
      const json = await data.json();
      // console.log(json);

      //we basically need just any one trailer from this json
      const filterDataTrailers = json.results.filter(
        (video) => video.type === "Trailer",
      );
      const trailer = filterDataTrailers.length
        ? filterDataTrailers[0]
        : json.results[0]; //getting first trailer object if not present then take 1st video
      dispatch(addTrailerVideo(trailer));
    };

    !trailer && getMovieVideo();
  }, [dispatch,movieId]);
};

export default useTrailerVideo;
