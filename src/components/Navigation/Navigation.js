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
        <NavLink to='/movies' className='navigation__title navigation__title_active link'>Фильмы</NavLink>
        <NavLink to='/saved-movies' className='navigation__title link'>Сохранённые фильмы</NavLink>
        <div className='navigation__account-menu'>
          <NavLink to='/profile' className='navigation__link navigation__link_logged link'>Аккаунт</NavLink>
          <NavLink to='/profile' className='navigation__button navigation__button_logged'></NavLink>
        </div>
      </div>}

      {!loggedIn && <div className='navigation__btn-container'>
        <NavLink to='/signup' className='navigation__link navigation__link_logout button'>Регистрация</NavLink>
        <NavLink to='/signin' className='navigation__button navigation__button_logout button'>Войти</NavLink>
      </div>}

      {loggedIn && <button className='navigation__burger button' onClick={openNavigationSidebar}></button>}

      {loggedIn && <aside className={`navigation__sidebar ${isNavigationSidebar ? 'navigation__sidebar_opened' : ''}`} >
        <div className='navigation__content-sidebar'>
          <ul className='navigation__menu-sidebar'>
            <li className='navigation__title-sidebar'><NavLink to='/' className='navigation__link-sidebar link'>Главная</NavLink></li>
            <li className='navigation__title-sidebar navigation__title-sidebar_active'><NavLink to='/movies' className='navigation__link-sidebar link'>Фильмы</NavLink></li>
            <li className='navigation__title-sidebar'><NavLink to='/saved-movies' className='navigation__link-sidebar link'>Сохранённые фильмы</NavLink></li>
          </ul>
          <div className='navigation__account-sidebar'>
            <NavLink to='/profile' className='navigation__link navigation__link_logged link'>Аккаунт</NavLink>
            <NavLink to='/profile' className='navigation__button navigation__button_logged link'></NavLink>
          </div>
          <button className='navigation__button-close button' onClick={closeNavigationSidebar}></button>
        </div>
      </aside>}

    </nav>
  );
}

export default Navigation;