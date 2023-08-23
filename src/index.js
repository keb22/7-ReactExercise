import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { RouterProvider , createBrowserRouter} from 'react-router-dom';

import Inicio from './routes/Inicio';
import Reportes from './routes/Reportes';
import Administracion from './routes/Administracion';
import Novedades from './routes/Novedades';
import Configuracion from './routes/Configuracion';
import Error from './routes/Error';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Inicio />,
    errorElement:<Error />
  },
  {
    path:'/Reportes',
    element:< Reportes />
  },
  {
    path:'/Administracion',
    element:< Administracion />
  },
  {
    path:'/Novedades',
    element:<Novedades />,
  },
  {
    path:'/Configuracion',
    element:<Configuracion />
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

