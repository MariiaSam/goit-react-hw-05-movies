
import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
// import Home from "pages/Home/Home";

import { Layout } from "./Layout/Layout";

const Home = lazy(() => import ('pages/Home/Home'))
const Movies = lazy(() => import ('pages/Movies/Movies'))


export const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/movies' element={<Movies/>}/>

          </Route>

      </Routes>


    </div>
  );
};
 