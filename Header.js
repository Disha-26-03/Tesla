import React from 'react'
// import Section from './Section'
import logo from './images/logo.svg'
function Header() {
  return (
    <div>
      <>
      <header>
      <img src={logo} alt="Tesla Logo"/>
      <ul>
        <li><a href="Model S">Model S</a></li>
        <li><a href="Model 3">Model 3</a></li>
        <li><a href="Model X">Model X</a></li>
        <li><a href="Model Y">Model Y</a></li>
        <li><a href="Solar Roof">Solar Roof</a></li>
        <li><a href="Solar Panels">Solar Panels</a></li>
      </ul>
      <ul>
        <li><a href="">Shop</a></li>
        <li><a href="">Account</a></li>
        <li><a href="">Menu</a></li>
      </ul>
      </header>
      </>
    </div>
  )
}

export default Header
