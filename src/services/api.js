import axios from 'axios';

const API = '3990fcc1741379f5b1bcbc308aa7d8b3';
const BASE_URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = BASE_URL;

export const getTrending = async page => {
  const url = `trending/movie/day?language=en-US&&api_key=${API}&page=${page}`;
  const movies = await axios(url);
  return movies;
};

export const getSearchMovies = async (query, page) => {
  const url = `search/movie?api_key=${API}&query=${query}&include_adult=false&language=en-US&page=${page}`;

  const response = await axios.get(url);

  const { data } = response;

  return data;
};

export const getMoviesDetails = async id => {
  const url = `movie/${id}?api_key=${API}`

  const moviesDetail = await axios(url);

  return moviesDetail;
};

export const getCast = async id => {
  const url = `movie/${id}/credits?api_key=${API}`;

  const { data } = await axios.get(url);

  return data;
};

export const getReviews = async id => {
  const url = `movie/${id}/reviews?api_key=${API}`;

  const { data } = await axios.get(url);

  return data;
};
