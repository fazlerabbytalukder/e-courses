import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;