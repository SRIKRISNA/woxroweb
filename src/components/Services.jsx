import React from 'react';
import './services.css';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='services'>
            <div className="title">
                <p><strong>SERVICES WE DELIVER</strong></p>
                <h2>Preparing for your success, we provide truly prominent IT solutions.</h2>
            </div>
            <div className="allservices">
                <div className="services-box" style={{ background: "#e7f9fd" }} >
                    <Link to="#">
                        <div className="icon"><i class="fa-sharp fa-solid fa-cloud fa-2xl"></i> </div>
                        <div className="box-title"><h2>Web Designing</h2></div>
                        <div className="content">
                            <p>We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.</p>
                        </div></Link>
                </div>
                <div className="services-box" style={{ background: "#fde7f7" }}>
                    <Link to="#"> <div className="icon"><i class="fa-sharp fa-solid fa-file fa-2xl"></i> </div>
                        <div className="box-title"><h2>Web Applicatyions</h2></div>
                        <div className="content">
                            <p>We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.</p>
                        </div></Link>
                </div>
                <div className="services-box" style={{ background: "#ffe6f0" }}>
                    <Link to="#"><div className="icon"><i class="fa-sharp fa-solid fa-filter fa-2xl"></i> </div>
                        <div className="box-title"><h2>Mobile App Development</h2></div>
                        <div className="content">
                            <p>We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.</p>
                        </div></Link>
                </div>
                <div className="services-box" style={{ background: "#ffe6e6" }}>
                    <Link to="#"> <div className="icon"><i class="fa-sharp fa-solid fa-youtube fa-2xl"></i> </div>
                        <div className="box-title"><h2>Ecommerce Development</h2></div>
                        <div className="content">
                            <p>We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.</p>
                        </div></Link>
                </div>
                <div className="services-box" style={{ background: "#fff8e6" }}>
                    <Link to="#">  <div className="icon"><i class="fa-sharp fa-solid fa-bomb fa-2xl"></i> </div>
                        <div className="box-title"><h2>Digital Marketing</h2></div>
                        <div className="content">
                            <p>We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.</p>
                        </div></Link>
                </div>
                <div className="services-box" style={{ background: "#e6ffea" }}>
                    <Link to="#">  <div className="icon"><i class="fa-sharp fa-solid fa-camera fa-2xl"></i> </div>
                        <div className="box-title"><h2>Graphics designing</h2></div>
                        <div className="content">
                            <p>We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.</p>
                        </div></Link>
                </div>
            </div>

        </div>
    )
}

export default Services