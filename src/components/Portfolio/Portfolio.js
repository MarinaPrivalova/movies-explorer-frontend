import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <a href="https://marinaprivalova.github.io/how-to-learn/" className="portfolio__link" target="_blank" rel="noreferrer">
        <p  className="portfolio__subtitle">Статичный сайт</p>
        <p className="portfolio__arrow">&#8599;</p>
      </a>
      <a href="https://marinaprivalova.github.io/russian-travel/" className="portfolio__link" target="_blank" rel="noreferrer">
        <p className="portfolio__subtitle">Адаптивный сайт</p>
        <p className="portfolio__arrow">&#8599;</p>
      </a>
      <a href="https://privalovama.students.nomoredomains.rocks/sign-up" className="portfolio__link" target="_blank" rel="noreferrer">
        <p className="portfolio__subtitle">Одностраничное приложение</p>
        <p className="portfolio__arrow">&#8599;</p>
      </a>
    </section>
  )
}

export default Portfolio;