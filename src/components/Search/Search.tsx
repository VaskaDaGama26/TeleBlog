import classes from "./Search.module.css";
import search_icon from "/search_icon.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setQuery } from "../../features/search/searchSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.search.query);

  return (
    <section className={classes.container}>
      <div className={classes.row}>
        <img className={classes.icon} src={search_icon} alt="Поиск" />
        <input
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Поиск по названию статьи"
          className={classes.input}
          type="text"
        />
      </div>
    </section>
  );
};

export default Search;
