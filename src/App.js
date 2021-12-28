import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import React, { Component, useState, useEffect } from "react";
import Scroller from "./components/scroller";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const CONTINUE_WATCHING_FOR_USER = `continue-watching-for-user`;

function App() {
  const [continueWatchingForUser, setContinueWatchingForUser] = useState([]);
  const [trendingNow, setTrendingNow] = useState([]);
  const [casualViewing, setCasualViewing] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [usMovies, setUsMovies] = useState([]);

  useEffect(async () => {
    try {
      const continueWatchingForUserResults = await axios.get(
        `${API_URL}/${CONTINUE_WATCHING_FOR_USER}`
      );
      let movies = continueWatchingForUserResults.data.movies;
      movies = movies.map((movie) => {
        return {
          id: movie.movieId,
          image: movie.movieImage,
          imageBg: movie.movieImage,
          title: movie.movieName,
          url: movie.movieUrl,
        };
      });
      setContinueWatchingForUser(movies);

      const trendingNowResults = await axios.get(`${API_URL}/trending-now`);
      movies = trendingNowResults.data.movies;
      movies = movies.map((movie) => {
        return {
          id: movie.movieId,
          image: movie.movieImage,
          imageBg: movie.movieImage,
          title: movie.movieName,
        };
      });
      setTrendingNow(movies);

      const casualViewingResults = await axios.get(`${API_URL}/casual-viewing`);
      movies = casualViewingResults.data.movies;
      movies = movies.map((movie) => {
        return {
          id: movie.movieId,
          image: movie.movieImage,
          imageBg: movie.movieImage,
          title: movie.movieName,
        };
      });
      setCasualViewing(movies);

      const thrillerMoviesResults = await axios.get(
        `${API_URL}/thriller-movies`
      );
      movies = thrillerMoviesResults.data.movies;
      movies = movies.map((movie) => {
        return {
          id: movie.movieId,
          image: movie.movieImage,
          imageBg: movie.movieImage,
          title: movie.movieName,
        };
      });
      setThrillerMovies(movies);

      const usMoviesResults = await axios.get(`${API_URL}/us-movies`);
      movies = usMoviesResults.data.movies;
      movies = movies.map((movie) => {
        return {
          id: movie.movieId,
          image: movie.movieImage,
          imageBg: movie.movieImage,
          title: movie.movieName,
        };
      });
      setUsMovies(movies);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="wrapper">
      <Header></Header>
      <Banner> </Banner>
      <Scroller
        items={continueWatchingForUser}
        title="Continue Watching for user"
      />
      <Scroller items={trendingNow} prefix="trendingNow" title="Trending Now" />
      <Scroller
        items={casualViewing}
        prefix="casualViewing"
        title="Casual Viewing"
      />
      <Scroller
        items={thrillerMovies}
        prefix="thrillerMovies"
        title="Thriller Movies"
      />
      <Scroller items={usMovies} prefix="usMovies" title="US Movies" />
      <Footer />
    </div>
  );
}

export default App;
