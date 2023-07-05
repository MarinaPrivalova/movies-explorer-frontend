import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies'

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <body className="app">
      <Routes>
        <Route path="/"
          element={<Main
            islogin={loggedIn}
          />}
        />
        <Route path="/movies"
          element={<Movies
            islogin={loggedIn}
          />}
        />
        <Route path="/saved-movies" 
        />
        <Route path="/profile" 
        />
        <Route path="/signin"
        />
        <Route path="/signup"
        />
        <Route path="*" 
        />
      </Routes>
    </body>
  );
}

export default App;
