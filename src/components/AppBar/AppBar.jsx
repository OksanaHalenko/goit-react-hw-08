import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { selectIsLogin } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

function AppBar() {
  const inLogin = useSelector(selectIsLogin);
  return (
    <header className={css.header}>
      <Navigation />
      {inLogin ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
