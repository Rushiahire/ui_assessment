


import React from "react";
import {Routes , Route } from 'react-router-dom';
import OrderPage from "./components/products/OrderPage";
import Home from './components/Home/Home';
import ProductDetails from "./components/products/ProductDetails";

const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/"    element={<Home/>} />
            <Route path="/orderpage"   element={<OrderPage/>}  />
            <Route  path="/productdetails"   element={<ProductDetails/>} />
        </Routes>
        </>
    )
};

export default AppRoutes;