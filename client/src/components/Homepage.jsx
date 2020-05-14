import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";
import Navbar from "./Navbar";
import Latest from "./Latest";
import { PromiseProvider } from "mongoose";

function Homepage(props) {
  const [topMovies, setTopMovies] = useState([]);
  console.log();

  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="popular">
        <h3>Popular Movies:</h3>
        <Popular />
      </div>
      <div>
        <Latest />
      </div>
      <div className="top">
        <h3>Top Rated Movies:</h3>
        <TopRated />
      </div>
      <div>
        <h3>Up Coming Movies:</h3>
        <Upcoming />
      </div>
    </div>
  );
}

export default Homepage;
