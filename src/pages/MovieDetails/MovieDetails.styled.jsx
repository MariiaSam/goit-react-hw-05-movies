import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  max-width: 1280px;
  padding: 20px;
  width: 100%;
`;

export const LinkToBack = styled(Link)`
  display: flex;
  gap: 5px;

  text-align: center;

  color: #fff;
  text-decoration: none;
  font-size: 22px;
  margin-bottom: 10px;

  border-radius: 20px;
  padding: 5px;
  margin-bottom: 20px;
  align-items: center;
  transition: color 0.5s ease-in-out;
`;

export const ImgDetails = styled.img`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
  height: auto;
  max-width: 100%;
  min-width: 310px;
  margin-bottom: 15px;
  min-height: 400px;
`;

export const WraperText = styled.div`
  position: absolute;
  left: 550px;
  top: 55px;
`;

export const Title = styled.h2`
      margin-bottom: 30px;

`
