import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Page/Login';
import Home from './Page/Home';
import NotFound from './components/NotFound';
import DataPasien from './Page/Menu/DataPasien';
import ListDataPasienRJ from './Page/Menu/ListDataPasienRJ';
import About from './components/About';
import PrivateRoute from './PrivateRoute'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  
 
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/Beranda',
        element: <Home />,
      },
      {
        path: 'DataPasien',
        element: <DataPasien />,
      },
      {
        path: 'DataPasienRJ',
        element: <ListDataPasienRJ />,
      },
      {
        path: 'About',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
