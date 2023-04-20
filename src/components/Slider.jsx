import React from 'react';
import banner from '../assests/banner.png';
import './slider.css';

const Slider = () => {
  return (
    <div className='hero'>
        <img src={banner} alt="banner" width="100%" />
        <div className="banner-text">
            <h1>Kerala's Leading Web Design Company</h1>
            <p>Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce & Mobile App Development Services.</p>
        </div>
    </div>
  )
}

export default Slider