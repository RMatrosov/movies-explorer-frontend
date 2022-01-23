import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

const Register = ({handleRegister, registerError}) => {

  const schema = yup.object().shape({
    Email: yup.string()
        .email("адрес электронной почты должен содержать символ @")
        .required("введите адрес электронной почты"),
    password: yup.string()
        .min(8, "пароль должен содержать от 8 до 32 символов")
        .max(32, "пароль должен содержать от 8 до 32 символов")
        .required("обязательное поле"),
    name: yup.string()
        .min(2, "имя должно содержать от 2 до 32 символов")
        .max(32, "имя должно содержать от 2 до 32 символов")
        .required("обязательное поле")
  });

  const {register, formState: {errors, isValid}, handleSubmit} = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit() {
    handleRegister(name, email, password)
  }

  return (
      <div className='register'>
        <form className="register__form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Link to='/'>
            <div className="register__logo"/>
          </Link>
          <h3 className="register__title">Добро пожаловать!</h3>
          <label className='register__label' htmlFor="name">Имя</label>
          <input className='register__input' id='name' type="text"
                 value={name || ''}
                 {...register("name", {required: true})}
                 onChange={(e) => setName(e.target.value)}
          />
          <span className='log__in_error'>{errors.name?.message}</span>

          <label className='register__label' htmlFor="E-mail">E-mail</label>
          <input className='register__input' id='E-mail' type="email"
                 value={email || ''}
                 {...register("Email", {required: true})}
                 onChange={(e) => setEmail(e.target.value)}
          />
          <span className='log__in_error'>{errors.Email?.message}</span>

          <label className='register__label' htmlFor="password">Пароль</label>
          <input className='register__input' id='password' type="password"
                 value={password || ''}
                 {...register("password", {required: true})}
                 onChange={(e) => setPassword(e.target.value)}
          />
          {registerError ? <span className='log__in_error'>Что-то пошло не так...</span>:
              <span className='log__in_error'>{errors.password?.message}</span>}

          <button className={isValid? "register__submit" : 'register__submit button_disabled'}>Зарегистрироваться</button>
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
