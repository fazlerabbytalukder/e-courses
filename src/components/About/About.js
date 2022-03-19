import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css';
import achievementImg from '../../Images/6673-removebg-preview.png';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className='img-fluid' src={achievementImg} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h2>Achievements</h2>
                        <small>In this recent years we ar achieve many more awards and cirtificate to educate online. Any Student can learn online anywhere. it's a revulutonary change to the education industry.</small>
                        <div className="row mt-3">
                            <div className="col-md-4 col-sm-4 text-center mb-3">
                                <div class="card card-bg">
                                    <div class="card-body">
                                        <i class="fa-solid fa-video icon-design"></i>
                                        <h5 class="card-title">450+</h5>
                                        <small>Courses</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 text-center mb-3">
                            <div class="card card-bg">
                                    <div class="card-body">
                                        <i class="fa-solid fa-users icon-design2"></i>
                                        <h5 class="card-title">79,000+</h5>
                                        <small>Students</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 text-center mb-3">
                            <div class="card card-bg">
                                    <div class="card-body">
                                        <i class="fa-solid fa-award icon-design3"></i>
                                        <h5 class="card-title">25+</h5>
                                        <small>Awards</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;