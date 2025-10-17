import React from 'react';
import erImg from '../../assets/error-404.png'
import { Link } from 'react-router';
import Navbar from '../../Navbar/NavBar';
import Footer from '../../Footer/Footer';
const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
        <div className='flex flex-col justify-center items-center h-[100vh] gap-4'>
           <img src={erImg} alt="" /> 
           <h1 className='text-4xl'>Oops, page not found!</h1>
           <p className='text-sm'>The page you are looking for is not available.</p>
           <Link to="/"> <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-xl">Go Back</a></Link>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ErrorPage;