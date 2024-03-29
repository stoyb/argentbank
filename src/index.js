import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App.jsx';
import Error404 from './pages/Error404/Error404.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile';
import store from './app/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Homepage />,
        errorElement: <Error404 />
      }, 
      {
        path: 'login',
        element: <Login />,
        errorElement: <Error404 />
      }, 
      {
        path: 'profile',
        element: <Profile />,
        errorElement: <Error404 />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals