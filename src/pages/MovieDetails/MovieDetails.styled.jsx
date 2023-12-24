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
  color: #fff;
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 10px;

  padding: 5px;
  margin-bottom: 10px;
  align-items: center;
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
  font-size: 30px;
  font-weight: bold;
`;

export const TitleText = styled.h2`
  margin-bottom: 30px;
  font-size: 24;
  font-weight: bold;
`;

export const TextP = styled.p`
  padding-bottom: 20px;
  font-size: 20px;
`;
export const AddInf = styled.h2`
  padding-bottom: 20px;
`;
