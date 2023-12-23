export const arrMovies = arr =>
  arr.map(({ id, title, poster_path }) => ({ id, title, poster_path }));