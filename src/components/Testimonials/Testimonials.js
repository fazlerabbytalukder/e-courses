import React from 'react';
import './Testimonials.css';
import student1 from '../../Images/student 1.jpg';
import student2 from '../../Images/student 2.jpg';
import student3 from '../../Images/student 3.jpg';
import student4 from '../../Images/student 4.jpg';
import student5 from '../../Images/student 5.jpg';

const Testimonials = () => {
    return (
        <div className='container'>
            <div className='text-center my-5'>
                <h2>Students' Testimonials</h2>
            </div>
            <div className='row'>
                <div className="col-md-4">
                    <article className='testimonial mb-4'>
                        <div className="avatar">
                            <img className='img-fluid' src={student1} alt="" />
                        </div>
                        <div className="testimonial-info">
                            <h5>Dina Ali</h5>
                            <small>Student</small>
                        </div>
                        <div className="testimonial-body">
                            <p>This course has taught me a lot of techniques in searching information for my  academic researches. Thank you to all people behind this, especially to the professors in this course!</p>
                        </div>
                    </article>
                </div>
                <div className="col-md-4">
                    <article className='testimonial mb-4 swiper-slide'>
                        <div className="avatar">
                            <img className='img-fluid' src={student2} alt="" />
                        </div>
                        <div className="testimonial-info">
                            <h5>Delower Hossain</h5>
                            <small>Student</small>
                        </div>
                        <div className="testimonial-body">
                            <p>A detailed review of one of the most important skills in academic research: information seeking. In particular, I enjoyed the tutorials on Mendeley and reference management tools.</p>
                        </div>
                    </article>
                </div>
                <div className="col-md-4">
                    <article className='testimonial mb-4 swiper-slide'>
                        <div className="avatar">
                            <img className='img-fluid' src={student3} alt="" />
                        </div>
                        <div className="testimonial-info">
                            <h5>Jk Marlin</h5>
                            <small>Student</small>
                        </div>
                        <div className="testimonial-body">
                            <p>Extremely valuable for researching techniques. Teachers were outstanding. Lectures are to the point without drag-on. Many thanks for the quality of your efforts! Highly recommended!</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;