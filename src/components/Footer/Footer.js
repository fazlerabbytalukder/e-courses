import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg mt-5'>
            <div className='container pt-5'>
            <div className="row">
                <div className="col-md-3 mb-5">
                    <h3>E-Courses</h3>
                    <small>This is a website where you learn your favourite topic any time and anywhere. You can Just use for your educational purpose.</small>
                </div>
                <div className="col-md-3 mb-5">
                    <h3>Permalinks</h3>
                    <small>Home</small> <br />
                    <small>About</small> <br />
                    <small>Courses</small> <br />
                    <small>Contact</small>
                </div>
                <div className="col-md-3 mb-5">
                    <h3>Primacy</h3>
                    <small>Privacy Policy</small> <br />
                    <small>Terms and Condition</small> <br />
                    <small>Refound Policy</small>
                </div>
                <div className="col-md-3 mb-5">
                    <h3>Contact Us</h3>
                    <small>+8801739719796</small> <br />
                    <small>talukderfazlerabby@gmail.com</small>
                    <div className='mt-3'>
                        <i class="fa-brands fa-facebook-f me-4"></i>
                        <i class="fa-brands fa-instagram me-4"></i>
                        <i class="fa-brands fa-twitter me-4"></i>
                        <i class="fa-brands fa-linkedin-in me-4"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;