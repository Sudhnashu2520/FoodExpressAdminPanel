import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='img-container' >
      <img className='logo' src={assets.logo} alt="" />
        <div>
        <h2>Food Express</h2>
        <h5>Admin Panel</h5>
        </div>
        
      </div>
      
      <img className='profile' src={require('../../assets/user.png')} alt="" />
    </div>
  )
}

export default Navbar
