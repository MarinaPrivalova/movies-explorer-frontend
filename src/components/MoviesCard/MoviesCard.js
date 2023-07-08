import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import Film from '../../images/film.png';

function MoviesCard() {
  const location = useLocation();

  return (
    <div className='movies-card'>
      <img className='movies-card__img' src={Film} alt='Фотография из фильма' />
        <div className='movies-card__content'>
          <h2 className='movies-card__name'>33 слова о дизайне</h2>
          {(location.pathname === '/movies') && <button className='movies-card__btn movies-card__btn__blank button'></button>}
          {(location.pathname === '/saved-movies') && <button className='movies-card__btn movies-card__btn_delete '></button>}
        </div>
      <p className='movies-card__duration'>1ч 42м</p>
    </div>
  );
}

export default MoviesCard;