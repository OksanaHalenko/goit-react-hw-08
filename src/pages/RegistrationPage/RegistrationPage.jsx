import css from "./RegistrationPage.module.css";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

function RegistrationPage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Registration</h1>
      <p className={css.text}>
        Please register to be able to create your contacts book
      </p>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
