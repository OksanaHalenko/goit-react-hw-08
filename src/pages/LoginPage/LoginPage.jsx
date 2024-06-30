import css from "./LoginPage.module.css";

import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Login</h1>
      <p className={css.text}>
        Please log in to your account to access the contacts book
      </p>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
