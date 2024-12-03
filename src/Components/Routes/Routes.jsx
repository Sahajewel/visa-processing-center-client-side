import {
    createBrowserRouter,
  } from "react-router-dom";


import Layout from "../Layout/Layout";
import Home from "../../Pages/Home";
import Error from "../../Pages/Error/Error";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AddVisa from "../../Pages/AddVisa/AddVisa";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>
  },
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
 {
    path: "/add-visa",
    element: <AddVisa></AddVisa>
 }
 
]);

