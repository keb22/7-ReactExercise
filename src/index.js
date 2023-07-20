import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Inicio from './routes/Inicio';
import Nosotros from './routes/Nosotros';
import Experencias from './routes/Experencias';
import Error from './routes/Error';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Inicio />,
    errorElement:<Error />
  },
  {
    path:'/Nosotros',
    element:< Nosotros />
  },
  {
    path:'/Experencias',
    element:< Experencias />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
