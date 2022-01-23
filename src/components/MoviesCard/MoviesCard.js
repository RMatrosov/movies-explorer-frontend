import React from 'react';
import {MOVIES_API} from "../../utils/constants";
import {useLocation} from "react-router-dom";

const MoviesCard = ({card, savedMoviesId, onDelete, onSave, onSavedDelete}) => {

  const location = useLocation();

  const convertTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}ч ${minutes}м`;
  };

  let saved = savedMoviesId && savedMoviesId.some(i => i === card.id)


  return (
      <li className='card'>
        {
          location.pathname === '/saved-movies' &&
          <a href={card.trailer} target="_blank" className="card__link" rel="noreferrer">
            <img src={card.image} alt={card.nameRU} className="card__img"/>
          </a>
        }
        {
          location.pathname === '/movies' &&
          <a href={card.trailerLink} target="_blank" className="card__link" rel="noreferrer">
            <img src={`${MOVIES_API}${card.image.url}`} alt={card.nameRU} className="card__img"/>
          </a>
        }


        <p className="card__text">{card.nameRU}</p>
        <span className="card__duration">{convertTime(card.duration)}</span>
        {
          location.pathname === '/saved-movies' &&
          <button
              className="saved"
              onClick={() => onSavedDelete(card)}
          >
          </button>
        }
        {
          location.pathname === '/movies' &&
          <button
              className={`card__like ${saved ? 'liked' : ''}`}
              onClick={saved ? () => onDelete(card) : () => onSave(card)}
          >
          </button>
        }
      </li>
  );
};

export default MoviesCard;
