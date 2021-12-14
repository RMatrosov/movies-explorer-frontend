import React from 'react';

const Portfolio = () => {
  return (
      <div className='portfolio'>
        <div className="portfolio__container">
          <h5 className="portfolio__title">Портфолио</h5>
          <ul className="portfolio__links">
            <li className="portfolio__link">Статичный сайт</li>
            <li className="portfolio__link">Адаптивный сайт</li>
            <li className="portfolio__link">Одностраничное приложение</li>
          </ul>
        </div>
      </div>
  );
};

export default Portfolio;
