import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(event) => {
          dispatch(changeFilter(event.target.value));
        }}
      ></input>
    </div>
  );
}

export default SearchBox;
