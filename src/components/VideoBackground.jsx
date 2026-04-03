import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movie.trailerVideo);
  useTrailerVideo(movieId);
  if (!trailer) return null;

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-900"
      style={{ height: "clamp(320px, 100vw, 520px)" }}
    >
      <iframe
        className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none"
        style={{ transform: "scale(1.4)", transformOrigin: "center center" }}
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailer.key}&modestbranding=1&iv_load_policy=3&disablekb=1`}
        allow="autoplay"
        title="trailer"
      />

      <div className="sm:hidden absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-28 sm:h-36 md:h-48 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default VideoBackground;