import { useLocation, Link } from 'react-router-dom';
import { defaultImg } from 'helpers/defaultImg';
import { MovieListt, Item, Img, MovieTitle } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location  = useLocation();

  return (
    <>
      <MovieListt>
        {movies.map(({ id, poster_path, title }) => (
          <Item key={id}>
            <Link to={`/movie/${id}`} state={{ from: location }}>
              <Img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                alt="poster"
              />

              <MovieTitle>{title}</MovieTitle>
            </Link>
          </Item>
        ))}
      </MovieListt>
    </>
  );
};

export default MovieList;
