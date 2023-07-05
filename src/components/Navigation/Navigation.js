import React from "react";
import './Navigation.css';
import { NavLink } from 'react-router-dom';


function Navigation() {
  return (
    <nav className="header__navigation">
      <div className="header__btn-container">
        <NavLink to='/signup' className="header__link header__link_logout">Регистрация</NavLink>
        <NavLink className="header__link" to="/signin"><button className='header__button'>Войти</button></NavLink>
      </div>
    </nav>
  );
}

export default Navigation;