import { Link, NavLink } from 'react-router-dom';
import logo1 from '../assets/flight.png';
const Navbar = () => {
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allSpot'>All Tourists Spot</NavLink></li>
        <li><NavLink to='/addSpot'>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost -ml-6 md:-ml-6 lg:-ml-0 text-xl md:text-2xl lg:text-2xl xl:text-3xl font-workSans lg:-mt-5">TourNexus
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
                <div className="navbar-end">
                   <Link to='/login'><a className="btn btn-sm md:btn-md bg-[#56b63e] text-white text-sm md:text-lg md:px-6">Login</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;