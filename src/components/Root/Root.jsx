import React from 'react';
import NavBar from '../../Navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';


const Root = () => {
    
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Root;