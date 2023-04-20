import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({openMenu}) => {
    return (
        <div className={openMenu ? "sidemenu collapse" : "sidemenu"}>
            <nav className="menubar">
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
    )
}

export default SideMenu