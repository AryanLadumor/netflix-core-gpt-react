import React from "react";
import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="flex flex-col items-center m-4 flex-shrink-0">
      <img
        className="w-40 h-48 object-cover rounded-md border border-gray-700 "
        src={IMAGE_CDN + posterPath}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;