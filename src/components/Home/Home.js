import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import PopularCourses from '../PopularCourses/PopularCourses';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
            <PopularCourses></PopularCourses>
            <Faq></Faq>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;