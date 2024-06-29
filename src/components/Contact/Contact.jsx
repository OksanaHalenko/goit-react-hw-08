import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.text}>
          <FaUser />
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
