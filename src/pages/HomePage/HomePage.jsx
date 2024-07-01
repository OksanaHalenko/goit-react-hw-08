import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Home page</h1>
      <p className={css.text}>Welcome to the contacts book application</p>
    </div>
  );
}

export default HomePage;
