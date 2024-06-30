import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{`Welcome, ${user.name}`}</p>
      <button className={css.btn} onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
