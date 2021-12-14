import React from 'react';

const MoviesCard = ({card, saved}) => {

  const convertTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}ч ${minutes}м`;
  };

  return (
      <li className='card'>
        <img src={`https://api.nomoreparties.co${card.image.url}`} alt={card.nameRU} className="card__img"/>
        <p className="card__text">{card.nameRU}</p>
        <span className="card__duration">{convertTime(card.duration)}</span>
        <button className={saved ? 'saved' : "card__like liked"}/>
      </li>
  );
};

export default MoviesCard;
