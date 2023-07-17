import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/NavBar.css'
function NavBar() {
  return (
    <div className="NavbarWrapper">
        <NavLink to='/'> <span className='sym'>&#60;</span > Home <span className='sym'>&#62;</span></NavLink>
        <NavLink to='/Prediction'><span className='sym'>&#60;</span> Prediction <span className='sym'>&#62;</span></NavLink>
    </div>
  )
}

export default NavBar