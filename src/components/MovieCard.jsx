import React from "react";
import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="flex-shrink-0 m-1 sm:m-2 group cursor-pointer">
      <img
        className="
          w-24 h-32
          sm:w-32 sm:h-44
          md:w-36 md:h-48
          lg:w-40 lg:h-52
          object-cover rounded-md
          border border-gray-700
          group-hover:scale-105 group-hover:border-white
          transition duration-200
        "
        src={IMAGE_CDN + posterPath}
        alt="movie poster"
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;
