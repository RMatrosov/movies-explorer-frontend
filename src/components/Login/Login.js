import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
  return (
      <div className='login'>
        <form className="login__form">
          <Link to='/'>
            <div className="login__logo"/>
          </Link>
          <h3 className="login__title">Рады видеть!</h3>
          <label className='login__label' htmlFor="E-mail">E-mail</label>
          <input className='login__input' id='E-mail' type="email"/>

          <label className='login__label' htmlFor="password">Пароль</label>
          <input className='login__input' id='password' type="password"/>

          <button className="login__submit">Войти</button>
          <p className="login__btn-text">Ещё не зарегистрированы?
            <Link to='/signup'>
              <button className="login__btn">Регистрация</button>
            </Link>
          </p>
        </form>
      </div>
  );
};

export default Login;
