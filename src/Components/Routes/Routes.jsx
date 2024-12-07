import {
    createBrowserRouter,
  } from "react-router-dom";


import Layout from "../Layout/Layout";
import Home from "../../Pages/Home";
import Error from "../../Pages/Error/Error";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AddVisa from "../../Pages/AddVisa/AddVisa";
import AllVisas from "../../Pages/AllVisas/AllVisas";
import VisaDetails from "../../Pages/VisaDetails/VisaDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import MyVisaApplications from "../../Pages/myVisaApplications/MyVisaApplications";


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
    element: <PrivateRoutes><AddVisa></AddVisa></PrivateRoutes>
 }, 
 {
  path: "/all-visas",
  element: <AllVisas></AllVisas>,
  loader: ()=>fetch("http://localhost:5000/all-visas")
 },
 {
  path: "/visa-details/:id",
  element: <VisaDetails></VisaDetails>,
  loader: ({params})=>fetch(`http://localhost:5000/all-visas/${params.id}`)
 },
 {
  path: "/my-visa-applications/",
  element: <MyVisaApplications></MyVisaApplications>,
  loader: ()=>fetch("http://localhost:5000/users")
 },

]);

