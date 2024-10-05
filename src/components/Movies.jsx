import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ handleAddtoWatchlist, handleRemoveFromWatchList, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=29ce1a55e9c8b9ad8279896300ede5dc&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => (
          <Moviecard
            key={movieObj.id}
            movieObj={movieObj}
            poster_path={movieObj.poster_path}
            name={movieObj.original_title}
            handleAddtoWatchList={handleAddtoWatchlist}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
            watchlist={watchlist}
          />
        ))}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

export default Movies;
