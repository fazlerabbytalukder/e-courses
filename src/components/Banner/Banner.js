import React from 'react';
import './Banner.css';
import bannerImg from '../../Images/e-courses1.png';

const Banner = () => {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 mb-5">
                    <h1>Grow Your Skill To Advance Your Career Path</h1>
                    <p className='my-4'>This is a website where you learn your favourite topic any time and anywhere. You can Just use for your educational purpose.</p>
                    <button className='button1'>Get Started</button>
                </div>
                <div className="col-md-6 mb-5">
                    <img className='img-fluid' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;