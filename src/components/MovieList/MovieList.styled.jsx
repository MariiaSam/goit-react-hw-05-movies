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
  display: flex;
  flex-direction: column;
  padding: 10px;
  transition-duration: 0.2s;
  transform: scale(0.9);

  &:hover,
  &:focus {
    transform: scale(1);
;
  }
`;

export const Img = styled.img`
  display: block;
  height: auto;
  width: auto;
  border-radius: 5px;

  
`;

export const MovieTitle = styled.h1`
  padding: 10px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
  color: #842323;
  justify-content: center;
  text-align: center;
`;
