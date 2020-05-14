import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Upcoming() {
  const [upComingMovies, setUpComingMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/api/movies/upcoming")
      .then((response) => {
        console.log(response.data);
        setUpComingMovies(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="scrolling-wrapper">
        {upComingMovies.map((movie, index) => (
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
    </div>
  );
}

export default Upcoming;
