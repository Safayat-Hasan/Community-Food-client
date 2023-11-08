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
import ErrorPage from './components/Main/ErrorPage';
import FoodDetails from './components/AvailableFoods/FoodDetails';
import UpdateFood from './components/ManageMyFoods/UpdateFood';
import SingleFoodDetails from './components/ManageMyFoods/SingleFoodDetails';
import PrivateRoute from './components/Main/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/availableFoods',
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch('https://community-food-server.vercel.app/foods')
      },
      {
        path: '/addFood',
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
      },
      {
        path: '/manageMyFoods',
        element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>,
      },
      {
        path: '/updateFood/:id',
        element: <PrivateRoute><UpdateFood /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://community-food-server.vercel.app/foods/${params.id}`)
      },
      {
        path: '/myFoodRequest',
        element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>,
      },
      {
        path: '/logIn',
        element: <LogIn></LogIn>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/requestedFoods/:food_id',
        element: <PrivateRoute><SingleFoodDetails></SingleFoodDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://community-food-server.vercel.app/requestedFoods/${params.food_id}`)
        // loader: () => fetch('https://community-food-server.vercel.app/requestedFoods/')
      },
      {
        path: '/foods/:id',
        element: <PrivateRoute><FoodDetails/></PrivateRoute>,
        loader: ({ params }) => fetch(`https://community-food-server.vercel.app/foods/${params.id}`)
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
