import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import headerIcon from '../../images/icon_account.svg';


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
        <NavLink to='/profile' className='navigation__account-menu'>
          <p className='navigation__link navigation__link_logged link'>Аккаунт</p>
          <img className='navigation__account-icon link' src={headerIcon} alt='Иконка входа в аккаунт'></img>
        </NavLink>
      </div>}

      {!loggedIn && <div className='navigation__btn-container'>
        <NavLink to='/signup' className='navigation__link navigation__link_logout'>
          <button className='navigation__button navigation__button_type_reg button' type='button'>Регистрация</button>
        </NavLink>
        <NavLink to='/signin' className='navigation__link navigation__link_logout'>
          <button className='navigation__button navigation__button_logout button' type='button'>Войти</button>    
        </NavLink>
      </div>}

      {loggedIn && <button className='navigation__burger button' type='button' onClick={openNavigationSidebar}></button>}

      {loggedIn && <aside className={`navigation__sidebar ${isNavigationSidebar ? 'navigation__sidebar_opened' : ''}`} >
        <div className='navigation__content-sidebar'>
          <ul className='navigation__menu-sidebar'>
            <li className='navigation__title-sidebar'><NavLink to='/' className={({ isActive }) => `navigation__link-sidebar link ${isActive ? 'navigation__link-sidebar_active' : ''}`}>Главная</NavLink></li>
            <li className='navigation__title-sidebar'><NavLink to='/movies' className={({ isActive }) => `navigation__link-sidebar link ${isActive ? 'navigation__link-sidebar_active' : ''}`}>Фильмы</NavLink></li>
            <li className='navigation__title-sidebar'><NavLink to='/saved-movies' className={({ isActive }) => `navigation__link-sidebar link ${isActive ? 'navigation__link-sidebar_active' : ''}`}>Сохранённые фильмы</NavLink></li>
          </ul>
          <NavLink to='/profile' className='navigation__account-sidebar'>
            <p className='navigation__link navigation__link_logged link'>Аккаунт</p>
            <img className='navigation__account-icon link' src={headerIcon} alt='Иконка входа в аккаунт'></img>
          </NavLink>
          <button className='navigation__button-close button' type='button' onClick={closeNavigationSidebar}></button>
        </div>
      </aside>}

    </nav>
  );
}

export default Navigation;