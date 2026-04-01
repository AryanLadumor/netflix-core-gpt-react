import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  if (movieList === null) return null;

  return (
    <div className="p-4">
      <h2 className="text-2xl text-white font-medium mb-3">{title}</h2>
   
      <div className="flex  overflow-x-scroll scrollbar-hide ">
        
        {movieList.map((movie) => (
          (movie?.poster_path && <MovieCard key={movie.id} posterPath={movie?.poster_path} />)
        ))}
      </div>
    </div>
  );
};

export default MovieList;