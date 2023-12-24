import { useLocation, Link } from 'react-router-dom';
import { defaultImg } from 'helpers/defaultImg';
import { MovieListt, Item, Img, MovieTitle } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const { pathname } = useLocation();

  return (
    <>
      <MovieListt>
        {movies.map(({ id, poster_path, title }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: pathname }}>
              
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
