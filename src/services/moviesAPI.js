import axios from 'axios';

const API_KEY = 'fa266c0f06778ec950e19b25be59abc2';
const keySearchParam = `api_key=${API_KEY}`;

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

const fetchMovieTrending = () =>
  axios.get(`/trending/movie/week?${keySearchParam}`);

const fetchMovieOnQuery = query =>
  axios.get(`/search/movie?${keySearchParam}&query=${query}`);

const fecthMovieDetails = id => axios.get(`/movie/${id}?${keySearchParam}`);

const fetchMovieCredits = movieId =>
  axios.get(`/movie/${movieId}/credits?${keySearchParam}`);

const fetchMovieRewievs = movieId =>
  axios.get(`/movie/${movieId}/reviews?${keySearchParam}`);

const movieAPI = {
  fecthMovieDetails,
  fetchMovieTrending,
  fetchMovieOnQuery,
  fetchMovieRewievs,
  fetchMovieCredits,
};

export default movieAPI;
