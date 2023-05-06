import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CastItem from 'components/CastItem/CastItem';
import movieAPI from 'services/moviesAPI';
import IMAGES_BASE_URL from 'constatns/constants';

import css from './Cast.module.css';

const Cast = () => {
  const [crew, setCrew] = useState([]);

  const location = useLocation();
  useEffect(() => {
    const getCredits = async () => {
      const response = await movieAPI.fetchMovieCredits(location.state);
      console.log(response);
      setCrew(response.data.cast);
    };

    try {
      getCredits();
    } catch (error) {
      console.log(error.messege);
    }
  }, [location.state]);

  return (
    <>
      {crew.length === 0 ? (
        <p>Cast is unknown</p>
      ) : (
        <ul className={css.cast__wrapper}>
          {crew.map(({ name, profile_path, original_name }) => {
            return (
              <CastItem
                key={name}
                img={IMAGES_BASE_URL + profile_path}
                name={name}
                role={name}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Cast;
