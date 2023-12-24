import { getReviews } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, Title, Item, TextAutor } from './Reviews.styled';

const Reviews = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviews(id)
      .then(({ results }) => {
        setData([...results]);
      })
      .catch(error => console.log(`getReviews: ${error}`))
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      {data.length !== 0 && !isLoading ? (
        <Wrapper>
          <Title>Reviews</Title>
          <ul>
            {data.map(({ id, content, author }) => (
              <Item key={id}>
                <TextAutor>Author: {author}</TextAutor>
                <p>{content}</p>
              </Item>
            ))}
          </ul>
        </Wrapper>
      ) : (
        <p>There are no reviews yet, be the first to leave it!!!</p>
      )}
    </>
  );
};

export default Reviews;
