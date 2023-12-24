import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

export const List = styled.ul`
    display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const Item = styled.li`
 margin-bottom: 50px;
  overflow: hidden;
  width: 160px;
  height: 250px;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px #ff6b08;

  &:hover {
    transform: scale(1.07);
    transition: transform 250ms ease-in-out;
  }
`

export const Wrapp = styled.div`
      width: 100%;
  height: 100%;
  overflow: hidden;

`

export const Img = styled.img`
      width: 100%;
  height: 100%;
  
`

export const TextName = styled.h3`
      padding-left: 10px;

`

export const TextDesc = styled.p`
      padding-left: 10px;
  padding-right: 10px;

`