import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useEffect } from "react";
import { clearSuggestedMovies } from "../utils/gptSlice";

const GptMovieSuggestion = () => {
  const { suggestedMovies, movieNames } = useSelector((store) => store.gpt);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSuggestedMovies());
    };
  }, [dispatch]);

  if (!movieNames) return null;

  return (
    <div
      className="
      mt-4 sm:mt-6 mx-3 sm:mx-6 md:mx-10
      p-3 sm:p-4 md:p-6
      bg-black/70 backdrop-blur-sm
      rounded-xl
      text-white
    "
    >
      {movieNames.map(
        (movie, index) =>
          suggestedMovies[index]?.results?.length > 0 && (
            <MovieList
              key={movie}
              title={movie}
              movieList={suggestedMovies[index].results}
            />
          ),
      )}
    </div>
  );
};

export default GptMovieSuggestion;
