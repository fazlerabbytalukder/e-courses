import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='mb-5'>
            <nav class="navbar navbar-expand-lg navbar-light nav-design">
                <div class="container">
                    <a class="navbar-brand text-white" href="#home">E-COURSES</a>
                    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon collapse-button-design"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link text-white" to='/'>Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link text-white" to='/about'>About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link text-white" to='/courses'>Courses</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link text-white" to='/contactus'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;