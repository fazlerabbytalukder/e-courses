import React from 'react';
import './ContactUs.css';
import contactImg from '../../Images/contact us.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container contact-us-bg">
                <div className="row">
                    <div className="col-md-4 contact-text-field">
                        <div className='d-flex justify-content-center align-items-center'>
                        <img className='img-fluid w-50' src={contactImg} alt="" />
                        </div>
                        <h3>Contact Us</h3>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, laboriosam.</small>
                        <div className='mt-3'>
                            <i className="fa-solid fa-phone mb-3"></i> +8801739719796 <br />
                            <i className="fa-solid fa-envelope mb-3"></i> talukderfazlerabby@gmail.com <br />
                            <i className="fa-solid fa-location-dot mb-3"></i> Dhanmondi, Dhaka
                        </div>
                        <div className='d-flex align-items-center mb-5 mt-3'>
                            <i className="fa-brands fa-facebook social-icon"></i>
                            <i className="fa-brands fa-instagram social-icon"></i>
                            <i className="fa-brands fa-twitter social-icon"></i>
                            <i className="fa-brands fa-linkedin-in social-icon"></i>
                        </div>
                    </div>
                    <div className="col-md-6 text-center p-5 mt-5">
                        <form action="">
                            <div className="mb-3">
                                <input type="text" className="form-control text-field-form" id="exampleFormControlInput1" placeholder="Your Name"/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control text-field-form" id="exampleFormControlInput1" placeholder="Your Email Address"/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control text-field-form" placeholder="Write Your Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button className='button2'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;