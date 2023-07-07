import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

 /**код для отрисовки карточек (временный)*/ 
  const CARDS_TOTAL = 16;
  const CARDS_TOTAL_TWO = 3;
  const cards = Array(CARDS_TOTAL).fill(null);
  const saveCards = Array(CARDS_TOTAL_TWO).fill(null);

  return (
    <body className="app">
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/movies" 
          element={
            <Movies
              loggedIn={loggedIn}
              cards={cards}
            />
          }
        />
        <Route path="/saved-movies" 
          element={
            <SavedMovies 
              loggedIn={loggedIn} 
              cards={saveCards}
            />
          } 
        />
        <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*"element={<NotFound />}/>
      </Routes>
    </body>
  );
}

export default App;
