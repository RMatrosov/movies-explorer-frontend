import React from 'react';

const FilterCheckbox = ({onChangeDuration, checked}) => {

  function handleChange(event) {
    onChangeDuration(event.target.checked);
  }
  return (
      <div className='checkbox'>
        <label className='checkbox__label' >
          <input type="checkbox" className='checkbox__input'
                 onChange={handleChange} checked={checked}/>
          <span className='checkbox__span'/>
        </label>
        <p className="checkbox__text">Короткометражки</p>
      </div>
  );
};

export default FilterCheckbox;
