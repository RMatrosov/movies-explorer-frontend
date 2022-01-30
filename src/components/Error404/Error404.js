import React from 'react';
import {Link} from "react-router-dom";

const Error404 = () => {
  return (
      <div className='Error404'>
        <h1 className="Error404__title">404</h1>
        <p className="Error404__text">Страница не найдена</p>
        <Link to='/'><button className="Error404__btn">Назад</button></Link>
      </div>
  );
};

export default Error404;
