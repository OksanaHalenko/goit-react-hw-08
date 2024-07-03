import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLogin } from "../../redux/auth/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export const Navigation = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLogin && (
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
