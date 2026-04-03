import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  if (!movieList || movieList === null) return null;

  return (
    <div className="py-2 sm:py-3 md:py-4">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium mb-2 sm:mb-3">
        {title}
      </h2>
      <div className="flex overflow-x-scroll scrollbar-hide gap-1 sm:gap-2 pb-2">
        {movieList.map((movie) =>
          movie?.poster_path ? (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default MovieList;
