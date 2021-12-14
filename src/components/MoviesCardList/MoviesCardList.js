import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({movieList, saved}) => {

  return (
      <section className='cardList__container'>
        <ul className='cardList'>
          {movieList && movieList.map(card => <MoviesCard key={card.id} saved={saved} card={card}/>)}
        </ul>
        <button className="cardList__btn">Ещё</button>
      </section>
  );
};

export default MoviesCardList;
