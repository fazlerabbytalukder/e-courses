import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Navbar from '../Navbar/Navbar';
import './Courses.css';

const Courses = () => {
    const [courses, setSourses] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fazlerabbytalukder/e-course-data/main/Courses.json')
            .then(res => res.json())
            .then(data => setSourses(data));
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className='text-center my-5'>
                    <h2>Our Courses</h2>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;