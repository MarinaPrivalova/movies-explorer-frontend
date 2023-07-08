import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className='movies__list'>
      {props.cards.map((card, index) => (
        <MoviesCard key={index} />
      ))}
    </section>
  );
}

export default MoviesCardList;