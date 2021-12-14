import React from 'react';
import Header from "../Header/Header";

const Profile = () => {
  return (
      <>
        <Header type={'white'}/>
        <div className='profile'>
          <form className="profile__form">
            <h3 className="profile__title">Привет, Виталий!</h3>
            <input placeholder='Имя' type="text" className="profile__input name"/>
            <input placeholder='E-mail' type="text" className="profile__input mail"/>
            <button className="profile__btn redact">Редактировать</button>
            <button className="profile__btn out">Выйти из аккаунта</button>
          </form>
        </div>
      </>
  );
};

export default Profile;
