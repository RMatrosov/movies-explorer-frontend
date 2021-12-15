import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
      <div className='search'>
        <div className="search__container">
          <form className="search__form">
            <input placeholder='Фильм' required type="text" className="search__input"/>
            <button className="search__btn">Поиск</button>
          </form>
          <FilterCheckbox/>
        </div>
      </div>
  );
};

export default SearchForm;
