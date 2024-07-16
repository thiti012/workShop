import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignIn from  './pages/backoffice/SignIn';
import Home from    './pages/backoffice/Home';
import Product from './pages/backoffice/Product';
import BillSale from './pages/backoffice/BillSale';

const router = createBrowserRouter([
  {
    path:"/",
    element: <SignIn/>
  },
  {
    path:"home",
    element: <Home/>
  },
  {
    path: "/product",
    element: <Product/>
  },
  {
    path: "/billSale",
    element: <BillSale/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
