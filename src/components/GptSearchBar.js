import React from "react";
import { lang } from "../utils/langConstants";
import { useSelector } from "react-redux";
import useGptMovieSearch from "../hooks/useGptMovieSearch";


const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.language?.selectedLang);
  const { handleSearchClick, searchText } = useGptMovieSearch();

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="p-4 m-4 rounded-md col-span-9"
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="text-white bg-red-600 p-3 m-4 rounded-md col-span-3"
          onClick={handleSearchClick}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
