import React from 'react'
import { Link } from 'react-router-dom'
import './css/NavBar.css'
function NavBar() {
  return (
    <div className="NavbarWrapper">
        <Link to='/'> <span className='sym'>&#60;</span > Home <span className='sym'>&#62;</span></Link>
        <Link to='/Prediction'><span className='sym'>&#60;</span> Prediction <span className='sym'>&#62;</span></Link>
    </div>
  )
}

export default NavBar