import React, {useState} from 'react';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import {movieList} from "../../movieList";

const SavedMovies = () => {

  const [saved, setSaved] = useState(true);

  return (
      <div>
        <Header type={'white'}/>
        <SearchForm/>
        <MoviesCardList saved={saved} movieList={movieList}/>
        <Footer/>
      </div>
  );
};

export default SavedMovies;
