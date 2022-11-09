import React, { createContext, useState } from "react";
const MoviesContext = createContext({
  favoutiteMovies: [],
  setFavoriteMovies: () => {},
  addFavouriteMovie: () => {},
  removeFavouriteMovie: () => {},
});

const MoviesContextProvider = ({ children }) => {
  const [favoutiteMovies, setFavoriteMovies] = useState([]);

  const addFavouriteMovie = (movie) => {
    setFavoriteMovies((currentMovies) => [...currentMovies, movie]);
  };

  const removeFavouriteMovie = (movie) => {
    setFavoriteMovies((currentMovies) => {
      return currentMovies.filter(
        (currentMovie) => currentMovie.key !== movie.key
      );
    });
  };

  return (
    <MoviesContext.Provider
      value={{
        favoutiteMovies,
        setFavoriteMovies,
        addFavouriteMovie,
        removeFavouriteMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesContext, MoviesContextProvider };
