import React, { useEffect, useState } from 'react';
import './MovieSlideshow.css';

function MovieSlideshow({ movies }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div className="slideshow-container">
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}
        >
          <div className="slide-content">
            <h2>{movie.original_title}</h2>
            <p>{movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieSlideshow;
