import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import mainApi from "../../utils/MainApi";
import * as apiAuth from "../../utils/apiAuth";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [statusRequest, setStatusRequest] = useState(null);

  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  /**Получить токен*/
  function checkToken() {
    const token = localStorage.getItem("jwt");
    mainApi.setToken(token);
    if (token) {
      mainApi
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log("Ошибка токена в АПИ", err);
          setLoggedIn(false);
          logOut();
        });
    } else {
      setLoggedIn(false);
    }
  }

  useEffect(() => {
    checkToken();
  }, [loggedIn]);

  /**Зарегистрировать пользователя*/
  function handleRegister(regData) {
    const email = regData.email;
    const password = regData.password;
    apiAuth
      .register(regData)
      .then((res) => {
        handleLogin({ email, password });
        navigate("/movies");
        setStatusRequest(200)
      })
      .catch((err) => {
        setLoggedIn(false);
        setStatusRequest(err)
        console.log("Ошибка при регистрации", err);
      });
  }

  /**Авторизация пользователя*/
  function handleLogin(loginData) {
    apiAuth
      .login(loginData)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        navigate("/movies");
        setLoggedIn(true);
        setStatusRequest(200)
      })
      .catch((err) => {
        setLoggedIn(false);
        setStatusRequest(err)
        console.log("Ошибка логирования", err);
      });
  }

  /**Выйти из аккаунта*/
  function logOut() {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    navigate("/");
    mainApi.setToken("");
    console.log("Выход");
  }

  /**Изменить данные пользователя*/
  function handleUpdateUser(userData) {
    mainApi
      .updateUserInfo(userData)
      .then((newUser) => {
        setCurrentUser(newUser);
        setErrorMessage("");
        console.log("Данные успешно обновлены");
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                cards={cards}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onUpdateUser={handleUpdateUser}
                logOut={logOut}
              />
            }
          />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
