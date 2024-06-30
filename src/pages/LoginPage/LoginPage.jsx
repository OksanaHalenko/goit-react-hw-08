import css from "./LoginPage.module.css";

import LoginForm from "../../components/LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

function LoginPage() {
  const dispatch = useDispatch();
  const logging = (userData) => {
    dispatch(login(userData));
  };
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Login</h1>
      <p className={css.text}>
        Please log in to your account to access the contacts book
      </p>
      <LoginForm submit={logging} />
    </div>
  );
}

export default LoginPage;
