import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  
 /**временный код для отрисовки карточек*/ 
  const CARDS_TOTAL = 12;
  const CARDS_TOTAL_TWO = 4;
  const cards = Array(CARDS_TOTAL).fill(null);
  const saveCards = Array(CARDS_TOTAL_TWO).fill(null);

  return (
    <body className="app">
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
        <Route path="/movies" 
          element={<Movies
          cards={cards}
          loggedIn={loggedIn}
          />}
        />
        <Route path="/saved-movies" />
        <Route path="/profile" />
        <Route path="/signin" element={<Login />}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="*"element={<NotFound />}/>
      </Routes>
    </body>
  );
}

export default App;
