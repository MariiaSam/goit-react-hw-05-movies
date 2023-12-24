import { getMoviesDetails } from 'services/api';
import { defaultImg } from 'helpers/defaultImg';
import { useEffect, useState } from 'react';

import {Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { LinkToBack, Wrap, ImgDetails, WraperText, Title } from './MovieDetails.styled';

const MovieDetails = () => {
  const [data, setData] = useState([])

  const location = useLocation()
  const { movieId } = useParams()

  useEffect(() => {
    getMoviesDetails(movieId)
      .then(({ data }) => {
        setData(data || {});
      })
      .catch(error => {
        console.log(`getMoviesDetails: ${error}`);
      });
  }, [movieId]);

  const {
    title,
    release_data,
    overview,
    poster_path,
    vote_average,
    genres = [],
  } = data;

  return (
    <Wrap>
      <LinkToBack to={location?.state?.from ?? '/'}>Back to movies</LinkToBack>
    <div>
        <ImgDetails src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg} alt={title} />        
    </div>

    <WraperText>
        <Title>{title}{release_data}</Title>
        <p>User Score: {vote_average} </p>
        <h2>Overview:</h2>
        <p>{overview}</p>
        <h2>Genre</h2>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
        <h2 >Additional information</h2>
        <ul >
              <li>
              <Link state={{ from: location?.state?.from }} to={`cast`}>
                  Cast
                </Link>
              </li>
              <li>
              <Link  state={{ from: location?.state?.from }} to={`reviews`} >Reviews</Link>
              </li>
            </ul>
            <Outlet/>
    </WraperText>
    </Wrap>
  );
};

export default MovieDetails;
