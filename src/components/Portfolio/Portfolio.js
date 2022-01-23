import React from 'react';

const Portfolio = () => {
  return (
      <div className='portfolio'>
        <div className="portfolio__container">
          <h5 className="portfolio__title">Портфолио</h5>
          <ul className="portfolio__links">
            <li className="portfolio__link">
              <a rel="noreferrer" href="https://rmatrosov.github.io/russian-travel/index.html" target="_blank"
                 className="portfolio__link-a">Статичный
                сайт</a>
            </li>
            <li className="portfolio__link">
              <a rel="noreferrer" href="https://rmatrosov.github.io/russian-travel/index.html" target="_blank"
                 className="portfolio__link-a">Адаптивный
                сайт</a></li>
            <li className="portfolio__link">
              <a rel="noreferrer" href="https://matrosov.mesto.nomoredomains.rocks/" target="_blank" className="portfolio__link-a">Одностраничное
                приложение</a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Portfolio;
