import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.header__navigation}>
          <Link to="/" className={css.navigation__button}>
            Home
          </Link>
          <Link to="/movies" className={css.navigation__button}>
            Movies
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
