import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import mainApi from '../../utils/MainApi'


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [token, setToken] = useState('');

  const [errorServerMessage, setErrorServerMessage] = useState('');

  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    setToken(jwt);
    setLoggedIn(true);
    if (!jwt) {
      setLoggedIn(false);
    }
  }, [])

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      Promise.all([mainApi.getCurrentUser()]).then(([userData]) => {
        setCurrentUser(userData);
        setLoggedIn(true);
      })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (token) {
      mainApi.getUserData(token).then((data) => {
        setUserData(data);
        setLoggedIn(true);
      })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [token]);

  function handleRegister ({ name, email, password }) {
    mainApi
      .register(name, email, password)
      .then((response) => {
        navigate('/signin');
        console.log(response)
      })
      .catch((error) => {
        console.log(error.message);
        setErrorServerMessage(error.message)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn} />} />
          <Route path='/movies'
            element={<ProtectedRoute
              element={Movies} 
              loggedIn={loggedIn} 
              cards={cards}
            />
            }
          />
          <Route path='/saved-movies'
            element={<ProtectedRoute
              element={SavedMovies} 
              loggedIn={loggedIn} 
              cards={cards} 
            />
            }
          />
          <Route path='/profile' 
            element={<ProtectedRoute
              element={Profile} 
              loggedIn={loggedIn} 
            />
            } 
          />
          <Route path='/signin' 
            element={<Login />}
            />
          <Route path='/signup' 
            element={
            <Register 
              onRegister={handleRegister}
              setErrorServerMessage={setErrorServerMessage}
            />} 
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
