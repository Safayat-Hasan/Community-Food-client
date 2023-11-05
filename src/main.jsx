import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Main/Root';
import Home from './components/Home/Home';
import AvailableFoods from './components/AvailableFoods/AvailableFoods';
import AddFood from './components/AddFood/AddFood';
import ManageMyFoods from './components/ManageMyFoods/ManageMyFoods';
import MyFoodRequest from './components/MyFoodRequest/MyFoodRequest';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/Main/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/availableFoods',
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: '/addFood',
        element: <AddFood></AddFood>,
      },
      {
        path: '/manageMyFoods',
        element: <ManageMyFoods></ManageMyFoods>,
      },
      {
        path: '/myFoodRequest',
        element: <MyFoodRequest></MyFoodRequest>,
      },
      {
        path: '/logIn',
        element: <LogIn></LogIn>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
