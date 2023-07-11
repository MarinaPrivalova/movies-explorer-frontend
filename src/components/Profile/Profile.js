import React, { useContext, useState, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const { loggedIn, onUpdateUser } = props;

  const currentUser = useContext(CurrentUserContext);

  const [initChange, setInitChange] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);


  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser.name, currentUser.email]);

  function handleClickEditButton(event) {
    event.preventDefault();
    setInitChange(true);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({ name, email });
    setInitChange(false);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile'>
        <h1 className='profile__greetings'>Привет, {name}!</h1>
        <form className='profile__form' onSubmit={handleSubmit}>
          <fieldset className='profile__user'>
            <div className='profile__data'>
              <label className='profile__data-field'>Имя</label>
              <input
                id='profile__name'
                className='profile__input'
                type='text'
                name='name'
                placeholder='Ваше имя'
                required
                minLength='2'
                maxLength='30'
                disabled={initChange ? false : true}
                value={name}
                onChange={handleChangeName}
              />
            </div>
            <div className='profile__data'>
              <label className='profile__data-field'>E-mail</label>
              <input
                id='profile__email'
                className='profile__input'
                type='text'
                name='email'
                placeholder='Ваш email'
                required
                disabled={initChange ? false : true}
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
          </fieldset>
          <div className='profile__btns'>
            {initChange ? (
              <button
                className='profile__btn profile__btn_submit button'
                type='submit'
                onClick={handleSubmit}
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className='profile__btn profile__btn_edit button'
                  type='button'
                  onClick={handleClickEditButton}
                >
                  Редактировать
                </button>
                <button
                  className='profile__btn profile__btn_exit button'
                  type='button'
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
