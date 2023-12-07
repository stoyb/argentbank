import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App.jsx';
import Error404 from './pages/Error404/Error404.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    // children: [
    //   {
    //     index: true,
    //     element: <App />,
    //     errorElement: <Error404 />
    //   }, 
    //   {
    //     path: 'accomodation/:id',
    //     element: <App />,
    //     errorElement: <Error404 />
    //   }
    // ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals