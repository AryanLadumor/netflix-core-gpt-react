import { useDispatch, useSelector } from "react-redux";
import { languagesText } from "../utils/languageConstants";
import { useRef } from "react";
import { ai } from "../utils/genAI";
import { API_OPTIONS } from "../utils/constants";
import { addSearchMovie } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.seletecdLanguage);

  const searchMovieTMDB = async (movie) => {
    const results = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    return await results.json();
  };

  const handleGptSearchClick = async () => {
    if (!searchText.current.value) return;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `[STRICT] Movie Recommendation Engine. 
               Format: object with key 'data' and value array of string only.
               Limit: 5 items.
               Constraint: No markdown, no intro, no backticks.
               Input: "${searchText.current.value}"`,
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 50,
        temperature: 0.01,
      },
    });

    const jsonResult = JSON.parse(response.text);
    const suggestedMoviesNames = jsonResult.data;
    const moviePromises = suggestedMoviesNames.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(moviePromises);
    dispatch(addSearchMovie({ tmdbMovies: tmdbResults, suggestedMoviesNames }));
  };

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 flex justify-center">
      <form
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl flex gap-2 sm:gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="
            flex-1
            h-11 sm:h-12 md:h-14
            px-3 sm:px-4
            rounded-lg text-sm sm:text-base md:text-lg
            border-2 sm:border-4 border-purple-500
            bg-white text-gray-900
            placeholder-gray-500
            focus:outline-none focus:border-purple-400
          "
          placeholder={languagesText[language]?.placeholder}
        />
        <button
          className="
            h-11 sm:h-12 md:h-14
            px-3 sm:px-5 md:px-6
            bg-red-600 text-white
            rounded-lg sm:rounded-xl
            text-sm sm:text-base font-medium
            hover:bg-red-700 hover:scale-105 transition duration-100
            whitespace-nowrap
          "
          onClick={handleGptSearchClick}
        >
          {languagesText[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;


/*contents:
        `ROLE: You are a movie recommendation assistant` +
        `TASK: When given a keyword or movie name, respond ONLY with a JSON array of 5 related movie titles.Do not include any markdown formatting, backticks, or extra text.` +
        `INSTRUCTION:Reply fast as fast you can accoding to you responce the application have to apply debouncing of 200ms for suggestion so fast reply needed` +
        `KEYWORD : ${searchText.current.value}`,*/
