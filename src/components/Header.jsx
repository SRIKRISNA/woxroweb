import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import './sidemenu.css';
import logo from '../assests/woxrologo.png'

const Header = ({ click }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className='HeaderContainer'>
      <div className="topbar">
        <p><strong>Now Hiring :</strong> <Link to='#'> Looking for a job in Full Stack Development? </Link></p>
        <p><i class="fa-sharp fa-solid fa-phone"></i><strong> <Link to='tel:914872080212'> +91 487 2080 212</Link></strong> &nbsp; <i class="fa-sharp fa-solid fa-location-dot"></i> Leshore Business Park, Thrissur</p>
      </div>
      <div className="logo-container">
        <div className="logo">< img src={logo} alt='logo' height="50px" /></div>
        <div className="menu-all">
          <button className='btn-menu'
            onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (<i class="fa-sharp fa-solid fa-times"></i>) :
              (<i class="fa-sharp fa-solid fa-bars"></i>)
            }              </button>
          
          <div className={openMenu ? "sidemenu collapse" : "sidemenu"} onClick={() => setOpenMenu(false)}>
            <nav className="menubar" >
              <ul className='navlinks'>
                <Link to='/' className='home'><li>Home</li></Link>
                <Link to='/temp'><li>About Us</li></Link>
                <Link to='/temp'><li>Services</li></Link>
                <Link to='/temp'><li>Technology</li></Link>
                <Link to='/temp'><li>Careers</li></Link>
                <Link to='/temp'><li>Blogs</li></Link>
                <Link to='/temp'><li>Our Works</li></Link>
                <Link to='/temp'><li>Contact Us</li></Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <nav className="menu">
        <ul className='nav-links'>
          <Link to='/' className='home'><li>Home</li></Link>
          <Link to='/temp'><li>About Us</li></Link>
          <Link to='/temp'><li>Services</li></Link>
          <Link to='/temp'><li>Technology</li></Link>
          <Link to='/temp'><li>Careers</li></Link>
          <Link to='/temp'><li>Blogs</li></Link>
          <Link to='/temp'><li>Our Works</li></Link>
          <Link to='/temp'><li>Contact Us</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header