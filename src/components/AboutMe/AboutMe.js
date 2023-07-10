import React from 'react';
import './AboutMe.css';
import avatar from '../../images/profile-foto.jpg';

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__title section-title">Студент</h2>
      <div className="aboutme__profile">
        <div className="aboutme__discription">
          <h3 className="aboutme__name">Марина</h3>
          <p className="aboutme__job">Фронтенд-разработчик, 36 лет</p>
          <p className="aboutme__text">Я живу в Санкт-Петербурге и недавно закончила курс по веб-&nbsp;разработке.
            Мне нравится узнавать новое, искать и находить решения, что-то создавать.
            Каждый день стараюсь совершенствовать свои навыки, получать новые знания.
            В свободное время люблю гулять и заниматься со своей собакой кинологическим фристайлом</p>
          <a className="aboutme__link link" href="https://github.com/MarinaPrivalova" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="aboutme__avatar" src={avatar} alt="Аватар" />
      </div>
    </section>
  )
}

export default AboutMe;