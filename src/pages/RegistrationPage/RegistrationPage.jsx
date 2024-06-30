import css from "./RegistrationPage.module.css";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

function RegistrationPage() {
  const dispatch = useDispatch();
  const registration = (userData) => {
    dispatch(register(userData));
  };
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Registration</h1>
      <p className={css.text}>
        Please register to be able to create your contacts book
      </p>
      <RegistrationForm submit={registration} />
    </div>
  );
}

export default RegistrationPage;
