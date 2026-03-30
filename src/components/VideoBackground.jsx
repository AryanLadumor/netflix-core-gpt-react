import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";


const VideoBackground = ({ movieId }) => {
  const trailerKey = useSelector((store) => store.movie.trailerVideo);
  useTrailerVideo(movieId)
  if (!trailerKey) return
  return (
    <div  className="relative h-[48rem] overflow-hidden">
      {/* Background Video */}
      <iframe
      className="absolute rounded-none pointer-events-none w-screen aspect-video top-0 -translate-y-24 "
        src={`https://www.youtube.com/embed/${trailerKey.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerKey.key}&modestbranding=1&iv_load_policy=3&disablekb=1`}
        allow="autoplay"
      />

      {/* Dark overlay on top of video */}
      <div className="absolute  inset-0 z-9 bg-black/20"
        style={{
          background: "",
        }}
      />

      </div>
      
  );
};

export default VideoBackground;
