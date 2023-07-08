import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h1 className="profile__greetings">Привет, Виталий!</h1>
        <fieldset className="profile__user">
          <label className="profile__data">
            <p className="profile__data-field">Имя</p>
            <input
              id="profile__name"
              className="profile__input"
              type="text"
              name="name"
              value="Виталий"
            />
          </label>
          <label className="profile__data">
            <p className="profile__data-field">E-mail</p>
            <input
              id="profile__email"
              className="profile__input"
              type="text"
              name="email"
              value="pochta@yandex.ru"
            />
          </label>
        </fieldset>
        <div className="profile__btns">
          <button className="profile__btn profile__btn_edit button">Редактировать</button>
          <button className="profile__btn profile__btn_checkout button">Выйти из аккаунта</button>
        </div>
      </section>
    </>
  );
}

export default Profile;
