import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovietrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMainMovie = async () => {
    const movie = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await movie.json();
    const trailerVideo = json.results.filter((movie) => movie.type === "Trailer");
    const trailer = trailerVideo.length ? trailerVideo[0] : json.results[0]
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMainMovie();
  }, []);

};

export default useMovietrailer;
