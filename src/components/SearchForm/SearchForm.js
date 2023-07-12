import React, { useState, useRef, useEffect } from "react";
import "./SearchForm.css";

function SearchForm(props) {
  const { filterCards, page } = props;

  // Переменная состояния кнопки поиска - активна/ не активна
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  // Переменная состояния ошибки
  const [error, setError] = useState({ name: "", isShortsMovie: "" });
  // Переменная состония поля input поиска
  const [value, setValue] = useState({ name: "", isShortsMovie: false });

  const formRef = useRef(null);

  // Эффект отслеживания состояния поля input поиска
  useEffect(() => {
    const searchMovies = JSON.parse(localStorage.getItem("search-movies"));
    if (searchMovies) {
      setValue(searchMovies);
      filterCards(searchMovies);
    }
    if (page === "saved-movies") {
      filterCards({ name: "", isShortsMovie: false });
      setValue({ name: "", isShortsMovie: false });
    }
  }, []);

  // Функция изменения input поиска
  const handleChange = (e) => {
    const { name, value: inputValue, validationMessage } = e.target;

    const updatedValue = { ...value, [name]: inputValue };
    if (page === "movies") {
      localStorage.setItem("search-movies", JSON.stringify(updatedValue));
    }
    setValue(updatedValue);
    setError((state) => ({ ...state, [name]: validationMessage }));
    setIsDisabledButton(!formRef.current.checkValidity());
  };

  // Функция отработки чекбокса
  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    const updatedValue = { ...value, [name]: checked };

    if (page === "movies") {
      localStorage.setItem("search-movies", JSON.stringify(updatedValue));
    }
    setValue(updatedValue);
    filterCards(updatedValue);
  };

  // Функция отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    filterCards(value);
  };

  return (
    <form
      className="seachform"
      onSubmit={handleSubmit}
      ref={formRef}
      noValidate
    >
      <div className="seachform__input-container">
        <input
          className="seachform__input"
          placeholder="Фильм"
          required
          onChange={handleChange}
          value={value.name}
          name="name"
        ></input>
        <button
          className="seachform__btn button"
          type="submit"
          onClick={handleSubmit}
        >
          Найти
        </button>
      </div>
      <span className="searchform__span"> {error.name}</span>
      <div className="seachform__checkbox-container">
        <input
          type="checkbox"
          className="seachform__checkbox"
          id="seachform__checkbox"
          value="yes"
          onChange={handleCheckbox}
          checked={value.isShortsMovie}
        ></input>
        <label className="seachform__label link" htmlFor="seachform__checkbox">
          Короткометражки
        </label>
      </div>
    </form>
  );
}

export default SearchForm;
