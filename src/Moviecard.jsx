import React from "react";

const Moviecard = ({ movie }) => {
  console.log(movie); // Check the movie object in the console
  return (
    <div className='movie'>
      <div className='year'><p>{movie.Year}</p></div>
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
      </div>
      <div><span>{movie.Type}</span>
      <h3>{movie.Title}</h3></div>
      
    </div>
  );
};

export default Moviecard;
