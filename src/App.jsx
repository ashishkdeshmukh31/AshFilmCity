import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import "./App.css";

function App() {
  const [watchlist, setWatchList] = useState([]);

  const handleAddtoWatchlist = (movieObj) => {
    setWatchList((prevWatchlist) => {
      const newWatchlist = [...prevWatchlist, movieObj];
      localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
      return newWatchlist;
    });
  };

  const handleRemoveFromWatchList = (movieObj) => {
    setWatchList((prevWatchlist) => {
      const filteredWatchlist = prevWatchlist.filter((movie) => movie.id !== movieObj.id);
      localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
      return filteredWatchlist;
    });
  };

  useEffect(() => {
    const moviesFromStorage = localStorage.getItem("moviesApp");
    if (moviesFromStorage) {
      setWatchList(JSON.parse(moviesFromStorage));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                watchlist={watchlist}
                handleAddtoWatchlist={handleAddtoWatchlist}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <WatchList
              watchlist={watchlist}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
