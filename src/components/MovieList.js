import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-white font-bold text-xl py-5">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard movie={movie?.poster_path} key={movie.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
