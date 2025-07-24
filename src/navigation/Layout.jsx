import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/homePage/navbar/Navbar';
import Footer from "../pages/homePage/footer/Footer"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
