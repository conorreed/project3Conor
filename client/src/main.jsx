import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import './index.css'


import App from './App.jsx';
import Home from './pages/Home';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import ErrorPage from './pages/ErrorPage';
import Lair from './pages/Lair.jsx';
import GameStart from './pages/GameStart.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'Lair',
        element: <Lair />,
      },
      {
        path: 'GameStart',
        element: <GameStart />,
      },
      // {
      //   path: 'SelectCharacter',
      //   element: <SignUp />,
      // },
      // {
      //   path: 'Battle',
      //   element: <Battle />,
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
