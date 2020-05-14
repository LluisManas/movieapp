import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function SearchBar() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`/api/movies/homepage/search/${search}`)
      .then((response) => {
        console.log(response.data.results);
        setFilteredMovies(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div>
      <div className="searchbar">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkC4538eUVW1ZzkRA6NgCeRqIWiky4oyQfgINrpr3YU0yazY-G&usqp=CAU"
        />
        <input
          className="input"
          type="text"
          placeholder="Search.."
          icon="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredMovies ? <h3> Search Results:</h3> : <h3></h3>}
      <div className="searchResults">
        {filteredMovies ? (
          filteredMovies.map((movie) => (
            <div className="card">
              <Card
                id={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
                image={movie.poster_path}
              />
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
