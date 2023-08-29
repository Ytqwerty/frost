import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import Main_page from "./components/main_page/Main_page";
import Product_card from "./components/product_card/Product_card";
import Basket from "./components/basket/Basket";

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
        path: '/basket',
        element: <Basket/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
