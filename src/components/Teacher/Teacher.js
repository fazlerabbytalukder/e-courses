import React from 'react';
import './Teacher.css';

const Teacher = ({ teacher }) => {
    const {TecherName,Designation,img,star,link} = teacher;
    return (
        <div>
            <div class="col all-teacher">
                <div class="card h-100 card-background-teacher">
                    <img src={img} class="card-img-top teacher-card-design" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">{TecherName}</h5>
                        <p class="card-text text-center">{Designation}</p>
                    </div>
                    <div className="teacher-social-icon">
                        <a href={link} target="_blank"><i class="fa-brands fa-facebook me-3 text-white"></i></a>
                        <a href={link} target="_blank"><i class="fa-brands fa-instagram me-3 text-white"></i></a>
                        <a href={link} target="_blank"><i class="fa-brands fa-linkedin me-3 text-white"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;