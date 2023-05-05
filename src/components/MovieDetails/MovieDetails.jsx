import { useEffect, useState } from 'react';
import movieAPI from 'services/moviesAPI';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { movieid } = useParams();

  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

  useEffect(() => {
    const getMovie = async () => {
      const response = await movieAPI.fecthMovieDetails(movieid);
      console.log(response);
      setMovie(response.data);
      return;
    };

    try {
      getMovie();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieid]);
  console.log(movie);
  return (
    <>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      {movie && (
        <div>
          <img
            src={`${IMAGES_BASE_URL}${movie.poster_path}`}
            alt="film poster"
          />
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
      )}
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
