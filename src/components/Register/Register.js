import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
  return (
      <div className='register'>
        <form className="register__form">
          <Link to='/'>
            <div className="register__logo"/>
          </Link>
          <h3 className="register__title">Добро пожаловать!</h3>
          <label className='register__label' htmlFor="name">Имя</label>
          <input className='register__input' id='name' type="text"/>

          <label className='register__label' htmlFor="E-mail">E-mail</label>
          <input className='register__input' id='E-mail' type="email"/>

          <label className='register__label' htmlFor="password">Пароль</label>
          <input className='register__input' id='password' type="password"/>

          <button className="register__submit">Зарегистрироваться</button>
          <p className="register__btn-text">Уже зарегистрированы?
            <Link to='/signin'>
              <button className="register__btn">Войти</button>
            </Link>
          </p>
        </form>
      </div>
  );
};

export default Register;
