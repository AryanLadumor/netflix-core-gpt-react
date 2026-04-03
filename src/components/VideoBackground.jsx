import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movie.trailerVideo);
  useTrailerVideo(movieId);
  if (!trailer) return null;

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 56vw, 768px)" }}>
      {/* Video — hidden on very small screens, replaced by a dark bg */}
      <iframe
        className="hidden sm:block absolute pointer-events-none w-full h-[200%] top-1/2 -translate-y-1/2"
        style={{ aspectRatio: "16/9" }}
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailer.key}&modestbranding=1&iv_load_policy=3&disablekb=1`}
        allow="autoplay"
        title="trailer"
      />

      {/* Fallback dark bg on very small screens */}
      <div className="sm:hidden absolute inset-0 bg-gray-900" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default VideoBackground;
