import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import axios from 'axios';

const Row = ({title , fetchURL ,rowID}) => {

  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);


  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  return (
    <>
    <h2 className='title1 text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='div5 relative flex items-center group'>
    <MdChevronLeft
      onClick={slideLeft}
      className='slide1 bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
      size={40}
    />
    <div
      id={'slider' + rowID}
      className='row_img w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
    >
      {movies.map((item, id) => (
        <Movie key={id} item={item} />
      ))}
    </div>
    <MdChevronRight
      onClick={slideRight}
      className='slide2 bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
      size={40}
    />
  </div>
    </>
  )
}

export default Row