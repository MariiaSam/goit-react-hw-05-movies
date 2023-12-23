import styled from 'styled-components';

export const MovieListt = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Img = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;

export const Title = styled.title`
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-style: none;
  font-weight: 700;
  height: 100%;
  justify-content: center;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
`;
