import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function TopRated() {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    axios
      .get("/api/movies/top_rated")
      .then((response) => {
        console.log(response.data.results);
        setTopMovies(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="scrolling-wrapper">
      {topMovies.map((movie, index) => (
        <div className="card">
          <Card
            id={movie.id}
            title={movie.title}
            vote_average={movie.vote_average}
            image={movie.poster_path}
          />
        </div>
      ))}
    </div>
  );
}

export default TopRated;
