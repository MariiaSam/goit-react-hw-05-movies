import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from 'components/Container/Container';

import { Loader } from 'components/Loader/Loader';
import {
  Header,
  HeaderNavigation,
  HeaderList,
  StyledNavLink,
  Main

}from './Layout.styled';


 const Layout = () => {
  return (
    <>
      <Header>
        <HeaderNavigation>
          <HeaderList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>

            <li>
              <StyledNavLink to="movies">Movies</StyledNavLink>
            </li>
          </HeaderList>
        </HeaderNavigation>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};

export default Layout