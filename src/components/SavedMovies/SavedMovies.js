import React from 'react';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";


const SavedMovies = ({savedMovies, onSavedDelete, searchSavedMovies, setSavedShortSearched}) => {

  return (
      <div className='saved__movies'>
        <Header type={'white'}/>
        <SearchForm onSearch={searchSavedMovies} onChangeDuration={setSavedShortSearched}/>
        {savedMovies === "NotFound" ? (
            <p className="movies__not-found">Фильмы не найдены</p>
        ) : (
            <MoviesCardList savedMovies={savedMovies} onSavedDelete={onSavedDelete}/>
        )}
        <Footer/>
      </div>
  );
};

export default SavedMovies;
