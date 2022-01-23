import React from 'react';

const Footer = () => {
  return (
      <footer className='footer'>
        <div className="footer__container">
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__info">
            <div className="footer__date">© 2022</div>
            <ul className="footer__links">
              <li className="footer__link">Яндекс.Практикум</li>
              <li className="footer__link">Github</li>
              <li className="footer__link">Facebook</li>
            </ul>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
