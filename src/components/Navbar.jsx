import { Link, NavLink } from 'react-router-dom';
import logo1 from '../assets/flight.png';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import userDefaultPic from '../assets/user.png'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user, 'user');

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allSpot'>All Tourists Spot</NavLink></li>
        <li><NavLink to='/addTouristSpots'>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/myList'>My Tourists List</NavLink></li>
    </>
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
                    <a className="btn btn-ghost -ml-6 md:-ml-6 lg:-ml-0 text-xl md:text-2xl lg:text-2xl xl:text-3xl font-quicksand font-bold lg:-mt-5">TourNexus
                        <img className='w-[40px] mt-1 -ml-2 lg:w-[60px]  text-[#63AB45]' src={logo1} alt="" />
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
                                <Link to='/login'><a className="btn btn-sm md:btn-md bg-[#56b63e] text-white text-sm md:text-lg md:px-6">Login</a></Link>
                                <Link to='/register'><a className="btn btn-sm md:btn-md bg-[#56b63e] text-white text-sm md:text-lg md:px-6 ml-2">Register</a></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;