import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons'

import { Root } from './routes/root';
import ErrorPage from './errorpage';
import { Home } from './routes/Home';
import Category,{loader as categoryLoader } from './routes/categories';
import Cat,{loader as catloader} from './routes/category';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children : [
      {
        path : '/',
        element: <Home />,
      },
      {
        path: '/categories',
        element: <Category />,
        loader: categoryLoader
      },
      {
        path: '/category/:categoryId',
        element: <Cat />,
        loader: catloader
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
