import React from 'react';
import { IMG_URL } from '../utils/constants';

const MovieCard = ({movie}) => {
  return (
    <img className='w-40 mr-5' src = {IMG_URL + movie}/>
  );
}

export default MovieCard;
