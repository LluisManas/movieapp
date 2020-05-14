import React, { useEffect, useState } from "react";
import axios from "axios";

function Latest() {
  const [latestMovie, setLatestMovie] = useState([]);

  useEffect(() => {
    axios
      .get("/api/movies/latest")
      .then((response) => {
        console.log(response.data);
        setLatestMovie(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
}

export default Latest;
