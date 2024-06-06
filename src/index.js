import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import Main_page from "./components/main_page/Main_page";
import Product_card from "./components/product_card/Product_card";
import Cart from "./components/cart/Cart";
import {AuthContextProvider} from "./contexts/AuthContext";
import Delivery from "./components/delivery/Delivery";
import Orders from "./userAccount/orders/Orders";
import {AuthModalProvider} from "./contexts/AuthModalContext";

const router = createBrowserRouter([
    {
        path: '/main_page',
        element: <Main_page/>
    },
    {
        path: '/product_card/:id',
        element: <Product_card/>
    },
    {
        // path:'/user/:login',
        path: '/cart',
        element: <Cart/>
    },
    {
        path:'/orders',
        element:<Orders/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <AuthModalProvider>
        <RouterProvider router={router}/>
        </AuthModalProvider>
    </AuthContextProvider>
);
