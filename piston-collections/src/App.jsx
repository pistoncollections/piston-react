import { useState } from 'react';
import {
  RouterProvider,
} from "react-router";
import { router } from './routes/routes';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Menu></Menu>
      <RouterProvider router={router} />
      <Footer></Footer>
    </>
  )
}

export default App;
