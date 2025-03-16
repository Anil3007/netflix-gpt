import react from "react";
import useMovietrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.movieTrailer);

  useMovietrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        title="is"
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?autoplay=1&mute=1"}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
