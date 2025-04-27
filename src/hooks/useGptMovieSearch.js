import client from "../utils/opnai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const useGptMovieSearch = () => {
  const dispatch = useDispatch();

  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "?include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies in comma seperated format like the example given a head. Example result is Don, Sholey, Koi Mil Gaya, Gadar, Gol Mal";

    const gptResults = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "developer", content: gptQuery }],
    });

    if (!gptResults.choices) {
      //handle error
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB());

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return {handleSearchClick, searchText}
};


export default useGptMovieSearch;