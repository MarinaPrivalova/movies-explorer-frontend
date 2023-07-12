import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader'

function Movies({ loggedIn }) {

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='movies'>
        <SearchForm />
        <Preloader />
        <MoviesCardList />
        <button className='movies__add-cards button' type='button'>Ещё</button>
      </main>
      <Footer />
    </>
  );
};

export default Movies;