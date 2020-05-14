import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/api/movies/popular")
      .then((popular) => {
        console.log(popular.data);

        setMovies(popular.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="scrolling-wrapper">
        {movies.map((movie, index) => (
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

export default Popular;

/* import React, { Component } from "react";
import axios from "axios";

export class Popular extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios.get("/api/movies/popular").then((response) => {
      console.log(response.data.results);
      this.setState({
        movies: response.data.resutls,
      });
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map((el) => (
            <p>{el.title}</p>
          ))}
        </ul>
      </div>
    );
  }
}

export default Popular;
 */
