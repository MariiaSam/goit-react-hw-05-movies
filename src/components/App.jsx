
import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';

import Layout from "./Layout/Layout";

const Home = lazy(() => import ('pages/Home/Home'))
const Movies = lazy(() => import ('pages/Movies/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'))


export const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/movies' element={<Movies/>}/>
              <Route path="/movie/:id" element={<MovieDetails/>}/>

          </Route>

      </Routes>


    </div>
  );
};
 