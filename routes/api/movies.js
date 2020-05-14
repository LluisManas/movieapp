const express = require("express");
const router = express.Router();
const config = require("config");
const fetch = require("node-fetch");

/* router.get("/homepage", async (req, res) => {
  const API_KEY = config.get("API_KEY");
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`
  );
  const json = await response.json();
  res.json(json);
  console.log(json);
}); */

router.get("/popular", async (req, res) => {
  const API_KEY = config.get("API_KEY");
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const json = await response.json();
  res.json(json);
  //console.log("here", json);
});

//----- Top Rated Movies -------
router.get("/top_rated", async (req, res) => {
  const API_KEY = config.get("API_KEY");
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  const json = await response.json();
  res.json(json);
  //console.log("top", json);
});

// ------ Get Movie Details -------
router.get("/homepage/:id", async (req, res) => {
  const API_KEY = config.get("API_KEY");
  console.log("paramssssssr", req.params.id);
  console.log();
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${API_KEY}&language=en-US`
  );

  const json = await response.json();
  res.json(json);
  //console.log("toppp", json);
});

//------- Search Movie ---------

router.get("/homepage/search/:search", async (req, res) => {
  const API_KEY = config.get("API_KEY");
  console.log("query", req.params.search);
  console.log();
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${req.params.search}&include_adult=false`
  );

  const json = await response.json();
  res.json(json);
  console.log("search", json);
});

// ----- Upcoming movies -------

router.get("/upcoming", async (req, res) => {
  const API_KEY = config.get("API_KEY");

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );

  const json = await response.json();
  res.json(json);
  //console.log("upcoming", json);
});

//------ Latest Movie --------

router.get("/latest", async (req, res) => {
  const API_KEY = config.get("API_KEY");
  console.log(req.params);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US&page=1`
  );

  const json = await response.json();
  res.json(json);
  //console.log("upcoming", json);
});

module.exports = router;
