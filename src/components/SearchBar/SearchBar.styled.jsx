import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border-radius: 100px;
  cursor: pointer;

`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    color: #cd8c8c;
    font-weight: bold;
    font-size: 18px;
    text-overflow: ellipsis;
  }
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :hover {
    opacity: 1;
  }
`;
