import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import movieAPI from 'services/moviesAPI';
import IMAGES_BASE_URL from 'constatns/constants';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const { movieid } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const response = await movieAPI.fecthMovieDetails(movieid);

      setMovie(response.data);
      return;
    };

    try {
      getMovie();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieid]);

  return (
    <>
      <Link to={backLink.current} className={css.back_button}>
        Go back
      </Link>
      {movie && (
        <div className={css.img_wrapper}>
          <img
            src={`${IMAGES_BASE_URL}${movie.poster_path}`}
            alt="film poster"
            width="400px"
            height="300px"
          />
          <div className={css.info_wrapper}>
            <h1>{movie.title}</h1>
            <p>User score: {`${movie.vote_average}`}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <ul>
        <li>
          <Link to="cast" state={movieid}>
            cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={movieid}>
            reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Audio />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
