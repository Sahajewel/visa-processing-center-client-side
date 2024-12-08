import React, { useContext } from 'react'
import logo from "./logo.jpg"
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import ThemeToggle from '../Theme/ThemeToggle'

// import ReactTooltip from 'react-tooltip';
export default function Navbar() {
    const {loginUser, logout} = useContext(AuthContext)
    const links = <div className='sm:space-y-3 md:space-y-0 text-center p-2'>
        <NavLink className="mr-3 btn text-lg " to="/">Home</NavLink>
        <NavLink className="mr-3 btn text-lg " to="/all-visas">All Visas</NavLink>
        <NavLink className="mr-3 btn text-lg " to="/add-visa">Add Visa</NavLink>
        <NavLink className="mr-3 btn text-lg " to="/my-visa-applications">My Visa Application</NavLink>
        <NavLink className="mr-3 btn text-lg " to="/my-added-visa">My Added Visa</NavLink>
    </div>
  return (
    <div className="navbar flex sm:flex-col md:flex-row bg-gray-800 px-16">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white "
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       
       {links}
      </ul>
    </div>
    <img className='h-20 w-20 rounded-full' src={logo} alt="This is a logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
    {links}
    </ul>
  </div>

  <div className="navbar-end sm:mt-4 md:mt-0">
  <ThemeToggle></ThemeToggle>
  {
          loginUser && loginUser? <div className='flex justify-center items-center'>
             <div className='group relative duration-500'>
             <img className='w-10 h-10 rounded-full duration-500' src={loginUser?.photoURL} alt="" />
            
             <div className='hidden group-hover:block absolute top-12 -right-10 bg-gray-200 p-3 rounded-lg duration-500 z-20'>
              <h1 className='text-gray-500 mb-2 text-center'>{loginUser?.displayName}</h1>
             <button  className='text-white text-center mx-auto ml-5 px-3 py-2 text-lg rounded-xl hover:bg-gray-300 duration-300 hover:text-black bg-gray-500' onClick={logout}>Logout</button>
             </div>
             </div>
            
          </div>
          :
          <div className='flex justify-center items-center'>
             <Link to="/login" className="btn mr-5 text-lg">Login</Link>
             <Link to="/register" className="btn text-lg">Register</Link>
           
          
          </div>
        }
   
  </div>
</div>
  )
}
