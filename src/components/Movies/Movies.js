import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";


const Movies = ({
                  onSearch,
                  onChangeDuration,
                  movies,
                  savedMoviesId,
                  onDelete,
                  onSave,
                  notFound,
                  searchError,
                  searchLoading,
                  searchQuery,
                  checked
                }) => {

  return (
      <div className='movies'>
        <Header type={'white'}/>
        <SearchForm onSearch={onSearch} onChangeDuration={onChangeDuration} searchQuery={searchQuery}
                    checked={checked}/>
        {searchLoading ? <Preloader /> : null}
        {notFound ? (
            <p className="movies__not-found">Ничего не найдено</p>
        ) : null}
        {searchError ? (
            <p className="movies__search-error">
              Во время запроса произошла ошибка. Возможно, проблема с соединением
              или сервер недоступен. Подождите немного и попробуйте ещё раз
            </p>
        ) : null}
        <MoviesCardList movies={movies} savedMoviesId={savedMoviesId} onDelete={onDelete} onSave={onSave}/>
        <Footer/>
      </div>
  );
};

export default Movies;
