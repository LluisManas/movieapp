import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function MovieInfo(props) {
  const [movie, setMovie] = useState([]);
  const {
    match: { params },
  } = props;
  console.log(params.id);

  useEffect(() => {
    axios
      .get(`/api/movies/homepage/${params.id}`)

      .then((popular) => {
        console.log(popular.data);

        setMovie(popular.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="DetailBox">
        <div className="image">
          <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} />
        </div>
        <div className="detailInfo">
          {movie.title}
          <ul>
            <li>Score: {movie.vote_average}</li>
            <li>Runtime: {movie.runtime}</li>
            <li>Released Date: {movie.released_date}</li>
            <li>Budget: ${movie.budget}</li>
            <li>Revenue: ${movie.revenue}</li>
            <li>Original Language: {movie.original_language}</li>
            <li>Overview: {movie.overview}</li>
          </ul>
          <button>
            <a href="/homepage">Back</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
