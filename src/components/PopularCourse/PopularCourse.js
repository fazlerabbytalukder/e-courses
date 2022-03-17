import React from 'react';
import './PopularCourse.css';

const PopularCourse = ({ course }) => {
    const { ProjectName, ProjectDetails, img, star } = course;
    console.log(course);
    return (
        <div>
            <div class="col card-height">
                <div class="card h-100 card-background-pc">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center my-3">{ProjectName}</h5>
                        <p class="card-text text-center">{ProjectDetails}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-center align-items-center">
                        <button className='button2'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;