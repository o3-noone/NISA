import React from 'react'
import "./header.css"
export default function Header() {
  return (
    <div className='Header'>
      <div className="container">
        <div className="navbar">
        <div className='navLogo'><a href="#"><img src="/public/images/logo.svg" alt="Logo" /></a></div>
        <nav className='nav'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pricing </a></li>
            <li><a href="#">About </a></li>
            <li><a href="#">Blog </a></li>
            <li><a href="#">Contact</a></li>
        </nav>
        <div className="nav-Auten">
          <button className='btnLogin'>Login</button>
          <button className='btnSigin'>Sigin</button>
        </div>
        <div className="navBurger">
        <i class="fa-solid fa-bars-staggered"></i>
        </div>
        </div>
      </div>
    </div>
  )
}
