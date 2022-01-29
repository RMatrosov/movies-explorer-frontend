import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import {Context} from "../../context/Context";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const Profile = ({handleUpdateUser, handleSignOut, profileUpdateError, updateSuccessful}) => {

  const context = React.useContext(Context);
  const [name, setName] = useState(context.currentUser.name);
  const [email, setEmail] = useState(context.currentUser.email);
  const [isChanged, setIsChanged] = useState(false);


  const schema = yup.object().shape({
    Email: yup.string()
        .email("адрес электронной почты должен содержать символ @")
        .required("введите адрес электронной почты"),
    name: yup.string()
        .min(2, "имя должно содержать от 2 до 32 символов")
        .max(30, "имя должно содержать от 2 до 30 символов")
        .required("обязательное поле")
  });

  const {register, formState: {errors, isValid}, handleSubmit} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    setIsChanged(
        !(context.currentUser.name === name) || (!(context.currentUser.email === email) && isValid)
    );
  }, [context.currentUser.name, context.currentUser.email, name, email]);


  function onSubmit() {
    handleUpdateUser(name, email)
  }

  const nameField = register("name", { required: true });
  const emailField = register("Email", { required: true });

  return (
      <>
        <Header type={'white'}/>
        <div className='profile'>
          <form className="profile__form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h3 className="profile__title">Привет, {context.currentUser.name}!</h3>
            <div className="profile__input-group">
              <label htmlFor="name" className="profile__input-label">Имя</label>
              <input placeholder='Имя' type="text" className="profile__input name"
                     id='name'
                     value={name || ''}
                     {...nameField}
                     onChange={(e) => {
                       setName(e.target.value)
                       nameField.onChange(e)
                     }}
              />
              <span className='log__in_error'>{errors.name?.message}</span>
            </div>

            <div className="profile__input-group">
              <label htmlFor="name" className="profile__input-label">E-mail</label>
              <input placeholder='E-mail' type="text" className="profile__input mail"
                     value={email || ''}
                     {...emailField}
                     onChange={(e) => {
                       setEmail(e.target.value)
                       emailField.onChange(e)
                     }}
              />
              {profileUpdateError ? <span className='log__in_error'>При обновлении профиля произошла ошибка.</span> :
                  <span className='log__in_error'>{errors.Email?.message}</span>}
              {updateSuccessful ? <span className='log__in_successful'>Профиль успешно обновлен</span> :
                  <span className='log__in_error'>{errors.Email?.message}</span>}
            </div>
            <button type="submit"
                    className={isValid && isChanged ? "profile__btn redact" : 'profile__btn redact redact_button_disabled'}>Редактировать
            </button>
            <button type="button"
                    onClick={handleSignOut}
                    className="profile__btn out">Выйти из аккаунта
            </button>
          </form>
        </div>
      </>
  );
};

export default Profile;
