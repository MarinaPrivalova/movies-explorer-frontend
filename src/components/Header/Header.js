import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
return (
  <header className='header'>
    <Link to="/" className="header__logo-link"><img className="header__logo" src={logo} alt="Логотип" /></Link>
    <Navigation />
  </header>
);
}

export default Header;
