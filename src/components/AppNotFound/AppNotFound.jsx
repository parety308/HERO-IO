import React from 'react';
import erImg from '../../assets/App-Error.png'
import { Link } from 'react-router';
const AppNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={erImg} alt="" />
            <h1 className='text-3xl my-2'>OPPS!! APP NOT FOUND</h1>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to="/"> <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-xl my-2">Go Back</a></Link>
        </div>
    );
};

export default AppNotFound;