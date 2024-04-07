import React, { useEffect } from 'react';
import { useState} from 'react';
import { CourseModel } from './interfaces/courseModel';
import { listCourses } from '../memory_base/courses_memory';

const Form: React.FC = () => {
    const [course, setCourse] = useState<CourseModel>({name:''})
    const [courses, setCourses] = useState<CourseModel[]>([])

    useEffect(()=> {
        setCourses(listCourses)
    },[])

    const handleInputEvent = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setCourse({...course, [name]:value})
    }

    const saveCourse = () => {
        listCourses.push(course)
        setCourses([...listCourses]);
        setCourse({name:''})
    }
    return (
        <div>
            <h1>My form</h1>
            <input name='name' onChange={handleInputEvent} value={course.name}></input>
            <button onClick={saveCourse}>Save</button>
            <div>
                <table>
                    <thead> 
                        <th>Course</th>
                    </thead>
                    <tbody>
                {courses.map(c => 
                        <tr>
                            <td>{c.name}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>   
    );
}

export default Form;