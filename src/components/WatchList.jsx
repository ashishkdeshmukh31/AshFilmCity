import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";

function WatchList({ watchlist, setWatchList, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(['All Genres']);
  const [currGenre, setCurrGenre] = useState('All Genres');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const sortIncreasing = () => {
    const sortedIncreasing = [...watchlist].sort((movieA, movieB) => movieA.vote_average - movieB.vote_average);
    setWatchList(sortedIncreasing);
  };

  const sortDecreasing = () => {
    const sortedDecreasing = [...watchlist].sort((movieA, movieB) => movieB.vote_average - movieA.vote_average);
    setWatchList(sortedDecreasing);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(['All Genres', ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => (
          <div 
            key={genre}
            onClick={() => handleFilter(genre)} 
            className={currGenre === genre ? 
              "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-2 cursor-pointer" : 
              "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-2 cursor-pointer"}
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          placeholder="Search movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none pl-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2 cursor-pointer">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDecreasing} className="p-2 cursor-pointer">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj) => {
                if (currGenre === 'All Genres') {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] === currGenre;
                }
              }).filter((movieObj) => {
                return movieObj.title.toLowerCase().includes(search.toLowerCase());
              }).map((movieObj) => (
                <tr className="border-b-2" key={movieObj.id}>
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem] w-[10rem] sm:h-[4rem] sm:w-[6rem]"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt={movieObj.title}
                    />
                    <div className="mx-10">{movieObj.title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreids[movieObj.genre_ids[0]]}</td>
                  <td
                    className="text-red-600 cursor-pointer"
                    onClick={() => handleRemoveFromWatchList(movieObj)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
