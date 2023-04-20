import React from 'react';
import back from '../assests/woxroglobe.png';
import './callbar.css';
import { Link } from 'react-router-dom';

const Callbar = () => {
  return (
    <div className='callbar'>
        <img src={back} alt="banner" height="280px" width="35%"/>
        <div className="callbar-text">
            <div className="textonly"><h1>We offer all kinds of IT services that ensure your success</h1></div>
            <div className="btns">
              <Link to="/#">  <button id='cont'><i class="fa-sharp fa-solid fa-phone"></i>&nbsp; Contact Us</button></Link> &nbsp; &nbsp;
              <Link to="/#">  <button id='comment'><i class="fa-sharp fa-solid fa-comment"></i>&nbsp; Let's Talk?</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Callbar