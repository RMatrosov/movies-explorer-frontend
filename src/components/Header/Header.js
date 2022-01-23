import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {Context} from "../../context/Context";



const Header = ({type}) => {

  const context = React.useContext(Context);

  const [popupOpened, setPopupOpened] = useState(false)

  function handleOpenMenu() {
    setPopupOpened(!popupOpened)
  }

  return (
      <header
          className={type === 'white' ? 'header header__white' : 'header'}>
        {context.loggedIn && (
            <nav className="header__container">
              <Link to="/" className="header__logo"/>
              <div className="header__logged-buttons">
                <NavLink to='/movies'
                         className={type === 'white' ? 'header__logged-button header__logged-button-white' : 'header__logged-button'}>
                  Фильмы
                </NavLink>
                <NavLink to='/saved-movies'
                         className={type === 'white' ? 'header__logged-button header__logged-button-white' : 'header__logged-button'}>
                  Сохранённые фильмы
                </NavLink>
              </div>
              <Link to='/profile'>
                <button className='header__button-acc header__button-acc-full'>Аккаунт</button>
              </Link>
              <button className={type === 'white' ? 'header__burger header__burger-white' : 'header__burger'}
                      onClick={handleOpenMenu}/>
            </nav>
        )}
        <div className={`header__popup ${popupOpened ? '' : 'header__popup_closed'}`}>
          <nav className="header__menu">
            <button className="header__close-button" onClick={handleOpenMenu}/>
            <div className="header__links-container">
              <NavLink to="/" className="header__link">Главная</NavLink>
              <NavLink to="/movies" className="header__link"
                       onClick={handleOpenMenu}>Фильмы</NavLink>
              <NavLink to="/saved-movies" className="header__link"
                       onClick={handleOpenMenu}>Сохраненные фильмы</NavLink>
            </div>
            <Link to='/profile'>
              <button onClick={handleOpenMenu} className='header__button-acc'>Аккаунт</button>
            </Link>
          </nav>
        </div>
        {!context.loggedIn && (
            <nav className="header__container">
              <Link to="/" className="header__logo header__logo_type_promo"/>
              <div className="header__buttons">
                <Link to="/signup" className="header__register">Регистрация</Link>
                <Link to="/signin" className="header__entry">Войти</Link>
              </div>
            </nav>
        )}
      </header>
  );
};

export default Header;
