import React from 'react';
import logo from '../../assets/Img/logo.png'
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";

const Header = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm sm:px-15 px-2 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2 font-semibold">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/apps'>Apps</NavLink>
                        <NavLink to='/installation'>Installation</NavLink>
                    </ul>
                </div>
                <NavLink to='/'>
                    <p className="btn btn-ghost text-xl flex items-center ">
                    <span><img className='w-[32px]' src={logo} alt=""></img></span> <span className='txtGrad font-bold inter'>Hero.IO</span>
                </p>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 font-semibold">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/apps'>Apps</NavLink>
                    <NavLink to='/installation'>Installation</NavLink>
                </ul>
            </div>
            <div className="navbar-end ">
                <a href="https://github.com/Zihan231" target='_blank' className="btn bgGrad text-white"><span><FaGithub /></span> Contribute</a>
            </div>
        </div>
    );
};

export default Header;