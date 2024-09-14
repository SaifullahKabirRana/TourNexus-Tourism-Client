import { Link, NavLink } from 'react-router-dom';
import { GiCommercialAirplane } from "react-icons/gi";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import userDefaultPic from '../assets/user.png';

const Navbar = () => {
    const { user, logOut, loader } = useContext(AuthContext);
    const [theme, setTheme] = useState('light');


    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('forest')
        }
        else {
            setTheme('light')
        }
    }
    console.log(theme);
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allSpot'>All Tourists Spot</NavLink></li>
        <li><NavLink to='/addTouristSpots'>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/myList'>My Tourists List</NavLink></li>

    </>

    if (loader) {
        return
    }
    
    return (
        <div className="font-quicksand mt-1 md:mt-3">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-7 md:-ml-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            id='nav'
                            className="z-10 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow ">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost -ml-7 md:-ml-6 lg:-ml-0 text-xl md:text-2xl lg:text-2xl xl:text-3xl font-quicksand font-bold gap-0">TourNexus
                        <GiCommercialAirplane />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul
                        id='nav'
                        className="menu menu-horizontal px-1 lg:text-sm xl:text-base ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end md:gap-2">

                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleToggle} type="checkbox" className="theme-controller" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-8 md:h-10 w-8 md:w-10 fill-current mt-1 md:mt-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    {
                        user &&
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className=" ">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-8 md:w-11  rounded-full ">
                                        <img className='border-2 border-gray-300 rounded-full' src={user?.photoURL ? user.photoURL : userDefaultPic} alt="" />

                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-[150px] md:w-[220px] p-2 shadow">
                                {
                                    user && <>
                                        <div className="flex gap-1 md:gap-2 items-center md:p-1 ">
                                            <img src={user?.photoURL ? user.photoURL : userDefaultPic} alt="" className="w-10 md:w-14 h-11 md:h-14 rounded-lg dark:bg-gray-500" />
                                            <div>
                                                <h2 className="mt-1 text-[12px] font-semibold">{user?.displayName}</h2>

                                            </div>
                                        </div>
                                    </>
                                }
                            </ul>
                        </div>
                    }

                    {
                        user ?
                            <button onClick={handleLogOut} className='btn btn-sm md:btn-md bg-[#56b63e] text-white text-sm md:text-lg md:px-6'>Log Out</button>
                            :
                            <>
                                <Link to='/login'><a className="btn btn-sm md:btn-md bg-[#56b63e] text-white text-sm md:text-lg md:px-6 ">Login</a></Link>
                                <Link to='/register'><a className=" btn btn-sm md:btn-md bg-[#56b63e] text-white text-sm md:text-lg md:px-6 ml-[2px] -mr-3 md:-mr-0">Register</a></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;