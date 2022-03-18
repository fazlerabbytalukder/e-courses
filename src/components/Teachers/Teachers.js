import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Teachers.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fazlerabbytalukder/e-course-data/main/Teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, [])
    return (
        <div className='container'>
            <div className='text-center my-5'>
                <h2>Meet Our Teachers</h2>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    teachers.map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;