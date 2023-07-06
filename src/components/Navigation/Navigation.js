import React from 'react';
import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';


function Navigation({ loggedIn }) {

  const navigationClass = (`navigation ${loggedIn ? '' : 'navigation_logout'}`);

  return (
    <nav className={navigationClass}>

      {!loggedIn && <div className="navigation__menu">
        <NavLink to='/movies' className="navigation__title navigation__title_active">Фильмы</NavLink>
        <NavLink to='/saved-movies' className="navigation__title">Сохранённые фильмы</NavLink>
        <div className="navigation__account-menu">
          <NavLink to='/profile' className="navigation__link navigation__link_logged">Аккаунт</NavLink>
          <NavLink to='/profile' className="navigation__button navigation__button_logged"></NavLink>
        </div>
      </div>}

      {loggedIn && <div className="navigation__btn-container">
        <NavLink to='/signup' className="navigation__link navigation__link_logout">Регистрация</NavLink>
        <NavLink to='/signin' className="navigation__button navigation__button_logout">Войти</NavLink>
      </div>}

    </nav>
  );
}

export default Navigation;