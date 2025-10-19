import React from 'react';
import NavBar from '../../Navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';
import { ToastContainer } from 'react-toastify';


const Root = () => {
    
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    );
};

export default Root;