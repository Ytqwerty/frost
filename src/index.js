import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import Main_page from "./components/main_page/Main_page";
import Product_card from "./components/product_card/Product_card";
import Cart from "./components/cart/Cart";
import {AuthContextProvider} from "./contexts/AuthContext";

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
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <RouterProvider router={router}/>
    </AuthContextProvider>
);
