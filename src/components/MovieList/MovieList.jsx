import { useLocation, Link } from 'react-router-dom';
import { defaultImg } from 'helpers/defaultImg';
import { MovieListt, Item, Img, Title } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <MovieListt>
        {movies.map(({ id, poster_path, title }) => (
          <Link key={id} to={`/movies/{id}`} state={{ from: location }}>
            <Item>
              <Img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                alt="poster"
              />
              <Title> {title} </Title>
            </Item>
          </Link>
        ))}
      </MovieListt>
    </>
  );
};
