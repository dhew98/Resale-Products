import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashBoard";

import Main from "../../Layouts/Main";
import DefaultPanel from "../../Pages/DashBoard/DefaultPanel";
import AllSellers from "../../Pages/DashBoard/MyOrders/Admin/AllSellers";

import ReportedItems from "../../Pages/DashBoard/MyOrders/Admin/ReportedItems";
import Myorders from "../../Pages/DashBoard/MyOrders/Buyer/Myorders";
import Addproducts from "../../Pages/DashBoard/MyOrders/Seller/Addproducts";
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
                    element: <DefaultPanel></DefaultPanel>
                },
                {
                    path: '/dashboard/myorders',
                    element: <Myorders></Myorders>
                },
                {
                    path: '/dashboard/myproducts',
                    element: <MyProducts></MyProducts>
                },
                {
                    path: '/dashboard/addProducts',
                    element: <Addproducts></Addproducts>
                },
                {
                    path: '/dashboard/seller',
                    element: <AllSellers></AllSellers>,
                    loader: () => fetch("http://localhost:5000/sellers")
                },
                {
                    path: '/dashboard/buyer',
                    element: <AllSellers></AllSellers>,
                    loader: () => fetch("http://localhost:5000/sellers")
                },
                {
                    path: '/dashboard/items',
                    element: <ReportedItems></ReportedItems>,
                    loader: () => fetch("http://localhost:5000/product")
                },
            ]
        }
    ]
)

export default router;