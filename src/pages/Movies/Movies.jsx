import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import movieAPI from 'services/moviesAPI';

import css from '../pages.module.css';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const location = useLocation();

  const showSearchParams = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: e.target.value });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    const response = await movieAPI.fetchMovieOnQuery(movieName);

    setMovies(response.data.results);
  };

  return (
    <>
      <form onSubmit={e => handleOnSubmit(e)}>
        <input
          type="text"
          name="query"
          value={movieName}
          placeholder="Input movie name"
          onChange={e => showSearchParams(e)}
        />
        <button type="sumbit">Search</button>
      </form>
      {movies && (
        <ul className={css.links_list}>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
