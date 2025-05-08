import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav className='bg-white/80 backdrop-blur sticky top-0 z-0'>
            <div className='mx-auto flex items-center justify-between px-8'>
                <div className='px-8'>
                    <img className='h-16 w-16' src="" alt="" />
                </div>
                <div className='flex items-center space-x-8 px-8 md:space-x-8'>
                    <NavLink to="/" className={({isActive})=>`font-medium text-sm transition ${isActive?'text-green-600':'text-black'}`}>Home</NavLink>
                    <NavLink to="/product" className={({isActive})=>`font-medium text-sm transition ${isActive?'text-green-600':'text-black'}`}>Product</NavLink>
                    <NavLink to="/profile" className={({isActive})=>`font-medium text-sm transition ${isActive?'text-green-600':'text-black'}`}>Extra</NavLink>
                </div>
                <div className='flex justify-between space-x-8 md:space-x-8'>
                <NavLink to="/register">
                <button className="rounded-md bg-green-400 px-4 py-2 text-sm font-medium text-white">SignUP</button>
                </NavLink>
                <NavLink to="/login">
                <button class="rounded-md px-4 py-2 text-black text-sm font-medium hover:bg-green-400 hover:text-white">Login</button>
                </NavLink>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar