import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="moviescardlist">
      <ul className="moviescardlist__list">
        <MoviesCard />
      </ul>
    </section>
  );
}

export default MoviesCardList;
