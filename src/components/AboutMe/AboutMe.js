import React from 'react';

const AboutMe = () => {
  return (
      <div className='aboutMe'>
        <div className="aboutMe__container">
          <h4 className="aboutMe__subtitle">Студент</h4>
          <div className="aboutMe__content">
            <h3 className="aboutMe__title">Виталий</h3>
            <p className="aboutMe__job">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <ul className="aboutMe__links">
              <li className="aboutMe__link">Facebook</li>
              <li className="aboutMe__link">Github</li>
            </ul>
            <div className="aboutMe__img"/>
          </div>
        </div>
      </div>
  );
};

export default AboutMe;
