import css from "./App.module.css";

import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <hr />
      <SearchBox />
      <hr />
      {isLoading && !error && <Loader />}
      {error ? <ErrorMessage text={error} /> : <ContactList />}
    </div>
  );
}

export default App;
