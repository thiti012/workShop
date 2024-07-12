import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Index from './pages/Index';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Index/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
