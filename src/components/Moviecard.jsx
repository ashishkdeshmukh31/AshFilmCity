import React from "react";

function Moviecard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  const doesContain = (movieObj) => {
    return watchlist.some((movie) => movie.id === movieObj.id);
  };

  return (
    <div
      className="h-[40vh] w-[200px] bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="absolute top-2 right-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-800/70 text-white"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="absolute top-2 right-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-800/70 text-white"
        >
          &#128525;
        </div>
      )}
      <div className="absolute bottom-0 w-full p-2 text-center bg-gray-900/60 text-white text-lg rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
