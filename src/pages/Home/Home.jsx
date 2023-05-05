import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import movieAPI from 'services/moviesAPI';

import css from '../pages.module.css';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    const getTrends = async () => {
      const response = await movieAPI.fetchMovieTrending();
      setTrendingFilms(response.data.results);
      return;
    };

    try {
      getTrends();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ul className={css.links_list}>
      {trendingFilms.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
