import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-96 px-32 text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold py-2'>{title}</h1>
      <p className='py-5 w-1/3'>{overview}</p>
      <button className='w-28 p-3 rounded-md bg-gray-100 text-black hover:bg-opacity-50'>Play</button>
      <button className='w-28 p-3 rounded-md bg-gray-500 bg-opacity-70 mx-2'>Info</button>
    </div>
  );
}

export default VideoTitle;

