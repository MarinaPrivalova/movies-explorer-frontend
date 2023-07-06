import React from 'react';
import './MoviesCard.css';
import Film from '../../images/film.png';

function MoviesCard() {
  return (
    <div className='movies-card'>
      <img className='movies-card__img' src={Film} alt='Фотография из фильма' />
        <div className='movies-card__content'>
          <h2 className='movies-card__name'>33 слова о дизайне</h2>
          <button type='button' className='movies-card__btn'></button>
        </div>
      <p className='movies-card__duration'>1ч 42м</p>
    </div>
  );
}

export default MoviesCard;