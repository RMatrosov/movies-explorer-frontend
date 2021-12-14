import React from 'react';

const Techs = () => {
  return (
      <div className='techs'>
        <div className="techs__container">
          <h4 className="techs__subtitle">Технологии</h4>
          <div className="techs__wrapper">
            <h2 className="techs__title">7 технологий</h2>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном
              проекте.</p>
            <ul className="techs__list">
              <li className="techs__items">HTML</li>
              <li className="techs__items">CSS</li>
              <li className="techs__items">JS</li>
              <li className="techs__items">React</li>
              <li className="techs__items">Git</li>
              <li className="techs__items">Express.js</li>
              <li className="techs__items">mongoDB</li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Techs;
