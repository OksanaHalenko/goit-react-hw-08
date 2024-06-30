import css from "./AuthNav.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function AuthNav() {
  return (
    <div className={css.nav}>
      <NavLink to="/login" className={buildLinkClass}>
        Log In
      </NavLink>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
    </div>
  );
}

export default AuthNav;
