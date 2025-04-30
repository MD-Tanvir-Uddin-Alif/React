import React from 'react'
import { NavLink } from 'react-router-dom'

const NavList = () => {
  return (
    <div>
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/product">Product</NavLink>
        </ul>
    </div>
  )
}

export default NavList