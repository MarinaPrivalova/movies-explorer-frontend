import React from 'react';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <section className='authorization'>
      <Link className='authorization__link' to='/'>
          <img className='authorization__logo' src={Logo} alt='Логотип'></img>
      </Link>
      <h2 className='authorization__title'>Добро пожаловать!</h2>
      <form class='authorization-form' action='#' name='authorization-form' novalidate>
          <fieldset className='authorization-form__fieldset'>
              <div className='authorization-form__input-container'>
                  <label className='authorization-form__label' for='authorization-form__input-name'>Имя</label>
                  <input type='text' id='authorization-form__input-name' className='authorization-form__input' placeholder='Введите ваше имя' name='name' required minlength='2' maxlength='30' />
              </div>
              <div className='authorization-form__input-container'>
                  <label className='authorization-form__label' for='authorization-form__input-email'>E-mail</label>
                  <input type='email' id='authorization-form__input-email' className='authorization-form__input' placeholder='Введите ваш email' name='email' required minlength='5' maxlength='30' />
              </div>
              <div className='authorization-form__input-container'>
                  <label className='authorization-form__label' for='authorization-form__input-password'>Пароль</label>
                  <input type='password' id='authorization-form__input-password' className='authorization-form__input' placeholder='Введите пароль' name='password' required minlength='8' maxlength='30' />
              </div>
          </fieldset>
          <span className='authorization-form__error'>Что-то пошло не так...</span>
          <buttom className='authorization-form__button' type='submit'>Зарегистрироваться</buttom>
          <div className='authorization-form__question-container'>
              <p className='authorization-form__question'>Уже зарегистрированы?</p>
              <Link className='authorization-form__question-link' to='/signin'>Войти</Link>
          </div>
      </form>
    </section>
  );
}

export default Register;