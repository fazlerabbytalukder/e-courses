import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;