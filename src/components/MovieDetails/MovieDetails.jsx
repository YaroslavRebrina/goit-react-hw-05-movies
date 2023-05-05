import { useEffect, useState } from 'react';
import movieAPI from 'services/moviesAPI';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieid } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const response = await movieAPI.fecthMovieDetails(movieid);
      setMovie(response.data.results);
      return;
    };

    try {
      getMovie();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieid]);

  return;
};

MovieDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieDetails;
