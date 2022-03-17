import React, { useEffect, useState } from 'react';
import PopularCourse from '../PopularCourse/PopularCourse';
import './PopularCourses.css';

const PopularCourses = () => {
    const [courses, setSourses] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fazlerabbytalukder/e-course-data/main/Courses.json')
            .then(res => res.json())
            .then(data => setSourses(data));
    }, [])

    return (
        <div className='container popular-course'>
            <div className='text-center my-5'>
                <h2>Our Popular Courses</h2>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    courses.slice(0,3).map(course => <PopularCourse key={course.id} course={course}></PopularCourse>)
                }
            </div>
        </div>
    );
};

export default PopularCourses;