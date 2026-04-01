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
    //This funtion will return promise not the data
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //make an api call  to GPT API and get

    if (!searchText.current.value) return;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview", //gemini-3.1-flash-lite-preview //gemini-2.5-flash-lite

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
        maxOutputTokens: 50, // Limits processing time
        temperature: 0.01, // Lower temperature = faster, more predictable results
      },
    });
    // Access the text property from the response
    const jsonResult = JSON.parse(response.text);
    const suggestedMoviesNames = jsonResult.data;
   
    const moviePromises = suggestedMoviesNames.map((movie) =>
      searchMovieTMDB(movie),
    ); //returen arry of promises
    const tmdbResults = await Promise.all(moviePromises);
    dispatch(addSearchMovie({tmdbMovies:tmdbResults , suggestedMoviesNames:suggestedMoviesNames}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        action=""
        className="w-1/2  bg-transparent grid grid-flow-col grid-col-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="h-14 p-4 m-4 col-span-9 rounded-lg text-lg  border-4 border-purple-500  "
          placeholder={languagesText[language].placeholder}
        />
        <button
          className="h-14 m-4 py-2 px-4 bg-red-600 rounded-xl col-span-3 hover:scale-105 transition duration-100"
          onClick={handleGptSearchClick}
        >
          {languagesText[language].search}
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
