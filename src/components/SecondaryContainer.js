import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
      <div className="bg-black">
        <div className="relative -mt-96">
          <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/> 
        </div>
      </div>
  );
};

export default SecondaryContainer;
