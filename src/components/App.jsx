
import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
// import Home from "pages/Home/Home";

import { Layout } from "./Layout/Layout";

const Home = lazy(() => import ('pages/Home/Home'))


export const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
          </Route>

      </Routes>


    </div>
  );
};
 