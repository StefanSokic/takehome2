import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Look from './components/Look';
import Read from './components/Read';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Header, Footer } from './components/Ticker'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/look",
    element: <Look />
  },
  {
    path: "/read",
    element: <Read />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
