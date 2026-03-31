import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_LOGIN_PAGE_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="w-full">
      <div className="absolute w-full -z-10">
        <img
          className="w-full h-screen object-cover"
          src={NETFLIX_LOGIN_PAGE_IMG}
          alt=""
        />
        <div className="absolute  inset-0 bg-black/40"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
