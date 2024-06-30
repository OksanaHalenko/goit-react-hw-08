import { useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { userSelector } from "../../redux/auth/selectors";

function UserMenu() {
  const { name } = useSelector(userSelector);
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{`Welcome, ${name}`}</p>
      <button className={css.btn}>Logout</button>
    </div>
  );
}

export default UserMenu;
