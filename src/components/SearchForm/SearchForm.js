import React, {useState} from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";


const SearchForm = (props) => {

  const schema = yup.object().shape({
    inputValue: yup.string()
        .min(1, "введите поисковое слово")
        .max(50, "не более 50 символов")
        .required("Нужно ввести ключевое слово")
  });

  const {register, formState: {errors}, handleSubmit} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [inputValue, setInputValue] = useState(props.searchQuery);

  function onSubmit() {
    props.onSearch(inputValue);
  }

  const inputValueField = register("inputValue", { required: true });

  return (
      <div className='search'>
        <div className="search__container">
          <form className="search__form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <input placeholder='Фильм' required type="text" className="search__input"
                   value={inputValue}
                   {...inputValueField}
                   onChange={(e) => {
                     setInputValue(e.target.value)
                     inputValueField.onChange(e)
                   }}
            />
            <button className="search__btn">Поиск</button>
          </form>
          <span className='log__in_error'>{errors.inputValue?.message}</span>
          <FilterCheckbox onChangeDuration={props.onChangeDuration} checked={props.checked}/>
        </div>
      </div>
  );
};

export default SearchForm;
