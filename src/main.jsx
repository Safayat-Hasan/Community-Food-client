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
        loader: () => fetch('http://localhost:5000/foods')
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
        path: '/updateFood/:id',
        element: <UpdateFood />,
        loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
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
      {
        path: '/foods/:id',
        element: <FoodDetails/>,
        loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
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
