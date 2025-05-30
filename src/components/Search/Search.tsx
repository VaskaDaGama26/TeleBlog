import React from "react";
import classes from "./Search.module.css";
import search_icon from "/search_icon.svg";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <section className={classes.container}>
      <div className={classes.row}>
        <img className={classes.icon} src={search_icon} alt="Поиск" />
        <input
          placeholder="Поиск по названию статьи"
          className={classes.input}
          type="text"
        />
      </div>
    </section>
  );
};

export default Search;
