import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashBoard";

import Main from "../../Layouts/Main";
import Myorders from "../../Pages/DashBoard/MyOrders/Buyer/Myorders";
import MyProducts from "../../Pages/DashBoard/MyOrders/Seller/MyProducts";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute";





const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch("http://localhost:5000/category")
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/categories/:id',
                    element: <PrivateRoute><Products></Products></PrivateRoute>,
                    loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)

                }


            ]
        },
        {
            path: '/dashboard',
            element: <PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
            children: [
                {
                    path: '/dashboard',
                    element: <Myorders></Myorders>
                },
                {
                    path: '/dashboard/myproducts',
                    element: <MyProducts></MyProducts>
                },
            ]
        }
    ]
)

export default router;