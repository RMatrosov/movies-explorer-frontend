import React, {useState} from 'react';
import {Link} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const Login = ({handleAuthorize, loginError}) => {

  const schema = yup.object().shape({
    Email: yup.string()
        .email("адрес электронной почты должен содержать символ @")
        .required("введите адрес электронной почты"),
    password: yup.string()
        .min(8, "пароль должен содержать от 8 до 32 символов")
        .max(32, "пароль должен содержать от 8 до 32 символов")
        .required("обязательное поле"),
  });

  const {register, formState: {errors, isValid}, handleSubmit} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit() {
    handleAuthorize(email, password)
  }

  const emailField = register("Email", { required: true });
  const passwordField = register("password", { required: true });

  return (
      <div className='login'>
        <form className="login__form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Link to='/'>
            <div className="login__logo"/>
          </Link>
          <h3 className="login__title">Рады видеть!</h3>
          <label className='login__label' htmlFor="E-mail">E-mail</label>
          <input className='login__input' id='E-mail' type="email"
                 value={email || ''}
                 {...emailField}
                 onChange={(e) => {
                   setEmail(e.target.value)
                   emailField.onChange(e)
                 }}
          />
          <span className='log__in_error'>{errors.Email?.message}</span>

          <label className='login__label' htmlFor="password">Пароль</label>
          <input className='login__input' id='password' type="password"
                 value={password || ''}
                 {...passwordField}
                 onChange={(e) => {
                   setPassword(e.target.value)
                   passwordField.onChange(e)
                 }}
          />
          {loginError ? <span className='log__in_error'>Что то пошло не так...</span> :
              <span className='log__in_error'>{errors.password?.message}</span>}

          <button className={isValid? "login__submit" : 'login__submit button_disabled'}>Войти</button>
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
