import React from 'react'
import './Header.css'

function Header() {
  return (
    <nav>
      <div className="logo">CommerceKu</div>
      <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>About Us</li>
      </ul>
      <div className="search">
        <i className="fa fa-search"></i>
        <i className="fa fa-shopping-basket"></i>
      </div>
    </nav>
  )
}

export default Header
