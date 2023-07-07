import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';


function Navigation({ loggedIn }) {

  const navigationClass = (`navigation ${loggedIn ? '' : 'navigation_logout'}`);

  const [isNavigationSidebar, setIsNavigationSidebar] = React.useState(false);

  function openNavigationSidebar() {
    setIsNavigationSidebar(true)
  }

  function closeNavigationSidebar() {
    setIsNavigationSidebar(false)
  }

  return (
    <nav className={navigationClass}>

      {loggedIn && <div className='navigation__menu'>
        <NavLink to='/movies' className='navigation__title navigation__title_active'>Фильмы</NavLink>
        <NavLink to='/saved-movies' className='navigation__title'>Сохранённые фильмы</NavLink>
        <div className='navigation__account-menu'>
          <NavLink to='/profile' className='navigation__link navigation__link_logged'>Аккаунт</NavLink>
          <NavLink to='/profile' className='navigation__button navigation__button_logged'></NavLink>
        </div>
      </div>}

      {!loggedIn && <div className='navigation__btn-container'>
        <NavLink to='/signup' className='navigation__link navigation__link_logout'>Регистрация</NavLink>
        <NavLink to='/signin' className='navigation__button navigation__button_logout'>Войти</NavLink>
      </div>}

      {loggedIn && <button className='navigation__burger' onClick={openNavigationSidebar}></button>}

      {loggedIn && <div className={`navigation__sidebar ${isNavigationSidebar ? 'navigation__sidebar_opened' : ''}`} >
        <div className='navigation__content-sidebar'>
          <ul className='navigation__menu-sidebar'>
            <li className='navigation__title-sidebar'><NavLink to='/' className='navigation__link-sidebar'>Главная</NavLink></li>
            <li className='navigation__title-sidebar navigation__title-sidebar_active'><NavLink to='/movies' className='navigation__link-sidebar'>Фильмы</NavLink></li>
            <li className='navigation__title-sidebar'><NavLink to='/saved-movies' className='navigation__link-sidebar'>Сохранённые фильмы</NavLink></li>
          </ul>
          <div className='navigation__account-sidebar'>
            <NavLink to='/profile' className='navigation__link navigation__link_logged'>Аккаунт</NavLink>
            <NavLink to='/profile' className='navigation__button navigation__button_logged'></NavLink>
          </div>
          <button className='navigation__button-close' onClick={closeNavigationSidebar}></button>
        </div>
      </div>}

    </nav>
  );
}

export default Navigation;