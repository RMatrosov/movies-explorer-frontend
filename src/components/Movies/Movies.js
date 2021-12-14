import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {movieList} from "../../movieList";

const Movies = () => {
  return (
      <div className='movies'>
        <Header type={'white'}/>
        <SearchForm/>
        <MoviesCardList movieList={movieList}/>
        <Footer/>
      </div>
  );
};

export default Movies;
