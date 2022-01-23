import React from 'react';

const AboutProject = () => {
  return (
      <div className='project' id="project">
        <div className="project__container">
          <h4 className="project__title">О проекте</h4>
          <div className="project__infos">
            <div className="project__info">
              <h5 className="project__info-title">Дипломный проект включал 5 этапов</h5>
              <p className="project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.</p>
            </div>
            <div className="project__info">
              <h5 className="project__info-title">На выполнение диплома ушло 5 недель</h5>
              <p className="project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.</p>
            </div>
          </div>
          <div className="project__weeks">
            <p className="project__weeks-back">1 неделя</p>
            <p className="project__weeks-front">4 недели</p>
          </div>
          <div className="project__weeks-infos">
            <p className="project__weeks-info">Back-end</p>
            <p className="project__weeks-info">Front-end</p>
          </div>
        </div>
      </div>
  );
};

export default AboutProject;
