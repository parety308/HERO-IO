import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaAppStore, FaGithubSquare } from "react-icons/fa";
import logo from '../assets/logo.png'
import { AiFillHome } from 'react-icons/ai';
import { MdInstallDesktop } from 'react-icons/md';
const Navbar = () => {
    const activeClass = "underline text-[#632EE3]";
    const links = (
        <div className='lg:flex gap-5 text-lg font-semibold'>
            <li>
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? activeClass : undefined}
                >
                    <AiFillHome /> Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/apps'
                    className={({ isActive }) => isActive ? activeClass : undefined}
                >
                    <FaAppStore /> Apps
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/instalation'
                    className={({ isActive }) => isActive ? activeClass : undefined}
                >
                    <MdInstallDesktop /> Installation
                </NavLink>
            </li>
        </div>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to='/'><a className="btn btn-ghost text-xl">
                    <img className='w-9' src={logo} alt="" /> HERO.IO</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a onClick={() => { window.location.href = "https://github.com/parety308" }} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><FaGithubSquare /> Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;