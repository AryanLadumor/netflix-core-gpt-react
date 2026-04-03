import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_LOGIN_PAGE_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={NETFLIX_LOGIN_PAGE_IMG}
          alt="background"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
