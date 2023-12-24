import { useState, useEffect } from 'react';
import { getTrending } from 'services/api';

import { arrMovies } from 'helpers/arrMovies';
import MovieList from 'components/MovieList/MovieList';
import { Button } from 'components/Button/Button';

import { Title } from './Home.styled';


const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

//   useEffect(() => {
//     getTrending(page)
//       .then(response => {
//         const trendingToDay = response?.trendingToDay;
  
//         if (trendingToDay && trendingToDay.results) {
//           setData(prevData => [...prevData, ...arrMovies(trendingToDay.results)]);
//         } else {
//           console.log("Invalid response format:", response);
//         }
//       })
//       .catch(error => console.log(`getTrending: ${error}`));
//   }, [page]);


useEffect(() => {
    getTrending(page)
      .then(({ data: { results } }) => {
        setData(prevData => [...prevData, ...arrMovies(results)]);
      })
      .catch(error => console.log(`getTrending:${error}`));
  }, [page]);


  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  
  return (
    <>
      <Title>Trending today</Title>
      <MovieList movies={data}></MovieList>
      {data.length > 0 && <Button onLoadMore={onLoadMore} />}
    </>
  );
};

export default Home;
