import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const hanlerChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
       
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Введи назву фільму"
          value={query}
          onChange={hanlerChange}
        /> 
        <SearchFormBtn type="submit">
          <CiSearch size="24" />
        </SearchFormBtn>
      </SearchForm>
    </Header>
  );
};

