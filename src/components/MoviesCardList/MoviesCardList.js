import React, {useEffect, useState} from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import {desktopWidth, mobileWidth, smallDesktopWidth, tabletWidth} from "../../utils/constants";

const MoviesCardList = ({movies, savedMovies, savedMoviesId, onSave, onDelete, onSavedDelete}) => {
  const location = useLocation();
  const [renderMovies, setRenderMovies] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function changeWidth() {
    return setTimeout(() => {
      setWindowSize(window.innerWidth);
    }, 500);
  }

  function moviesCount() {
    if (windowSize >= desktopWidth) return {count: 12, add: 3};
    if (windowSize >= smallDesktopWidth) return {count: 9, add: 2};
    if (windowSize >= tabletWidth) return {count: 5, add: 2};
    if (windowSize >= mobileWidth) return {count: 5, add: 2};
  }

  function addMovies() {
    setRenderMovies(movies.slice(0, renderMovies.length + moviesCount().add));
  }

  useEffect(() => {
    movies && setRenderMovies(movies.slice(0, moviesCount().count));
  }, [movies, windowSize]);

  useEffect(() => {
    window.addEventListener("resize", changeWidth);
  });
  return (
      <section className='cardList__container'>
        {
          location.pathname === '/movies' &&
          <ul className="cardList">
            {
              location.pathname === '/movies' &&
              renderMovies.map((card) => (
                  <MoviesCard key={card.id} card={card}
                              savedMoviesId={savedMoviesId}
                              onSave={onSave} onDelete={onDelete}
                  />
              ))
            }

          </ul>
        }
        {
          location.pathname === '/saved-movies' &&
          <ul className="cardList">
            {
              location.pathname === '/saved-movies' &&
              savedMovies.map((card) => (
                  <MoviesCard key={card.movieId} card={card} onSavedDelete={onSavedDelete}
                  />
              ))
            }
          </ul>
        }
        {
          location.pathname === '/movies' &&
          <div>
            {movies.length > renderMovies.length ? (
                <button className="cardList__btn"
                        onClick={addMovies}
                >Ещё</button>
            ) : null}
          </div>
        }
      </section>
  );
};

export default MoviesCardList;
