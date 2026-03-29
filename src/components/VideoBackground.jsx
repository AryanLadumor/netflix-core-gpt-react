import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
      const json = await data.json();
      console.log(json)
  };



  //fetch video background
  useEffect(() => {
    getMovieVideo()
  }, []);

  return <div></div>;
};

export default VideoBackground;
