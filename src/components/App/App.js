import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {
  CurrentUserContext,
  defaultCurrentUser,
} from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import mainApi from '../../utils/MainApi';
import * as apiAuth from '../../utils/apiAuth';

function App() {
  const [currentUser, setCurrentUser] = useState(defaultCurrentUser);
  const [loggedIn, setLoggedIn] = useState(true);
  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo()])
        .then(([userData]) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  /**Получить токен*/
  function checkToken() {
    const token = localStorage.getItem('jwt');
    if (token) {
      apiAuth
        .checkToken(token)
        .then((res) => {
          mainApi.setToken(token);
          setLoggedIn(true);
          setCurrentUser(currentUser);
          navigate('/movies');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  useEffect(() => {
    checkToken();
  }, []);

  /**Зарегистрировать пользователя*/
  function handleRegister(regData) {
    apiAuth
      .register(regData)
      .then((res) => {
        navigate('/signin');
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**Авторизация пользователя */
  function handleLogin(loginData) {
    apiAuth.login(loginData)
      .then((res) => {
        if (res && res.token) {
          setCurrentUser(currentUser)
          localStorage.setItem('jwt', res.token);
          mainApi.setToken(res.token);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn} />} />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                cards={cards}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                cards={cards}
              />
            }
          />
          <Route
            path='/profile'
            element={<ProtectedRoute element={Profile} loggedIn={loggedIn} />}
          />
          <Route path='/signin' element={<Login onLogin={handleLogin} />} />
          <Route
            path='/signup'
            element={<Register onRegister={handleRegister} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
