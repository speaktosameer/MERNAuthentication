import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo1.png'


const Navbar = () => {
    return (
      <>
<nav className="navbar navbar-expand-lg navbar-light bg-light ps-4 stick">
  <NavLink className="navbar-brand" to="/">
    <img src={Logo} alt="Logo"/>
  </NavLink>
  <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Conatct Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Registration</NavLink>
      </li>
    </ul>
  </div>
</nav>
</>
    )
}

export default Navbar
