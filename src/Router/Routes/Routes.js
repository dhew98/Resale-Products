import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashBoard";

import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import DefaultPanel from "../../Pages/DashBoard/DefaultPanel";
import AllBuyers from "../../Pages/DashBoard/MyOrders/Admin/AllBuyers";
import AllSellers from "../../Pages/DashBoard/MyOrders/Admin/AllSellers";

import ReportedItems from "../../Pages/DashBoard/MyOrders/Admin/ReportedItems";
import Myorders from "../../Pages/DashBoard/MyOrders/Buyer/Myorders";
import Addproducts from "../../Pages/DashBoard/MyOrders/Seller/Addproducts";
import MyProducts from "../../Pages/DashBoard/MyOrders/Seller/MyProducts";
import Faq from "../../Pages/Faq/Faq";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import Register from "../../Pages/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";





const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch("https://laptop-gamma.vercel.app/category")
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/categories/:id',
                    element: <PrivateRoute><Products></Products></PrivateRoute>,
                    loader: ({ params }) => fetch(`https://laptop-gamma.vercel.app/categories/${params.id}`)

                },
                {
                    path: "/*",
                    element: <Faq></Faq>
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
                    element: <BuyerRoute><Myorders></Myorders></BuyerRoute>
                },
                {
                    path: '/dashboard/myproducts',
                    element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
                },
                {
                    path: '/dashboard/addProducts',
                    element: <SellerRoute> <Addproducts></Addproducts></SellerRoute>
                },
                {
                    path: '/dashboard/seller',
                    element: <AdminRoute><AllSellers></AllSellers></AdminRoute>,

                },
                {
                    path: '/dashboard/buyer',
                    element: <AdminRoute> <AllBuyers></AllBuyers></AdminRoute>,

                },
                {
                    path: '/dashboard/items',
                    element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>,
                    loader: () => fetch("https://laptop-gamma.vercel.app/product")
                },
            ]
        }
    ]
)

export default router;